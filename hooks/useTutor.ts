"use client";

import { useState } from "react";

import type { TutorContext } from "@/lib/openai";

interface TutorSuccessResponse {
  answer: string;
}

interface TutorErrorResponse {
  error: string;
}

type TutorResponse =
  | TutorSuccessResponse
  | TutorErrorResponse;

export default function useTutor() {
  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function askTutor(
    question: string,
    context?: TutorContext
  ): Promise<string | null> {
    if (!question.trim()) {
      setError(
        "Please enter a question."
      );

      return null;
    }

    try {
      setLoading(true);
      setError("");

      const response =
        await fetch("/api/tutor", {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            question,
            context,
          }),
        });

      const data =
        (await response.json()) as TutorResponse;

      if (!response.ok) {
        const errorMessage =
          "error" in data
            ? data.error
            : "Tutor request failed.";

        throw new Error(
          errorMessage
        );
      }

      if (!("answer" in data)) {
        throw new Error(
          "Invalid response from AI Tutor."
        );
      }

      return data.answer;
    } catch (err) {
      console.error(
        "Tutor request failed:",
        err
      );

      setError(
        err instanceof Error
          ? err.message
          : "Unable to contact AI Tutor."
      );

      return null;
    } finally {
      setLoading(false);
    }
  }

  return {
    askTutor,
    loading,
    error,
  };
}