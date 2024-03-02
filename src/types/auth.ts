import { z } from "zod";

export const loginSchema = z
    .object({
        username: z.string().email(),
        password: z.string().min(4, "Password must be at least 4 characters"),
    })
export type TLoginSchema = z.infer<typeof loginSchema>;



export const registerSchema = z
    .object({
        name: z.string().min(10, "Name must be at least 10 character"),
        email: z.string().email(),
        password: z.string().min(4, "Password must be at least 4 characters"),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });
export type TRegisterSchema = z.infer<typeof registerSchema>;


type TLoginGrantType = {
    grant_type: string,
    client_id: string,
    client_secret: string
    scope: string,
}

export { type TLoginGrantType }