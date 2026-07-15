import type { StoreData } from "@/lib/scraper/types";
import type { ScoreBreakdown } from "./score";
import type { AuditResult } from "./audit";

export interface AnalysisResult {
  store: StoreData;
  scores: ScoreBreakdown;
  audit: AuditResult;
}