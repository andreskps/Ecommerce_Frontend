"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Filter } from "lucide-react";
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
import { useCallback, useState, useEffect } from "react";

interface Props {
  categories: Category[];
  subcategories: {
    name: string;
    id: number;
  }[];
}

export function FiltersMobile({ subcategories, categories }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [pet, setPet] = useState(searchParams.get("pet") || "all");
  const [subcategory, setSubcategory] = useState(
    searchParams.get("subcategory") || "all"
  );
  const [changes, setChanges] = useState({});

  useEffect(() => {
    setPet(searchParams.get("pet") || "all");
    setSubcategory(searchParams.get("subcategory") || "all");
  }, [searchParams]);



  const handleFilter = (value: string) => {
    setChanges((prev) => ({ ...prev, filter: value }));
  };

  const handleSubcategory = (value: string) => {
    setChanges((prev) => ({ ...prev, subcategory: value }));
  };

  const handlePet = (value: string) => {
    setChanges((prev) => ({ ...prev, pet: value }));
  };

  const handleCategoryChange = (value: string) => {
    router.push(`/category/${value.toLocaleLowerCase()}`);
  };

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString());

    for (const [key, value] of Object.entries(changes)) {
      params.set(key, value as string);
    }

    router.push(pathname + "?" + params.toString());
  };

  return (
    <div className="md:hidden flex gap-5">
  
      <Select onValueChange={handleCategoryChange}>
        <SelectTrigger className="w-full">
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
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden bg-black">
            <Filter className="text-white" />
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
              <Select onValueChange={handlePet} defaultValue={pet}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
                  <SelectItem value="perro">Perro</SelectItem>
                  <SelectItem value="gato">Gato</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label>SubCategoria</Label>
              <Select
                onValueChange={handleSubcategory}
                defaultValue={subcategory}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
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
                <Button onClick={applyFilters} type="submit">
                    Aplicar filtros
                </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
