import { useCallback, useEffect, useState } from 'react';
import { STAGE_ONE_LESSONS } from '@/data/lessons';

export type Progress = {
  lessonIndex: number;
  answers: Record<string, number>;
};

const STORAGE_KEY = 'mi-primer-peso:progreso';

export const INITIAL_PROGRESS: Progress = { lessonIndex: 0, answers: {} };

function isValidProgress(value: unknown): value is Progress {
  if (typeof value !== 'object' || value === null) return false;
  const { lessonIndex, answers } = value as Record<string, unknown>;
  if (
    typeof lessonIndex !== 'number' ||
    !Number.isInteger(lessonIndex) ||
    lessonIndex < 0 ||
    lessonIndex > STAGE_ONE_LESSONS.length
  ) {
    return false;
  }
  if (typeof answers !== 'object' || answers === null) return false;
  return Object.values(answers).every((v) => typeof v === 'number' && Number.isInteger(v));
}

function readStoredProgress(): Progress {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_PROGRESS;
    const parsed: unknown = JSON.parse(raw);
    return isValidProgress(parsed) ? parsed : INITIAL_PROGRESS;
  } catch {
    return INITIAL_PROGRESS;
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(readStoredProgress);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // El almacenamiento puede estar lleno o bloqueado; la sesión sigue funcionando.
    }
  }, [progress]);

  const answerLesson = useCallback((lessonId: string, optionIndex: number) => {
    setProgress((prev) => ({
      ...prev,
      answers: { ...prev.answers, [lessonId]: optionIndex },
    }));
  }, []);

  const advance = useCallback(() => {
    setProgress((prev) => ({
      ...prev,
      lessonIndex: Math.min(prev.lessonIndex + 1, STAGE_ONE_LESSONS.length),
    }));
  }, []);

  const reset = useCallback(() => {
    setProgress(INITIAL_PROGRESS);
  }, []);

  return { progress, answerLesson, advance, reset };
}
