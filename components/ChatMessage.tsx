interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export default function ChatMessage({
  role,
  content,
}: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div
      className={`flex ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-black text-white"
            : "bg-gray-100 text-gray-900"
        }`}
      >
        <p className="text-xs font-semibold mb-1 opacity-60">
          {isUser
            ? "You"
            : "AI Tutor"}
        </p>

        <p className="whitespace-pre-wrap leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
}