import React, { useState, useEffect, useRef } from 'react';
import { SearchResult } from '../types/lesson';
import { searchLessons } from '../data/lessons';
import { IconSearch, IconX, IconArrowRight, IconBook } from './Icons';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLesson: (lessonId: string) => void;
}

const suggestedKeywords = [
  'HTML cơ bản',
  'Tạo bảng',
  'CSS Box Model',
  'Flexbox',
  'Biến let const',
  'Điều khiển DOM',
  'Biểu mẫu form',
];

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectLesson,
}) => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setSelectedIndex(0);
      return;
    }
    const found = searchLessons(query);
    setResults(found);
    setSelectedIndex(0);
  }, [query]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        onSelectLesson(results[selectedIndex].lesson.id);
        onClose();
      }
    }
  };

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current && results.length > 0) {
      const activeEl = listRef.current.children[selectedIndex] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex, results]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:p-6 sm:pt-20">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl transition-all dark:border-slate-800 dark:bg-slate-900"
        onKeyDown={handleKeyDown}
        role="dialog"
        aria-modal="true"
        aria-label="Tìm kiếm bài học"
      >
        {/* Search Input Bar */}
        <div className="flex items-center border-b border-slate-200 px-4 dark:border-slate-800">
          <IconSearch size={20} className="text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm theo tên bài, thẻ HTML, thuộc tính CSS, JS..."
            className="h-14 w-full bg-transparent px-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none dark:text-slate-100 dark:placeholder-slate-500"
            aria-label="Ô nhập từ khóa tìm kiếm"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="rounded-md p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              aria-label="Xóa từ khóa"
            >
              <IconX size={16} />
            </button>
          ) : (
            <kbd className="rounded border border-slate-200 bg-slate-100 px-1.5 py-0.5 text-[11px] font-medium text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
              ESC
            </kbd>
          )}
        </div>

        {/* Results Container */}
        <div className="max-h-96 overflow-y-auto p-2">
          {query.trim() === '' ? (
            /* Suggested search tags when query is empty */
            <div className="p-4 text-center">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Gợi ý từ khóa tìm kiếm nhanh
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {suggestedKeywords.map((kw) => (
                  <button
                    key={kw}
                    type="button"
                    onClick={() => setQuery(kw)}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-blue-600"
                  >
                    {kw}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            /* Results list */
            <ul ref={listRef} className="space-y-1" role="listbox">
              {results.map((result, idx) => {
                const isSelected = idx === selectedIndex;
                const trackUpper = result.lesson.track.toUpperCase();
                const trackBadgeColor =
                  result.lesson.track === 'html'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                    : result.lesson.track === 'css'
                    ? 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300'
                    : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300';

                return (
                  <li key={result.lesson.id} role="option" aria-selected={isSelected}>
                    <button
                      type="button"
                      onClick={() => {
                        onSelectLesson(result.lesson.id);
                        onClose();
                      }}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex w-full items-start gap-3 rounded-xl p-3 text-left transition ${
                        isSelected
                          ? 'bg-blue-50 dark:bg-blue-950/60'
                          : 'hover:bg-slate-50 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      <span className={`shrink-0 rounded-md px-2 py-0.5 text-[10px] font-bold ${trackBadgeColor}`}>
                        {trackUpper}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-semibold truncate ${
                            isSelected ? 'text-blue-700 dark:text-blue-300' : 'text-slate-800 dark:text-slate-200'
                          }`}>
                            Bài {result.lesson.order}: {result.lesson.title}
                          </span>
                          {isSelected && (
                            <IconArrowRight size={14} className="text-blue-600 dark:text-blue-400 shrink-0 ml-2" />
                          )}
                        </div>
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                          {result.snippet}
                        </p>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            /* Empty state */
            <div className="py-10 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-400 dark:bg-slate-800">
                <IconBook size={24} />
              </div>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Không tìm thấy bài học nào phù hợp
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Thử tìm bằng từ khóa không dấu như "bang", "the p", "flexbox", "bien"
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer shortcut tips */}
        <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-4 py-2.5 text-[11px] text-slate-500 dark:border-slate-800 dark:bg-slate-850 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="rounded border bg-white px-1 py-0.5 font-mono shadow-sm dark:border-slate-700 dark:bg-slate-800">↑↓</kbd> để di chuyển
            </span>
            <span>
              <kbd className="rounded border bg-white px-1 py-0.5 font-mono shadow-sm dark:border-slate-700 dark:bg-slate-800">Enter</kbd> để chọn
            </span>
          </div>
          <span>Hỗ trợ tiếng Việt có dấu & không dấu</span>
        </div>
      </div>
    </div>
  );
};
