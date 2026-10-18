import React from 'react';
import { useSeason } from '../seasonal/SeasonProvider';
import { SeasonalAccent } from '../seasonal/SeasonalEffects';
import {
  IconSun,
  IconMoon,
  IconMenu,
  IconCompass,
} from './Icons';
import { UserProgress } from '../types/lesson';
import { allLessons } from '../data/lessons';

interface HeaderProps {
  isSidebarHidden: boolean;
  isMobileSidebarOpen: boolean;
  currentTheme: 'light' | 'dark';
  onToggleTheme: () => void;
  onOpenSearch?: () => void;
  onOpenProgress: () => void;
  onToggleMobileSidebar: () => void;
  progress: UserProgress;
  onNavigateHome: () => void;
  onOpenDonation?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isSidebarHidden,
  isMobileSidebarOpen,
  currentTheme,
  onToggleTheme,
  onOpenProgress,
  onToggleMobileSidebar,
  progress,
  onNavigateHome,
  onOpenDonation,
}) => {
  const { holiday, effectsEnabled, reducedMotion } = useSeason();
  const greetingText = holiday?.greeting || 'Chào mừng các em đến với Trang học lập trình web!';
  const completedCount = progress.completedLessons.length;
  const totalLessons = allLessons.length;
  const percent = Math.round((completedCount / totalLessons) * 100);

  return (
    <header className="site-header">
      <div className="header-start">
        <button type="button" className="header-menu" onClick={onToggleMobileSidebar}
          aria-label="Ẩn hoặc hiện danh mục bài học" aria-controls="desktop-lesson-sidebar mobile-lesson-sidebar"
          title={isSidebarHidden ? 'Hiện danh mục bài học' : 'Ẩn danh mục bài học'}>
          <IconMenu size={20}/>
          <span className="sr-only">{isMobileSidebarOpen ? 'Đóng danh mục' : isSidebarHidden ? 'Hiện danh mục' : 'Ẩn danh mục'}</span>
        </button>
        <button type="button" className="header-brand" onClick={onNavigateHome} aria-label="Học Lập Trình Web — về tổng quan">
          <span className="header-brand-mark">
            <img src="/logo.png" alt="Logo Học Lập Trình Web" className="header-brand-logo-img" width="34" height="34" />
          </span>
          <span className="header-brand-copy"><span className="header-brand-title">Học Lập Trình Web <span className="header-school-badge">THPT</span></span><span className="header-brand-subtitle">HTML <i/> CSS <i/> JavaScript</span></span>
        </button>
      </div>
      <div className={'header-ticker-wrap '+(!effectsEnabled||reducedMotion?'ticker-static':'')} title={`${greetingText} (rê chuột vào để tạm dừng)`}>
        <div className="header-ticker-track">
          <div className="header-ticker-content">
            <span>{greetingText} ✨</span>
            <span aria-hidden="true">{greetingText} ✨</span>
            <span aria-hidden="true">{greetingText} ✨</span>
            <span aria-hidden="true">{greetingText} ✨</span>
          </div>
        </div>
      </div>
      <div className="header-actions">
        <button type="button" className="header-roadmap" onClick={onNavigateHome}><IconCompass size={17}/><span>Lộ trình</span></button>
        <button type="button" className="header-progress" onClick={onOpenProgress} aria-label="Xem tiến độ học tập cá nhân" title={completedCount+' / '+totalLessons+' bài đã hoàn thành ('+percent+'%)'}>
          <span className="header-progress-ring" aria-hidden="true"><svg viewBox="0 0 36 36"><circle className="ring-track" cx="18" cy="18" r="14"/><circle className="ring-value" cx="18" cy="18" r="14" strokeDasharray="87.965" strokeDashoffset={87.965*(1-percent/100)}/></svg><span>{percent}<small>%</small></span></span>
          <span className="header-progress-copy"><span>Tiến độ học tập</span><strong>{completedCount}<span> / {totalLessons} bài</span></strong></span>
        </button>
        {onOpenDonation && (
          <button
            type="button"
            onClick={onOpenDonation}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-300/80 dark:border-amber-700/60 text-xs font-semibold shadow-xs hover:scale-105 active:scale-95 transition-all"
            title="Bao tôi ly cà phê ☕"
            aria-label="Bao tôi ly cà phê"
          >
            <span className="text-sm">☕</span>
            <span className="hidden xl:inline">Bao cà phê</span>
          </button>
        )}
        {holiday.id!=='halloween'&&<><span className="header-divider" aria-hidden="true"/>
        <button type="button" className="header-theme" onClick={onToggleTheme}
          aria-label={currentTheme==='dark'?'Chuyển sang giao diện sáng':'Chuyển sang giao diện tối'} title={currentTheme==='dark'?'Giao diện sáng':'Giao diện tối'}>
          {currentTheme==='dark'?<IconSun size={19}/>:<IconMoon size={19}/>}
        </button></>}
      </div>
      <SeasonalAccent placement="header"/>
    </header>
  );
};
