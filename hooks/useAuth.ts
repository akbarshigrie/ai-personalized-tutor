"use client";

import {
  onAuthStateChanged,
  User,
} from "firebase/auth";

import {
  useEffect,
  useState,
} from "react";

import { auth } from "@/lib/firebase";

interface UseAuthReturn {
  user: User | null;
  loading: boolean;
}

export default function useAuth(): UseAuthReturn {
  const [user, setUser] =
    useState<User | null>(null);

  const [loading, setLoading] =
    useState<boolean>(true);

  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        }
      );

    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
  };
}