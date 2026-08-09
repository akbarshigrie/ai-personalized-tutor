export function calculateProgress(
  completedLessons: string[],
  totalLessons: number
): number {
  if (totalLessons <= 0) {
    return 0;
  }

  return Math.round(
    (completedLessons.length /
      totalLessons) *
      100
  );
}