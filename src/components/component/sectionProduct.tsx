"use client";
import { Button } from "@/components/ui/button";
import { CarouselDemo } from "../corousel";
import { useState, useEffect } from "react";

interface Image {
  id: number;
  url: string;
}

interface Variant {
  id: number;
  price: number;
  stock: number;
  attribute: string;
  value: string;
}

interface Product {
  id: string;
  title: string;
  categoryId: number;
  subCategoryId: number;
  petId: number;
  description: string;
  slug: string;
  isActive: boolean;
  isPopular: boolean;
  variants: Variant[];
  images: Image[];
}

interface Props {
    product: Product;
    
}


export default function SectionProduct({product}:Props) {
 
  const [variantSelected, setVariantSelected] = useState<Variant>(
    product.variants[0]
  );

  const handleSelectVariant = (variant: Variant) => {
    setVariantSelected(variant);
  };

  return (
    <section className="w-full py-6 md:py-12 lg:py-24">
      <div className="container flex flex-col md:flex-row items-start gap-8 px-4 md:px-6">
        <CarouselDemo  images={product.images}/>
        <div className="space-y-6">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tighter">
            Classic Sneakers
          </h1>

          <p className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            ${variantSelected.price}
          </p>

          <h4 className="font-bold ">Seleccione una presentacion</h4>
          <div className="flex space-x-2">
            {product.variants.map((variant) => (
              <Button
                key={variant.id}
                type="button"
                onClick={() => handleSelectVariant(variant)}
                className={`w-12 h-12 rounded-md shadow-sm ${
                  variant.id === variantSelected.id
                    ? "bg-primario hover:bg-primario text-white"
                    : "bg-gray-100 text-zinc-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {variant.value}
              </Button>
            ))}
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {variantSelected.stock} in stock
          </p>

          <div className="mt-2">
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Cantidad
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              defaultValue="1"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-gray-200"
            />
          </div>

          <Button className="w-full h-12 rounded-md bg-primario text-zinc-50 shadow-sm hover:bg-none">
            Añadir al carrito
          </Button>

          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Free shipping on orders over $50
          </p>
          {/* <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Fabric: 100% Cotton. Care: Machine wash cold, tumble dry low.
          </p> */}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold tracking-tighter">Descripción</h2>
        <p className="text-base text-gray-500 md:text-lg lg:text-base xl:text-lg dark:text-gray-400">
          {product.description}
        </p>
      </div>
    </section>
  );
}
