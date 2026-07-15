import { createPage, goto } from "./page";

import { scrapeHomepage } from "./homepage";
import { scrapeCollections } from "./collection";
import { scrapeProduct } from "./product";
import { scrapeCart } from "./cart";
import type { Product } from "@/types/product";
import type { StoreData } from "./types";

export async function extractStore(
  url: string
): Promise<StoreData> {
  const page = await createPage();

  try {
    await goto(page, url);

    // Homepage
    const homepage = await scrapeHomepage(page);

    // Collections
    const collections = await scrapeCollections(page);

    // Find first product link
    const productUrl = await page
      .locator('a[href*="/products/"]')
      .first()
      .getAttribute("href");

    const products: Product[] = [];

    if (productUrl) {
      const absoluteUrl = new URL(productUrl, url).toString();

      const productPage = await page.context().newPage();

      try {
        await goto(productPage, absoluteUrl);

        const product = await scrapeProduct(productPage);

        products.push(product);
      } finally {
        await productPage.close();
      }
    }

    // Cart
    const cart = await scrapeCart(page);

    return {
      homepage,
      collections,
      products,
      cart,
    };
  } finally {
    await page.close();
  }
}