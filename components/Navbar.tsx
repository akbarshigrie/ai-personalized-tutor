"use client";

import Link from "next/link";

import useAuth from "@/hooks/useAuth";

export default function Navbar() {
  const {
    user,
    loading,
  } = useAuth();

  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold"
        >
          AI Learning Tutor
        </Link>

        <div className="flex items-center gap-5 text-sm">
          <Link
            href="/dashboard"
            className="hover:underline"
          >
            Dashboard
          </Link>

          <Link
            href="/lessons"
            className="hover:underline"
          >
            Lessons
          </Link>

          <Link
            href="/quiz"
            className="hover:underline"
          >
            Quiz
          </Link>

          <Link
            href="/tutor"
            className="hover:underline"
          >
            AI Tutor
          </Link>

          {!loading && (
            user ? (
              <span className="font-medium">
                {user.displayName ||
                  user.email ||
                  "Student"}
              </span>
            ) : (
              <Link
                href="/login"
                className="bg-black text-white px-4 py-2 rounded-lg"
              >
                Login
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}