import OpenAI from "openai";

const apiKey =
  process.env.OPENAI_API_KEY;

if (!apiKey) {
  console.warn(
    "OPENAI_API_KEY is not configured."
  );
}

const openai = new OpenAI({
  apiKey,
});

export interface TutorContext {
  currentLesson?: string;
  progress?: number;
  weakAreas?: string[];
  quizScores?: Record<string, number>;
}

export async function getTutorResponse(
  question: string,
  context?: TutorContext
): Promise<string> {
  if (!apiKey) {
    throw new Error(
      "OpenAI API key is not configured."
    );
  }

  const contextText = `
Current lesson:
${context?.currentLesson || "Not provided"}

Overall progress:
${context?.progress ?? "Not provided"}%

Weak areas:
${
  context?.weakAreas?.length
    ? context.weakAreas.join(", ")
    : "None identified"
}

Quiz scores:
${
  context?.quizScores
    ? JSON.stringify(
        context.quizScores
      )
    : "Not available"
}
`;

  const response =
    await openai.responses.create({
      model: "gpt-4o-mini",

      instructions: `
You are a friendly and helpful AI learning tutor.

Your job is to help learners understand concepts clearly.

Rules:
- Explain concepts in simple language.
- Give examples when useful.
- Do not simply give answers to quiz questions without explanation.
- Consider the learner's progress and weak areas.
- Encourage learning rather than doing the work for the learner.
- Keep responses focused and practical.
`,

      input: `
Learner context:

${contextText}

Learner question:

${question}
`,
    });

  return response.output_text;
}