"use client";

import { MobileNav } from "./mobile";
import { MainNav } from "./desktop";
import { ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  LogInIcon,
  UserIcon,
} from "lucide-react";
// import { useTheme } from 'next-themes'
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useCartStore } from "@/store/cart-store";
import { useEffect, useState } from "react";
import { Truck } from 'lucide-react';
export default function Header() {
  const { data: session, status } = useSession();

  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   setLoaded(true);
  // }, [])
  

  return (
    <header className="bg-primario sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur mb-4 px-[1.4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] 2xl:px-[12rem]">
          <div className="bg-primario text-center py-2 text-white">
            <Truck className="w-5 h-5 inline-block" />
            <p className="text-xl">¡Compra ahora y paga al recibir! </p>
</div>
      <div className="flex h-14 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <div className="flex-none">{/* <CommandMenu /> */}</div>
          {/* {status === "loading" ? (
            <p>Loading...</p>
          ) : session ? (
            <UserNav />
          ) : (
            <LoginDialog />
          )}

          {
            loaded && <CartNav />
          } */}
          <CartNav/>
          {/* <ThemeToggle /> */}
         
          {/* {session ? <UserNav /> : <LoginDialog />} */}
        </div>
      </div>
    </header>
  );
}

export function CartNav() {
   const totalItems = useCartStore((state) => state.getTotalItems());
  return (
    <Link href="/cart">
       <div className="relative">
      
              <span className="fade-in absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-orange-300 700 text-white">
                  {totalItems}
              </span>
         
            <ShoppingCart className="w-5 h-5 text-white" />
          </div>
    </Link>
  );
}

function LoginDialog() {
  return (
    <Link href="/auth/login">
      
        <LogInIcon className="h-4 text-white" />
        {/* <span>Login</span> */}
      
    </Link>
  );
}

function UserNav() {
  return (
    <Link href="/account">
      <UserIcon className="h-5 w-5
      text-white 
      " />
    </Link>
  );
}

