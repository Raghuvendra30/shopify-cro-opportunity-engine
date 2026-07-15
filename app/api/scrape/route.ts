import { NextRequest, NextResponse } from "next/server";

import {
  createBrowserSession,
  closeBrowserSession,
} from "@/lib/scraper/playwright";

import { extractStore } from "@/lib/scraper/extractor";

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    if (!url) {
      return NextResponse.json(
        {
          success: false,
          error: "URL is required",
        },
        { status: 400 }
      );
    }

    const session =
      await createBrowserSession(url);

    const store = await extractStore(url);

    await closeBrowserSession(session);

    return NextResponse.json({
      success: true,
      data: store,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Scraping failed",
      },
      { status: 500 }
    );
  }
}