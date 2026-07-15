import { OpportunityCard } from "./OpportunityCard";

import type { Opportunity } from "@/types/audit";

interface Props {
  opportunities: Opportunity[];
}

export function OpportunityList({
  opportunities,
}: Props) {

  if (opportunities.length === 0) {
    return (
      <p className="text-slate-500">
        No opportunities found.
      </p>
    );
  }

  return (
    <div className="space-y-5">

      {opportunities
        .sort(
          (a, b) =>
            b.priorityScore -
            a.priorityScore
        )
        .map((opportunity) => (
          <OpportunityCard
            key={opportunity.id}
            opportunity={opportunity}
          />
        ))}

    </div>
  );
}