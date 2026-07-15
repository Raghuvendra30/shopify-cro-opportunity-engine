import { Page } from "playwright";

import { CollectionData } from "./types";

import {
  cleanText,
  uniqueStrings,
} from "./helpers";

const COLLECTION_SELECTORS = [
  "a[href*='/collections/']",
  "[data-collection-url]",
  ".collection-card a",
  ".featured-collection a",
  ".collection-list a",
] as const;

export async function scrapeCollections(
  page: Page
): Promise<CollectionData[]> {
  const collections = new Map<string, CollectionData>();

  for (const selector of COLLECTION_SELECTORS) {
    try {
      const items = await page
        .locator(selector)
        .evaluateAll((links) =>
          links.map((link) => {
            const anchor = link as HTMLAnchorElement;

            return {
              title:
                anchor.textContent?.trim() ?? "",
              href: anchor.href ?? "",
            };
          })
        );

      for (const item of items) {
        const title = cleanText(item.title);

        if (!title || !item.href) continue;

        try {
          const url = new URL(item.href);

          if (
            !url.pathname.startsWith(
              "/collections/"
            )
          ) {
            continue;
          }

          if (
            url.pathname.includes("/products/")
          ) {
            continue;
          }

          collections.set(url.href, {
            title,
            url: url.href,
          });
        } catch {
          continue;
        }
      }

      if (collections.size > 0) {
        break;
      }
    } catch {
      continue;
    }
  }

  return uniqueStrings(
    [...collections.values()].map((c) =>
      JSON.stringify(c)
    )
  )
    .map((value) =>
      JSON.parse(value)
    )
    .slice(0, 20);
}