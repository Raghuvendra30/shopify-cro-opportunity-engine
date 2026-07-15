import { NextRequest, NextResponse } from "next/server";
import { analyzeStore } from "@/services/analyze.service";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log("Incoming URL:", body.url);

    const result = await analyzeStore(body.url);

    console.log("Analysis complete.");

    return NextResponse.json(result);
  } catch (error) {
    console.error("Analyze API Error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}