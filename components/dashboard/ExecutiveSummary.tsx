interface ExecutiveSummaryProps {
  summary: string;
}

export function ExecutiveSummary({
  summary,
}: ExecutiveSummaryProps) {
  return (
    <section className="rounded-2xl border bg-white p-8 shadow-sm">

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Executive Summary
        </h2>

        <p className="mt-1 text-slate-500">
          AI-powered CRO overview
        </p>
      </div>

      <div className="rounded-xl bg-slate-50 p-6">

        <p className="leading-8 text-slate-700">
          {summary}
        </p>

      </div>

    </section>
  );
}