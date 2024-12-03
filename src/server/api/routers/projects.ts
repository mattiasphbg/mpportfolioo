import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { eq } from "drizzle-orm";
import { z } from "zod";

import { mpPortfolio } from "src/db/schema";

export const projects = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.select().from(mpPortfolio);
  }),
  getById: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.db.query.mpPortfolio.findFirst({
      where: eq(mpPortfolio.id, Number(input)),
    });
  }),
});
