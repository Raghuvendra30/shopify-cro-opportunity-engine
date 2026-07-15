// lib/validation/url.ts

import { z } from "zod";

export const urlSchema = z.object({
  url: z
    .string()
    .trim()
    .min(1, "Store URL is required.")
    .url("Enter a valid URL.")
    .refine(
      (value) => {
        try {
          const parsed = new URL(value);

          return ["http:", "https:"].includes(parsed.protocol);
        } catch {
          return false;
        }
      },
      {
        message: "Only HTTP and HTTPS URLs are supported.",
      }
    ),
});

export type UrlFormData = z.infer<typeof urlSchema>;