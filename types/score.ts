export interface CategoryScore {
  score: number;
  reasons: string[];
}

export interface ScoreBreakdown {
  overall: number;

  trust: CategoryScore;

  seo: CategoryScore;

  ux: CategoryScore;

  merchandising: CategoryScore;

  accessibility: CategoryScore;
}