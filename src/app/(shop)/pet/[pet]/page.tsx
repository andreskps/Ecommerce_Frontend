import {
  Product,
  ProductsResponse,
} from "@/app/interface/products/ProductsResponse";
import { ProductsByPet } from "@/components/component/products";
import { getProductsByPet } from "@/lib/api/productsApi";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface Props {
  params: {
    pet: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { pet } = params;
  const selectedPet = pets.find((p) => p.name === pet);
  const { subcategory = "", brand = "" } = searchParams;
  const title = selectedPet?.title;
  const description = selectedPet?.description;

  return {
    title: `Productos para ${title}`,
    description: `Encuentra los mejores productos para ${title} en nuestra tienda online.`,
  };
}

const pets = [
  {
    name: "perro",
    description: "Descubre una amplia gama de productos para perros, desde alimentos saludables hasta juguetes y accesorios elegantes. ¡Todo lo que necesitas para mantener a tu perro feliz y saludable!",
    title: "Perros",
  },
  {
    name: "gato",
    description: "Explora nuestra selección de productos para gatos, incluyendo comida nutritiva, juguetes entretenidos y accesorios cómodos. ¡Todo lo necesario para el bienestar y la diversión de tu gato!",
    title: "Gatos",
  },
];


export default async function PetPage({ params, searchParams }: Props) {
  const { pet } = params;
  const { subcategory = "", brand = "", page = 1,category= "" ,filter=""} = searchParams;

  const selectedPet = pets.find((p) => p.name === pet);

  if (!selectedPet) {
    notFound();
  }

  const response = await getProductsByPet({
    pet: pet,
    subcategory: subcategory as string,
    brand: brand as string,
    category: category as string,
    page: parseInt(page as string),
    filter: filter as string,
  });


  if (!response.ok) {
    return notFound();
  }

  const data: ProductsResponse = await response.json();
  const products = data.products;
  const totalPages = Math.ceil(data.total / 10);
  return (
    
      <ProductsByPet
        cantPages={totalPages}
        products={products}
        subcategory={subcategory as string}
        title={selectedPet.title}
        description={selectedPet.description}
      />
  );
}
