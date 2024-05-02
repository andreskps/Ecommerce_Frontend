"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  FormControl,
  FormDescription,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { infoContactSchema } from "@/validators/infoContactSchema";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface Props {
  form: UseFormReturn<z.infer<typeof infoContactSchema>>;
}

export const FormInfoContact = ({ form }: Props) => {
  return (
    <>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Información de contacto</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Ingresa tus datos de contacto para completar tu pedido.
        </p>
      </div>
      <Form {...form}>
        <form className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-sm" htmlFor="name">
                  Email
                </FormLabel>
                <FormControl>
                  <Input placeholder="Ingresa tu email" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel className="text-sm" htmlFor="name">
                    Nombre
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Ingresa tu nombre" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel className="text-sm" htmlFor="lastName">
                    Apellido
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Ingresa tu apellido" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-sm" htmlFor="phone">
                  Teléfono
                </FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Ingresa tu teléfono"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="namePet"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-sm" htmlFor="namePet">
                  Nombre de tu mascota
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ingresa el nombre de tu mascota"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>

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
                    defaultValue="US"
                    onValueChange={(value) => {
                      form.setValue("department", value);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu país" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="US">Estados Unidos</SelectItem>
                      <SelectItem value="MX">México</SelectItem>
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
                    defaultValue="US"
                    onValueChange={(value) => {
                      form.setValue("province", value);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu país" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="US">Bello</SelectItem>
                      <SelectItem value="MX">México</SelectItem>
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
        </form>
      </Form>
    </>
  );
};
