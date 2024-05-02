"use client";

import { Separator } from "@/components/ui/separator";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FormInfoContact } from "../checkout/FormContact";
import { infoContactSchema } from "@/validators/infoContactSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useShippingStore } from "@/store/shipping-store";
import { useCartStore } from "@/store/cart-store";
import { useEffect, useState } from "react";
import { currencyFormat } from "@/lib/currencyFormat";

export default function FormAddress() {

  const [isClient, setIsClient] = useState(false)
  const setShipping = useShippingStore((state) => state.setShipping);
  const shipping = useShippingStore((state) => state.shipping);

  const shippingPrice = useCartStore((state) => state.priceShipping);
  const getInformations = useCartStore((state) => state.getInformations);
  const cart = useCartStore((state) => state.cart);

  const form = useForm<z.infer<typeof infoContactSchema>>({
    resolver: zodResolver(infoContactSchema),
    defaultValues: { ...shipping },
  });

  useEffect(() => {
    form.reset({ ...shipping });

  }, [shipping,shippingPrice]);

  useEffect(() => {
    setIsClient(true)
  }, [])
  

  async function onSubmit(data: z.infer<typeof infoContactSchema>) {
    setShipping(data);
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
        {
          isClient ? (
          
            <Card>
            <CardContent className="space-y-4">
              {cart.map((item) => (
                <>
                  <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                    <img
                      alt="Producto"
                      className="rounded-md"
                      height={80}
                      src={item.image}
                      style={{
                        aspectRatio: "80/80",
                        objectFit: "cover",
                      }}
                      width={80}
                    />
                    <div className="space-y-1">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Talla: {item.variant.attribute}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{item.variant.unitPrice}</p>
                      <p className="text-gray-500 dark:text-gray-400">
                        x{item.quantity}
                      </p>
                    </div>
                  </div>
                </>
              ))}
  
              <Separator />
              <div className="grid grid-cols-4 items-center">
                  <div className="col-span-2 font-medium">Subtotal</div>
                  <div className="text-right" >
                    
                    {
                      currencyFormat(getInformations().subtotal)
                    }
                  </div>
                </div>
                <div className="grid grid-cols-4 items-center">
                  <div className="col-span-2 font-medium">Envío</div>
                  <div className="text-right" >
                    {
                      getInformations().shipping === 0 ? "Gratis" : currencyFormat(getInformations().shipping)
                    }
                  </div>
                </div>
                <div className="grid grid-cols-4 items-center">
                  <div className="col-span-2 font-medium">Total</div>
                  <div className="text-right font-bold" >
                    {
                      currencyFormat(getInformations().total)
                    }
                  </div>
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
          ) : (
            <div className="flex items-center justify-center h-96">
              <p className="text-2xl font-bold text-gray-500">
                Cargando...
              </p>
            </div>
          )
        }
     
      </div>
    </div>
  );
}
