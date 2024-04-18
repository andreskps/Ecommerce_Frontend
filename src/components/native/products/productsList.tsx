
import Link from 'next/link'
import React from 'react'

const ProductsList = ({products}:any) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {products.map((product:any, i:number) => (
      <div className="relative group" key={i}>
        <Link className="absolute inset-0 z-10" href={product.link}>
          <span className="sr-only">Ver Producto</span>
        </Link>
        <img
          alt={product.name}
          className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
          height={300}
          src={product.image}
          width={300}
        />
        <div className="flex-1 py-4">
          <h3 className="font-semibold tracking-tight">{product.name}</h3>
          <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
            {product.description}
          </p>
          <h4 className="font-semibold">{product.price}</h4>
        </div>
      </div>
    ))}
  </div>
  )
}

export default ProductsList