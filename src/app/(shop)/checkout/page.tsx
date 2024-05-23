import SectionShipping from "@/components/component/sectionShipping";
import { config } from "@/config/site";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: 'Consulta el Estado de tu Pedido',
  description: `Consulta el estado de tu pedido en ${config.name}. Ingresa tu número de pedido para obtener información actualizada sobre el envío y entrega. Seguimiento fácil y rápido para todas tus compras.'`
}

export default function AddresPage() {
  
  return <SectionShipping />;
}
