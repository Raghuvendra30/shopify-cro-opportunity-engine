import { ScoreGrid } from "./ScoreGrid";

import type { ScoreBreakdown } from "@/types/score";

interface Props {
  scores: ScoreBreakdown;
}

export function ScoreOverview({
  scores,
}: Props) {
  return (
    <section className="space-y-5">

      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Category Scores
        </h2>

        <p className="mt-1 text-slate-500">
          Breakdown of your CRO performance.
        </p>
      </div>

      <ScoreGrid scores={scores} />

    </section>
  );
}