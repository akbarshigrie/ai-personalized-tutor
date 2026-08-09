import {
  arrayUnion,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export interface UserProgress {
  completedLessons?: string[];
  quizScores?: Record<string, number>;
}

export async function getUserProgress(
  userId: string
): Promise<UserProgress | null> {
  const userRef = doc(
    db,
    "users",
    userId
  );

  const snapshot =
    await getDoc(userRef);

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data() as UserProgress;
}

export async function completeLesson(
  userId: string,
  lessonId: string
): Promise<void> {
  const userRef = doc(
    db,
    "users",
    userId
  );

  await setDoc(
    userRef,
    {
      completedLessons:
        arrayUnion(lessonId),
    },
    {
      merge: true,
    }
  );
}

export async function saveQuizScore(
  userId: string,
  lessonId: string,
  score: number
): Promise<void> {
  const userRef = doc(
    db,
    "users",
    userId
  );

  await setDoc(
    userRef,
    {
      quizScores: {
        [lessonId]: score,
      },
    },
    {
      merge: true,
    }
  );
}