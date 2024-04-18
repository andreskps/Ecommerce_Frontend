import { CarouselDemo } from "@/components/corousel";
import Carousel from "@/components/corouselMain";
import { Nav } from "@/components/nav";
import Header from "@/components/parent";
import SectionMain from "@/components/section";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col border-neutral-200 ">
      <Carousel />

      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-2xl font-bold">Bienvenido a Petlify</h1>
        <p className="text-sm text-neutral-500">
           Encuentra los mejores productos para tu mascota
        </p>
      </div>
      <SectionMain />
    </div>
  );
}
