import type { StoreData } from "@/lib/scraper/types";
import type { CategoryScore } from "@/types/score";

import { RULES } from "../rules";
import { deduct } from "../deduct";

export function calculateSEO(
  store: StoreData
): CategoryScore {
  let score = 100;

  const reasons: string[] = [];

  if (!store.homepage.heroHeading) {
    score = deduct(
      score,
      RULES.HERO_HEADING_MISSING,
      reasons,
      "Hero heading missing."
    );
  }

  if (!store.homepage.description) {
    score = deduct(
      score,
      RULES.META_DESCRIPTION_MISSING,
      reasons,
      "Meta description missing."
    );
  }

  return {
    score,
    reasons,
  };
}