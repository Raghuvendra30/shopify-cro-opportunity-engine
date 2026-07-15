import { NextRequest, NextResponse } from "next/server";
import { calculateStoreScore } from "@/lib/scoring/engine";

export async function POST(req: NextRequest) {
  const store = await req.json();

  const score = calculateStoreScore(store);

  return NextResponse.json(score);
}