import React, { useState, useRef, useEffect } from 'react';
import { CodeExample, Lesson } from '../types/lesson';
import { IconPlay, IconCopy, IconCheck, IconRotateCcw, IconArrowLeft } from './Icons';
import { highlightW3Code } from '../utils/w3Highlighter';

interface TryitEditorProps {
  example: CodeExample;
  lesson?: Lesson;
  onBack?: () => void;
}

export const TryitEditor: React.FC<TryitEditorProps> = ({ example, lesson, onBack }) => {
  const [code, setCode] = useState<string>(example.initialCode);
  const [renderedCode, setRenderedCode] = useState<string>(example.initialCode);
  const [copied, setCopied] = useState<boolean>(false);
  const [hasChanged, setHasChanged] = useState<boolean>(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      return (localStorage.getItem('tryit-theme') as 'light' | 'dark') || 'light';
    } catch {
      return 'light';
    }
  });

  const isLight = theme === 'light';

  const preRef = useRef<HTMLPreElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const gutterRef = useRef<HTMLDivElement>(null);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    try {
      localStorage.setItem('tryit-theme', next);
    } catch {}
  };

  useEffect(() => {
    const originalTitle = document.title;
    document.title = `${example.title} | Học Lập Trình Web THPT Lê Thị Hồng Gấm`;
    return () => {
      document.title = originalTitle;
    };
  }, [example.title]);

  const handleRun = () => {
    setRenderedCode(code);
  };

  const handleReset = () => {
    setCode(example.initialCode);
    setRenderedCode(example.initialCode);
    setHasChanged(false);
  };

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(code);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = code;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert('Không thể sao chép. Bạn vui lòng bôi đen và nhấn Ctrl + C.');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Ctrl + Enter or Cmd + Enter to Run
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      handleRun();
      return;
    }

    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.currentTarget;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const value = target.value;
      const newValue = value.substring(0, start) + '  ' + value.substring(end);
      setCode(newValue);
      setHasChanged(true);
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 2;
      }, 0);
    }
  };

  const handleScroll = () => {
    if (textareaRef.current) {
      const top = textareaRef.current.scrollTop;
      const left = textareaRef.current.scrollLeft;
      if (preRef.current) {
        preRef.current.scrollTop = top;
        preRef.current.scrollLeft = left;
      }
      if (gutterRef.current) {
        gutterRef.current.scrollTop = top;
      }
    }
  };

  useEffect(() => {
    handleScroll();
  }, [code]);

  const lines = code.split('\n');
  const highlightedHtml = highlightW3Code(code, isLight);

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-slate-100 text-slate-800 dark:bg-slate-950 dark:text-slate-100 font-sans">
      
      {/* 1. W3Schools Style Top Navigation Bar */}
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        
        {/* Left: Back / Title */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              if (onBack) onBack();
              else if (window.opener) window.close();
              else if (lesson) window.location.hash = `#/lesson/${lesson.id}`;
              else window.location.hash = '#/overview';
            }}
            className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            title="Quay về bài học"
          >
            <IconArrowLeft size={14} />
            <span>{window.opener ? 'Đóng tab' : 'Về bài học'}</span>
          </button>

          <div className="hidden sm:flex items-center border-l border-slate-200 pl-3 dark:border-slate-800">
            <span className="font-extrabold text-sm text-slate-900 dark:text-white">
              {example.title}
            </span>
          </div>
        </div>

        {/* Center: BIG GREEN RUN BUTTON */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleRun}
            className="flex items-center gap-2 rounded-lg bg-[#04aa6d] hover:bg-[#059862] px-6 py-2 text-sm font-bold text-white shadow-md transition active:scale-95"
            title="Chạy thử mã lệnh (Phím tắt: Ctrl + Enter)"
          >
            <IconPlay size={16} />
            <span>Chạy thử »</span>
          </button>
          <span className="hidden md:inline-block text-[11px] text-slate-400 font-mono">
            Ctrl + Enter
          </span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Theme switcher */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            title="Đổi màu giao diện soạn thảo"
          >
            {isLight ? '☀️ Sáng' : '🌙 Tối'}
          </button>

          {/* Copy */}
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            title="Sao chép toàn bộ mã"
          >
            {copied ? (
              <>
                <IconCheck size={14} className="text-emerald-500" />
                <span className="text-emerald-600 font-bold">Đã chép</span>
              </>
            ) : (
              <>
                <IconCopy size={14} />
                <span className="hidden sm:inline">Sao chép</span>
              </>
            )}
          </button>

          {/* Reset */}
          {hasChanged && (
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              title="Khôi phục mã ban đầu"
            >
              <IconRotateCcw size={14} />
              <span className="hidden sm:inline">Khôi phục</span>
            </button>
          )}
        </div>
      </header>

      {/* 2. Workspace: 50% Code Editor on Left, 50% Live Result on Right */}
      <div className="grid flex-1 grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800 overflow-hidden">
        
        {/* CỘT TRÁI: TRÌNH SOẠN THẢO CODE */}
        <div
          className={`flex h-full flex-col overflow-hidden transition-colors ${
            isLight
              ? 'bg-[#f8fafc] text-slate-900'
              : 'bg-[#1e293b] text-slate-100'
          }`}
        >
          {/* Subheader */}
          <div
            className={`flex items-center justify-between px-4 py-1.5 text-xs font-mono border-b ${
              isLight
                ? 'bg-slate-100 border-slate-200 text-slate-600'
                : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}
          >
            <span className="font-bold">Mã nguồn ({example.language.toUpperCase()})</span>
            <span className="text-[11px] opacity-75">Có thể tự do chỉnh sửa</span>
          </div>

          {/* Code Input with Highlight */}
          <div className="relative flex flex-1 overflow-hidden font-mono text-xs sm:text-sm leading-relaxed">
            {/* Gutter */}
            <div
              ref={gutterRef}
              aria-hidden="true"
              className={`select-none overflow-hidden py-4 px-3 text-right font-mono font-medium border-r shrink-0 ${
                isLight
                  ? 'bg-slate-100/90 text-slate-400 border-slate-200'
                  : 'bg-slate-900/90 text-slate-500 border-slate-800'
              }`}
              style={{ minWidth: '46px' }}
            >
              {lines.map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>

            {/* Editor viewport */}
            <div className="relative flex-1 h-full overflow-hidden">
              <pre
                ref={preRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 py-4 px-4 font-mono overflow-hidden whitespace-pre tab-2"
                dangerouslySetInnerHTML={{ __html: highlightedHtml }}
              />
              <textarea
                ref={textareaRef}
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  setHasChanged(true);
                }}
                onKeyDown={handleKeyDown}
                onScroll={handleScroll}
                rows={lines.length + 1}
                spellCheck={false}
                className="relative z-10 w-full h-full resize-none bg-transparent py-4 px-4 font-mono overflow-auto whitespace-pre tab-2 text-transparent focus:outline-none focus:ring-0"
                style={{
                  caretColor: isLight ? '#2563eb' : '#38bdf8',
                }}
                aria-label="Khung soạn thảo mã lệnh"
              />
            </div>
          </div>
        </div>

        {/* CỘT PHẢI: KẾT QUẢ HIỂN THỊ THỜI GIAN THỰC (SANDBOX PREVIEW) */}
        <div className="flex h-full flex-col overflow-hidden bg-white dark:bg-slate-900">
          <div className="flex items-center justify-between px-4 py-1.5 text-xs font-mono border-b border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-850">
            <span className="font-bold text-slate-700 dark:text-slate-300">
              Kết quả hiển thị (Result Preview)
            </span>
            <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Sẵn sàng
            </span>
          </div>

          <div className="flex-1 p-2 sm:p-3 overflow-hidden bg-white">
            <iframe
              title={`Kết quả: ${example.title}`}
              sandbox="allow-scripts"
              srcDoc={renderedCode}
              className="h-full w-full rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-700"
            />
          </div>
        </div>

      </div>

    </div>
  );
};
