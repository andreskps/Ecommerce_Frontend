import {  ProductsByPet } from "@/components/component/products";
import { notFound } from "next/navigation";

interface Props {
  params: {
    pet: string;
  };
}

const pets = [{
  name: "dog",
  description: "Dogs are the best pets",
  title: "Dogs",
  
},{
  name: "cat",
  description: "Cats are the best pets",
  title: "Cats",
}]

export default function PetPage({ params }: Props) {
  const { pet } = params;

  if (!pets.find((p) => p.name === pet)) {
    return notFound();
  }

  const selectedPet = pets.find((p) => p.name === pet);

  if (!selectedPet) {
    notFound();
  }

  return <ProductsByPet  title={selectedPet.title} description={selectedPet.description} />;
}
