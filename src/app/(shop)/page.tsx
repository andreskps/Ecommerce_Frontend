
import { CarouselDemo } from "@/components/corousel";
import Carousel from "@/components/corouselMain";

import { SectionCategories } from "@/components/home/sections/SectionCategories";
import { SectionProducts } from "@/components/home/sections/SectionProducts";
import { config } from "@/config/site";
import { Banner } from "../interface/banners/banner.interface";




import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title:  'Inicio',
  description: `Descubre los mejores productos para mascotas en ${config.name} Ofrecemos alimentos saludables, juguetes divertidos y accesorios únicos para perros, gatos y más. Envío rápido y atención personalizada. ¡Compra ahora y da lo mejor a tu mascota!`,
}

export default async function Home() {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/banners`, {
    next: {
      revalidate: 4200,
    },
  });

  const banners:Banner[] = await response.json();

  return (
    <div className="flex flex-col border-neutral-200 ">
      <Carousel banners={banners} />
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-3xl font-bold">Bienvenido a {config.name}</h1>
        <p className=" text-neutral-500 text-center py-2">
           Encuentra los mejores productos para tu mascota
        </p>
      </div>
      <SectionCategories />
      <SectionProducts/>
    </div>
  );
}
