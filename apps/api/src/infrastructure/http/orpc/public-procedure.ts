import { os } from "@orpc/server";

interface ApiContext {
    headers: Headers;
}
// shared builder ensures every procedure starts with the same request context
export const publicProcedure = os.$context<ApiContext>();