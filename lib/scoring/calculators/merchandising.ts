import type { StoreData } from "@/lib/scraper/types";
import type { CategoryScore } from "@/types/score";

import { RULES } from "../rules";
import { deduct } from "../deduct";

export function calculateMerchandising(
  store: StoreData
): CategoryScore {
  let score = 100;

  const reasons: string[] = [];

  const product = store.products[0];

  if (!product) {
    return {
      score: 0,
      reasons: ["No product found."],
    };
  }

  if (product.imageCount < 4) {
    score = deduct(
      score,
      RULES.FEW_PRODUCT_IMAGES,
      reasons,
      "Few product images detected."
    );
  }

  if (!product.hasVariants) {
    score = deduct(
      score,
      RULES.NO_PRODUCT_VARIANTS,
      reasons,
      "No product variants detected."
    );
  }

  return {
    score,
    reasons,
  };
}