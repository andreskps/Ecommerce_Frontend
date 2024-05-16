"use client";
import React from "react";
import { useCartStore } from "@/store/cart-store";
import { Trash2, CirclePlus, CircleMinus } from "lucide-react";
import Image from "next/image";

interface Props {
  productId: string;
  variantId: number;
  image: string;
  title: string;
  variant: string;
  price: number;
  quantity: number;
}

export const CartItem = ({
  productId,
  variantId,
  image,
  title,
  variant,
  price,
  quantity,
}: Props) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const handleChangeQuantity = (value: number) => {
    if (quantity + value < 1) {
      return;
    }

    updateQuantity(productId, variantId, quantity + value);
  };

  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <Image
        src={image}
        alt="product-image"
        width={100}
        height={100}
        className="w-full rounded-lg sm:w-40"
      />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          <p className="mt-1 text-xs text-gray-700">Detalles: {variant}</p>
        </div>
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center border-gray-100  md:mx-5">
            <button
              className="text-primario"
              onClick={() => handleChangeQuantity(-1)}
              aria-label="Disminuir cantidad"
            >
              <CircleMinus size={20} />
            </button>
            <span className="w-20 mx-3 px-5 bg-gray-100 text-center rounded">
              {quantity}
            </span>

            <button
              className="text-primario"
              onClick={() => handleChangeQuantity(1)}
              aria-label="Aumentar cantidad"
            >
              <CirclePlus size={20} />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm">${price*quantity}</p>
            <button
              onClick={() => removeFromCart(productId, variantId)}
              aria-label="Eliminar del carrito"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};