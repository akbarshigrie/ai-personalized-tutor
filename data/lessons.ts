export interface Lesson {
  id: string;
  module: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  topics: string[];
}

export const lessons: Lesson[] = [
  {
    id: "html-basics",
    module: "HTML & CSS",
    title: "HTML Basics",
    description:
      "Learn the fundamentals of HTML and how web pages are structured.",
    difficulty: "Beginner",
    duration: "30 minutes",
    topics: [
      "HTML structure",
      "Tags",
      "Attributes",
      "Headings",
      "Paragraphs",
      "Links",
    ],
  },

  {
    id: "css-basics",
    module: "HTML & CSS",
    title: "CSS Basics",
    description:
      "Learn how CSS is used to style web pages.",
    difficulty: "Beginner",
    duration: "40 minutes",
    topics: [
      "Selectors",
      "Colors",
      "Box Model",
      "Flexbox",
      "Spacing",
    ],
  },

  {
    id: "javascript-basics",
    module: "JavaScript",
    title: "JavaScript Fundamentals",
    description:
      "Understand variables, functions, conditions and loops.",
    difficulty: "Beginner",
    duration: "60 minutes",
    topics: [
      "Variables",
      "Data Types",
      "Functions",
      "Conditions",
      "Loops",
    ],
  },

  {
    id: "javascript-functions",
    module: "JavaScript",
    title: "JavaScript Functions",
    description:
      "Understand function declarations, parameters and return values.",
    difficulty: "Intermediate",
    duration: "45 minutes",
    topics: [
      "Function declaration",
      "Parameters",
      "Return values",
      "Arrow functions",
    ],
  },

  {
    id: "react-basics",
    module: "React",
    title: "React Fundamentals",
    description:
      "Learn components, JSX, props and state.",
    difficulty: "Intermediate",
    duration: "60 minutes",
    topics: [
      "Components",
      "JSX",
      "Props",
      "State",
      "Events",
    ],
  },

  {
    id: "nextjs-basics",
    module: "Next.js",
    title: "Next.js Fundamentals",
    description:
      "Learn App Router, layouts and API routes.",
    difficulty: "Intermediate",
    duration: "60 minutes",
    topics: [
      "App Router",
      "Pages",
      "Layouts",
      "API Routes",
    ],
  },

  {
    id: "python-basics",
    module: "Python",
    title: "Python Fundamentals",
    description:
      "Learn Python programming fundamentals.",
    difficulty: "Beginner",
    duration: "60 minutes",
    topics: [
      "Variables",
      "Lists",
      "Functions",
      "Loops",
      "Dictionaries",
    ],
  },

  {
    id: "machine-learning",
    module: "Machine Learning",
    title: "Machine Learning Basics",
    description:
      "Understand supervised and unsupervised learning.",
    difficulty: "Intermediate",
    duration: "75 minutes",
    topics: [
      "Machine Learning",
      "Supervised Learning",
      "Unsupervised Learning",
      "Training",
      "Testing",
    ],
  },

  {
    id: "generative-ai",
    module: "Generative AI",
    title: "Introduction to Generative AI",
    description:
      "Learn the fundamentals of modern Generative AI systems.",
    difficulty: "Intermediate",
    duration: "60 minutes",
    topics: [
      "LLMs",
      "Prompting",
      "Tokens",
      "AI APIs",
    ],
  },
];