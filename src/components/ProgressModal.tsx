import React, { useState } from 'react';
import { UserProgress } from '../types/lesson';
import { allLessons, lessonsByTrack } from '../data/lessons';
import { IconCheckCircle, IconX, IconTrash, IconInfo, IconAlertTriangle } from './Icons';

interface ProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: UserProgress;
  onResetProgress: () => void;
}

export const ProgressModal: React.FC<ProgressModalProps> = ({
  isOpen,
  onClose,
  progress,
  onResetProgress,
}) => {
  const [showConfirmReset, setShowConfirmReset] = useState<boolean>(false);

  if (!isOpen) return null;

  const total = allLessons.length;
  const completed = progress.completedLessons.length;
  const percent = Math.round((completed / total) * 100);

  const htmlCount = lessonsByTrack.html.filter((l) => progress.completedLessons.includes(l.id)).length;
  const cssCount = lessonsByTrack.css.filter((l) => progress.completedLessons.includes(l.id)).length;
  const jsCount = lessonsByTrack.js.filter((l) => progress.completedLessons.includes(l.id)).length;

  const handleConfirm = () => {
    onResetProgress();
    setShowConfirmReset(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900"
        role="dialog"
        aria-modal="true"
        aria-label="Tiến độ học tập cá nhân"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
              <IconCheckCircle size={20} />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Tiến Độ Học Tập
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Ghi nhận các bài bạn đã tự đánh dấu hoàn thành
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
            aria-label="Đóng bảng tiến độ"
          >
            <IconX size={20} />
          </button>
        </div>

        {/* Global Progress Bar */}
        <div className="my-5">
          <div className="flex justify-between items-center text-sm font-semibold mb-2">
            <span className="text-slate-700 dark:text-slate-300">Tổng quan hoàn thành</span>
            <span className="text-blue-600 dark:text-blue-400 font-mono">
              {completed}/{total} bài ({percent}%)
            </span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 transition-all duration-500"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>

        {/* Breakdown by track */}
        <div className="space-y-3 mb-5">
          {/* HTML Track */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
                Phần 1: HTML Cơ Bản
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                11 bài học cốt lõi
              </span>
            </div>
            <span className="font-mono text-sm font-semibold text-slate-800 dark:text-slate-200">
              {htmlCount}/11 bài
            </span>
          </div>

          {/* CSS Track */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block">
                Phần 2: CSS Giao Diện
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                11 bài học định dạng & bố cục
              </span>
            </div>
            <span className="font-mono text-sm font-semibold text-slate-800 dark:text-slate-200">
              {cssCount}/11 bài
            </span>
          </div>

          {/* JS Track */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider block">
                Phần 3: JavaScript Tương Tác
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                12 bài học tư duy & tương tác DOM
              </span>
            </div>
            <span className="font-mono text-sm font-semibold text-slate-800 dark:text-slate-200">
              {jsCount}/12 bài
            </span>
          </div>
        </div>

        {/* Disclaimer Callout Box */}
        <div className="flex items-start gap-2.5 rounded-xl bg-blue-50/80 p-3 text-xs leading-relaxed text-blue-900 dark:bg-blue-950/40 dark:text-blue-200 border border-blue-100 dark:border-blue-900/60 mb-5">
          <IconInfo size={18} className="text-blue-600 shrink-0 mt-0.5" />
          <p>
            <strong>Lưu ý:</strong> Tiến độ chỉ phản ánh thao tác bạn tự bấm đánh dấu để tiện theo dõi việc tự học hàng ngày, hoàn toàn không phải là kết quả đánh giá năng lực hay bài thi của nhà trường.
          </p>
        </div>

        {/* Reset Confirmation or Reset Trigger Button */}
        {showConfirmReset ? (
          <div className="rounded-xl border border-red-200 bg-red-50 p-3.5 dark:border-red-900/60 dark:bg-red-950/40">
            <div className="flex items-center gap-2 text-red-700 dark:text-red-300 font-semibold text-xs mb-1.5">
              <IconAlertTriangle size={16} />
              <span>Xác nhận xóa tiến độ học tập?</span>
            </div>
            <p className="text-[11px] text-red-600 dark:text-red-400 mb-3">
              Toàn bộ dấu tích "đã đọc" trên máy tính này sẽ bị xóa về 0. Bạn có chắc chắn muốn xóa không?
            </p>
            <div className="flex gap-2 justify-end">
              <button
                type="button"
                onClick={() => setShowConfirmReset(false)}
                className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                Hủy bỏ
              </button>
              <button
                type="button"
                onClick={handleConfirm}
                className="rounded-lg bg-red-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-700"
              >
                Đồng ý xóa
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center pt-2">
            <button
              type="button"
              onClick={() => setShowConfirmReset(true)}
              className="flex items-center gap-1.5 text-xs text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 focus:outline-none"
            >
              <IconTrash size={14} />
              <span>Xóa tiến độ đã lưu</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              Đóng lại
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
