import type { StoreData } from "@/lib/scraper/types";
import type { ScoreBreakdown } from "@/types/score";
import type { AuditResult, Opportunity } from "@/types/audit";

export async function generateAudit(
  store: StoreData,
  scores: ScoreBreakdown
): Promise<AuditResult> {

  const opportunities: Opportunity[] = [];

  const product = store.products[0];

  if (product) {

    if (!product.hasReviews) {
      opportunities.push({
        id: crypto.randomUUID(),
        area: "Trust",
        title: "Add Customer Reviews",
        description:
          "Displaying customer reviews increases trust and improves conversion rates.",

        evidence: [
          "No customer reviews detected on the product page.",
        ],

        impact: "High",

        confidence: 95,

        effort: "Low",

        priorityScore: 95,
      });
    }

    if (!product.hasTrustBadges) {
      opportunities.push({
        id: crypto.randomUUID(),
        area: "Trust",

        title: "Display Trust Badges",

        description:
          "Show secure checkout, payment, and guarantee badges near the Add to Cart button.",

        evidence: [
          "No trust badges detected.",
        ],

        impact: "High",

        confidence: 90,

        effort: "Low",

        priorityScore: 90,
      });
    }

    if (!product.hasShippingInfo) {
      opportunities.push({
        id: crypto.randomUUID(),

        area: "UX",

        title: "Show Shipping Information",

        description:
          "Customers should immediately understand delivery costs and shipping times.",

        evidence: [
          "Shipping information was not detected.",
        ],

        impact: "Medium",

        confidence: 85,

        effort: "Low",

        priorityScore: 82,
      });
    }

    if (product.imageCount < 4) {
      opportunities.push({
        id: crypto.randomUUID(),

        area: "Merchandising",

        title: "Add More Product Images",

        description:
          "Products with multiple high-quality images generally convert better.",

        evidence: [
          `${product.imageCount} product images found.`,
        ],

        impact: "Medium",

        confidence: 88,

        effort: "Medium",

        priorityScore: 80,
      });
    }

    if (!product.compareAtPrice) {
      opportunities.push({
        id: crypto.randomUUID(),

        area: "Merchandising",

        title: "Display Compare-at Pricing",

        description:
          "Showing original prices can improve perceived value and encourage purchases.",

        evidence: [
          "No compare-at price detected.",
        ],

        impact: "Medium",

        confidence: 80,

        effort: "Low",

        priorityScore: 75,
      });
    }

  }

  opportunities.sort(
    (a, b) => b.priorityScore - a.priorityScore
  );

  return {
    summary:
      opportunities.length > 0
        ? `Found ${opportunities.length} optimization opportunities that could improve conversion rate.`
        : "Excellent! No significant CRO issues were detected.",

    opportunities,

    metadata: {
      productCount: store.products.length,
      collectionCount: store.collections.length,
      overallScore: scores.overall,
    },
  };
}