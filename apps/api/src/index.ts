import { env } from "@/infrastructure/config/env";
import { app } from "@/infrastructure/http/app";

export default {
  port: env.PORT,
  fetch: app.fetch,
};
