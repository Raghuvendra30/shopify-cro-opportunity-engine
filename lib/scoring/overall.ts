import type { ScoreBreakdown } from "@/types/score";
import { WEIGHTS } from "./weights";

export function calculateOverall(
  scores: Omit<ScoreBreakdown, "overall">
): number {
  const weighted =
    scores.trust.score * WEIGHTS.trust +
    scores.seo.score * WEIGHTS.seo +
    scores.ux.score * WEIGHTS.ux +
    scores.merchandising.score *
      WEIGHTS.merchandising +
    scores.accessibility.score *
      WEIGHTS.accessibility;

  return Math.round(weighted);
}