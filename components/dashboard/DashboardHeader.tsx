import { ExportButton } from "./ExportButton";
interface DashboardHeaderProps {
  storeUrl: string;
}

export function DashboardHeader({
  storeUrl,
}: DashboardHeaderProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border bg-white p-8 shadow-sm md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm text-slate-500">
          Shopify Store
        </p>

        <h2 className="mt-1 text-2xl font-bold text-slate-900">
          {storeUrl}
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
          Analysis Complete
        </span>
        <ExportButton />
      </div>
    </div>
  );
}