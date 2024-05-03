import { z } from "zod";

export const ShippingInfo = z.object({
    email: z.string().email(),
    name: z.string().min(1),
    lastName: z.string().min(1),
    phone: z.string().min(1),
    namePet: z.string().min(1),
    department: z.string().min(1),
    province: z.string().min(1),
    address: z.string().min(1),
    instructions: z.string().optional(),
    neighborhood: z.string().optional(),
});