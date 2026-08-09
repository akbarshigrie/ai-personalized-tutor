"use client";

import ProgressChart from "@/components/ProgressChart";

const progressData = [
  {
    date: "Week 1",
    progress: 15,
  },
  {
    date: "Week 2",
    progress: 30,
  },
  {
    date: "Week 3",
    progress: 48,
  },
  {
    date: "Week 4",
    progress: 68,
  },
];

export default function ProgressPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            My Progress
          </h1>

          <p className="text-gray-500 mt-2">
            Track your learning performance.
          </p>
        </div>

        <ProgressChart
          data={progressData}
        />
      </div>
    </main>
  );
}