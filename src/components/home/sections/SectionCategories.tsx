/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tA8iPAicAUG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function SectionCategories() {
  const categories = [
    // {
    //   title: "Alimento",
    //   description: "Encuentra el alimento ideal para tu mascota.",
    //   image:
    //     "https://res.cloudinary.com/dftvxcvfw/image/upload/v1713447093/banners/hqisyktgd8uuhvtppwwg.png",
    //   link:"/category/alimentos"
    // },
    {
      title: "Juguetes",
      description: "Descubre la diversión para tu mascota.",
      image:
        "https://res.cloudinary.com/dftvxcvfw/image/upload/v1718374277/banners/juguete-para-mascotas_jtdv0w.png",
      link: "/category/juguetes",
    },
    {
      title: "Accesorios",
      description: "Encuentra los mejores accesorios para tu mascota.",
      image:
        "https://res.cloudinary.com/dftvxcvfw/image/upload/v1718374329/banners/collar-para-mascotas_wf2bwm.png",
      link: "/category/accesorios",
    },
    {
      title: "Higiene",
      description: "Productos para la higiene de tu mascota.",
      image:
        "https://res.cloudinary.com/dftvxcvfw/image/upload/v1718374334/banners/champu_dop0vr.png",
      link: "/category/higiene",
    },
    // {
    //   title: "Ofertas",
    //   description: "Descubre las mejores ofertas.",
    //   image:
    //     "https://res.cloudinary.com/dftvxcvfw/image/upload/v1713448963/banners/nvxxmrwnmyfcbwljgjev.png",
    //   link: "#",
    // },
  ];

  return (
    <>
      <section className="w-full py-10 md:py-20 lg:py-28">
        <div className="container grid gap-8 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight ">
                Categorías destacadas
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Encuentra lo que buscas en nuestras categorías.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
         
          {categories.map((category, i) => (
              <div
                className="grid grid-cols-1 flex-1 gap-6 relative group"
                key={i}
              >
                <Link className="absolute inset-0 z-10" href={category.link}>
                  <span className="sr-only">Ver Categoría</span>
                </Link>
                <Image
                  alt={category.title}
                  className="rounded-lg h-52 object-contain w-full aspect-[3/4]"
                  height={300}
                  src={category.image}
                  width={225} // Reducir el ancho
                />
                <div className="grid gap-1">
                  <h3 className="text-base font-semibold">{category.title}</h3>{" "}
                
                  <p className="text-xs leading-none">
                    {category.description}
                  </p>{" "}
      
                </div>
                <Link href={category.link}>
                  <Button className="bg-primario w-full">Ver Categoría</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
