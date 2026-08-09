import { NextRequest, NextResponse } from "next/server";

import {
  getTutorResponse,
} from "@/lib/openai";

interface LessonPlanRequest {
  completedLessons?: string[];
  weakAreas?: string[];
  quizScores?: Record<string, number>;
  currentProgress?: number;
}

export async function POST(
  request: NextRequest
) {
  try {
    const body =
      (await request.json()) as LessonPlanRequest;

    const completedLessons =
      body.completedLessons || [];

    const weakAreas =
      body.weakAreas || [];

    const quizScores =
      body.quizScores || {};

    const currentProgress =
      body.currentProgress ?? 0;

    const prompt = `
Create a personalized learning plan for a learner.

Current progress:
${currentProgress}%

Completed lessons:
${
  completedLessons.length
    ? completedLessons.join(", ")
    : "None"
}

Weak areas:
${
  weakAreas.length
    ? weakAreas.join(", ")
    : "None identified"
}

Quiz scores:
${
  Object.keys(quizScores).length
    ? JSON.stringify(quizScores)
    : "No quiz scores available"
}

Create a practical learning plan.

Include:
1. Priority topics
2. Recommended lessons
3. Practice activities
4. Suggested order
5. Short-term learning goals

Keep the plan clear, practical, and suitable for the learner's current level.
`;

    const plan =
      await getTutorResponse(prompt);

    return NextResponse.json({
      plan,
    });
  } catch (error) {
    console.error(
      "Lesson plan API error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Unable to generate a lesson plan. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}