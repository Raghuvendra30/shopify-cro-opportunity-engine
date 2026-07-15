import type { Product } from "@/types/product";

export interface HomepageData {
  title: string;
  description: string;
  heroHeading: string;
  heroSubheading: string;
  announcementBar?: string;
}

export interface CollectionData {
  title: string;
  url: string;
}

export interface CartData {
  hasCartIcon: boolean;
  hasAddToCart: boolean;
  hasDrawerCart: boolean;
  hasCheckout: boolean;
  hasExpressCheckout: boolean;
  expressMethods: string[];
}

export interface StoreData {
  homepage: HomepageData;
  collections: CollectionData[];
  products: Product[];
  cart: CartData;
}