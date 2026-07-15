import type { StoreData } from "@/lib/scraper/types";
import type { CategoryScore } from "@/types/score";

import { deduct } from "../deduct";

export function calculateAccessibility(
  store: StoreData
): CategoryScore {
  let score = 100;

  const reasons: string[] = [];

  if (!store.homepage.heroHeading) {
    score = deduct(
      score,
      15,
      reasons,
      "Missing primary heading."
    );
  }

  if (store.collections.length === 0) {
    score = deduct(
      score,
      10,
      reasons,
      "No collection navigation found."
    );
  }

  return {
    score,
    reasons,
  };
}