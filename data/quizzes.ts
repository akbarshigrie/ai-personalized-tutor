export interface QuizQuestion {
  id: number;
  lessonId: string;
  question: string;
  options: string[];
  answer: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    lessonId: "javascript-basics",
    question:
      "Which keyword declares a variable in JavaScript?",
    options: [
      "var",
      "html",
      "css",
      "python",
    ],
    answer: "var",
  },

  {
    id: 2,
    lessonId: "javascript-basics",
    question:
      "Which method converts a JSON string into a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.convert()",
      "JSON.object()",
      "JSON.read()",
    ],
    answer: "JSON.parse()",
  },

  {
    id: 3,
    lessonId: "javascript-basics",
    question:
      "Which symbol is used for a single-line comment?",
    options: [
      "//",
      "##",
      "<!-- -->",
      "**",
    ],
    answer: "//",
  },

  {
    id: 4,
    lessonId: "javascript-basics",
    question:
      "Which keyword is used to define a function?",
    options: [
      "function",
      "define",
      "func",
      "method",
    ],
    answer: "function",
  },
];