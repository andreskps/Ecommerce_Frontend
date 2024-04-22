"use client"

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Filter } from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Category } from "@/app/interface/categories/Categories.interface";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

interface Props {
  subcategories: {
    name: string;
    id: number;
  }[];
}

export function SheetDemo({ subcategories }: Props) {
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
    <Sheet>
      <SheetTrigger asChild>
        <Button className="md:hidden bg-black">
          <Filter className='text-white'/>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filtros</SheetTitle>
          <SheetDescription>
            Selecciona tus opciones de filtro aquí.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {/* Aquí es donde se mueven los filtros */}
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
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Aplicar filtros</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}