import client from "./openai";

export async function generateExperiment(
title:string,
description:string
){

const response =
await client.chat.completions.create({

model:"gpt-4.1",

messages:[
{
role:"system",

content:
"Generate an A/B testing experiment."
},
{
role:"user",

content:

`
Title

${title}

Description

${description}

`
}
]
});

return response
.choices[0]
.message.content;

}