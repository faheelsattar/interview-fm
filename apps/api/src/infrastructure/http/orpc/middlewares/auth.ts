import { ORPCError } from "@orpc/server";
import { verifyAccessToken } from "../../../../auth/verify-access-token";
import { publicProcedure } from "../public-procedure";

export const authMiddleware = publicProcedure.middleware(async ({ context, next }) => {
    const authorization = context.headers.get("authorization");
    if (!authorization) {
        throw new ORPCError("UNAUTHORIZED");
    }

    const [scheme, accessToken] = authorization.split(" ");
    if (scheme !== "Bearer" || !accessToken) {
        throw new ORPCError("UNAUTHORIZED");
    }

    const user = await verifyAccessToken(accessToken);
    if (!user) {
        throw new ORPCError("UNAUTHORIZED");
    }

    return next({
        context: {
            user,
        },
    });
});
