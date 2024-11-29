import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { z } from "zod";

import { db } from "~/db/index";

import { mpPortfolio } from "src/db/schema";

export const projects = createTRPCRouter({
  getAll: publicProcedure.query(({}) => {
    return db.select().from(mpPortfolio);
  }),
});
