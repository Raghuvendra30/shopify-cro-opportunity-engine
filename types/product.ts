export interface Product {
  title: string;

  url: string;

  price: string;

  compareAtPrice?: string;

  currency?: string;

  description: string;

  images: string[];

  imageCount: number;

  hasReviews: boolean;

  rating?: number;

  reviewCount?: number;

  hasTrustBadges: boolean;

  hasShippingInfo: boolean;

  hasStockInfo: boolean;

  inStock: boolean;

  hasVariants: boolean;

  variants: string[];

  ctaText: string;

  breadcrumbs: string[];

  tags: string[];
}