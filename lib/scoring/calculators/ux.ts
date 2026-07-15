import type { StoreData } from "@/lib/scraper/types";
import type { CategoryScore } from "@/types/score";

import { RULES } from "../rules";
import { deduct } from "../deduct";

export function calculateUX(
  store: StoreData
): CategoryScore {
  let score = 100;

  const reasons: string[] = [];

  if (store.collections.length === 0) {
    score = deduct(
      score,
      RULES.NO_COLLECTIONS,
      reasons,
      "No collections detected."
    );
  }

  if (store.products.length === 0) {
    score = deduct(
      score,
      20,
      reasons,
      "No products detected."
    );
  }

  return {
    score,
    reasons,
  };
}