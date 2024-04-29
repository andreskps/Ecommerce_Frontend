'use client'

// import { CommandMenu } from '@/components/composites/command'
import { MobileNav } from './mobile'
// import { UserNav } from '@/components/native//nav/user'
import { MainNav } from './desktop'
import { Button } from '@/components/ui/button'
// import { useAuthenticated } from '@/hooks/useAuthentication'
import { LogInIcon, MoonIcon, ShoppingBasketIcon, SunIcon, UserIcon } from 'lucide-react'
// import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useSession } from "next-auth/react";

export default function Header() {
//    const { authenticated } = useAuthenticated()
   const { data: session,status } = useSession()

   return (
      <header className="bg-primario sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur mb-4 px-[1.4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] 2xl:px-[12rem]">
         <div className="flex h-14 items-center">
            <MainNav />
            <MobileNav />
            <div className="flex flex-1 items-center space-x-2 justify-end">
               <div className="flex-none">
                  {/* <CommandMenu /> */}
               </div>
               <CartNav />
               {/* <ThemeToggle /> */}
               {
                  status === "loading" ? <p>Loading...</p> : session ? <UserNav /> : <LoginDialog />
               }
               {/* {session ? <UserNav /> : <LoginDialog />} */}
            </div>
         </div>
      </header>
   )
}

export function CartNav() {
   return (
      <Link href="/cart">
         <Button size="icon" variant="outline" className="h-9">
            <ShoppingBasketIcon className="h-4" />
         </Button>
      </Link>
   )
}

function LoginDialog() {
   return (
      <Link href="/login">
         <Button className="font-medium flex gap-2">
            <LogInIcon className="h-4" />
            <p>Login</p>
         </Button>
      </Link>
   )
}

function UserNav() {
    return (
        <Link href="/account">
            <Button size="icon" variant="outline" className="h-9">
                <UserIcon className="h-4" />
            </Button>
        </Link>
    )
}

// function ThemeToggle() {
//    const { resolvedTheme, setTheme } = useTheme()

//    return (
//       <Button
//          variant="outline"
//          size="icon"
//          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
//       >
//          {resolvedTheme === 'dark' ? (
//             <SunIcon className="h-4" />
//          ) : (
//             <MoonIcon className="h-4" />
//          )}
//       </Button>
//    )
// }