import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "src/db/schema";

// Use DATABASE_URL for server-side database connections
const client = postgres(process.env.DATABASE_URL!);
export const db = drizzle(client, { schema });
