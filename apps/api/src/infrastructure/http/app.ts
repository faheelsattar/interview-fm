import { RPCHandler } from "@orpc/server/fetch";
import { Hono } from "hono";
import { appRouter } from "./orpc/routers/_app";
import { cors } from "hono/cors";
import { env } from "../config/env";

const handler = new RPCHandler(appRouter);

const app = new Hono();

app.use(
  "/rpc/*",
  cors({
    origin: env.WEB_URL,
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
  }),
);

app.use("/rpc/*", async (c) => {
  const { matched, response } = await handler.handle(c.req.raw, {
    prefix: "/rpc",
    context: {
      headers: c.req.raw.headers,
    },
  });

  if (matched) {
    return c.newResponse(response.body, response);
  }

  return c.notFound();
});

export { app };
