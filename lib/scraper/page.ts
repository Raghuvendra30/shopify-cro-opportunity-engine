import { Page } from "playwright";
import { getBrowser } from "./browser";

const DEFAULT_TIMEOUT = 30000;

export async function createPage(): Promise<Page> {
  const browser = await getBrowser();

  const context = await browser.newContext({
    viewport: {
      width: 1440,
      height: 900,
    },

    locale: "en-US",

    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/138.0 Safari/537.36",
  });

  const page = await context.newPage();

  page.setDefaultTimeout(DEFAULT_TIMEOUT);
  page.setDefaultNavigationTimeout(DEFAULT_TIMEOUT);

  return page;
}

export async function goto(
  page: Page,
  url: string
) {
  await page.goto(url, {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });

  try {
    await page.waitForSelector("body", {
      timeout: 5000,
    });
  } catch {}

  return page;
}