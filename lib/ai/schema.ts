// lib/ai/schema.ts

import { z } from "zod";

export const OpportunitySchema = z.object({
  area: z.string(),

  title: z.string(),

  description: z.string(),

  evidence: z.array(z.string()),

  impact: z.enum([
    "High",
    "Medium",
    "Low",
  ]),

  confidence: z.number().min(0).max(100),

  effort: z.enum([
    "High",
    "Medium",
    "Low",
  ]),
});

export const AuditSchema = z.object({

  summary: z.string(),

  opportunities: z.array(
    OpportunitySchema
  )

});

export type AuditResponse =
  z.infer<typeof AuditSchema>;