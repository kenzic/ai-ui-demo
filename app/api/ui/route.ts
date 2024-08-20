import { z } from "zod";
import { v5 as uuidv5, v1 as uuidv1 } from "uuid";
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { retrieveArticle } from "@/lib/store";

import { Message } from "@/components/context";

const UUID_NAMESPACE = "33f4fb70-5dbd-11ef-b2be-c7b1738d657e";

const client = new OpenAI();

// Provide a schema of the available components, and their prop types.
// This is hardcoded for the demo, but could be derived from the types.
// Any component you want the LLM to be aware of can be added here.
// This could also be expanded to support tool calls.
const UIResponse = z.object({
  ui: z.discriminatedUnion("component", [
    z.object({
      component: z
        .literal("BioComponent")
        .describe("This should only be used for bio information of humans"),
      data: z.object({
        name: z.string(),
        bio: z.string(),
        imageUrl: z.string().optional(),
      }),
    }),
    z.object({
      component: z
        .literal("SummaryComponent")
        .describe("This should only be used to summarize the article"),
      data: z.object({
        text: z.string(),
      }),
    }),
    z.object({
      component: z
        .literal("InsightComponent")
        .describe(
          "This component should be used to provide extra insight on a topic"
        ),
      data: z.object({
        text: z.string(),
      }),
    }),
  ]),
});

const format = zodResponseFormat(UIResponse, "uiResponse");

// This is a system prompt that will be sent to the LLM before the user's query.
// It instructs the LLM to read the article and then answer questions based on it
// making sure it's response generates the appropriate content and selects the
// best UI component to display it.
const systemPrompt: Message = {
  role: "system",
  content: `
    Based on the following article you are going to be asked a series of questions. Please read the article carefully.
    you need to deside the best response for each question based on the information in the article. And in additon you need
    to pick the best component based on the data you return.

    Article:
    ${retrieveArticle()}
  `
};

export async function POST(req: Request) {
  const { query } = await req.json();

  const userMessage: Message = {
    role: "user",
    content: query,
  }

  const completion = await client.beta.chat.completions.parse({
    model: "gpt-4o-2024-08-06",
    messages: [systemPrompt, userMessage],
    response_format: format,
  });

  const message = completion.choices[0].message;
  let output = {
    queryId: uuidv5(query, UUID_NAMESPACE),
    id: uuidv1(),
  };

  if (message.parsed) {
    output = { ...output, ...message.parsed.ui };
  } else {
    output = {
      ...output, ...{
        error: "Error parsing response",
      }
    };
  }

  return Response.json({
    ui: output
  })
}
