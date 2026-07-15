import type { AnalysisResult } from "@/types/analysis";

export async function analyzeStore(
  url: string
): Promise<AnalysisResult> {
  const response = await fetch("/api/analyze", {
  const API_URL =
    process.env.NEXT_PUBLIC_API_URL ??
    "";

  const response = await fetch(
    `${API_URL}/api/analyze`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    }
  );

  if (!response.ok) {
    const error = await response.json();

    throw new Error(
      error.error ?? "Analysis failed."
    );
  }

  return response.json();
}
