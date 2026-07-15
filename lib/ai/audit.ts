import { getOpenAIClient } from "./openai";
import { SYSTEM_PROMPT } from "./prompt";

import type { StoreData } from "@/lib/scraper/types";
import type { ScoreBreakdown } from "@/types/score";

export async function generateAIAudit(
  store: StoreData,
  scores: ScoreBreakdown
) {
  const client = getOpenAIClient();

  const prompt = `
Homepage

${store.homepage.title}

Scores

Overall ${scores.overall}

UX ${scores.ux.score}

SEO ${scores.seo.score}

Trust ${scores.trust.score}

Accessibility ${scores.accessibility.score}

Merchandising ${scores.merchandising.score}

Products

${JSON.stringify(store.products, null, 2)}
`;

  const response = await client.chat.completions.create({
    model: "gpt-4.1",

    temperature: 0.4,

    messages: [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return response.choices[0].message.content;
}
