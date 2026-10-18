import React from 'react';
import { SeasonalAccent } from '../seasonal/SeasonalEffects';
import { IconCode } from './Icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="season-learning-footer relative w-full border-t border-slate-200/80 bg-white/95 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/95 py-3.5 transition-colors">
      {/* Sleek top ambient accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/35 to-transparent pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-4">
          {/* Cột trái: Logo & Tên trang */}
          <div className="flex items-center justify-center md:justify-start gap-2.5 whitespace-nowrap">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-500/25 shrink-0">
              <IconCode size={14} className="stroke-[2.5]" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 tracking-tight">
                Học Lập Trình Web
              </span>
              <SeasonalAccent placement="footer" />
            </div>
          </div>

          {/* Cột giữa: Copyright chính giữa hoàn hảo */}
          <div className="flex items-center justify-center text-center">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/70 text-slate-600 dark:text-slate-300 text-xs shadow-xs font-medium whitespace-nowrap">
              <span>Copyright © {currentYear}</span>
              <strong className="font-semibold text-slate-900 dark:text-slate-100">THPT Lê Thị Hồng Gấm</strong>
              <span className="text-slate-400 dark:text-slate-500">•</span>
              <span>All rights reserved.</span>
            </div>
          </div>

          {/* Cột phải: Designed by Duy Khoa */}
          <div className="flex items-center justify-center md:justify-end gap-1.5 text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
            <span className="font-normal">Designed by</span>
            <span className="inline-flex items-center gap-1.5 font-bold px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 border border-blue-200/80 dark:border-blue-800/60 text-blue-700 dark:text-blue-300 shadow-xs hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Duy Khoa
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
