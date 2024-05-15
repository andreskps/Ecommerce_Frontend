/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tA8iPAicAUG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export  function SectionCategories() {
  const categories = [
    {
      title: "Alimento",
      description: "Encuentra el alimento ideal para tu mascota.",
      image:
        "https://res.cloudinary.com/dftvxcvfw/image/upload/v1713447093/banners/hqisyktgd8uuhvtppwwg.png",
      link:"/category/alimentos"
    },
    {
      title: "Juguetes",
      description: "Descubre la diversión para tu mascota.",
      image:
        "https://res.cloudinary.com/dftvxcvfw/image/upload/v1713447093/banners/axnotn1etfrvhku9y6zb.png",
      link: "/category/juguetes",
    },
    {
      title: "Accesorios",
      description: "Encuentra los mejores accesorios para tu mascota.",
      image:
        "https://res.cloudinary.com/dftvxcvfw/image/upload/v1713448667/banners/fp7i11l3lmt0jskondge.png",
      link: "/category/accesorios",
    },
    {
      title: "Higiene",
      description: "Productos para la higiene de tu mascota.",
      image:
        "https://res.cloudinary.com/dftvxcvfw/image/upload/v1713448963/banners/eboaqialykdngbfugeov.png",
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
      <section className="w-full py-12">
        <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-xl mx-auto lg:max-w-none">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="grid gap-1">
              <h1 className="text-2xl font-bold tracking-tight">
                Categorías Destacadas
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Encuentra lo que buscas en nuestras categorías.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
                  className="rounded-lg object-contain w-full aspect-[3/4]"
                  height={600}
                  src={category.image}
                  width={450}
                />
                <div className="grid gap-1">
                  <h3 className="font-semibold">{category.title}</h3>
                  <p className="text-sm leading-none">{category.description}</p>
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
