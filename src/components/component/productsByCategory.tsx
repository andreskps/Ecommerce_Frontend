import Link from "next/link";
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { Filters } from "../category/Filters";

export const ProductsByCategory = () => {
  const categories = [
    {
      id: 1,
      name: "Alimento",
    },
    {
      id: 2,
      name: "Accesorios",
    },
    {
      id: 3,
      name: "Juguetes",
    },
    {
      id: 4,
      name: "Higiene",
    },
    {
      id: 5,
      name: "Farmacia",
    },
    {
      id: 6,
      name: "Ropa",
    },
  ];

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 px-4 md:px-6 py-12 md:py-24">
      <div className="md:flex md:flex-col gap-6 hidden">
        <div className="space-y-2 ">
          <h3 className="text-lg font-semibold">Categorías</h3>
          <div className="grid gap-2">
            {categories.map((category, i) => (
              <Link
                key={category.id}
                href={`/category/${category.name.toLowerCase()}`}
                className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
        {/* <Filters /> */}


      </div>
    </div>
  );
};
