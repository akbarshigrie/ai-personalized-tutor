export function detectWeakAreas(
  quizScores: Record<
    string,
    number
  >
): string[] {
  return Object.entries(
    quizScores
  )
    .filter(
      ([, score]) => score < 60
    )
    .map(
      ([lessonId]) => lessonId
    );
}

export function getPerformanceLevel(
  score: number
): string {
  if (score >= 80) {
    return "Strong";
  }

  if (score >= 60) {
    return "Average";
  }

  return "Needs Improvement";
}