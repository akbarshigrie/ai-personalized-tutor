import {
  getTutorResponse,
} from "@/lib/openai";

export interface TutorContext {
  currentLesson?: string;
  progress?: number;
  weakAreas?: string[];
  quizScores?: Record<string, number>;
}

export async function askTutor(
  question: string,
  context?: TutorContext
): Promise<string> {
  if (!question.trim()) {
    throw new Error(
      "Question cannot be empty."
    );
  }

  return getTutorResponse(
    question,
    context
  );
}