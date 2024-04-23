import {
  Product,
  ProductsResponse,
} from "@/app/interface/products/ProductsResponse";
import { ProductsByPet } from "@/components/component/products";
import { getProductsByPet } from "@/lib/api/productsApi";
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


export default async function PetPage({ params, searchParams }: Props) {
  const { pet } = params;
  const { subcategory = "", brand = "" } = searchParams;

  const selectedPet = pets.find((p) => p.name === pet);

  if (!selectedPet) {
    notFound();
  }

  const products = await getProductsByPet({
    pet: pet,
    subcategory: subcategory as string,
    brand: brand as string,
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsByPet
        products={products}
        subcategory={subcategory as string}
        title={selectedPet.title}
        description={selectedPet.description}
      />
    </Suspense>
  );
}
