import { z } from "zod";

export const infoContactSchema = z.object({
    email: z.string().email(),
    name: z.string(),
    lastName: z.string(),
    phone: z.string(),
    namePet: z.string(),
    department: z.string(),
    province: z.string(),
    address: z.string(),
});