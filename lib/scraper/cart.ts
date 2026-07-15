import type { Page } from "playwright";

import type { CartData } from "./types";

const CART_SELECTORS = {
  cartIcon: [
    "a[href*='/cart']",
    "button[aria-label*='cart' i]",
    ".cart-icon",
    ".header__cart",
    "[data-cart]",
  ],

  addToCart: [
    "button[name='add']",
    ".product-form__submit",
    ".AddToCart",
    "button[type='submit']",
  ],

  drawer: [
    ".cart-drawer",
    ".drawer",
    "[data-cart-drawer]",
    ".mini-cart",
  ],

  checkout: [
    "a[href*='/checkout']",
    "button[name='checkout']",
    ".checkout",
  ],
} as const;

async function existsAny(
  page: Page,
  selectors: readonly string[]
): Promise<boolean> {
  for (const selector of selectors) {
    try {
      if ((await page.locator(selector).count()) > 0) {
        return true;
      }
    } catch {
      // Try the next selector.
    }
  }

  return false;
}

export async function scrapeCart(
  page: Page
): Promise<CartData> {
  const body = (
    (await page.locator("body").textContent()) ?? ""
  ).toLowerCase();

  const [
    hasCartIcon,
    hasAddToCart,
    hasDrawerCart,
    hasCheckout,
  ] = await Promise.all([
    existsAny(page, CART_SELECTORS.cartIcon),
    existsAny(page, CART_SELECTORS.addToCart),
    existsAny(page, CART_SELECTORS.drawer),
    existsAny(page, CART_SELECTORS.checkout),
  ]);

  const expressMethods: string[] = [];

  if (body.includes("shop pay")) {
    expressMethods.push("Shop Pay");
  }

  if (body.includes("paypal")) {
    expressMethods.push("PayPal");
  }

  if (body.includes("google pay")) {
    expressMethods.push("Google Pay");
  }

  if (body.includes("apple pay")) {
    expressMethods.push("Apple Pay");
  }

  return {
    hasCartIcon,
    hasAddToCart,
    hasDrawerCart,
    hasCheckout,
    hasExpressCheckout: expressMethods.length > 0,
    expressMethods,
  };
}