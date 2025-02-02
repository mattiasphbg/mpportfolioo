import { pgTable, text, jsonb, serial } from "drizzle-orm/pg-core";

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
  id: serial().primaryKey().notNull(),
});
