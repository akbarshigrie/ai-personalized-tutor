"use client";

import {
  FormEvent,
  useState,
} from "react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatBoxProps {
  userName?: string;
  currentLesson?: string;
  weakAreas?: string[];
  progress?: number;
}

export default function ChatBox({
  userName = "Student",
  currentLesson = "General Learning",
  weakAreas = [],
  progress = 0,
}: ChatBoxProps) {
  const [messages, setMessages] =
    useState<ChatMessage[]>([
      {
        role: "assistant",
        content:
          "Hi! I'm your AI Tutor. What would you like to learn today?",
      },
    ]);

  const [input, setInput] =
    useState<string>("");

  const [loading, setLoading] =
    useState<boolean>(false);

  async function sendMessage(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!input.trim() || loading) {
      return;
    }

    const userMessage = input.trim();

    setMessages((previous) => [
      ...previous,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch(
        "/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            message: userMessage,
            userName,
            currentLesson,
            weakAreas,
            progress,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Something went wrong."
        );
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: data.answer,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            "Sorry, I couldn't answer that right now.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white border rounded-2xl shadow-sm flex flex-col h-[650px]">
      <div className="border-b p-5">
        <h2 className="text-xl font-bold">
          🤖 AI Tutor
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Your personalized learning assistant
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {messages.map(
          (message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.role === "user"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                {message.content}
              </div>
            </div>
          )
        )}

        {loading && (
          <div className="bg-gray-100 rounded-2xl px-4 py-3 w-fit">
            AI is thinking...
          </div>
        )}
      </div>

      <form
        onSubmit={sendMessage}
        className="border-t p-4 flex gap-3"
      >
        <input
          type="text"
          value={input}
          onChange={(event) =>
            setInput(event.target.value)
          }
          placeholder="Ask your tutor..."
          className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-5 rounded-xl disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </div>
  );
}