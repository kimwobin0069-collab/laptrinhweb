export type TrackId = 'html' | 'css' | 'js';

export interface CalloutBox {
  type: 'note' | 'tip' | 'warning' | 'info';
  title: string;
  content: string;
}

export interface TableData {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export interface LessonSection {
  illustration?: 'static-dynamic' | 'web-mechanism';
  id: string;
  title: string;
  paragraphs: string[];
  bulletPoints?: string[];
  table?: TableData;
  callout?: CalloutBox;
  subsections?: {
    id: string;
    title: string;
    paragraphs: string[];
    codeSnippet?: {
      code: string;
      language: string;
      caption?: string;
    };
  }[];
}

export interface CodeExample {
  id: string;
  title: string;
  description: string;
  language: 'html' | 'css' | 'javascript';
  initialCode: string;
  runnable: boolean;
  explanation: string;
  previewHeight?: number;
}

export interface CommonMistake {
  mistake: string;
  cause: string;
  solution: string;
  incorrectSnippet?: string;
  correctSnippet?: string;
}

export interface Lesson {
  id: string;
  track: TrackId;
  order: number;
  title: string;
  slug: string;
  description: string;
  estimatedMinutes: number;
  objectives: string[];
  sections: LessonSection[];
  codeExamples: CodeExample[];
  commonMistakes: CommonMistake[];
  keyTakeaways: string[];
  importantNotes?: string[];
}

export interface TrackInfo {
  id: TrackId;
  name: string;
  title: string;
  shortDescription: string;
  color: string;
  badgeBg: string;
  borderColor: string;
  totalLessons: number;
  prerequisites: string;
  summary: string;
}

export interface UserProgress {
  completedLessons: string[]; // List of lesson IDs
  lastVisitedLessonId?: string;
  updatedAt: string;
}

export interface SearchResult {
  lesson: Lesson;
  matchedField: 'title' | 'description' | 'objective' | 'section';
  snippet: string;
}
