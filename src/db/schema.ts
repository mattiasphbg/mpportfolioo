import { pgTable, text, jsonb } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const mpPortfolio = pgTable("mp_Portfolio", {
  title: text(),
  description: text(),
  img: text(),
  team: jsonb("Team"),
  start: text(),
  end: text(),
  category: text(),
  screenshotOne: text(),
  screenshotTwo: text(),
  techUsed: jsonb(),
  related: jsonb(),
});
