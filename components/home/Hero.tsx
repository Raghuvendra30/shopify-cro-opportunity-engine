"use client";

import { useRouter } from "next/navigation";
import { UrlForm } from "@/components/forms/UrlForm";

export function Hero() {
  const router = useRouter();

  function handleAnalyze(url: string) {
    console.log("Analyze clicked:", url);

    router.push(
      `/dashboard?url=${encodeURIComponent(url)}`
    );
  }

  return (
    <section className="flex flex-1 items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1 text-sm font-medium text-slate-600 shadow-sm">
          AI-Powered Shopify CRO Analysis
        </span>

        <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
          Shopify CRO
          <br />
          Opportunity Engine
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Analyze any Shopify store and receive an evidence-based
          Conversion Rate Optimization audit powered by AI,
          Playwright, and structured scoring.
        </p>

        <div className="mt-10">
          <UrlForm onSubmit={handleAnalyze} />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <FeatureCard
            title="Evidence Based"
            description="Every recommendation is backed by real website evidence."
          />

          <FeatureCard
            title="AI Powered"
            description="Uses structured LLM analysis instead of generic suggestions."
          />

          <FeatureCard
            title="Actionable"
            description="Prioritized opportunities with impact, confidence and effort."
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
}

function FeatureCard({
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <h3 className="font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {description}
      </p>
    </div>
  );
}