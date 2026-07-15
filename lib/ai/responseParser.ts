// lib/ai/responseParser.ts

import { AuditSchema } from "./schema";

export function parseAuditResponse(
  content: string
) {

  const json =
    JSON.parse(content);

  return AuditSchema.parse(json);

}