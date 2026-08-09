"use client";

import ChatBox from "@/components/ChatBox";
import useAuth from "@/hooks/useAuth";

export default function TutorPage() {
  const {
    user,
    loading,
  } = useAuth();

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            AI Tutor
          </h1>

          <p className="text-gray-500 mt-2">
            Ask questions and get personalized guidance.
          </p>
        </div>

        <ChatBox
          userName={
            user?.displayName ||
            "Student"
          }
          currentLesson="JavaScript Fundamentals"
          weakAreas={[
            "Functions",
            "Async JavaScript",
          ]}
          progress={0}
        />
      </div>
    </main>
  );
}