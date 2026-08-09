import { lessons } from "@/data/lessons";

export interface Recommendation {
  lessonId: string;
  title: string;
  module: string;
  reason: string;
  priority: "High" | "Medium" | "Low";
}

export function generateRecommendations(
  quizScores: Record<string, number>,
  completedLessons: string[] = []
): Recommendation[] {
  const recommendations: Recommendation[] =
    [];

  for (const lesson of lessons) {
    const score =
      quizScores[lesson.id];

    const completed =
      completedLessons.includes(
        lesson.id
      );

    if (
      score !== undefined &&
      score < 60
    ) {
      recommendations.push({
        lessonId: lesson.id,
        title: lesson.title,
        module: lesson.module,
        reason:
          `Your quiz score is ${score}%. Review this lesson to strengthen your understanding.`,
        priority: "High",
      });

      continue;
    }

    if (
      !completed &&
      score === undefined
    ) {
      recommendations.push({
        lessonId: lesson.id,
        title: lesson.title,
        module: lesson.module,
        reason:
          "This lesson has not been completed yet.",
        priority: "Medium",
      });
    }
  }

  return recommendations.slice(
    0,
    5
  );
}

export function getTopRecommendation(
  quizScores: Record<string, number>,
  completedLessons: string[] = []
): Recommendation | null {
  const recommendations =
    generateRecommendations(
      quizScores,
      completedLessons
    );

  return (
    recommendations[0] || null
  );
}