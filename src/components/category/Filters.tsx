"use client";

import { Category } from "@/app/interface/categories/Categories.interface";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

interface Props {
  categories: Category[];
  subcategories: {
    name: string;
    id: number;
  }[];
}

export const Filters = ({ categories, subcategories }: Props) => {
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

  const handleFilter = (value: string) => {
    router.push(pathname + "?" + createQueryString("filter", value));
  };

  const handleSubcategory = (value: string) => {
    router.push(pathname + "?" + createQueryString("subcategory", value));
  };

  const handlePet = (value: string) => {
    router.push(pathname + "?" + createQueryString("pet", value));
  };

  return (
    <div className="md:flex md:flex-col gap-6 hidden">
      <div className="space-y-2 ">
        <h3 className="text-lg font-semibold">Categorías</h3>
        <div className="grid gap-2">
          {categories.map((category, i) => {
            const isActive =
              pathname === `/category/${category.name}`;
            return (
              <Link
                key={category.id}
                href={`/category/${category.name.toLowerCase()}`}
                className={`flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 ${
                  isActive ? "bg-gray-100 text-gray-900" : ""
                }`}
              >
                {category.name}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="grid gap-2">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label>Mascota</Label>
            <Select onValueChange={handlePet} defaultValue="todos">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todas</SelectItem>
                <SelectItem value="perro">Perro</SelectItem>
                <SelectItem value="gato">Gato</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label>SubCategoria</Label>
            <Select onValueChange={handleSubcategory} defaultValue="todos">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todas</SelectItem>
                {subcategories.map((subcategory, i) => (
                  <SelectItem key={subcategory.id} value={subcategory.name}>
                    {subcategory.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="filter">Filtrar por:</Label>
            <Select onValueChange={handleFilter} defaultValue="all">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="new">Nuevos</SelectItem>
                <SelectItem value="sale">En Oferta</SelectItem>
                <SelectItem value="featured">Destacados</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};
