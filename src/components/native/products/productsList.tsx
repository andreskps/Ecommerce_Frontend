import { Product, ProductsResponse } from "@/app/interface/products/ProductsResponse";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";


interface Props {
  products: Product[]
}



const ProductsList = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product, i) => (
        <div className="relative group flex flex-col items-stretch" key={i}>
          <Link className="absolute inset-0 z-10" href={`/product/${product.slug}`}>
            <span className="sr-only">Ver Producto</span>
          </Link>
          <div className="flex-grow">
            <img
              alt={product.title}
              className="rounded-lg object-contain w-full h-full group-hover:opacity-50 transition-opacity"
              src={product.productImages[0].url}
            />
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">{product.title}</h3>
            <p className="text-sm leading-none">30.000$</p>
          </div>
          <Button className="bg-primario mt-2 w-full">Ver producto</Button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
