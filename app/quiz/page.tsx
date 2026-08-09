import Quiz from "@/components/Quiz";

import {
  quizQuestions,
} from "@/data/quizzes";

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <p className="text-sm text-gray-500">
            JavaScript Fundamentals
          </p>

          <h1 className="text-4xl font-bold mt-2">
            JavaScript Quiz
          </h1>

          <p className="text-gray-500 mt-2">
            Test your understanding.
          </p>
        </div>

        <Quiz
          questions={
            quizQuestions.filter(
              (question) =>
                question.lessonId ===
                "javascript-basics"
            )
          }
        />
      </div>
    </main>
  );
}