"use client"

import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import Link from "next/link"
import React from 'react'
import { Heading } from '@/components/heading'
import { Code} from 'lucide-react'
import {  useForm } from 'react-hook-form'
import { formSchema } from './constants'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { useRouter, } from 'next/navigation'
import { useState } from 'react'
import { Empty } from '@/components/Empty'
import { Loader} from '@/components/Loader'
import { cn } from '@/lib/utils'
import { UserAvatar } from '@/components/avatar'
import { BotAvatar } from '@/components/bot-avatar'

const CodePage = () => {
  const router = useRouter();
  const [images, setImages] = useState<string[]>([])
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      amount: "1",
      resolution: "512x512"
    }
  });

  const isLoading = form.formState.isSubmitting
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setImages([]);
    {/* API CALL */}  
      const response = await axios.post("/api/image", values);

      const urls = response.data.map((image: { url: string }) => image.url);
      setImages(urls);
      form.reset()
    } catch (error: any) {
      // TODO: Open Pro Modal
          console.log(error)
    } finally {
      router.refresh();
    }
  };
  
  return (
    <div>
      <Heading
        title='Image Generation'
        description='turn yout prmpt into an image'
        icon={ImageIcon}
        IconColor='text-pink-700'
        bgColor='bg-pink-500/10'
      />
      <div className='px-4 lg:px-8'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}
            className='rounded-lg border w-full 
          p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2 '>
            <FormField
              name='prompt'
              render={({ field }) => (
            <FormItem className='col-span-12 lg:col-span-10'>
              <FormControl className='m-0 p-0'>
                    <Input className='border-0 outline-none
                   focus-visible:ring-0 focus-visible:ring-transparent '
                      disabled={isLoading} placeholder='A picture of a car in Indian Slums'
                   {...field} />
              </FormControl>
                </FormItem>
              )}

            />
            <FormField
              name='amount'
              control={form.control}
              render={({ field }) => (
                <FormItem className='col-span-12 lg:col-span-2'>
                  
              </FormItem>
            )}
            <Button className='col-span-12 lg:col-span-2'>Generate</Button>
          </form>
        </Form>
      </div>
      <div className='space-y-4 mt-4'>
        {isLoading && (
          <div className='p-20'>
            <Loader/>
          </div>
        )}
        {images.length === 0 && !isLoading && (
          <div>
            <Empty
            label="looks like no iamges generated yet, say something"
            />
          </div>
        )}
        <div>
          Images rendered here
      </div>
      </div>
    </div>
  )
}

export default CodePage
