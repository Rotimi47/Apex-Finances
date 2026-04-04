import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
         content: `
            You are Apex AI Tax Assistant.

            Rules:
            - ONLY answer tax-related questions
            - Focus on Nigeria tax system when relevant
            - Be simple and clear
            - If question is unrelated, say:
            "I can only assist with tax-related questions."
            `
        },
        ...messages,
      ],
    });
     console.log("OpenAI response:", completion);
    return Response.json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("API ERROR:",error);
    
    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}