import { OrderStatusForm } from "@/components/order-status/OrderStatusForm";
import { config } from "@/config/site";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Checkout ',
  description: `Completa tu compra de manera rápida y segura en ${config.name}. Revisa tu carrito, ingresa tu información de envío y elige tu método de pago preferido. ¡Disfruta de una experiencia de compra sin complicaciones!`
}
export default function OrderStatusPage() {
  return (
    <OrderStatusForm/>
  );
}