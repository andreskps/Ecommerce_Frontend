import ProductsList from '@/components/native/products/productsList';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'


interface ProductImage {
  id: number;
  url: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  slug: string;
  isActive: boolean;
  isPopular: boolean;
  isNew: boolean;
  productImages: ProductImage[];
}

type ProductsResponse = Product[];


export const SectionProducts = async () => {

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


    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/popular`,{
      
        method: "GET",
        cache: "no-cache",
      
    })
 
    const products = await response.json()

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
      <ProductsList products={products} />
    </div>
    
  </section>
  )
}
