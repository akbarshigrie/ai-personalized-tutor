import Link from "next/link";

import {
  Lesson,
} from "@/data/lessons";

interface LessonCardProps {
  lesson: Lesson;
  completed?: boolean;
}

export default function LessonCard({
  lesson,
  completed = false,
}: LessonCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start mb-4">
        <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
          {lesson.module}
        </span>

        {completed && (
          <span className="text-sm text-green-600 font-semibold">
            ✓ Completed
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold">
        {lesson.title}
      </h3>

      <p className="text-gray-500 mt-2">
        {lesson.description}
      </p>

      <div className="flex gap-3 text-sm text-gray-500 mt-4">
        <span>
          {lesson.difficulty}
        </span>

        <span>•</span>

        <span>
          {lesson.duration}
        </span>
      </div>

      <Link
        href={`/lessons/${lesson.id}`}
        className="inline-block bg-black text-white px-5 py-2 rounded-lg mt-5"
      >
        {completed
          ? "Review Lesson"
          : "Start Lesson"}
      </Link>
    </div>
  );
}