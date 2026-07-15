import { chromium, Browser, BrowserContext, Page } from "playwright";

export interface BrowserSession {
  browser: Browser;
  context: BrowserContext;
  page: Page;
}

const DEFAULT_TIMEOUT = 30000;

export async function createBrowserSession(
  url: string
): Promise<BrowserSession> {
  const browser = await chromium.launch({
    headless: true,
  });

  const context = await browser.newContext({
    viewport: {
      width: 1440,
      height: 900,
    },

    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/137.0 Safari/537.36",

    locale: "en-US",

    colorScheme: "light",
  });

  const page = await context.newPage();

  page.setDefaultTimeout(DEFAULT_TIMEOUT);

  page.setDefaultNavigationTimeout(DEFAULT_TIMEOUT);

  await page.goto(url, {
    waitUntil: "domcontentloaded",
  });

  return {
    browser,
    context,
    page,
  };
}

export async function closeBrowserSession(
  session: BrowserSession
): Promise<void> {
  await session.context.close();
  await session.browser.close();
}