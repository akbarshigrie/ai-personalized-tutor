"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  signupUser,
} from "@/services/authService";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] =
    useState<string>("");

  const [email, setEmail] =
    useState<string>("");

  const [password, setPassword] =
    useState<string>("");

  const [loading, setLoading] =
    useState<boolean>(false);

  const [error, setError] =
    useState<string>("");

  async function handleSignup(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      await signupUser(
        name,
        email,
        password
      );

      router.push("/dashboard");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(
          "Unable to create account."
        );
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold">
          Create Account
        </h1>

        <p className="text-gray-500 mt-2 mb-6">
          Start your personalized learning journey.
        </p>

        {error && (
          <div className="bg-red-100 text-red-700 rounded-lg p-3 mb-5 text-sm">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSignup}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            required
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            required
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            required
            minLength={6}
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white rounded-lg p-3 hover:bg-gray-800 disabled:opacity-50"
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold underline"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}