import { Page } from "playwright";

import { Product } from "@/types/product";

import {
  cleanText,
  uniqueStrings,
  detectReviews,
  detectShipping,
  detectTrustBadges,
  extractPrice,
  getFirstMatchingText,
} from "./helpers";

export async function scrapeProduct(
  page: Page
): Promise<Product> {
  try {
    const url = page.url();

    // -----------------------------
    // Basic Information
    // -----------------------------

    const titleRaw = await getFirstMatchingText(page, [
      "h1",
    ]);

    const priceRaw = await getFirstMatchingText(page, [
      "[data-product-price]",
      ".price",
      "[class*=price]",
      ".price-item",
      ".ProductMeta__Price",
    ]);

    const comparePriceRaw =
      await getFirstMatchingText(page, [
        ".compare-at-price",
        ".price-item--regular",
        "del",
        "s",
      ]);

    const descriptionRaw =
      await getFirstMatchingText(page, [
        "[data-product-description]",
        ".product__description",
        "[class*=description]",
      ]);

    const ctaRaw =
      await getFirstMatchingText(page, [
        "button[name='add']",
        ".product-form__submit",
        ".AddToCart",
        "button[type='submit']",
      ]);

    const bodyRaw =
      await page.locator("body").textContent();

    // -----------------------------
    // Images
    // -----------------------------

    const images = await page
      .locator(
        [
          ".product__media img",
          ".Product__Slideshow img",
          ".product-gallery img",
          "[data-product-media] img",
          "img",
        ].join(", ")
      )
      .evaluateAll((imgs) =>
        imgs
          .map((img) => {
            const src =
              img.getAttribute("src") ??
              img.getAttribute("data-src") ??
              "";

            if (!src) return "";

            return src.startsWith("//")
              ? `https:${src}`
              : src;
          })
          .filter(Boolean)
      );

    // -----------------------------
    // Variants
    // -----------------------------

    const variants = await page
      .locator("select option")
      .evaluateAll((options) =>
        options
          .map(
            (option) =>
              option.textContent?.trim() ?? ""
          )
          .filter(Boolean)
      );

    // -----------------------------
    // Breadcrumbs
    // -----------------------------

    const breadcrumbs = await page
      .locator(
        [
          "nav[aria-label*=breadcrumb] a",
          ".breadcrumb a",
          ".Breadcrumb a",
        ].join(", ")
      )
      .evaluateAll((links) =>
        links
          .map(
            (link) =>
              link.textContent?.trim() ?? ""
          )
          .filter(Boolean)
      );

    // -----------------------------
    // Cleanup
    // -----------------------------

    const title = cleanText(titleRaw);

    const description =
      cleanText(descriptionRaw);

    const bodyText =
      cleanText(bodyRaw);

    const ctaText =
      cleanText(ctaRaw);

    const price =
      extractPrice(priceRaw);

    const compareAtPrice =
      extractPrice(comparePriceRaw);

    const uniqueImages =
      uniqueStrings(images);

    const uniqueVariants =
      uniqueStrings(variants);

    const uniqueBreadcrumbs =
      uniqueStrings(breadcrumbs);

    // -----------------------------
    // Detection
    // -----------------------------

    const hasReviews =
      detectReviews(bodyText);

    const hasShippingInfo =
      detectShipping(bodyText);

    const hasTrustBadges =
      detectTrustBadges(bodyText);

    const lowerBody =
      bodyText.toLowerCase();

    const hasStockInfo =
      /\b(stock|available|inventory|ships|ready)\b/.test(
        lowerBody
      );

    const inStock =
      !/\bout of stock\b|\bsold out\b|\bunavailable\b/.test(
        lowerBody
      );

    // -----------------------------
    // Return
    // -----------------------------

    return {
      title,

      url,

      price,

      compareAtPrice:
        compareAtPrice || undefined,

      currency: "",

      description,

      images: uniqueImages,

      imageCount:
        uniqueImages.length,

      hasReviews,

      rating: undefined,

      reviewCount: undefined,

      hasTrustBadges,

      hasShippingInfo,

      hasStockInfo,

      inStock,

      hasVariants:
        uniqueVariants.length > 0,

      variants: uniqueVariants,

      ctaText,

      breadcrumbs:
        uniqueBreadcrumbs,

      tags: [],
    };
  } catch (error) {
    console.error(
      "Failed to scrape product:",
      error
    );

    throw error;
  }
}