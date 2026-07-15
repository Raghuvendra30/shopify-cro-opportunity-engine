export type Impact = "High" | "Medium" | "Low";
export type Effort = "High" | "Medium" | "Low";

export interface Opportunity {
  id: string;

  area: string;

  title: string;

  description: string;

  evidence: string[];

  impact: Impact;

  confidence: number;

  effort: Effort;

  priorityScore: number;
}

export interface AuditResult {
  summary: string;

  opportunities: Opportunity[];

  metadata: {
    productCount: number;
    collectionCount?: number;
    overallScore: number;
  };
}