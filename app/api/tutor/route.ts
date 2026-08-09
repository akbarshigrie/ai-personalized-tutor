import { NextRequest, NextResponse } from "next/server";

import {
  getTutorResponse,
  TutorContext,
} from "@/lib/openai";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const question = body?.question as string | undefined;

    const context = body?.context as TutorContext | undefined;

    if (!question?.trim()) {
      return NextResponse.json(
        {
          error: "Question is required.",
        },
        {
          status: 400,
        }
      );
    }

    const answer = await getTutorResponse(
      question,
      context
    );

    return NextResponse.json({
      answer,
    });
  } catch (error) {
    console.error("Tutor API error:", error);

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