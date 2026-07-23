import { z } from "zod";

const envSchema = z.object({
    PORT: z.coerce.number().int().positive().default(3001),
    DATABASE_URL: z.string().min(1),
    NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY: z.string().min(1),
    WEB_URL: z.string().url().default("http://localhost:3000"),
});

export const env = envSchema.parse(process.env);
