import { Product } from "@/app/interface/products/ProductsResponse";
import { Button } from "@/components/ui/button";
import { currencyFormat } from "@/lib/currencyFormat";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  products: Product[];
}

const ProductsList = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product, i) => (
        <>
          <div className="relative group flex flex-col items-stretch" key={i}>
            <Link
              className="absolute inset-0 z-10"
              href={`/product/${product.slug}`}
            >
              <span className="sr-only">Ver Producto</span>
            </Link>
            <div className="flex-grow">
              <Image
                alt={product.title}
                className="rounded-lg object-contain w-full h-full group-hover:opacity-50 transition-opacity"
                src={product.productImages[0].url}
                width={500}
                height={500}
              />
              {/* <div className="absolute left-3 top-3">
                <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-white uppercase bg-primario rounded-full">
                  Nuevo
                </p>
              </div> */}
              {}

              {product.discount ? (
                <div className="absolute right-3 top-3">
                  <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-white uppercase bg-primario rounded-full">
                    {product.discount.percentage}% OFF
                  </p>
                </div>
              ) : product.isNew ? (
                <div className="absolute left-3 top-3">
                  <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-white uppercase bg-primario rounded-full">
                    Nuevo
                  </p>
                </div>
              ) : product.isPopular ? (
                <div className="absolute left-3 top-3">
                  <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-white uppercase bg-primario rounded-full">
                    Popular
                  </p>
                </div>
              ) : null}
            </div>
            <div className="grid gap-1">
              <h3 className="font-semibold">{product.title}</h3>
              {product.productVariants &&
                product.productVariants.length > 0 && (
                  <p className="text-sm leading-none">
                    {currencyFormat(
                      parseFloat(product.productVariants[0].price) *
                        (1 - (product.discount?.percentage || 0) / 100)
                    )}
                  </p>
                )}

              {product.discount &&
                product.productVariants &&
                product.productVariants.length > 0 && (
                  <p className="text-sm leading-none line-through text-gray-500">
                    {currencyFormat(
                      parseFloat(product.productVariants[0].price)
                    )}
                  </p>
                )}
            </div>
            {/* <Button className="bg-primario mt-2 w-full">Ver producto</Button> */}
          </div>
        </>
      ))}
    </div>
  );
};

export default ProductsList;
