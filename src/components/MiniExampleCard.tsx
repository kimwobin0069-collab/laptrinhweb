import React, { useState, useEffect } from 'react';
import { MiniExample } from '../types/lesson';
import { IconCopy, IconCheck, IconCode } from './Icons';
import { highlightW3Code } from '../utils/w3Highlighter';
import { formatContent } from '../utils/contentFormatter';

interface MiniExampleCardProps {
  example: MiniExample;
}

export const MiniExampleCard: React.FC<MiniExampleCardProps> = ({ example }) => {
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
        await navigator.clipboard.writeText(example.code);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = example.code;
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
    const tryitId = example.id || `mini-${Math.random().toString(36).substring(2, 9)}`;
    const fullHtml = example.code.includes('<!DOCTYPE html>') || example.code.includes('<body>')
      ? example.code
      : `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>${example.title.replace(/<[^>]*>/g, '')}</title>
</head>
<body>

${example.code}

</body>
</html>`;

    try {
      sessionStorage.setItem(`tryit-custom-${tryitId}`, JSON.stringify({
        id: tryitId,
        title: example.title.replace(/<[^>]*>/g, ''),
        description: example.caption || '',
        language: example.language || 'html',
        initialCode: fullHtml,
        runnable: true,
        explanation: example.explanation || ''
      }));
    } catch {}

    window.open(`#/tryit/${tryitId}`, '_blank');
  };

  const highlightedHtml = highlightW3Code(example.code, !isDark);

  return (
    <div className="mini-example-card my-5 overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-50/80 p-4 sm:p-5 shadow-sm dark:border-slate-800 dark:bg-slate-850/80 transition-all">
      {/* 1. Card Header */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-600 text-white font-bold text-xs shadow-sm">
            <IconCode size={13} />
          </div>
          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white leading-tight">
            <span dangerouslySetInnerHTML={{ __html: formatContent(example.title) }} />
          </h4>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 shadow-xs transition"
          title="Sao chép đoạn mã này"
        >
          {copied ? (
            <>
              <IconCheck size={12} className="text-emerald-500" />
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">Đã chép</span>
            </>
          ) : (
            <>
              <IconCopy size={12} />
              <span>Sao chép</span>
            </>
          )}
        </button>
      </div>

      {example.caption && (
        <p
          className="text-xs text-slate-600 dark:text-slate-400 mb-2.5 italic"
          dangerouslySetInnerHTML={{ __html: formatContent(example.caption) }}
        />
      )}

      {/* 2. Code Block */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-inner dark:border-slate-800 dark:bg-slate-900 overflow-hidden border-l-4 border-l-[#04aa6d]">
        <div className="bg-slate-100/70 dark:bg-slate-800/60 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
          <span>Mã HTML nguồn</span>
        </div>
        <pre
          tabIndex={0}
          className="overflow-x-auto p-3.5 sm:p-4 font-mono text-xs leading-relaxed text-slate-900 dark:text-slate-100 whitespace-pre selection:bg-blue-100 dark:selection:bg-blue-900"
          dangerouslySetInnerHTML={{ __html: highlightedHtml }}
        />
      </div>

      {/* 3. W3Schools Signature Action: Try it Yourself » */}
      <div className="mt-3.5">
        <button
          type="button"
          onClick={handleOpenTryit}
          className="inline-flex items-center gap-1.5 rounded-lg bg-[#04aa6d] hover:bg-[#059862] px-5 py-2 text-xs sm:text-sm font-bold text-white shadow transition active:scale-95 cursor-pointer"
          title="Mở trình chạy thử mã trong tab mới"
        >
          <span>Try it Yourself »</span>
        </button>
      </div>

      {/* 4. Explanation Footer */}
      {example.explanation && (
        <div className="mt-3.5 pt-2.5 border-t border-slate-200/80 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          <strong className="text-emerald-700 dark:text-emerald-400">💡 Điểm cần quan sát: </strong>
          <span dangerouslySetInnerHTML={{ __html: formatContent(example.explanation) }} />
        </div>
      )}
    </div>
  );
};
