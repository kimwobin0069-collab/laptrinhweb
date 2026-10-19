import { useSeason } from './seasonal/SeasonProvider';
import { useState, useEffect, useLayoutEffect } from 'react';
import { SeasonPreview } from './seasonal/GreetingBar';
import { SeasonalEffects } from './seasonal/SeasonalEffects';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { LessonView } from './components/LessonView';
import { OverviewView } from './components/OverviewView';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { ProgressModal } from './components/ProgressModal';
import { DonationModal } from './components/DonationModal';
import { TryitEditor } from './components/TryitEditor';
import {
  getLessonById,
  getAdjacentLessons,
  allLessons,
  lessonsByTrack,
  getExampleById,
} from './data/lessons';
import {
  getStoredProgress,
  toggleLessonCompletion,
  resetProgress,
  getStoredTheme,
  saveTheme,
} from './utils/storage';
import { TrackId, UserProgress } from './types/lesson';

export function App() {
  // Theme state
  const [theme, setTheme] = useState<'light' | 'dark'>(getStoredTheme);
  const {holiday}=useSeason();
  const effectiveTheme=holiday.id==='halloween'?'dark':theme;
  useLayoutEffect(()=>{
    document.documentElement.classList.toggle('dark',effectiveTheme==='dark');
    document.documentElement.style.colorScheme=effectiveTheme;
  },[effectiveTheme]);

  // Progress state
  const [progress, setProgress] = useState<UserProgress>({
    completedLessons: [],
    updatedAt: new Date().toISOString(),
  });

  // Navigation state (lesson ID or null for overview)
  const [currentLessonId, setCurrentLessonId] = useState<string>('html-1');
  const [isOverview, setIsOverview] = useState<boolean>(true);
  const [tryitExampleId, setTryitExampleId] = useState<string | null>(null);

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isProgressOpen, setIsProgressOpen] = useState<boolean>(false);
  const [isDonationOpen, setIsDonationOpen] = useState<boolean>(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const [isSidebarHidden, setIsSidebarHidden] = useState(() => {
    try { return localStorage.getItem('web-learning-sidebar-hidden') === 'true'; } catch { return false; }
  });
  const setSidebarHidden = (hidden: boolean) => {
    setIsSidebarHidden(hidden);
    try { localStorage.setItem('web-learning-sidebar-hidden', String(hidden)); } catch { /* Keep session state when storage is unavailable. */ }
  };
  const toggleSidebar = () => {
    if (window.matchMedia('(max-width: 767px)').matches) setIsMobileSidebarOpen(open => !open);
    else setSidebarHidden(!isSidebarHidden);
  };
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setIsMobileSidebarOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  // Halloween temporarily uses dark mode without overwriting the saved preference.
  const handleToggleTheme = () => {
    if(holiday.id==='halloween')return;
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    saveTheme(newTheme);
  };

  // 2. Initialize Progress from storage
  useEffect(() => {
    setProgress(getStoredProgress());
  }, []);

  const handleToggleComplete = (lessonId: string) => {
    const updated = toggleLessonCompletion(lessonId);
    setProgress(updated);
  };

  const handleResetProgress = () => {
    const cleared = resetProgress();
    setProgress(cleared);
  };

  // 3. Hash routing logic for persistent deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash || hash === '#' || hash === '#/' || hash === '#/overview') {
        setIsOverview(true);
        setTryitExampleId(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // Check for #/tryit/:exampleId
      const matchTryit = hash.match(/^#\/tryit\/([a-z0-9-]+)$/i);
      if (matchTryit && matchTryit[1]) {
        setTryitExampleId(matchTryit[1]);
        return;
      }
      setTryitExampleId(null);

      const match = hash.match(/^#\/lesson\/([a-z0-9-]+)$/i);
      if (match && match[1]) {
        const found = getLessonById(match[1]);
        if (found) {
          setCurrentLessonId(found.id);
          setIsOverview(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }

      // Default fallback
      setIsOverview(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Check initial hash
    if (window.location.hash && window.location.hash !== '#' && window.location.hash !== '#/') {
      handleHashChange();
    } else {
      // Default route is Overview
      setIsOverview(true);
      window.location.hash = '#/overview';
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToLesson = (lessonId: string) => {
    window.location.hash = `#/lesson/${lessonId}`;
    setCurrentLessonId(lessonId);
    setIsOverview(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToOverview = () => {
    window.location.hash = '#/overview';
    setIsOverview(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartTrack = (trackId: TrackId) => {
    const firstLesson = lessonsByTrack[trackId][0];
    if (firstLesson) {
      navigateToLesson(firstLesson.id);
    }
  };

  // 4. Keyboard shortcut for Search (Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentLesson = getLessonById(currentLessonId) || allLessons[0];
  const { prevLesson, nextLesson } = getAdjacentLessons(currentLesson.id);
  const isLessonCompleted = progress.completedLessons.includes(currentLesson.id);

  // Standalone Tryit Editor Route (Full-Screen W3Schools Editor in new tab)
  if (tryitExampleId) {
    const found = getExampleById(tryitExampleId);
    if (found) {
      return (
        <TryitEditor
          example={found.example}
          lesson={found.lesson}
          onBack={() => {
            window.location.hash = `#/lesson/${found.lesson.id}`;
          }}
        />
      );
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 font-sans transition-colors">
      {/* Top Header */}
      <Header
        currentTheme={effectiveTheme}
        onToggleTheme={handleToggleTheme}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenProgress={() => setIsProgressOpen(true)}
        onToggleMobileSidebar={toggleSidebar}
        isSidebarHidden={isSidebarHidden}
        isMobileSidebarOpen={isMobileSidebarOpen}
        progress={progress}
        onNavigateHome={navigateToOverview}
        onOpenDonation={() => setIsDonationOpen(true)}
      />

      <SeasonalEffects />
      {/* Main Workspace with Sidebar & Content */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <Sidebar
          currentLessonId={currentLessonId}
          onSelectLesson={navigateToLesson}
          onSelectOverview={navigateToOverview}
          isOverviewSelected={isOverview}
          progress={progress}
          isOpenMobile={isMobileSidebarOpen}
          isHiddenDesktop={isSidebarHidden}
          onHideDesktop={() => setSidebarHidden(true)}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        {/* Content Canvas */}
        <main className="flex-1 min-w-0">
          {isOverview ? (
            <OverviewView
              onStartTrack={handleStartTrack}
              progress={progress}
            />
          ) : (
            <LessonView
              lesson={currentLesson}
              isCompleted={isLessonCompleted}
              onToggleComplete={() => handleToggleComplete(currentLesson.id)}
              prevLesson={prevLesson}
              nextLesson={nextLesson}
              onSelectLesson={navigateToLesson}
              onOpenDonation={() => setIsDonationOpen(true)}
            />
          )}
        </main>
      </div>

      <Footer onOpenDonation={() => setIsDonationOpen(true)} />
      <SeasonPreview />
      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectLesson={navigateToLesson}
      />

      {/* Progress Modal */}
      <ProgressModal
        isOpen={isProgressOpen}
        onClose={() => setIsProgressOpen(false)}
        progress={progress}
        onResetProgress={handleResetProgress}
      />

      {/* Donation Modal: Bao tôi ly cà phê */}
      <DonationModal
        isOpen={isDonationOpen}
        onClose={() => setIsDonationOpen(false)}
      />
    </div>
  );
}

export default App;
