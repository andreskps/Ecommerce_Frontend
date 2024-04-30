'use client'

import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { docsConfig } from '@/config/docs'
// import Config from '@/config/site'
import { cn } from '@/lib/utils'
import { ViewIcon,Dog,Cat, LucideIcon } from 'lucide-react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { AlignJustify } from 'lucide-react';
import { config } from '@/config/site'

import { Separator } from '@/components/ui/separator'
import { useSession,signOut } from 'next-auth/react'

export function MobileNav() {
   const [open, setOpen] = useState(false)

   const { data: session, status } = useSession();

   const isAuth = status === 'authenticated'

   return (
      <Sheet open={open} onOpenChange={setOpen}>
         <SheetTrigger asChild>
            <Button
               variant="ghost"
               className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
               <AlignJustify className='text-white'/>
               <span className="sr-only">Toggle Menu</span>
            </Button>
         </SheetTrigger>
         <SheetContent side="left" className="pr-0 bg-primario">
            <MobileLink
               href="/"
               className="flex items-center"
               onOpenChange={setOpen}
            >
               <div className="relative z-20 flex items-center text-lg font-medium text-white">
                  {config.name}
               </div>
            </MobileLink>
            <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-5">
               <div className="flex flex-col space-y-4">
                  {docsConfig.mainNav?.map(
                     (item) =>
                        item.href && (
                           <MobileLink
                              key={item.href}
                              href={item.href}
                              onOpenChange={setOpen}
                              className='text-white'
                         
                           >
                              {item.title}
                           </MobileLink>
                        )
                  )}
               </div>
               {/* <Separator />
               <div className="flex flex-col space-y-2">
                  {docsConfig.sidebarNav.map((item, index) => (
                     <div key={index} className="flex flex-col space-y-3 pt-6">
                        <h4 className="font-medium text-white">{item.title}</h4>
                     </div>
                  ))}
               </div> */}
               {isAuth && (
                  <>
                     <Separator />
                     <div className="flex flex-col space-y-4">
                        {
                           docsConfig.privateNav?.map(
                              (item) =>
                                 item.href && (
                                    <MobileLink
                                       key={item.href}
                                       href={item.href}
                                       onOpenChange={setOpen}
                                       className='text-white'
                                    >
                                       {item.title}
                                    </MobileLink>
                                 )
                           )
                        }
                     </div>
                  </>
               )}


               {
                  isAuth && (
                     <Button
                        variant="ghost"
                        className="text-white w-full"
                        onClick={() => signOut()}
                        
                     >
                        Logout
                     </Button>
                  )
               }
            </ScrollArea>
         </SheetContent>
      </Sheet>
   )
}

interface MobileLinkProps extends LinkProps {
   onOpenChange?: (open: boolean) => void
   children: React.ReactNode
   className?: string

}


// ...
function MobileLink({
   href,
   onOpenChange,
   className,
   children,
   ...props
}: MobileLinkProps) {
   const router = useRouter()
   return (
      <Link
         href={href}
         onClick={() => {
            router.push(href.toString())
            onOpenChange?.(false)
         }}
         className={cn(className)}
         {...props}
      >
         <div className="flex items-center"> {/* Contenedor Flexbox */}
             
            <span className="ml-2">{children}</span> {/* Texto con margen izquierdo */}
         </div>
      </Link>
   )
}