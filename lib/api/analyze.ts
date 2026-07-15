import type { AnalysisResult } from "@/types/analysis";

export async function analyzeStore(
  url: string
): Promise<AnalysisResult> {
  const response = await fetch("/api/analyze", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ url }),
  });

  if (!response.ok) {
    const error = await response.json();

    throw new Error(
      error.error ?? "Analysis failed."
    );
  }

  return response.json();
}