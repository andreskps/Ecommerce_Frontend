"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { config } from "@/config/site";
// import config from '@/config/site'
import { cn } from "@/lib/utils";
import Link from "next/link";
import { forwardRef } from "react";


export function MainNav() {
  return (
    <div className="hidden md:flex gap-4">
      <Link href="/" className="flex items-center">
        <span className="hidden  text-white font-medium sm:inline-block">
          {config.name}
        </span>
      </Link>
      <NavMenu />
    </div>
  );
}

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/pet/perro" legacyBehavior passHref>
            <NavigationMenuLink className=" inline-flex rounded-sm h-10 w-max items-center justify-center text-sm font-medium px-4 py-2 text-white hover:bg-white hover:text-black">
              <div className="font-medium">Perros</div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pet/gato" legacyBehavior passHref>
            <NavigationMenuLink className=" inline-flex  rounded-sm h-10 w-max items-center justify-center text-sm font-medium px-4 py-2 text-white hover:bg-white hover:text-black">
              <div className="font-medium">Gatos</div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/order-status" legacyBehavior passHref>
            <NavigationMenuLink className=" inline-flex  rounded-sm h-10 w-max items-center justify-center text-sm font-medium px-4 py-2 text-white hover:bg-white hover:text-black">
              <div className="font-medium">Estado de orden</div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      

      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href ?? ""}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
