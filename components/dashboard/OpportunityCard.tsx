import type { Opportunity } from "@/types/audit";

interface OpportunityCardProps {
  opportunity: Opportunity;
}

export function OpportunityCard({
  opportunity,
}: OpportunityCardProps) {

  const impactColor = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-emerald-100 text-emerald-700",
  };

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <h3 className="text-lg font-bold">
          {opportunity.title}
        </h3>

        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${impactColor[opportunity.impact]}`}
        >
          {opportunity.impact}
        </span>

      </div>

      <p className="mt-4 text-slate-600">
        {opportunity.description}
      </p>

      <div className="mt-6 grid grid-cols-3 gap-4">

        <Metric
          label="Confidence"
          value={`${opportunity.confidence}%`}
        />

        <Metric
          label="Effort"
          value={opportunity.effort}
        />

        <Metric
          label="Priority"
          value={String(opportunity.priorityScore)}
        />

      </div>

    </div>
  );
}

interface MetricProps {
  label: string;
  value: string;
}

function Metric({
  label,
  value,
}: MetricProps) {
  return (
    <div>

      <p className="text-xs uppercase text-slate-500">
        {label}
      </p>

      <p className="mt-1 font-semibold">
        {value}
      </p>

    </div>
  );
}