import { FormRegister } from "@/components/auth/formRegister";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RegisterPage() {
  return (
    <Card className="mx-auto mt-10 max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Inicio de sesión</CardTitle>
        <CardDescription>
          Ingresa tu correo electrónico para iniciar sesión en tu cuenta
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormRegister />
      </CardContent>
    </Card>
  );
}
