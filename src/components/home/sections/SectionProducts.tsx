import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

export const SectionProducts = () => {

    const topProducts = [
        {
          name: "Producto 1",
          price: "$29.99",
          image:
            "https://res.cloudinary.com/dftvxcvfw/image/upload/v1713359989/products/vsririqv6aldivisv814.jpg",
          link: "#",
        },
        {
          name: "Producto 2",
          price: "$49.99",
          image:
            "https://res.cloudinary.com/dftvxcvfw/image/upload/v1713278507/products/k9om2ujntow5q5ltdzdr.jpg",
          link: "#",
        },
        {
          name: "Producto 3",
          price: "$79.99",
          image:
            "https://res.cloudinary.com/dftvxcvfw/image/upload/v1713366691/products/ppwr51qodn9vgjbai6ra.jpg",
          link: "#",
        },
      ];
  return (
    <section className="w-full py-12">
    <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-xl mx-auto lg:max-w-none">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
        <div className="grid gap-1">
          <h1 className="text-2xl font-bold tracking-tight">
            Productos Destacados
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Descubre nuestros productos más populares.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {topProducts.map((product, i) => (
          <div className="grid gap-4 relative group" key={i}>
            <Link className="absolute inset-0 z-10" href={product.link}>
              <span className="sr-only">Ver Producto</span>
            </Link>
            <img
              alt={product.name}
              className="rounded-lg object-contain w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
              height={600}
              src={product.image}
              width={450}
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm leading-none">{product.price}</p>
            </div>
            <Button
                className="bg-primario w-full"
               
            
            >Ver producto</Button>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
