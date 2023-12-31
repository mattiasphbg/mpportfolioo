"use client";

import * as z from "zod";

export const HireMeSchema = z.object({
  name: z.string(),
  companyName: z.string(),
  phoneNumber: z.string().refine((val) => val.length === 10, {
    message: "Phone number must be 10 digits long",
  }),
  email: z.string().email(),
  areaOfInterest: z.string().optional(),
  message: z.string(),
});
