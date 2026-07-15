import { ScoreCard } from "./ScoreCard";

import type { ScoreBreakdown } from "@/types/score";

interface ScoreGridProps {
  scores: ScoreBreakdown;
}

export function ScoreGrid({
  scores,
}: ScoreGridProps) {
    const categories = [
        ["UX", scores.ux],
        ["SEO", scores.seo],
        ["Accessibility", scores.accessibility],
        ["Trust", scores.trust],
        ["Merchandising", scores.merchandising],
    ] as const;
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
        {categories.map(([title, category]) => (
            <ScoreCard
                key={title}
                title={title}
                score={category.score}
                reasons={category.reasons}
            />
        ))}
    </div>
  );
}