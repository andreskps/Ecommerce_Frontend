import { z } from "zod";

export const userSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6,{
        message: "La contraseña debe tener al menos 6 caracteres"
    }).max(100),
    confirmPassword: z.string().min(6,{
        message: "La contraseña debe tener al menos 6 caracteres"
    }).max(100),
}).refine(data => data.password === data.confirmPassword, {
    message: "Las contraseñas deben coincidir",
    path: ['confirmPassword'] // Campo que recibirá el mensaje de error
});