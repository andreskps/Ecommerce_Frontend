"use client";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function FormLogin() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const hadleSubmit = async () => {
    setLoading(true);
    const response = await signIn("credentials", {
      redirect: false,
      email: credentials.email,
      password: credentials.password,
    });

    if (response?.error) {
       setErrors([response.error]);
        setLoading(false);
      return;
    }

    setLoading(false);
    router.push("/");

  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Inicio de sesión</CardTitle>
        <CardDescription>
          Ingresa tu correo electrónico para iniciar sesión en tu cuenta
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              placeholder="m@example.com"
              required
              type="email"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="password">Contraseña</Label>
              <Link className="ml-auto inline-block text-sm underline" href="#">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <Input
              id="password"
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              placeholder="********"
              required
              type="password"
            />
          </div>
          {errors.length > 0 && (
            <div className="text-red-500 text-sm">
              {errors.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}
          <Button className="w-full" disabled={loading}
            onClick={hadleSubmit}
          type="button">
            Iniciar sesión
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          ¿No tienes una cuenta?
          <Link className="underline" href="#">
            Regístrate
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
