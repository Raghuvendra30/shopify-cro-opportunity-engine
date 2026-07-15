import { NextRequest,NextResponse } from "next/server";

import { generateExperiment }
from "@/lib/ai/experiment";

export async function POST(
req:NextRequest
){

const {title,description}
=
await req.json();

const experiment=
await generateExperiment(
title,
description
);

return NextResponse.json({
experiment
});

}