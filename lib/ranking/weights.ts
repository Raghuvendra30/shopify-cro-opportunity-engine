// lib/ranking/weights.ts

export const IMPACT_WEIGHT = {
  High: 5,
  Medium: 3,
  Low: 1,
} as const;

export const EFFORT_WEIGHT = {
  Low: 1,
  Medium: 2,
  High: 3,
} as const;

export const CONFIDENCE = {
  VERY_HIGH: 95,
  HIGH: 85,
  MEDIUM: 70,
  LOW: 50,
} as const;