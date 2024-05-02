"use client";

import { Separator } from "@/components/ui/separator";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FormInfoContact } from "../checkout/FormContact";
import { FormShipping } from "../checkout/FormShipping";
import { infoContactSchema } from "@/validators/infoContactSchema";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export default function FormAddress() {
  const form = useForm<z.infer<typeof infoContactSchema>>({
    resolver: zodResolver(infoContactSchema),
  });

  async function onSubmit(data: z.infer<typeof infoContactSchema>) {
    console.log(data);
  }

  return (
    <div
      key="1"
      className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4"
    >
      <div className="space-y-6">
        <FormInfoContact form={form} />
        {/* <FormShipping /> */}
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Resumen del pedido</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Revisa los productos que has seleccionado.
          </p>
        </div>
        <Card>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
              <img
                alt="Producto"
                className="rounded-md"
                height={80}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width={80}
              />
              <div className="space-y-1">
                <h3 className="font-semibold">Camiseta de algodón</h3>
                <p className="text-gray-500 dark:text-gray-400">Talla: M</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">$29.99</p>
                <p className="text-gray-500 dark:text-gray-400">x1</p>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
              <img
                alt="Producto"
                className="rounded-md"
                height={80}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width={80}
              />
              <div className="space-y-1">
                <h3 className="font-semibold">Pantalones de mezclilla</h3>
                <p className="text-gray-500 dark:text-gray-400">Talla: 32</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">$49.99</p>
                <p className="text-gray-500 dark:text-gray-400">x1</p>
              </div>
            </div>
            <Separator />
            <div className="grid grid-cols-[auto_1fr] items-center gap-4">
              <p className="font-semibold">Total</p>
              <p className="font-semibold text-right">$79.98</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={form.handleSubmit(onSubmit)}
              className="w-full bg-primario"
              size="lg"
            >
              Confirmar pedido
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
