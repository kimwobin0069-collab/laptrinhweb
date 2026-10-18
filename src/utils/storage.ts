import { UserProgress } from '../types/lesson';

const PROGRESS_STORAGE_KEY = 'thpt_web_learn_progress';
const THEME_STORAGE_KEY = 'thpt_web_learn_theme';

// In-memory fallback if localStorage is disabled or throws error
const memoryStore: Record<string, string> = {};

function isLocalStorageAvailable(): boolean {
  try {
    const testKey = '__storage_test__';
    window.localStorage.setItem(testKey, testKey);
    window.localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

const hasStorage = typeof window !== 'undefined' && isLocalStorageAvailable();

export function getStoredProgress(): UserProgress {
  const defaultProgress: UserProgress = {
    completedLessons: [],
    updatedAt: new Date().toISOString(),
  };

  try {
    let raw: string | null = null;
    if (hasStorage) {
      raw = window.localStorage.getItem(PROGRESS_STORAGE_KEY);
    } else {
      raw = memoryStore[PROGRESS_STORAGE_KEY] || null;
    }

    if (!raw) return defaultProgress;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed.completedLessons)) {
      return parsed;
    }
    return defaultProgress;
  } catch (err) {
    console.warn('Lỗi khi đọc tiến độ từ bộ nhớ:', err);
    return defaultProgress;
  }
}

export function saveProgress(progress: UserProgress): void {
  try {
    const data = JSON.stringify({
      ...progress,
      updatedAt: new Date().toISOString(),
    });
    if (hasStorage) {
      window.localStorage.setItem(PROGRESS_STORAGE_KEY, data);
    } else {
      memoryStore[PROGRESS_STORAGE_KEY] = data;
    }
  } catch (err) {
    console.warn('Không thể lưu tiến độ:', err);
  }
}

export function toggleLessonCompletion(lessonId: string): UserProgress {
  const current = getStoredProgress();
  const exists = current.completedLessons.includes(lessonId);
  const updatedList = exists
    ? current.completedLessons.filter((id) => id !== lessonId)
    : [...current.completedLessons, lessonId];

  const updated: UserProgress = {
    ...current,
    completedLessons: updatedList,
  };
  saveProgress(updated);
  return updated;
}

export function resetProgress(): UserProgress {
  const cleared: UserProgress = {
    completedLessons: [],
    updatedAt: new Date().toISOString(),
  };
  saveProgress(cleared);
  return cleared;
}

export function getStoredTheme(): 'light' | 'dark' {
  try {
    if (hasStorage) {
      const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === 'dark' || saved === 'light') return saved;
    }
    // Default to system preference or light
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  } catch {
    // ignore
  }
  return 'light';
}

export function saveTheme(theme: 'light' | 'dark'): void {
  try {
    if (hasStorage) {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } else {
      memoryStore[THEME_STORAGE_KEY] = theme;
    }
  } catch {
    // ignore
  }
}
