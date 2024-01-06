import * as z from "zod";

export const createProject = z.object({
  title: z.string(),
  description: z.string(),
  img: z.string(),
});
