import type { Product } from "@/types/product";
import type { CategoryScore } from "@/types/score";

import { RULES } from "../rules";
import { deduct } from "../deduct";

export function calculateTrust(
  product?: Product
): CategoryScore {
  if (!product) {
    return {
      score: 0,
      reasons: ["No product found."],
    };
  }

  let score = 100;
  const reasons: string[] = [];

  if (!product.hasReviews) {
    score = deduct(
      score,
      RULES.REVIEW_MISSING,
      reasons,
      "Customer reviews not detected."
    );
  }

  if (!product.hasShippingInfo) {
    score = deduct(
      score,
      RULES.SHIPPING_INFO_MISSING,
      reasons,
      "Shipping information missing."
    );
  }

  if (!product.hasTrustBadges) {
    score = deduct(
      score,
      RULES.TRUST_BADGES_MISSING,
      reasons,
      "Trust badges not detected."
    );
  }

  if (!product.inStock) {
    score = deduct(
      score,
      RULES.PRODUCT_OUT_OF_STOCK,
      reasons,
      "Product appears out of stock."
    );
  }

  return {
    score,
    reasons,
  };
}