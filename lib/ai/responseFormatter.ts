// lib/ai/responseFormatter.ts

import { Opportunity } from "@/types/audit";

import { calculatePriorityScore } from "@/lib/ranking/calculator";

import { AuditResponse } from "./schema";

export function formatAudit(
  response: AuditResponse
): Opportunity[] {

return response.opportunities.map(
(opportunity,index)=>({

id:`opp-${index}`,

area:opportunity.area,

title:opportunity.title,

description:opportunity.description,

evidence:opportunity.evidence,

impact:opportunity.impact,

confidence:opportunity.confidence,

effort:opportunity.effort,

priorityScore:

calculatePriorityScore(

opportunity.impact,

opportunity.confidence,

opportunity.effort

)

})

);

}