import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import {
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import {
  auth,
  db,
} from "@/lib/firebase";

export async function signupUser(
  name: string,
  email: string,
  password: string
) {
  const userCredential =
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

  const user = userCredential.user;

  await updateProfile(user, {
    displayName: name,
  });

  await setDoc(
    doc(db, "users", user.uid),
    {
      name,
      email,
      progress: 0,
      completedLessons: [],
      quizScores: {},
      weakAreas: [],
      createdAt: serverTimestamp(),
    }
  );

  return user;
}

export async function loginUser(
  email: string,
  password: string
) {
  const userCredential =
    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

  return userCredential.user;
}

export async function logoutUser() {
  await signOut(auth);
}