"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: "🏠",
  },
  {
    name: "Lessons",
    href: "/lessons",
    icon: "📚",
  },
  {
    name: "AI Tutor",
    href: "/tutor",
    icon: "🤖",
  },
  {
    name: "Progress",
    href: "/progress",
    icon: "📊",
  },
];

export default function Sidebar() {
  const pathname =
    usePathname();

  return (
    <aside className="w-64 min-h-screen bg-gray-950 text-white p-6">
      <div className="mb-10">
        <h1 className="text-2xl font-bold">
          Internee
        </h1>

        <p className="text-gray-400 text-sm">
          AI Tutor
        </p>
      </div>

      <nav className="space-y-2">
        {links.map((link) => {
          const active =
            pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                active
                  ? "bg-white text-black"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              <span>
                {link.icon}
              </span>

              <span>
                {link.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}