"use client"
import { usePathname } from 'next/navigation'
import { 
	
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuContent } from '@/ui/navigation-menu'

import Link from "next/link"
export function Menu({url,text}){
    const pathName=usePathname()

    
    return(
         <Link href={url} className='px-4 py-2 bg-white'>{text} </Link>
         )
}