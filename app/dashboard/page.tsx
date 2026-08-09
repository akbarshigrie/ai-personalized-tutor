"use client";

import Link from "next/link";

import useAuth from "@/hooks/useAuth";

export default function DashboardPage() {
  const {
    user,
    loading,
  } = useAuth();

  if (loading) {
    return (
      <main className="p-10">
        Loading dashboard...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Welcome,{" "}
            {user?.displayName ||
              "Student"} 👋
          </h1>

          <p className="text-gray-500 mt-2">
            Continue your personalized learning journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <StatCard
            title="Overall Progress"
            value="0%"
          />

          <StatCard
            title="Completed Lessons"
            value="0"
          />

          <StatCard
            title="Average Quiz Score"
            value="0%"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 border">
            <h2 className="text-2xl font-bold">
              Continue Learning
            </h2>

            <div className="mt-5 border rounded-xl p-5">
              <p className="text-sm text-gray-500">
                JavaScript
              </p>

              <h3 className="text-xl font-bold mt-1">
                JavaScript Fundamentals
              </h3>

              <p className="text-gray-500 mt-2">
                Learn variables, functions,
                conditions and loops.
              </p>

              <Link
                href="/lessons/javascript-basics"
                className="inline-block mt-5 bg-black text-white px-5 py-2 rounded-lg"
              >
                Continue
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border">
            <h2 className="text-2xl font-bold">
              Weak Areas
            </h2>

            <div className="mt-5 space-y-3">
              <div className="border rounded-lg p-4">
                <strong>
                  No weak areas yet
                </strong>

                <p className="text-sm text-gray-500 mt-1">
                  Complete quizzes to identify your weak areas.
                </p>
              </div>
            </div>

            <Link
              href="/tutor"
              className="block text-center mt-5 bg-black text-white px-5 py-3 rounded-lg"
            >
              Ask AI Tutor
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

interface StatCardProps {
  title: string;
  value: string;
}

function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border">
      <p className="text-gray-500">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-2">
        {value}
      </h2>
    </div>
  );
}