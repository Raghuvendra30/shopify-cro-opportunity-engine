"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Dashboard } from "@/components/dashboard/Dashboard";
import { EmptyState } from "@/components/dashboard/EmptyState";
import { LoadingState } from "@/components/dashboard/LoadingState";

import { analyzeStore } from "@/lib/api/analyze";

import type { AnalysisResult } from "@/types/analysis";

export default function DashboardPage() {
  const searchParams = useSearchParams();

  const url = searchParams.get("url");

  const [loading, setLoading] = useState(false);

  const [result, setResult] =
    useState<AnalysisResult | null>(null);

  useEffect(() => {
    if (typeof url !== "string") {
      return;
    }

    async function runAnalysis(storeUrl: string) {
      try {
        setLoading(true);

        const analysis = await analyzeStore(storeUrl);

        setResult(analysis);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    runAnalysis(url);
  }, [url]);

  if (!url) {
    return (
      <EmptyState
        title="No Store Selected"
        message="Return to the homepage and enter a Shopify URL."
      />
    );
  }

  if (loading) {
    return <LoadingState />;
  }

  if (!result) {
    return null;
  }

  return (
    <Dashboard
      storeUrl={url}
      store={result.store}
      scores={result.scores}
      audit={result.audit}
    />
  );
}
