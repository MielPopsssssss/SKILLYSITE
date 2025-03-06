import type { ActionFunctionArgs } from "@remix-run/node";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const action = async ({ request }: ActionFunctionArgs) => {
  const { messages } = await request.json();

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful cybersecurity and development assistant for SkillyWork. Keep responses professional and concise.",
        },
        ...messages,
      ],
    });

    return new Response(
      JSON.stringify({ message: completion.data.choices[0].message.content }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error processing your request" }),
      { status: 500 }
    );
  }
};
