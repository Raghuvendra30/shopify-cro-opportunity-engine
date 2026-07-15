export interface Experiment {
  title: string;

  hypothesis: string;

  implementation: string[];

  primaryMetric: string;

  secondaryMetric: string;

  expectedImpact: string;

  risks: string[];
}