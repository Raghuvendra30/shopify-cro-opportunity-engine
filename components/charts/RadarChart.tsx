"use client";

import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

import type { ScoreBreakdown } from "@/types/score";

interface Props {
  scores: ScoreBreakdown;
}

export function CROChart({
  scores,
}: Props) {
  const data = [
    {
      category: "UX",
      score: scores.ux.score,
    },
    {
      category: "SEO",
      score: scores.seo.score,
    },
    {
      category: "Trust",
      score: scores.trust.score,
    },
    {
      category: "Access",
      score: scores.accessibility.score,
    },
    {
      category: "Merch",
      score: scores.merchandising.score,
    },
  ];

  return (
    <div className="h-[420px] w-full">

      <ResponsiveContainer>

        <RadarChart data={data}>

          <PolarGrid />

          <PolarAngleAxis
            dataKey="category"
          />

          <PolarRadiusAxis
            domain={[0, 100]}
          />

          <Radar
            dataKey="score"
            fill="#4F46E5"
            stroke="#4F46E5"
            fillOpacity={0.35}
          />

        </RadarChart>

      </ResponsiveContainer>

    </div>
  );
}