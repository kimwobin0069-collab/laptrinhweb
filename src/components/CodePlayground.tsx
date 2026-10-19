import React, { useState, useEffect } from 'react';
import { CodeExample } from '../types/lesson';
import { IconCopy, IconCheck, IconCode } from './Icons';
import { highlightW3Code } from '../utils/w3Highlighter';
import { formatContent } from '../utils/contentFormatter';

interface CodePlaygroundProps {
  example: CodeExample;
}

export const CodePlayground: React.FC<CodePlaygroundProps> = ({ example }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);


  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(example.initialCode);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = example.initialCode;
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

  const handleOpenTryit = () => {
    // Open full-screen Tryit editor in a new browser tab
    window.open(`#/tryit/${example.id}`, '_blank');
  };

  const highlightedHtml = highlightW3Code(example.initialCode, !isDark);

  return (
    <div className="w3-example-box my-7 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100/90 p-4 sm:p-5 shadow-sm dark:border-slate-800 dark:bg-slate-850 transition-all">
      
      {/* 1. Header (W3Schools Example Style) */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3.5">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-sm font-bold text-xs">
            <IconCode size={15} />
          </div>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white leading-tight">
              Ví dụ: {example.title}
            </h3>
            <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold">
              Ngôn ngữ: {example.language}
            </span>
          </div>
        </div>

        {/* Copy button */}
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          title="Sao chép toàn bộ mã ví dụ"
        >
          {copied ? (
            <>
              <IconCheck size={14} className="text-emerald-500" />
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">Đã sao chép!</span>
            </>
          ) : (
            <>
              <IconCopy size={14} />
              <span>Sao chép mã</span>
            </>
          )}
        </button>
      </div>

      {/* 2. Code Block with W3Schools Green Left Accent Line & Clean White Inner Card */}
      <div className="relative rounded-xl border border-slate-200 bg-white shadow-inner dark:border-slate-800 dark:bg-slate-900 overflow-hidden border-l-4 border-l-[#04aa6d]">
        <pre
          tabIndex={0}
          className="overflow-x-auto p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed text-slate-900 dark:text-slate-100 whitespace-pre selection:bg-blue-100 dark:selection:bg-blue-900"
          dangerouslySetInnerHTML={{ __html: highlightedHtml }}
        />
      </div>

      {/* 3. Action Row with Signature W3Schools Green Button: Try it Yourself » */}
      <div className="mt-4">
        <button
          type="button"
          onClick={handleOpenTryit}
          className="inline-flex items-center rounded-lg bg-[#04aa6d] hover:bg-[#059862] px-6 py-2.5 text-sm font-bold text-white shadow transition active:scale-95"
          title="Mở trình chạy thử mã trong tab mới"
        >
          <span>Try it Yourself »</span>
        </button>
      </div>

      {/* 4. Explanation Footer */}
      {example.explanation && (
        <div className="mt-3.5 pt-3 border-t border-slate-200/80 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          <strong className="text-emerald-700 dark:text-emerald-400">💡 Giải thích: </strong>
          <span dangerouslySetInnerHTML={{ __html: formatContent(example.explanation) }} />
        </div>
      )}
    </div>
  );
};
