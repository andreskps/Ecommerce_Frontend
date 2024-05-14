"use client";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Filter } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Brand } from "@/app/interface/brands/Brands.interface";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  brands: Brand[];
}

export const FiltersMobile = ({ brands }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [brand, setBrand] = useState(searchParams.get("brand") || "all");

  const [changes, setChanges] = useState({});

  useEffect(() => {
    setBrand(searchParams.get("brand") || "all");
  }, [searchParams]);

  const handleBrand = (value: string) => {
    setChanges((prev) => ({ ...prev, brand: value }));
  };
  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    for (const [key, value] of Object.entries(changes)) {
      params.set(key, value as string);
    }
    router.push(pathname + "?" + params.toString());
  };
  return (
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
          <div className="grid gap-2"></div>

          <div className="grid gap-2">
            <Label htmlFor="filter">Filtrar por:</Label>
            <Select defaultValue="all">
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
          <div className="grid gap-2">
            <Label htmlFor="brand">Marca:</Label>
            <Select defaultValue={brand} onValueChange={handleBrand}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                {brands.map((brand, i) => (
                  <SelectItem key={i} value={brand.name}>
                    {brand.name}
                  </SelectItem>
                ))}
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
  );
};
