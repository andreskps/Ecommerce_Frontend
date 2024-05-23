"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { Label } from "../ui/label";

interface Subcategory {
  id: number;
  name: string;
}

interface Category {
  id: number;
  name: string;
  subcategories: Subcategory[];
}

interface Props {
  categories: Category[];
}

export const CategoriesMobile = ({ categories }: Props) => {
  const [categorySelected, setCategorySelected] = React.useState<string | null>(
    null
  );
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleSubcategory = (value: string) => {
    router.push(`${pathname}?subcategory=${value}`);
  };

  return (
    <>
     <div className="flex items-center">
  <div className="mr-3">
    <Label>Categoría</Label>
    <Select
      onValueChange={(value) => {
        setCategorySelected(value);
      }}
    >
      <SelectTrigger className="w-full m-3">
        <SelectValue placeholder="Seleccionar categoría" />
      </SelectTrigger>
      <SelectContent>
        {categories.map((category, i) => (
          <SelectItem key={category.id} value={category.name}>
            {category.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>

  <div className="mr-3">
    <Label>Subcategoría</Label>
    <Select
      onValueChange={(value) => {
        handleSubcategory(value);
      }}
    >
      <SelectTrigger className="w-full m-3">
        <SelectValue placeholder="Seleccionar subcategoria" />
      </SelectTrigger>
      <SelectContent>
        {categories
          .filter((category) => category.name === categorySelected)
          .map((category) =>
            category.subcategories.map((subcategory) => (
              <SelectItem key={subcategory.id} value={subcategory.name}>
                {subcategory.name}
              </SelectItem>
            ))
          )}
      </SelectContent>
    </Select>
  </div>

  <button className="p-2 bg-blue-500 text-white rounded">Buscar</button>
</div>
    </>
  );
};
