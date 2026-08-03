type D1Database = import("drizzle-orm/d1").AnyD1Database;

declare module "cloudflare:workers" {
  export const env: { DB?: AnyD1Database };
}
