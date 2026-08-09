import LessonCard from "@/components/LessonCard";
import { lessons } from "@/data/lessons";

export default function LessonsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Learning Modules
          </h1>

          <p className="text-gray-500 mt-2">
            Choose a lesson and continue your learning journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
            />
          ))}
        </div>
      </div>
    </main>
  );
}