"use client"
import React from 'react'
import { useCartStore } from "@/store/cart-store";
import { Trash2 } from 'lucide-react';


interface Props{
    productId: string;
    variantId: number;
    image: string;
    title: string;
    variant: string;
    price: number;
    quantity: number;
}


export const CartItem = ({productId,variantId,image,title,variant,price,quantity}:Props) => {

  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
          <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src={image}
              alt="product-image"
              className="w-full rounded-lg sm:w-40"
            />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-lg font-bold text-gray-900">
                    {title}
                </h2>
                <p className="mt-1 text-xs text-gray-700">Detalles: {variant}</p>
              </div>
              <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div className="flex items-center border-gray-100">
                  {/* <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                    {" "}
                    -{" "}
                  </span>
                  <input
                    className="h-8 w-8 border bg-white text-center text-xs outline-none"
                    type="number"
                    value={quantity.toString()}
                    min="1"
                  />
                  <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                    {" "}
                    +{" "}
                  </span> */}
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm">S/. {price}</p>
                    <button onClick={() => removeFromCart(productId,variantId)}>
                        <Trash2 size={20} />
                    </button>
                </div>
              </div>
            </div>
          </div>
    
  )
}
