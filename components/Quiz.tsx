"use client";

import {
  useState,
} from "react";

import {
  QuizQuestion,
} from "@/data/quizzes";

interface QuizProps {
  questions: QuizQuestion[];
}

export default function Quiz({
  questions,
}: QuizProps) {
  const [currentIndex, setCurrentIndex] =
    useState<number>(0);

  const [score, setScore] =
    useState<number>(0);

  const [selected, setSelected] =
    useState<string>("");

  const [finished, setFinished] =
    useState<boolean>(false);

  if (questions.length === 0) {
    return (
      <div className="bg-white border rounded-2xl p-8">
        No quiz questions available.
      </div>
    );
  }

  function submitAnswer() {
    if (!selected) {
      return;
    }

    const currentQuestion =
      questions[currentIndex];

    const isCorrect =
      selected ===
      currentQuestion.answer;

    const newScore =
      isCorrect
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
        (previous) =>
          previous + 1
      );

      setSelected("");
    } else {
      setScore(newScore);
      setFinished(true);
    }
  }

  if (finished) {
    const percentage =
      Math.round(
        (score / questions.length) *
          100
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
      </div>
    );
  }

  const question =
    questions[currentIndex];

  return (
    <div className="bg-white border rounded-2xl p-8">
      <p className="text-sm text-gray-500">
        Question{" "}
        {currentIndex + 1} of{" "}
        {questions.length}
      </p>

      <h2 className="text-2xl font-bold mt-3">
        {question.question}
      </h2>

      <div className="space-y-3 mt-6">
        {question.options.map(
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
        disabled={!selected}
        className="mt-6 bg-black text-white px-6 py-3 rounded-lg disabled:opacity-40"
      >
        {currentIndex + 1 ===
        questions.length
          ? "Finish Quiz"
          : "Next Question"}
      </button>
    </div>
  );
}