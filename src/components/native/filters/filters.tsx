"use client"

import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { usePathname ,useRouter,useSearchParams} from "next/navigation";
import { useCallback } from "react";

export const Filters = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();


  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  const handleFilter = (value: string) => {
    router.push(pathname + '?' + createQueryString('filter', value));
  }



  const handleSort = (value: string) => {
    router.push(pathname + '?' + createQueryString('sort', value));
  };

  return (
    <Accordion className="w-full" collapsible type="single">
      <AccordionItem value="filter">
        <AccordionTrigger className="text-base">Filtros</AccordionTrigger>
        <AccordionContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="sort">Ordenar por:</Label>
              <Select defaultValue="featured" onValueChange={handleSort}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Destacados</SelectItem>
                  <SelectItem value="price-asc">
                    Precio: Menor a Mayor
                  </SelectItem>
                  <SelectItem value="price-desc">
                    Precio: Mayor a Menor
                  </SelectItem>
                  <SelectItem value="rating">Calificación</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="filter">Filtrar por:</Label>
              <Select
                onValueChange={handleFilter}
               defaultValue="all">
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
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
