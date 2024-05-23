import { SectionCart } from "@/components/cart/sectionCart";
import { Metadata } from "next";
import { config } from "@/config/site";


export const metadata: Metadata = {
  title: 'Tu carrito',
  description: `Revisa y gestiona los productos en tu carrito de compras en ${config.name}. Ajusta cantidades, elimina artículos y procede al pago de manera rápida y segura. ¡Aprovecha nuestras ofertas exclusivas y descuentos especiales!'`
}



export default function CartPage() {
  return (
    <div className="container">
      <h1 className="mb-10 text-center text-2xl font-bold">Tu carrito</h1>
      <SectionCart />
    </div>
  );
}
