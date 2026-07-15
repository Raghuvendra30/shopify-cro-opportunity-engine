import { ProgressBar } from "./ProgressBar";

interface ScoreCardProps {
  title: string;
  score: number;
  reasons?: string[];
}

export function ScoreCard({
  title,
  score,
  reasons = [],
}: ScoreCardProps) {
  const color =
    score >= 85
      ? "text-emerald-600"
      : score >= 70
      ? "text-indigo-600"
      : score >= 50
      ? "text-yellow-600"
      : "text-red-600";

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">

      <div className="flex items-center justify-between">

        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          {title}
        </h3>

        <span className={`text-3xl font-bold ${color}`}>
          {score}
        </span>

      </div>

      <ProgressBar value={score} />

      {reasons.length > 0 && (
        <ul className="mt-4 space-y-1 text-sm text-slate-500">

          {reasons.slice(0, 3).map((reason) => (
            <li key={reason}>
              • {reason}
            </li>
          ))}

        </ul>
      )}

    </div>
  );
}