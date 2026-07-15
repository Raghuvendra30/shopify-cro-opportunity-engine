import { OpportunityList } from "./OpportunityList";

import type { Opportunity } from "@/types/audit";

interface Props {
  opportunities: Opportunity[];
}

export function OpportunityPanel({
  opportunities,
}: Props) {

  return (
    <section className="space-y-5">

      <div>

        <h2 className="text-2xl font-bold">
          CRO Opportunities
        </h2>

        <p className="mt-1 text-slate-500">
          Highest priority improvements.
        </p>

      </div>

      <OpportunityList
        opportunities={opportunities}
      />

    </section>
  );
}