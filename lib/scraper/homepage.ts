import type { Page } from "playwright";

import { SELECTORS } from "./selectors";

import {
  getText,
  getAttribute,
} from "./helpers";

import type { HomepageData } from "./types";

export async function scrapeHomepage(
  page: Page
): Promise<HomepageData> {

  const [
    heroHeading,
    heroSubheading,
    description,
    announcement,
  ] = await Promise.all([
    getText(page, SELECTORS.heroHeading),
    getText(page, SELECTORS.heroSubheading),
    getAttribute(
      page,
      SELECTORS.metaDescription,
      "content"
    ),
    getText(page, SELECTORS.announcement),
  ]);

  return {
    title: await page.title(),
    description,
    heroHeading,
    heroSubheading,
    announcementBar:
      announcement || undefined,
  };
}