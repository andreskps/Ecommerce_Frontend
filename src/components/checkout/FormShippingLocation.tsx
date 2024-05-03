"use client";
import React, { useEffect } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShippingInfo } from "@/validators/shippingInfoSchema";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { DataLocations } from "@/lib/dataLocation";
import { Departamento, getDepartamentos } from "../../lib/api/departamentosApi";
import { useCartStore } from "@/store/cart-store";
interface Props {
  form: UseFormReturn<z.infer<typeof ShippingInfo>>;
}
export const FormShippingLocation = ({ form }: Props) => {
  const [selectedDepartment, setSelectedDepartment] = React.useState(
    form.getValues("department")
  );
  const [selectedProvince, setSelectedProvince] = React.useState(
    form.getValues("province")
  );

  const [departamentos, setDepartamentos] = React.useState<Departamento[]>();

  useEffect(() => {
    getDepartamentos().then((data) => {
      setDepartamentos(data);
    });
  }, []);

  const setShipping = useCartStore((state) => state.setPriceShipping);

  const getPriceShipping = (value: string) => {
    const location = departamentos?.find(
      (location) => location.id.toString() === selectedDepartment
    );
    const city = location?.municipios.find(
      (ciudad) => ciudad.id.toString() === value
    );
    return city?.priceShipping || 0;
  };

  return (
    <>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Datos de envío</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Ingresa tus datos de envío para completar tu pedido.
        </p>
      </div>

      <Form {...form}>
        <form className="space-y-4">
          <FormField
            control={form.control}
            name="department"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-sm" htmlFor="department">
                  Departamento
                </FormLabel>
                <FormControl>
                  <Select
                    defaultValue={field.value || ""}
                    onValueChange={(value) => {
                      setSelectedDepartment(value);
                      console.log(value);
                      form.setValue("province", "");
                      form.setValue("department", value);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu departamento" />
                    </SelectTrigger>
                    <SelectContent>
                      {departamentos?.map((location) => (
                        <SelectItem value={location.id.toString()}>
                          {location.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="province"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-sm" htmlFor="province">
                  Municipio
                </FormLabel>
                <FormControl>
                  <Select
                    defaultValue={field.value || ""}
                    onValueChange={(value) => {
                      const price = getPriceShipping(value);
                      setShipping(price);
                      form.setValue("province", value);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu ciudad" />
                    </SelectTrigger>
                    <SelectContent>
                      {departamentos
                        ?.find(
                          (location) =>
                            location.id.toString() === selectedDepartment
                        )
                        ?.municipios.map((ciudad) => (
                          <SelectItem value={ciudad.id.toString()}>
                            {ciudad.name}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-sm" htmlFor="address">
                  Dirección
                </FormLabel>
                <FormControl>
                  <Input placeholder="Ingresa tu dirección" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="instructions"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-sm" htmlFor="instructions">
                  Instrucciones
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Edificio,apto,casa,etc. (opcional)"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="neighborhood"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-sm" htmlFor="neighborhood">
                  Barrio
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ingresa tu barrio (opcional)"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  );
};
