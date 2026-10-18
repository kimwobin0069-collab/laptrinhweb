import React, { useEffect, useState } from 'react';
import { Lesson } from '../types/lesson';
import { IconList } from './Icons';

interface TableOfContentsProps {
  lesson: Lesson;
}

interface TocItem {
  id: string;
  title: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ lesson }) => {
  const [activeId, setActiveId] = useState<string>('');

  const tocItems: TocItem[] = [
    { id: 'muc-tieu', title: 'Mục tiêu học tập' },
    ...lesson.sections.map((s) => ({
      id: `sec-${s.id}`,
      title: s.title,
    })),
    ...(lesson.codeExamples.length > 0 ? [{ id: 'vi-du-thuc-hanh', title: 'Ví dụ & Chạy thử' }] : []),
    ...(lesson.commonMistakes.length > 0 ? [{ id: 'loi-thuong-gap', title: 'Lỗi thường gặp' }] : []),
    { id: 'ghi-nho', title: 'Ghi nhớ cuối bài' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height || 72;
      const greetingHeight = document.querySelector('.greeting-bar')?.getBoundingClientRect().height || 0;
      const scrollPosition = window.scrollY + headerHeight + greetingHeight + 20;

      for (let i = tocItems.length - 1; i >= 0; i--) {
        const item = tocItems[i];
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(item.id);
          return;
        }
      }
      if (tocItems.length > 0) {
        setActiveId(tocItems[0].id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lesson]);

  const scrollToAnchor = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height || 72;
      const greetingHeight = document.querySelector('.greeting-bar')?.getBoundingClientRect().height || 0;
      const headerOffset = headerHeight + greetingHeight + 16;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveId(id);
    }
  };

  return (
    <aside className="hidden xl:block w-64 shrink-0">
      <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-1 py-1">
        <div className="flex items-center gap-1.5 mb-2.5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-2">
          <IconList size={14} className="text-blue-600 dark:text-blue-400" />
          <span>Mục lục bài học</span>
        </div>

        <ul className="space-y-1 text-xs border-l-2 border-slate-200 dark:border-slate-800">
          {tocItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollToAnchor(item.id)}
                  className={`-ml-[2px] block w-full text-left py-1.5 pl-3 border-l-2 transition text-xs leading-snug ${
                    isActive
                      ? 'border-blue-600 font-bold text-blue-600 dark:border-blue-400 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/30 rounded-r'
                      : 'border-transparent text-slate-600 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
                  title={item.title}
                >
                  {item.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
