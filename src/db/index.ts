import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "src/db/schema";

const client = postgres(process.env.NEXT_PUBLIC_SUPABASE_URL!);
export const db = drizzle(client, { schema });
