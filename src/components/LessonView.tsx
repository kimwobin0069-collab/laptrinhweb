import React from 'react';
import { SeasonalAccent } from '../seasonal/SeasonalEffects';
import { LessonFigures } from './LessonFigures';
import { TechnologyLogo } from './TechnologyLogo';
import { Lesson } from '../types/lesson';
import { CodePlayground } from './CodePlayground';
import { StaticDynamicDemo, WebMechanism } from './WebConcepts';
import { TableOfContents } from './TableOfContents';
import {
  IconCheckCircle,
  IconCircle,
  IconArrowLeft,
  IconArrowRight,
  IconClock,
  IconAlertTriangle,
  IconLightbulb,
  IconInfo,
} from './Icons';

import { formatContent } from '../utils/contentFormatter';
import { SupportDrink } from './SupportArtwork';

interface LessonViewProps {
  lesson: Lesson;
  isCompleted: boolean;
  onToggleComplete: () => void;
  prevLesson: Lesson | null;
  nextLesson: Lesson | null;
  onSelectLesson: (id: string) => void;
  onOpenDonation?: () => void;
}

export const LessonView: React.FC<LessonViewProps> = ({
  lesson,
  isCompleted,
  onToggleComplete,
  prevLesson,
  nextLesson,
  onSelectLesson,
  onOpenDonation,
}) => {
  const trackName =
    lesson.track === 'html'
      ? 'HTML Cơ Bản'
      : lesson.track === 'css'
      ? 'CSS Giao Diện'
      : 'JavaScript Tương Tác';

  const trackBadgeBg =
    lesson.track === 'html'
      ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
      : lesson.track === 'css'
      ? 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300'
      : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300';

  return (
    <div className="lesson-layout flex w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 gap-6 lg:gap-8">
      {/* Central Lesson Content */}
      <article key={lesson.id} className="lesson-article w-full min-w-0 pb-16 flex-1">
        <SeasonalAccent placement="lesson"/>
        <div className="lesson-masthead"><span className="lesson-track-brand"><TechnologyLogo track={lesson.track} size={24}/>{lesson.track.toUpperCase()} / CHẶNG {lesson.track==='html'?'01':lesson.track==='css'?'02':'03'}</span><span>BÀI {String(lesson.order).padStart(2,'0')} · {lesson.estimatedMinutes} PHÚT</span></div>
        {/* Breadcrumb Header */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
          <span>Học liệu THPT</span>
          <span>/</span>
          <span className="font-semibold text-slate-700 dark:text-slate-300">{trackName}</span>
          <span>/</span>
          <span className="text-blue-600 dark:text-blue-400">Bài {lesson.order}</span>
        </div>

        {/* Track Badge & Read Time */}
        <div className="flex items-center gap-3 mb-2">
          <span className={`rounded-lg px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider ${trackBadgeBg}`}>
            {lesson.track.toUpperCase()} • BÀI {lesson.order < 10 ? `0${lesson.order}` : lesson.order}
          </span>
          <span className="flex items-center gap-1 text-xs text-slate-400">
            <IconClock size={13} />
            <span>{lesson.estimatedMinutes} phút học</span>
          </span>
        </div>

        {/* Lesson Main Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-4">
          {lesson.title}
        </h1>

        {/* Short introduction paragraph */}
        <p
          className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 font-normal"
          dangerouslySetInnerHTML={{ __html: formatContent(lesson.description) }}
        />

        {/* 1. Learning Objectives Box */}
        <section id="muc-tieu" className="season-panel rounded-2xl border border-blue-200/80 bg-blue-50/60 p-5 dark:border-blue-900/50 dark:bg-blue-950/30 mb-10">
          <h2 className="flex items-center gap-2 text-base font-bold text-blue-900 dark:text-blue-200 mb-3">
            <IconCheckCircle size={18} className="text-blue-600 dark:text-blue-400" />
            <span>Mục tiêu học tập</span><SeasonalAccent placement="bar" variant={3}/>
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm text-blue-950/80 dark:text-blue-100">
            {lesson.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: formatContent(obj) }} />
              </li>
            ))}
          </ul>
        </section>

        {/* 2. Theory Sections */}
        <div className="space-y-10">
          {lesson.sections.map((section) => (
            <section key={section.id} id={`sec-${section.id}`} className="theory-section season-panel scroll-mt-20">
              <h2 className="season-title text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 pb-1 border-b border-slate-100 dark:border-slate-800">
                <span dangerouslySetInnerHTML={{ __html: formatContent(section.title) }} />
                <SeasonalAccent placement="section" variant={lesson.sections.indexOf(section)}/>
              </h2>

              {/* Paragraphs */}
              <div className="theory-paragraphs space-y-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {section.paragraphs.map((p, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: formatContent(p) }} />
                ))}
              </div>

              <LessonFigures lessonId={lesson.id} sectionId={section.id} />
              {section.illustration === 'static-dynamic' && <StaticDynamicDemo />}
              {section.illustration === 'web-mechanism' && <WebMechanism />}
              {section.subsections?.map(subsection => (
                <div className="lesson-subsection" key={subsection.id} id={subsection.id}>
                  <h3 dangerouslySetInnerHTML={{ __html: formatContent(subsection.title) }} />
                  <div className="theory-paragraphs space-y-2">
                    {subsection.paragraphs.map((p, i) => (
                      <p key={i} dangerouslySetInnerHTML={{ __html: formatContent(p) }} />
                    ))}
                  </div>
                  {subsection.codeSnippet && (
                    <figure>
                      <pre><code>{subsection.codeSnippet.code}</code></pre>
                      {subsection.codeSnippet.caption && (
                        <figcaption dangerouslySetInnerHTML={{ __html: formatContent(subsection.codeSnippet.caption) }} />
                      )}
                    </figure>
                  )}
                </div>
              ))}
              {/* Bullet Points */}
              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="my-4 space-y-2 text-sm sm:text-base text-slate-700 dark:text-slate-300 pl-4 border-l-2 border-slate-200 dark:border-slate-800">
                  {section.bulletPoints.map((item, idx) => (
                    <li key={idx} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: formatContent(item) }} />
                  ))}
                </ul>
              )}

              {/* Tables */}
              {section.table && (
                <div className="season-table my-5 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  {section.table.caption && (
                    <div className="season-bar flex items-center gap-3 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-700 dark:bg-slate-850 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
                      <span dangerouslySetInnerHTML={{ __html: formatContent(section.table.caption) }} />
                      <SeasonalAccent placement="bar" variant={lesson.sections.indexOf(section)+1}/>
                    </div>
                  )}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="border-b border-slate-200 bg-slate-100/70 text-slate-700 dark:border-slate-800 dark:bg-slate-800/80 dark:text-slate-300">
                        <tr>
                          {section.table.headers.map((h, i) => (
                            <th key={i} className="px-4 py-3 font-semibold" dangerouslySetInnerHTML={{ __html: formatContent(h) }} />
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                        {section.table.rows.map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className="transition hover:bg-slate-50/80 dark:hover:bg-slate-800/40"
                          >
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`px-4 py-3 text-slate-700 dark:text-slate-300 ${
                                  cIdx === 0 ? 'font-mono font-medium text-blue-600 dark:text-blue-400' : ''
                                }`}
                                dangerouslySetInnerHTML={{ __html: formatContent(cell) }}
                              />
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Callout Box */}
              {section.callout && (
                <div
                  className={`my-5 flex items-start gap-3 rounded-2xl p-4 text-xs sm:text-sm leading-relaxed border ${
                    section.callout.type === 'warning'
                      ? 'border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-200'
                      : section.callout.type === 'tip'
                      ? 'border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-200'
                      : section.callout.type === 'note'
                      ? 'border-blue-300 bg-blue-50 text-blue-900 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-200'
                      : 'border-slate-300 bg-slate-50 text-slate-900 dark:border-slate-800 dark:bg-slate-850 dark:text-slate-200'
                  }`}
                >
                  <div className="shrink-0 mt-0.5">
                    {section.callout.type === 'warning' ? (
                      <IconAlertTriangle size={18} className="text-amber-600" />
                    ) : section.callout.type === 'tip' ? (
                      <IconLightbulb size={18} className="text-emerald-600" />
                    ) : (
                      <IconInfo size={18} className="text-blue-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="flex items-center gap-3 font-bold mb-1 text-sm">
                      <span dangerouslySetInnerHTML={{ __html: formatContent(section.callout.title) }} />
                      <SeasonalAccent placement="bar" variant={lesson.sections.indexOf(section)+2}/>
                    </h3>
                    <p className="whitespace-pre-line" dangerouslySetInnerHTML={{ __html: formatContent(section.callout.content) }} />
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* 3. Code Examples & Sandbox */}
        {lesson.codeExamples.length > 0 && (
          <section id="vi-du-thuc-hanh" className="mt-12 scroll-mt-20">
            <h2 className="season-title text-xl font-bold text-slate-900 dark:text-white mb-2">
              Ví Dụ Minh Họa & Chạy Thử Thực Tế<SeasonalAccent placement="section" variant={4}/>
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Bạn có thể tự do chỉnh sửa mã nguồn trong khung bên dưới và bấm nút <strong>"Chạy thử"</strong> để quan sát kết quả tức thì.
            </p>

            {lesson.codeExamples.map((example) => (
              <CodePlayground key={example.id} example={example} />
            ))}
          </section>
        )}

        {/* 4. Common Mistakes & Solutions */}
        {lesson.commonMistakes.length > 0 && (
          <section id="loi-thuong-gap" className="mt-12 scroll-mt-20">
            <h2 className="flex items-center gap-2 text-xl font-bold text-red-600 dark:text-red-400 mb-4">
              <IconAlertTriangle size={20} />
              <span>Lỗi Thường Gặp & Cách Khắc Phục</span>
            </h2>

            <div className="space-y-4">
              {lesson.commonMistakes.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-red-200/90 bg-red-50/50 p-4 dark:border-red-900/40 dark:bg-red-950/20"
                >
                  <h3 className="font-bold text-red-800 dark:text-red-300 text-sm mb-2">
                    Lỗi {idx + 1}: <span dangerouslySetInnerHTML={{ __html: formatContent(item.mistake) }} />
                  </h3>
                  <div className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <p>
                      <strong className="text-red-700 dark:text-red-400">• Nguyên nhân: </strong>
                      <span dangerouslySetInnerHTML={{ __html: formatContent(item.cause) }} />
                    </p>
                    <p>
                      <strong className="text-emerald-700 dark:text-emerald-400">• Cách sửa đúng: </strong>
                      <span dangerouslySetInnerHTML={{ __html: formatContent(item.solution) }} />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. Key Takeaways Summary */}
        <section id="ghi-nho" className="mt-12 scroll-mt-20">
          <div className="rounded-2xl border border-slate-200 bg-slate-100/70 p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white mb-3">
              <IconLightbulb size={20} className="text-amber-500" />
              <span>Ghi Nhớ Cốt Lõi Sau Bài Học</span><SeasonalAccent placement="bar" variant={1}/>
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {lesson.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                  <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: formatContent(point) }} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {lesson.id==='html-1' && <p className="lesson-sources">Đọc thêm: <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Introduction" target="_blank" rel="noreferrer">MDN · Web tĩnh và web động</a> · <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work" target="_blank" rel="noreferrer">MDN · Internet và tên miền</a></p>}
        {/* 6. Navigation Footer */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          {/* Mark as Completed Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-6">
            <div>
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                Theo dõi tiến độ học tập
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isCompleted
                  ? 'Bạn đã đánh dấu hoàn thành bài học này.'
                  : 'Bấm nút bên cạnh sau khi đã đọc và hiểu kiến thức bài.'}
              </p>
            </div>

            <button
              type="button"
              onClick={onToggleComplete}
              className={`season-control flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold transition active:scale-95 ${
                isCompleted
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-500/20'
                  : 'border border-slate-300 bg-white text-slate-700 hover:border-emerald-500 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200'
              }`}
            >
              {isCompleted ? (
                <>
                  <IconCheckCircle size={18} />
                  <span>Đã học xong bài này</span>
                </>
              ) : (
                <>
                  <IconCircle size={18} />
                  <span>Đánh dấu đã đọc</span>
                </>
              )}<SeasonalAccent placement="button" variant={0}/>
            </button>
          </div>

          {/* Coffee Donation Banner in Lesson */}
          {onOpenDonation && (
            <div className="my-6 rounded-2xl border border-amber-200/90 bg-gradient-to-r from-amber-50/90 via-orange-50/60 to-amber-50/80 p-4 sm:p-5 dark:border-amber-900/60 dark:from-amber-950/30 dark:via-orange-950/20 dark:to-amber-950/25 shadow-xs">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/15 border border-amber-300/40 dark:border-amber-700/40 shadow-xs">
                    <SupportDrink kind="coffee" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm flex items-center gap-1.5">
                      <span>Bạn thấy bài học này bổ ích chứ?</span>
                      <span className="text-xs">✨</span>
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-xs mt-1 leading-relaxed">
                      Bao thầy Duy Khoa một ly cà phê để tiếp thêm năng lượng duy trì học liệu nhé!
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onOpenDonation}
                  className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs shadow-sm shadow-amber-500/25 hover:shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <SupportDrink kind="coffee" />
                  <span>Bao tôi ly cà phê ☕</span>
                </button>
              </div>
            </div>
          )}

          {/* Previous / Next Lesson Buttons */}
          <div className="flex items-center justify-between gap-4">
            {prevLesson ? (
              <button
                type="button"
                onClick={() => onSelectLesson(prevLesson.id)}
                className="season-control group flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 text-left transition hover:border-blue-400 hover:bg-blue-50/50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500 max-w-[48%]"
              >
                <SeasonalAccent placement="button" variant={4}/><IconArrowLeft size={16} className="text-slate-400 group-hover:text-blue-600 shrink-0" />
                <div className="min-w-0">
                  <span className="block text-[11px] font-medium text-slate-400">Bài trước</span>
                  <span className="block text-xs font-semibold text-slate-800 dark:text-slate-200 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {prevLesson.title}
                  </span>
                </div>
              </button>
            ) : (
              <div />
            )}

            {nextLesson ? (
              <button
                type="button"
                onClick={() => onSelectLesson(nextLesson.id)}
                className="season-control group flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 text-right transition hover:border-blue-400 hover:bg-blue-50/50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500 max-w-[48%] ml-auto"
              >
                <div className="min-w-0">
                  <span className="block text-[11px] font-medium text-slate-400">Bài tiếp theo</span>
                  <span className="block text-xs font-semibold text-slate-800 dark:text-slate-200 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {nextLesson.title}
                  </span>
                </div>
                <SeasonalAccent placement="button" variant={2}/><IconArrowRight size={16} className="text-slate-400 group-hover:text-blue-600 shrink-0" />
              </button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </article>

      {/* Right Desktop Table of Contents */}
      <TableOfContents lesson={lesson} />
    </div>
  );
};
