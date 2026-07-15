import type { StoreData } from "@/lib/scraper/types";
import { calculateStoreScore } from "@/lib/scoring/engine";

export function scoreStore(store: StoreData) {
  return calculateStoreScore(store);
}