import { SectionCart } from "@/components/cart/sectionCart";

export default function CartPage() {
  return (
    <div className="container">
      <h1 className="mb-10 text-center text-2xl font-bold">Tu carrito</h1>
      <SectionCart />
    </div>
  );
}
