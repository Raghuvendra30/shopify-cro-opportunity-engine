import { DashboardHeader } from "./DashboardHeader";
import { OverallScore } from "./OverallScore";
import { ScoreOverview } from "./ScoreOverview";
import { OpportunityPanel } from "./OpportunityPanel";
import { ExecutiveSummary } from "./ExecutiveSummary";
import { EvidencePanel } from "./EvidencePanel";
import { ProductTable } from "./ProductTable";

import type { StoreData } from "@/lib/scraper/types";
import type { ScoreBreakdown } from "@/types/score";
import { StoreInfo } from "./StoreInfo";
import { ChartsPanel } from "../charts/ChartPanel";

interface DashboardProps {
  storeUrl: string;
  store: StoreData;
  scores: ScoreBreakdown;
  audit: any;
}

export function Dashboard({
  storeUrl,
  store,
  scores,
  audit,
}: DashboardProps) {
  return (
    <div className="space-y-8">

      <DashboardHeader
        storeUrl={storeUrl}
      />

      <StoreInfo
        store={store}
      />

      <OverallScore
        score={scores.overall}
      />

      <ScoreOverview
        scores={scores}
      />

      <ChartsPanel
        scores={scores}
      />

      <OpportunityPanel
        opportunities={audit.opportunities}
      />

      <ExecutiveSummary
        summary={audit.summary}
      />

      <EvidencePanel
        store={store}
      />

      <ProductTable
        products={store.products}
      />
    </div>
  );
}