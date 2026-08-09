import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-8 py-26 text-center">
        <div className="inline-block bg-gray-200 px-4 py-2 rounded-full text-sm mb-6">
          AI Powered Learning
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">
          Your Personal
          <br />
          AI Learning Tutor
        </h1>

        <p className="max-w-2xl mx-auto text-gray-600 text-lg mt-6">
          Learn smarter with personalized lessons,
          AI-powered guidance, progress tracking and
          intelligent recommendations.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <Link
            href="/signup"
            className="bg-black text-white px-7 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Get Started
          </Link>

          <Link
            href="/tutor"
            className="border border-gray-300 bg-white px-7 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            Try AI Tutor
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          <Feature
            icon="🎯"
            title="Personalized Learning"
            description="Lessons adapt according to your progress and weak areas."
          />

          <Feature
            icon="🤖"
            title="AI Tutor"
            description="Ask questions and get explanations tailored to your level."
          />

          <Feature
            icon="📊"
            title="Progress Tracking"
            description="Track lessons, quizzes and identify areas that need improvement."
          />
        </div>
      </section>
    </main>
  );
}

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

function Feature({
  icon,
  title,
  description,
}: FeatureProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <div className="text-3xl mb-4">
        {icon}
      </div>

      <h2 className="text-xl font-bold text-gray-900">
        {title}
      </h2>

      <p className="text-gray-600 mt-3">
        {description}
      </p>
    </div>
  );
}