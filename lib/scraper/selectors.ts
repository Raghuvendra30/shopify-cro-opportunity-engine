export const SELECTORS = {
  title: "title",
  heroHeading: "h1",
  heroSubheading: "h2",
  metaDescription:
    "meta[name='description']",
  announcement:
    '[class*="announcement"], [id*="announcement"]',
  navigation:
    "header nav a",
  collections:
    'a[href*="/collections/"]',
  products:
    'a[href*="/products/"]',
  productPrice:
    '[class*="price"]',
  addToCart:
    'button[name="add"], button[type="submit"]',
} as const;

export const PRODUCT_SELECTORS = {
  title: [
    "h1",
    ".product__title",
    ".ProductMeta__Title",
    ".product-single__title",
    "[data-product-title]",
  ],

  price: [
    ".price",
    ".price-item",
    ".product-price",
    ".ProductMeta__Price",
    "[data-product-price]",
  ],

  comparePrice: [
    ".price--compare",
    ".compare-at-price",
    ".price-item--regular",
  ],

  image: [
    ".product__media img",
    ".Product__Slideshow img",
    ".product-gallery img",
    "img",
  ],

  addToCart: [
    "button[name='add']",
    ".product-form__submit",
    ".AddToCart",
    "button[type='submit']",
  ],
} as const;