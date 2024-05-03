"use client";
import { useCartStore } from "@/store/cart-store";
import { CartItem } from "./cartItem";
import { currencyFormat } from "@/lib/currencyFormat";
import { useRouter } from "next/navigation";
export const SectionCart = () => {
  const cart = useCartStore((state) => state.cart);
  const getInformations = useCartStore((state) => state.getInformations);
  const router = useRouter();

    if (cart.length === 0) {
      return (
        <div className="flex items-center justify-center h-96">
          <p className="text-2xl font-bold text-gray-500">
            Tu carrito está vacío
          </p>
        </div>
      );
    }

  return (
    <div className="mx-auto max-w-5xl justify-center md:flex md:space-x-6 xl:px-0">
      <div className="rounded-lg md:w-2/3">
        {cart.map((item) => (
          <CartItem
            key={item.variant.id}
            productId={item.idProduct}
            variantId={item.variant.id}
            image={item.image}
            title={item.title}
            variant={item.variant.value}
            price={item.variant.unitPrice}
            quantity={item.quantity}
          />
        ))}
      </div>
   
      <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">${getInformations().subtotal}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">{currencyFormat(getInformations().shipping)}</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">{currencyFormat(getInformations().total)}</p>
            {/* <p className="text-sm text-gray-700">including VAT</p> */}
          </div>
        </div>
        <button 
        onClick={() => router.push("/checkout/address")}
        className="mt-6 w-full rounded-md bg-primario py-1.5 font-medium text-blue-50 ">
          Pagar
        </button>
      </div>
    </div>
  );
};
