// lib/ranking/priority.ts

import { Opportunity } from "@/types/audit";

export function rankOpportunities(
  opportunities: Opportunity[]
): Opportunity[] {
  return [...opportunities].sort(
    (a, b) => b.priorityScore - a.priorityScore
  );
}

export function getHighPriority(
  opportunities: Opportunity[]
): Opportunity[] {
  return opportunities.filter(
    (item) => item.priorityScore >= 300
  );
}

export function getMediumPriority(
  opportunities: Opportunity[]
): Opportunity[] {
  return opportunities.filter(
    (item) =>
      item.priorityScore >= 150 &&
      item.priorityScore < 300
  );
}

export function getLowPriority(
  opportunities: Opportunity[]
): Opportunity[] {
  return opportunities.filter(
    (item) => item.priorityScore < 150
  );
}