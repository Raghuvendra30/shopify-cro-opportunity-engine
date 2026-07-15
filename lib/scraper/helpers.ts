import { Page } from "playwright";

export function cleanText(text?: string | null): string {
  if (!text) return "";

  return text.replace(/\s+/g, " ").trim();
}

export async function exists(
  page: Page,
  selector: string
): Promise<boolean> {
  return (await page.locator(selector).count()) > 0;
}

export async function getText(
  page: Page,
  selector: string
): Promise<string> {
  try {
    const locator = page.locator(selector).first();

    return cleanText(await locator.textContent());
  } catch {
    return "";
  }
}

export async function getAttribute(
  page: Page,
  selector: string,
  attribute: string
): Promise<string> {
  try {
    const locator = page.locator(selector).first();

    return (
      (await locator.getAttribute(attribute)) ??
      ""
    );
  } catch {
    return "";
  }
}

export async function getTexts(
  page: Page,
  selector: string
): Promise<string[]> {
  try {
    return page
      .locator(selector)
      .evaluateAll((nodes) =>
        nodes
          .map((node) =>
            node.textContent?.trim() ?? ""
          )
          .filter(Boolean)
      );
  } catch {
    return [];
  }
}

export async function getLinks(
  page: Page,
  selector: string
): Promise<string[]> {
  try {
    return page
      .locator(selector)
      .evaluateAll((nodes) =>
        nodes
          .map((node) =>
            (node as HTMLAnchorElement).href
          )
          .filter(Boolean)
      );
  } catch {
    return [];
  }
}


export async function getFirstMatchingText(
  page: Page,
  selectors: readonly string[]
): Promise<string> {
  for (const selector of selectors) {
    try {
      const locator = page.locator(selector).first();

      // Immediately skip if it doesn't exist
      if ((await locator.count()) === 0) {
        continue;
      }

      // Don't wait 30s
      const text = await locator.textContent({
        timeout: 1000,
      });

      const cleaned = cleanText(text);

      if (cleaned) {
        return cleaned;
      }
    } catch {
      continue;
    }
  }

  return "";
}

export async function getFirstMatchingAttribute(
  page: Page,
  selectors: readonly string[],
  attribute: string
): Promise<string> {
  for (const selector of selectors) {
    try {
      const locator = page.locator(selector).first();

      if ((await locator.count()) === 0) {
        continue;
      }

      const value =
        await locator.getAttribute(attribute, {
          timeout: 1000,
        });

      if (value) {
        return value;
      }
    } catch {
      continue;
    }
  }

  return "";
}

export async function getFirstMatchingLocator(
  page: Page,
  selectors: readonly string[]
) {
  for (const selector of selectors) {
    const locator = page.locator(selector).first();

    if (await locator.count()) {
      return locator;
    }
  }

  return null;
}

export async function existsAny(
  page: Page,
  selectors: readonly string[]
): Promise<boolean> {
  for (const selector of selectors) {
    try {
      if (
        (await page.locator(selector).count()) > 0
      ) {
        return true;
      }
    } catch {}
  }

  return false;
}

export function uniqueStrings(values: string[]): string[] {
  return [...new Set(values.filter(Boolean))];
}

export function extractPrice(
  value: string | null | undefined
): string {
  if (!value) return "";

  const match = value.match(
    /[$£€₹]?\s?\d{1,3}(?:,\d{3})*(?:\.\d{2})?/
  );

  return match?.[0].trim() ?? "";
}

export function detectReviews(
  text: string
): boolean {
  const lower = text.toLowerCase();

  return [
    "review",
    "reviews",
    "rating",
    "ratings",
    "stars",
    "verified buyer",
  ].some((keyword) =>
    lower.includes(keyword)
  );
}

export function detectShipping(
  text: string
): boolean {
  const lower = text.toLowerCase();

  return [
    "shipping",
    "delivery",
    "free shipping",
    "ships",
    "dispatch",
  ].some((keyword) =>
    lower.includes(keyword)
  );
}

export function detectTrustBadges(
  text: string
): boolean {
  const lower = text.toLowerCase();

  return [
    "secure checkout",
    "money back",
    "ssl",
    "trusted",
    "guarantee",
    "shop pay",
    "paypal",
    "visa",
    "mastercard",
  ].some((keyword) =>
    lower.includes(keyword)
  );
}

export async function safeText(
  locator: ReturnType<Page["locator"]>
): Promise<string> {
  try {
    return cleanText(
      await locator.textContent({
        timeout: 1000,
      })
    );
  } catch {
    return "";
  }
}

export async function safeAttribute(
  locator: ReturnType<Page["locator"]>,
  attribute: string
): Promise<string> {
  try {
    return (
      (await locator.getAttribute(attribute, {
        timeout: 1000,
      })) ?? ""
    );
  } catch {
    return "";
  }
}