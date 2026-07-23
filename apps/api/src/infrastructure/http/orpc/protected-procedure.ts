import { publicProcedure } from "./public-procedure";
import { authMiddleware } from "./middlewares/auth";

export { publicProcedure };

// custom orpc procedure for authenticated requests
export const protectedProcedure = publicProcedure.use(authMiddleware);