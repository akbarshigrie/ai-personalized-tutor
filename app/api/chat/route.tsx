import openai from "@/lib/openai";
import {
  createTutorPrompt,
} from "@/lib/prompts";

interface ChatRequest {
  message: string;
  userName?: string;
  currentLesson?: string;
  weakAreas?: string[];
  progress?: number;
}

export async function POST(
  request: Request
) {
  try {
    const body =
      (await request.json()) as ChatRequest;

    const {
      message,
      userName,
      currentLesson,
      weakAreas,
      progress,
    } = body;

    if (!message?.trim()) {
      return Response.json(
        {
          error: "Message is required.",
        },
        {
          status: 400,
        }
      );
    }

    const instructions =
      createTutorPrompt({
        userName,
        currentLesson,
        weakAreas,
        progress,
      });

    const response =
      await openai.responses.create({
        model: "gpt-5",
        instructions,
        input: message,
      });

    return Response.json({
      answer: response.output_text,
    });
  } catch (error) {
    console.error(
      "OpenAI API Error:",
      error
    );

    return Response.json(
      {
        error:
          "Unable to generate AI response.",
      },
      {
        status: 500,
      }
    );
  }
}