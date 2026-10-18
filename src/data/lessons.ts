import { Lesson, TrackId, SearchResult, CodeExample } from '../types/lesson';
import { htmlLessons } from './htmlLessons';
import { cssLessons } from './cssLessons';
import { jsLessons } from './jsLessons';
import { matchesSearch, createSearchSnippet } from '../utils/vietnamese';

export const allLessons: Lesson[] = [
  ...htmlLessons,
  ...cssLessons,
  ...jsLessons,
];

export const lessonsByTrack: Record<TrackId, Lesson[]> = {
  html: htmlLessons,
  css: cssLessons,
  js: jsLessons,
};

export function getLessonById(id: string): Lesson | undefined {
  return allLessons.find((lesson) => lesson.id === id);
}

export function getLessonByTrackAndOrder(track: TrackId, order: number): Lesson | undefined {
  return lessonsByTrack[track]?.find((l) => l.order === order);
}

export function getAdjacentLessons(currentLessonId: string): {
  prevLesson: Lesson | null;
  nextLesson: Lesson | null;
} {
  const currentIndex = allLessons.findIndex((l) => l.id === currentLessonId);
  if (currentIndex === -1) {
    return { prevLesson: null, nextLesson: null };
  }

  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  return { prevLesson, nextLesson };
}

/**
 * Tìm kiếm bài học theo từ khóa tiếng Việt (có dấu và không dấu)
 */
export function searchLessons(query: string): SearchResult[] {
  if (!query || !query.trim()) return [];
  const cleanQuery = query.trim();
  const results: SearchResult[] = [];

  for (const lesson of allLessons) {
    // 1. Kiểm tra tiêu đề bài học
    if (matchesSearch(lesson.title, cleanQuery)) {
      results.push({
        lesson,
        matchedField: 'title',
        snippet: lesson.title,
      });
      continue;
    }

    // 2. Kiểm tra phần mô tả
    if (matchesSearch(lesson.description, cleanQuery)) {
      results.push({
        lesson,
        matchedField: 'description',
        snippet: createSearchSnippet(lesson.description, cleanQuery),
      });
      continue;
    }

    // 3. Kiểm tra mục tiêu học tập
    let matchedObjective = '';
    for (const obj of lesson.objectives) {
      if (matchesSearch(obj, cleanQuery)) {
        matchedObjective = obj;
        break;
      }
    }
    if (matchedObjective) {
      results.push({
        lesson,
        matchedField: 'objective',
        snippet: matchedObjective,
      });
      continue;
    }

    // 4. Kiểm tra tiêu đề các mục lý thuyết
    let matchedSection = '';
    for (const sec of lesson.sections) {
      if (matchesSearch(sec.title, cleanQuery)) {
        matchedSection = sec.title;
        break;
      }
      for (const p of sec.paragraphs) {
        if (matchesSearch(p, cleanQuery)) {
          matchedSection = p;
          break;
        }
      }
      if (matchedSection) break;
    }

    if (matchedSection) {
      results.push({
        lesson,
        matchedField: 'section',
        snippet: createSearchSnippet(matchedSection, cleanQuery),
      });
    }
  }

  return results;
}

/**
 * Lấy ví dụ mã nguồn theo ID ví dụ hoặc ID bài học
 */
export function getExampleById(exampleId: string): { example: CodeExample; lesson: Lesson } | undefined {
  for (const lesson of allLessons) {
    const example = lesson.codeExamples.find((e) => e.id === exampleId);
    if (example) return { example, lesson };
  }
  const lesson = allLessons.find((l) => l.id === exampleId);
  if (lesson && lesson.codeExamples.length > 0) {
    return { example: lesson.codeExamples[0], lesson };
  }
  return undefined;
}

