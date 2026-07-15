import { Browser, chromium } from "playwright";

let browser: Browser | null = null;

export async function getBrowser(): Promise<Browser> {
  if (browser?.isConnected()) {
    return browser;
  }

  browser = await chromium.launch({
    headless: true,
  });

  return browser;
}

export async function disposeBrowser(): Promise<void> {
  if (browser) {
    await browser.close();
    browser = null;
  }
}