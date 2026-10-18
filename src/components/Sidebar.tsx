import React, { useState } from 'react';
import { SeasonalAccent } from '../seasonal/SeasonalEffects';
import { TechnologyLogo } from './TechnologyLogo';
import { TrackId, UserProgress } from '../types/lesson';
import { lessonsByTrack } from '../data/lessons';
import {
  IconChevronDown,
  IconChevronRight,
  IconCheckCircle,
  IconCircle,
  IconX,
  IconCompass,
  IconLayers,
} from './Icons';

interface SidebarProps {
  currentLessonId?: string;
  onSelectLesson: (lessonId: string) => void;
  onSelectOverview: () => void;
  isOverviewSelected: boolean;
  progress: UserProgress;
  isHiddenDesktop: boolean;
  onHideDesktop?: () => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

interface TrackSectionConfig {
  id: TrackId;
  title: string;
  shortTitle: string;
  badge: string;
  badgeBg: string;
}

const trackConfigs: TrackSectionConfig[] = [
  {
    id: 'html',
    title: 'Phần 1: HTML Cơ Bản',
    shortTitle: 'HTML',
    badge: '11 bài',
    badgeBg: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
  },
  {
    id: 'css',
    title: 'Phần 2: CSS Giao Diện',
    shortTitle: 'CSS',
    badge: '11 bài',
    badgeBg: 'bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300',
  },
  {
    id: 'js',
    title: 'Phần 3: JavaScript Tương Tác',
    shortTitle: 'JavaScript',
    badge: '12 bài',
    badgeBg: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
  },
];

export const Sidebar: React.FC<SidebarProps> = ({
  currentLessonId,
  onSelectLesson,
  onSelectOverview,
  isOverviewSelected,
  progress,
  isHiddenDesktop,
  isOpenMobile,
  onCloseMobile,
}) => {
  // Track open/collapsed state for each group
  const [collapsedTracks, setCollapsedTracks] = useState<Record<TrackId, boolean>>({
    html: false,
    css: false,
    js: false,
  });

  const toggleTrack = (trackId: TrackId) => {
    setCollapsedTracks((prev) => ({
      ...prev,
      [trackId]: !prev[trackId],
    }));
  };

  // Helper to count completed in track
  const getTrackCompletedCount = (trackId: TrackId) => {
    const list = lessonsByTrack[trackId];
    return list.filter((l) => progress.completedLessons.includes(l.id)).length;
  };

  const sidebarContent = (
    <div className="season-sidebar-content flex h-full flex-col">
      <SeasonalAccent placement="sidebar"/>
      {/* Mobile Header */}
      <div className="flex items-center justify-between border-b border-slate-200 p-4 dark:border-slate-800 md:hidden">
        <div className="flex items-center gap-2">
          <IconLayers size={20} className="text-blue-600" />
          <span className="font-bold text-slate-900 dark:text-white">Mục lục bài học</span>
        </div>
        <button
          type="button"
          onClick={onCloseMobile}
          className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          aria-label="Đóng mục lục"
        >
          <IconX size={20} />
        </button>
      </div>

      <div className="sidebar-desktop-heading"><span>DANH MỤC BÀI HỌC</span></div>
      {/* Overview Button */}
      <div className="p-3 border-b border-slate-100 dark:border-slate-800">
        <button
          type="button"
          onClick={() => {
            onSelectOverview();
            onCloseMobile();
          }}
          className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
            isOverviewSelected
              ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
              : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
          }`}
        >
          <IconCompass size={18} className={isOverviewSelected ? 'text-white' : 'text-blue-600 dark:text-blue-400'} />
          <span>Tổng quan & Lộ trình học</span>
        </button>
      </div>

      {/* Lessons Accordion List */}
      <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-4" aria-label="Mục lục bài học">
        {trackConfigs.map((track) => {
          const lessons = lessonsByTrack[track.id];
          const isCollapsed = collapsedTracks[track.id];
          const completedCount = getTrackCompletedCount(track.id);
          const totalCount = lessons.length;

          return (
            <div key={track.id} className="rounded-xl border border-slate-200/80 bg-white/70 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/60">
              {/* Group Header Button */}
              <button
                type="button"
                onClick={() => toggleTrack(track.id)}
                className="flex w-full items-center justify-between px-3.5 py-3 text-left transition hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl"
                aria-expanded={!isCollapsed}
              >
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 dark:text-slate-500">
                    {isCollapsed ? <IconChevronRight size={16} /> : <IconChevronDown size={16} />}
                  </span>
                  <span className="sidebar-track-brand text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    <TechnologyLogo track={track.id} size={19}/>{track.title}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    {completedCount}/{totalCount}
                  </span>
                  <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${track.badgeBg}`}>
                    {track.badge}
                  </span>
                </div>
              </button>

              {/* Group Lessons List */}
              {!isCollapsed && (
                <ul className="space-y-0.5 border-t border-slate-100 px-2 py-2 dark:border-slate-800">
                  {lessons.map((lesson) => {
                    const isSelected = !isOverviewSelected && currentLessonId === lesson.id;
                    const isCompleted = progress.completedLessons.includes(lesson.id);

                    return (
                      <li key={lesson.id}>
                        <button
                          type="button"
                          onClick={() => {
                            onSelectLesson(lesson.id);
                            onCloseMobile();
                          }}
                          className={`group flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-xs transition ${
                            isSelected
                              ? 'bg-blue-50 font-semibold text-blue-700 dark:bg-blue-950/60 dark:text-blue-300'
                              : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-white'
                          }`}
                          aria-current={isSelected ? 'page' : undefined}
                        >
                          {/* Status icon */}
                          <span className="shrink-0">
                            {isCompleted ? (
                              <IconCheckCircle
                                size={15}
                                className="text-emerald-500"
                                title="Đã học xong"
                              />
                            ) : (
                              <IconCircle
                                size={14}
                                className="text-slate-300 dark:text-slate-600 group-hover:text-slate-400"
                              />
                            )}
                          </span>

                          {/* Lesson Order Badge */}
                          <span
                            className={`font-mono text-[11px] shrink-0 ${
                              isSelected
                                ? 'text-blue-600 dark:text-blue-400 font-bold'
                                : 'text-slate-400 dark:text-slate-500'
                            }`}
                          >
                            {lesson.order < 10 ? `0${lesson.order}` : lesson.order}.
                          </span>

                          {/* Lesson Title */}
                          <span className="truncate leading-tight">{lesson.title}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );

  return (
    <>
      {/* Desktop static left sidebar */}
      <aside id="desktop-lesson-sidebar" className={`desktop-lesson-sidebar hidden w-72 shrink-0 border-r border-slate-200 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/40 md:block lg:w-80 ${isHiddenDesktop ? 'sidebar-collapsed' : ''}`}>
        <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-hidden">
          {sidebarContent}
        </div>
      </aside>

      {/* Mobile drawer with backdrop */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={onCloseMobile}
            aria-hidden="true"
          />
          {/* Drawer panel */}
          <aside id="mobile-lesson-sidebar" className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white shadow-2xl dark:bg-slate-900">
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
};
