"use client";

import * as z from "zod";

export const HireMeSchema = z.object({
  name: z.string().optional(),
  companyName: z.string().optional(),
  phoneNumber: z
    .string()
    .refine((val) => val.length === 10, {
      message: "Phone number must be 10 digits long",
    })
    .optional(),
  email: z.string().email().optional(),
  areaOfInterest: z.string().optional(),
  message: z.string().optional(),
});
