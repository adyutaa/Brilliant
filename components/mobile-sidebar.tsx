"use client"

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import Sidebar from './Sidebar'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

const MobileSidebar = () => {
    /* tricks buat avoid hydration Error */
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true)
    }, []);

    if (!isMounted) {
        return null;
    }
    return (

    <Sheet>
        <SheetTrigger>
            <Button variant="ghost" size="icon" className='md:hidden'>
                <Menu />
            </Button>
            </SheetTrigger>  
            <SheetContent side="left" className='p-0'>
                <Sidebar/>
            </SheetContent>
    </Sheet>
    
  )
}

export default MobileSidebar
