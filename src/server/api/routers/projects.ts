import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { z } from "zod";

import { db } from "~/db/index";

import { mpPortfolio } from "src/db/schema";

export const projects = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.portfolio_Project.findMany();
  }),
  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      const { id } = input;
      const project = ctx.db.mpPortfolio
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
  getMultiple: publicProcedure
    .input(z.array(z.string()).optional())
    .query(({ ctx, input = [] }) => {
      const projectIds = input;
      if (projectIds.length === 0) {
        return [];
      }

      const projects = ctx.db.portfolio_Project.findMany({
        where: {
          id: {
            in: projectIds,
          },
        },
      });

      return projects;
    }),
});
