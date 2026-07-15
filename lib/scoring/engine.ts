import type { StoreData } from "@/lib/scraper/types";
import type { ScoreBreakdown } from "@/types/score";

import { calculateTrust } from "./calculators/trust";
import { calculateSEO } from "./calculators/seo";
import { calculateUX } from "./calculators/ux";
import { calculateMerchandising } from "./calculators/merchandising";
import { calculateAccessibility } from "./calculators/accessibility";

import { calculateOverall } from "./overall";

export function calculateStoreScore(
  store: StoreData
): ScoreBreakdown {
  const trust =
    calculateTrust(store.products[0]);

  const seo =
    calculateSEO(store);

  const ux =
    calculateUX(store);

  const merchandising =
    calculateMerchandising(store);

  const accessibility =
    calculateAccessibility(store);

  const overall =
    calculateOverall({
      trust,
      seo,
      ux,
      merchandising,
      accessibility,
    });

  return {
    overall,
    trust,
    seo,
    ux,
    merchandising,
    accessibility,
  };
}