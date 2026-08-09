import Link from "next/link";

import {
  lessons,
} from "@/data/lessons";

interface LessonPageProps {
  params: Promise<{
    lessonId: string;
  }>;
}

export default async function LessonPage({
  params,
}: LessonPageProps) {
  const { lessonId } = await params;

  const lesson = lessons.find(
    (item) => item.id === lessonId
  );

  if (!lesson) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Lesson Not Found
          </h1>

          <Link
            href="/lessons"
            className="underline mt-4 inline-block"
          >
            Back to Lessons
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm">
        <Link
          href="/lessons"
          className="text-gray-500"
        >
          ← Back to Lessons
        </Link>

        <div className="mt-8">
          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
            {lesson.module}
          </span>

          <h1 className="text-4xl font-bold mt-4">
            {lesson.title}
          </h1>

          <p className="text-gray-500 text-lg mt-4">
            {lesson.description}
          </p>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">
              Topics Covered
            </h2>

            <div className="space-y-3">
              {lesson.topics.map(
                (topic) => (
                  <div
                    key={topic}
                    className="border rounded-xl p-4"
                  >
                    ✓ {topic}
                  </div>
                )
              )}
            </div>
          </div>

          <button className="mt-8 bg-black text-white px-6 py-3 rounded-lg">
            Mark Lesson Complete
          </button>
        </div>
      </div>
    </main>
  );
}