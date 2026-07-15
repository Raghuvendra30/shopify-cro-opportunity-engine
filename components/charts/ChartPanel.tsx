import { CROChart } from "./RadarChart";

import type { ScoreBreakdown } from "@/types/score";

interface Props {
  scores: ScoreBreakdown;
}

export function ChartsPanel({
  scores,
}: Props) {
  return (
    <section className="rounded-2xl border bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold">
        CRO Score Radar
      </h2>

      <p className="mt-2 text-slate-500">
        Visual comparison of every scoring category.
      </p>

      <div className="mt-8">

        <CROChart
          scores={scores}
        />

      </div>

    </section>
  );
}