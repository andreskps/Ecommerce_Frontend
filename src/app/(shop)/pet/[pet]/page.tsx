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
  const { subcategory = "", brand = "", page = 1 } = searchParams;

  const selectedPet = pets.find((p) => p.name === pet);

  if (!selectedPet) {
    notFound();
  }

  const response = await getProductsByPet({
    pet: pet,
    subcategory: subcategory as string,
    brand: brand as string,
    page: parseInt(page as string),
  });

  if (!response.ok) {
    return notFound();
  }

  const data: ProductsResponse = await response.json();
  const products = data.products;
  const totalPages = Math.ceil(data.total / 3);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsByPet
        cantPages={totalPages}
        products={products}
        subcategory={subcategory as string}
        title={selectedPet.title}
        description={selectedPet.description}
      />
    </Suspense>
  );
}
