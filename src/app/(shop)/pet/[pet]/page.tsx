import {
  Product,
  ProductsResponse,
} from "@/app/interface/products/ProductsResponse";
import { ProductsByPet } from "@/components/component/products";
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

const pets = [
  {
    name: "perro",
    description: "Dogs are the best pets",
    title: "Perros",
  },
  {
    name: "gato",
    description: "Cats are the best pets",
    title: "Gatos",
  },
];

const products = [
  {
    name: "Producto 1",
    price: "$19.99",
    description: "Descripción del Producto",
    image:
      "https://res.cloudinary.com/dftvxcvfw/image/upload/v1713359989/products/vsririqv6aldivisv814.jpg",
    link: "#",
    subcategory: "Secos",
  },
  {
    name: "Producto 3",
    price: "$14.99",
    description: "Descripción del Producto",
    image: "/placeholder.svg",
    link: "#",
    subcategory: "Húmedos",
  },
];

export default async function PetPage({ params, searchParams }: Props) {
  const { pet } = params;
  const { subcategory = "", brand = "" } = searchParams;

  const selectedPet = pets.find((p) => p.name === pet);

  if (!selectedPet) {
    notFound();
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products/byPet/${selectedPet.name}?subcategory=${subcategory}&brand=${brand}`,
    {
      method: "GET",
      cache: "no-cache",
    }
  );

  const data: Product[] = await response.json();

  console.log(data);

  return (
   
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsByPet
          products={data}
          subcategory={subcategory as string}
          title={selectedPet.title}
          description={selectedPet.description}
        />
      </Suspense>
   
  );
}
