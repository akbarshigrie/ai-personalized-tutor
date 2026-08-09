import {
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import {
  db,
} from "@/lib/firebase";

export async function getUserProgress(
  userId: string
) {
  const userRef =
    doc(db, "users", userId);

  const snapshot =
    await getDoc(userRef);

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data();
}

export async function completeLesson(
  userId: string,
  lessonId: string
) {
  const userRef =
    doc(db, "users", userId);

  await updateDoc(userRef, {
    completedLessons:
      arrayUnion(lessonId),
  });
}

export async function saveQuizScore(
  userId: string,
  lessonId: string,
  score: number
) {
  const userRef =
    doc(db, "users", userId);

  await updateDoc(userRef, {
    [`quizScores.${lessonId}`]:
      score,
  });
}