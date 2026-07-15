// lib/ranking/calculator.ts

import {
  IMPACT_WEIGHT,
  EFFORT_WEIGHT,
} from "./weights";

export type Impact = "High" | "Medium" | "Low";
export type Effort = "High" | "Medium" | "Low";

export function calculatePriorityScore(
  impact: Impact,
  confidence: number,
  effort: Effort
): number {
  const impactScore = IMPACT_WEIGHT[impact];
  const effortScore = EFFORT_WEIGHT[effort];

  return Number(
    ((impactScore * confidence) / effortScore).toFixed(2)
  );
}