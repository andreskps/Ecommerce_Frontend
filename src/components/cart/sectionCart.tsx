"use client";
import { useCartStore } from "@/store/cart-store";
import { CartItem } from "./cartItem";
import { currencyFormat } from "@/lib/currencyFormat";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { useEffect,useState } from "react";
export const SectionCart = () => {
  const cart = useCartStore((state) => state.cart);
  const getInformations = useCartStore((state) => state.getInformations);
  const router = useRouter();
const [isClient, setIsClient] = useState(false);

useEffect(() => {
  setIsClient(true);
}, []);

if (!isClient) {
  return (
    <div className="flex items-center justify-center h-96">
      <p className="text-2xl font-bold text-gray-500">Cargando...</p>
    </div>
  );
}
  

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
          <p className="text-gray-700">
            {currencyFormat(getInformations().subtotal)}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Precio de envío estimado</p>
          <p className="text-sm text-gray-700">
            Se calculará una vez que ingreses tu dirección
          </p>
        </div>

        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">
              {currencyFormat(getInformations().subtotal)}
            </p>
          </div>
        </div>
        <button 
          onClick={() => router.push("/checkout")}
        className="mt-4 w-full py-2 px-4 rounded bg-primario text-white text-center">
          Proceder al pago
        </button>
      </div>
    </div>
  );
};
