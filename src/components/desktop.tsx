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
// import config from '@/config/site'
import { cn } from "@/lib/utils";
import Link from "next/link";
import { forwardRef } from "react";


export function MainNav() {
  return (
    <div className="hidden md:flex gap-4">
      <Link href="/" className="flex items-center">
        <span className="hidden  text-white font-medium sm:inline-block">
          Petlify
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
          <Link href="/products" legacyBehavior passHref>
            <NavigationMenuLink className=" inline-flex rounded-sm h-10 w-max items-center justify-center text-sm font-medium px-4 py-2 text-white hover:bg-white hover:text-black">
              <div className="font-medium">Products</div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/products" legacyBehavior passHref>
            <NavigationMenuLink className=" inline-flex  rounded-sm h-10 w-max items-center justify-center text-sm font-medium px-4 py-2 text-white hover:bg-white hover:text-black">
              <div className="font-medium">Products</div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/products" legacyBehavior passHref>
            <NavigationMenuLink className=" inline-flex  rounded-sm  h-10 w-max items-center justify-center text-sm font-medium px-4 py-2 text-white hover:bg-white hover:text-black">
              <div className="font-medium">Products</div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* <NavigationMenuItem>
               <NavigationMenuTrigger>
                  <div className="font-normal text-foreground/70">Brands</div>
               </NavigationMenuTrigger>
               <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                     {components.map((component) => (
                        <ListItem
                           key={component.title}
                           title={component.title}
                           href={component.href}
                        >
                           {component.description}
                        </ListItem>
                     ))}
                  </ul>
               </NavigationMenuContent>
            </NavigationMenuItem> */}
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
