import { extractStore } from "@/lib/scraper/extractor";

export async function scrapeStore(url: string) {
  return extractStore(url);
}