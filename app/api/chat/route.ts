import { NextRequest, NextResponse } from "next/server";

import {
  getTutorResponse,
  TutorContext,
} from "@/lib/openai";

interface ChatRequest {
  message: string;
  context?: TutorContext;
}

export async function POST(
  request: NextRequest
) {
  try {
    const body =
      (await request.json()) as ChatRequest;

    if (!body.message?.trim()) {
      return NextResponse.json(
        {
          error: "Message is required.",
        },
        {
          status: 400,
        }
      );
    }

    const answer =
      await getTutorResponse(
        body.message,
        body.context
      );

    return NextResponse.json({
      response: answer,
    });
  } catch (error) {
    console.error(
      "Chat API error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Unable to get an AI response. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}