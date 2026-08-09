import {
  lessons,
  Lesson,
} from "@/data/lessons";

export function getAllLessons(): Lesson[] {
  return lessons;
}

export function getLessonById(
  lessonId: string
): Lesson | undefined {
  return lessons.find(
    (lesson) =>
      lesson.id === lessonId
  );
}

export function getLessonsByModule(
  moduleName: string
): Lesson[] {
  return lessons.filter(
    (lesson) =>
      lesson.module === moduleName
  );
}

export function getModules(): string[] {
  return Array.from(
    new Set(
      lessons.map(
        (lesson) =>
          lesson.module
      )
    )
  );
}