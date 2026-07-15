interface OverallScoreProps {
  score: number;
}

export function OverallScore({
  score,
}: OverallScoreProps) {
  const status =
    score >= 90
      ? "Excellent"
      : score >= 75
      ? "Good"
      : score >= 60
      ? "Average"
      : "Needs Improvement";

  return (
    <div className="rounded-2xl border bg-white p-10 shadow-sm">
      <p className="text-sm uppercase tracking-wide text-slate-500">
        Overall Score
      </p>

      <h1 className="mt-4 text-6xl font-bold text-slate-900">
        {score}
      </h1>

      <p className="mt-3 text-lg text-slate-600">
        {status}
      </p>
    </div>
  );
}