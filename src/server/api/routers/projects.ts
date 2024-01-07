import { Input } from "src/components/ui/input";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { string, z } from "zod";

export const projects = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.portfolio_Project.findMany();
  }),
  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      const { id } = input;
      const project = ctx.db.portfolio_Project
        .findUnique({
          where: { id },
        })
        .catch((err) => console.error(err));

      return project;
    }),
  add: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
        description: z.string().optional().default(""),
        img: z.string().optional().default(""),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const add = await ctx.db.portfolio_Project.create({
        data: {
          title: input.title,
          description: input.description || "",
          img: input.img || "",
        },
      });
      return add;
    }),
});
