"use client"
import React from 'react'
import {
  MessageSquare,
  Settings,
  Code,
  ImageIcon,
  VideoIcon,
  Music,
  ArrowRight
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    href: '/conversation',
    color: 'text-violet-500',
    BackgroundColor: 'bg-violet-500/10'
  },
  {
    label: 'Code Generation',
        icon: Code,
        href: '/code',
        color: 'text-cyan-400',
        BackgroundColor: 'bg-cyan-500/10'
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    href: '/image',
    color: 'text-rose-600',
    BackgroundColor: 'bg-rose-600/10'
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    href: '/video',
    color: 'text-emerald-500',
    BackgroundColor: 'bg-emerald-500/10'
  },
  {
    label: 'Music Generation',
    icon: Music,
    href: '/music',
    color: 'text-amber-600',
    BackgroundColor: 'bg-amber-600/10'
  }, 
  {
      label: 'Settings',
      icon: Settings,
      href: '/settings',
      color: 'text-gray-500',
      BackgroundColor: 'bg-gray-400/10'
  }
]
const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
        <div className='mb-8 space-y-4'>
        <h2 className='text-2xl md:text-4xl font-bold text-center'>
          Explore the Power of <span className='text-transparent bg-clip-text   bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-500 animate-gradient duration-75'>MarshieloAI</span> 
        </h2>
        <p className='text-muted-foreground font-light text-sm md:text-lg text-center'>
          Experience kinds of AI, all in one place
        </p>
      </div>
      <div className='px-4 md:px-20 lg:px-32 space-y-4'>
        {tools.map((tool) => (
          <Card onClick={() => router.push(tool.href)}
            key={tool.href}
            className='p-4  border-black/5 flex items-center
             justify-between hover:shadow-md transition cursor-pointer'
          >
            <div className='flex items-center gap-x-4'>
              <div className={cn("p-2 w-fit rounded-md", tool.BackgroundColor)}>
                <tool.icon className={cn(tool.color, "w-8 h-8")} />
              </div>
              <div className='font-semibold'>
                {tool.label}
              </div>
            </div>
            <ArrowRight className='w-5 h-5'/>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default DashboardPage
