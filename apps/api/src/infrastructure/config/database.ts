import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";
import type { Database } from "./database-types";
import { env } from "./env";

const postgresDialect = new PostgresDialect({
  pool: new Pool({
    connectionString: env.DATABASE_URL,
  }),
});

export const kyselyInstance = new Kysely<Database>({
  dialect: postgresDialect,
});

export type KyselyInstance = typeof kyselyInstance;

export type * from "./database-types";
