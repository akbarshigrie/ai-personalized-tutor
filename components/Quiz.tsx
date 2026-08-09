"use client";

import { useState } from "react";

import { QuizQuestion } from "@/data/quizzes";
import useAuth from "@/hooks/useAuth";
import { saveQuizScore } from "@/services/progressServices";

interface QuizProps {
  questions: QuizQuestion[];
}

export default function Quiz({
  questions,
}: QuizProps) {
  const { user } = useAuth();

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [score, setScore] =
    useState(0);

  const [selected, setSelected] =
    useState("");

  const [finished, setFinished] =
    useState(false);

  const [saving, setSaving] =
    useState(false);

  const [saveError, setSaveError] =
    useState("");

  if (questions.length === 0) {
    return (
      <div className="bg-white border rounded-2xl p-8">
        No quiz questions available.
      </div>
    );
  }

  const currentQuestion =
    questions[currentIndex];

  async function submitAnswer() {
    if (!selected || saving) {
      return;
    }

    const isCorrect =
      selected === currentQuestion.answer;

    const newScore = isCorrect
      ? score + 1
      : score;

    if (
      currentIndex + 1 <
      questions.length
    ) {
      if (isCorrect) {
        setScore(newScore);
      }

      setCurrentIndex(
        (previous) => previous + 1
      );

      setSelected("");

      return;
    }

    setScore(newScore);
    setSaving(true);
    setSaveError("");

    const percentage = Math.round(
      (newScore / questions.length) * 100
    );

    try {
      if (user) {
        await saveQuizScore(
          user.uid,
          currentQuestion.lessonId,
          percentage
        );
      }

      setFinished(true);
    } catch (error) {
      console.error(
        "Failed to save quiz score:",
        error
      );

      setSaveError(
        "Quiz completed, but your score could not be saved. Please try again."
      );

      setFinished(true);
    } finally {
      setSaving(false);
    }
  }

  if (finished) {
    const percentage = Math.round(
      (score / questions.length) * 100
    );

    return (
      <div className="bg-white border rounded-2xl p-8 text-center">
        <div className="text-5xl">
          🎉
        </div>

        <h2 className="text-3xl font-bold mt-4">
          Quiz Completed
        </h2>

        <p className="text-6xl font-bold mt-6">
          {percentage}%
        </p>

        <p className="text-gray-500 mt-3">
          You scored{" "}
          {score} out of{" "}
          {questions.length}
        </p>

        {saveError && (
          <p className="text-red-500 text-sm mt-4">
            {saveError}
          </p>
        )}

        {!user && (
          <p className="text-gray-500 text-sm mt-4">
            Log in to save your progress.
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white border rounded-2xl p-8">
      <p className="text-sm text-gray-500">
        Question {currentIndex + 1} of{" "}
        {questions.length}
      </p>

      <h2 className="text-2xl font-bold mt-3">
        {currentQuestion.question}
      </h2>

      <div className="space-y-3 mt-6">
        {currentQuestion.options.map(
          (option) => {
            const isSelected =
              selected === option;

            return (
              <button
                key={option}
                type="button"
                onClick={() =>
                  setSelected(option)
                }
                className={`w-full text-left border rounded-xl p-4 transition ${
                  isSelected
                    ? "border-black bg-gray-100"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                {option}
              </button>
            );
          }
        )}
      </div>

      <button
        type="button"
        onClick={submitAnswer}
        disabled={!selected || saving}
        className="mt-6 bg-black text-white px-6 py-3 rounded-lg disabled:opacity-40"
      >
        {saving
          ? "Saving..."
          : currentIndex + 1 ===
              questions.length
          ? "Finish Quiz"
          : "Next Question"}
      </button>
    </div>
  );
}