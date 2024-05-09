"use client";

import { Separator } from "@/components/ui/separator";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FormShippingLocation } from "../checkout/FormShippingLocation";
import { ShippingInfo } from "@/validators/shippingInfoSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useShippingStore } from "@/store/shipping-store";
import { useCartStore } from "@/store/cart-store";
import { useEffect, useState } from "react";
import { currencyFormat } from "@/lib/currencyFormat";
import { FormShippingContact } from "../checkout/FormShippingContact";
import { useRouter } from "next/navigation";
import { CreateOrder } from "@/app/interface/order/order.interface";
import { createOrder } from "@/lib/api/orderApi";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "../ui/input";
import { applyCodeDiscount } from "@/lib/api/codeDiscountApi";

export default function SectionShipping() {
  const [isClient, setIsClient] = useState(false);
  const [codeDiscount, setCodeDiscount] = useState("");
  const [percentageDiscount, setPercentageDiscount] = useState(0);

  const setShipping = useShippingStore((state) => state.setShipping);
  const shipping = useShippingStore((state) => state.shipping);

  const { toast } = useToast();
  const shippingPrice = useCartStore((state) => state.priceShipping);
  const getInformations = useCartStore((state) => state.getInformations);
  const cart = useCartStore((state) => state.cart);

  const router = useRouter();

  const form = useForm<z.infer<typeof ShippingInfo>>({
    resolver: zodResolver(ShippingInfo),
    defaultValues: { ...shipping },
  });

  const handleCodeDiscount = async () => {
    const discount = await applyCodeDiscount(codeDiscount);
    const totalProducts = getInformations().subtotal;

    if (!discount) {
      setPercentageDiscount(0);
      toast({
        title: "Error",
        description: "Código de descuento inválido",
        className: "bg-red-500 text-white",
      });
      return;
    }

    if (totalProducts < discount.minimumAmount) {
      setPercentageDiscount(0);
      toast({
        title: "Error",
        description: `El monto mínimo para aplicar el descuento es de ${discount.minimumAmount}`,
        className: "bg-red-500 text-white",
      });
      return;
    }

    setPercentageDiscount(discount.percentage);

    toast({
      title: "Descuento aplicado",
      description: `Se ha aplicado un descuento de ${discount.percentage}%`,
      className: "bg-green-500 text-white",
    });
  };

  useEffect(() => {
    form.reset({ ...shipping });
  }, [shipping]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  async function onSubmit(data: z.infer<typeof ShippingInfo>) {
    setShipping({
      address: data.address,
      department: data.department,
      email: data.email,
      instructions: data.instructions,
      lastName: data.lastName,
      name: data.name,
      neighborhood: data.neighborhood,
      phone: data.phone,
      province: data.province,
      namePet: data.namePet,
    });

    const newOrder: CreateOrder = {
      name: data.name,
      email: data.email,
      lastName: data.lastName,
      phone: data.phone,
      namePet: data.namePet,
      coupon: codeDiscount,
      variants: cart.map((item) => ({
        id: item.variant.id,
        quantity: item.quantity,
      })),
      address: {
        address: data.address,
        neighborhood: data.neighborhood,
        addressDetail: data.instructions,
        municipioId: parseInt(data.province),
      },
    };

    const response = await createOrder(newOrder);

    if (!response.ok) {
      toast({
        title: "Error",
        description: "Ha ocurrido un error al crear la orden",
        className: "bg-red-500 text-white",
      });
      return;
    }

    toast({
      title: "Orden creada",
      description: "Tu orden ha sido creada exitosamente",
      className: "bg-green-500 text-white",
    });
  }

  const handlePayMercadoPago = async () => {
    const newOrder: CreateOrder = {
      name: form.getValues("name"),
      email: form.getValues("email"),
      lastName: form.getValues("lastName"),
      phone: form.getValues("phone"),
      namePet: form.getValues("namePet"),
      coupon: codeDiscount,
      variants: cart.map((item) => ({
        id: item.variant.id,
        quantity: item.quantity,
      })),
      address: {
        address: form.getValues("address"),
        neighborhood: form.getValues("neighborhood"),
        addressDetail: form.getValues("instructions"),
        municipioId: parseInt(form.getValues("province")),
      },
    };

    const response = await createOrder(newOrder);

    if (!response.ok) {
      toast({
        title: "Error",
        description: "Ha ocurrido un error al crear la orden",
        className: "bg-red-500 text-white",
      });
      return;
    }

    const order = await response.json();

    console.log(order)
    try {
      const responseMercadoPago = await fetch(`
      ${process.env.NEXT_PUBLIC_API_URL}/api/payments`
      , {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idOrder: order.id,
        }),
      });

      const data = await responseMercadoPago.json();

      router.push(data.url)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4">
      <div className="space-y-6">
        <FormShippingContact form={form} />
        <FormShippingLocation form={form} />
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Resumen del pedido</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Revisa los productos que has seleccionado.
          </p>
        </div>
        {isClient ? (
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
                <div
                  className="text-right"
                  style={{
                    textDecoration:
                      percentageDiscount > 0 ? "line-through" : "none",
                  }}
                >
                  {currencyFormat(getInformations().subtotal)}
                </div>
                {percentageDiscount > 0 && (
                  <>
                    <div className="text-right text-red-500">
                      -{percentageDiscount}%
                    </div>
                    <div className="col-span-2 font-medium mt-2">
                      Precio con descuento
                    </div>
                    <div className="text-right">
                      {currencyFormat(
                        getInformations().subtotal *
                          (1 - percentageDiscount / 100)
                      )}
                    </div>
                  </>
                )}
              </div>
              <div className="grid grid-cols-4 items-center">
                <div className="col-span-2 font-medium">Envío</div>
                <div className="text-right">
                  {getInformations().shipping === 0
                    ? "Gratis"
                    : currencyFormat(getInformations().shipping)}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center">
                <div className="col-span-2 font-medium">Total</div>
                <div className="text-right font-bold">
                  {currencyFormat(
                    getInformations().subtotal -
                      getInformations().subtotal * (percentageDiscount / 100) +
                      getInformations().shipping
                  )}
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
              <Button
                onClick={handlePayMercadoPago}
                className="w-full bg-primario"
                size="lg"
              >
                Pagar con MercadoPago
              </Button>
              <Input
                type="text"
                value={codeDiscount}
                onChange={(e) => setCodeDiscount(e.target.value)}
                placeholder="Código de descuento"
                className="mt-6 w-full"
              />
              <button
                onClick={handleCodeDiscount}
                className="mt-2 w-full rounded-md bg-primario py-1.5 font-medium text-blue-50 "
              >
                Aplicar
              </button>
            </CardFooter>
          </Card>
        ) : (
          <div className="flex items-center justify-center h-96">
            <p className="text-2xl font-bold text-gray-500">Cargando...</p>
          </div>
        )}
      </div>
    </div>
  );
}
