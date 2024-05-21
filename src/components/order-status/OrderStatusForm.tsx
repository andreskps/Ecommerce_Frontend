"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";

export const OrderStatusForm = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOrderStatus = async () => {
    setLoading(true);
    try {
      // Call an API to get order status
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/orders/status/${orderNumber}`,
        {
          method: "GET",
          cache: "no-cache",
        }
      );

      if (!response.ok) {
        setOrderStatus("no_encontrada");
        setLoading(false);
        return;
      }

      const data = await response.json();

      setOrderStatus(data.orderStatus);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const orderMessage: { [key: string]: string } = {
    procesando:
      "Procesando: Tu orden ha sido recibida y está siendo procesada.",
    confirmado:
      "Confirmada: Tu orden ha sido confirmada y está lista para ser enviada.",
    enviado: "Enviada: Tu orden ha sido enviada y está en camino.",
    entregado:
      "Entregada: Tu orden ha sido entregada en la dirección especificada.",
    cancelado: "Cancelada: Tu orden ha sido cancelada.",
    no_encontrada: "Orden no encontrada",
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">
          Consulta el estado de tu orden
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Label htmlFor="order-number">Ingresa el número de orden</Label>
        <Input
          id="order-number"
          onChange={(e) => setOrderNumber(e.target.value)}
          placeholder="Ej. 123456"
          required
          type="text"
          className="w-full focus:outline-none focus:ring-0"
        />

        <Button
          className="w-full mt-2 bg-primario hover:bg-primario"
          disabled={loading}
          onClick={handleOrderStatus}
          type="button"
        >
          Consultar
        </Button>

        {orderStatus && (
          <div className="mt-4">
            <p className="text-lg font-bold">Estado de la orden:</p>
            <p>{orderMessage[orderStatus]}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
