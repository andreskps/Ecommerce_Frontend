"use client";

import {
    Form,
    FormField,
    FormItem,
    FormMessage,
    FormLabel,
    FormControl,
    FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/validators/userSchema";
import { signIn } from "next-auth/react";
import { z } from "zod";
import { useState } from "react";
import { createUser } from "@/lib/api/userApi";

export const FormRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
  });

  async function onSubmit(data: z.infer<typeof userSchema>) {
    setLoading(true);
    setError(null);
    try {
      // Enviar datos al servidor
      const response = await createUser({
        name: data.name,
        email: data.email,
        password: data.password,
      });
      if (!response.ok) {
        const error = await response.json();

        setError(error.message);

        return;
      }

      // Iniciar sesión
      const signInResponse = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (signInResponse?.error) {
        setError(signInResponse.error);
        return;
      }

      // Redirigir al usuario
    //   router.back();
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      {error && <FormMessage className="text-red-500">{error}</FormMessage>}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <FormLabel className="text-sm" htmlFor="name">
                Nombre
              </FormLabel>
              <FormControl>
                <Input placeholder="Ingresa tu nombre" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <FormLabel className="text-sm" htmlFor="email">
                Correo
              </FormLabel>
              <FormControl>
                <Input placeholder="Ingresa tu correo" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <FormLabel className="text-sm" htmlFor="password">
                Contraseña
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <FormLabel className="text-sm" htmlFor="confirmPassword">
                Confirmar contraseña
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Confirma tu contraseña"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <Button
        className="w-full bg-primario text-white"
         disabled={loading} type="submit">
          Registrarse
        </Button>
      </form>
    </Form>
  );
};
