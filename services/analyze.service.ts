import { urlSchema } from "@/lib/validation/url";
import { scrapeStore } from "./scraper.service";
import { generateAudit } from "./audit.service";
import { calculateStoreScore } from "@/lib/scoring/engine";

export async function analyzeStore(url: string) {
  console.log("Incoming URL:", url);
}