"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import useAuth from "@/hooks/useAuth";

import {
  getUserProgress,
  UserProgress,
} from "@/services/progressServices";

export default function useProgress() {
  const { user } = useAuth();

  const [progress, setProgress] =
    useState<UserProgress | null>(
      null
    );

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const loadProgress =
    useCallback(async () => {
      if (!user) {
        setProgress(null);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const data =
          await getUserProgress(
            user.uid
          );

        setProgress(data);
      } catch (err) {
        console.error(
          "Failed to load progress:",
          err
        );

        setError(
          "Unable to load progress."
        );
      } finally {
        setLoading(false);
      }
    }, [user]);

  useEffect(() => {
    loadProgress();
  }, [loadProgress]);

  return {
    progress,
    loading,
    error,
    refreshProgress:
      loadProgress,
  };
}