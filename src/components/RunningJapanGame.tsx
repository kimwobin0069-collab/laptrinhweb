import React, { useState, useEffect, useRef } from 'react';
import {
  GameQuestion,
  ROUND_CONFIG,
  generateGameSession,
  isCorrectAnswer,
  GAME_DURATION_SECONDS,
} from '../data/runningJapanData';
import {
  IconCheckCircle,
  IconArrowLeft,
  IconCopy,
  IconCheck,
  IconExternalLink,
  IconRotateCcw,
} from './Icons';

interface RunningJapanGameProps {
  onBackHome: () => void;
}

// Web Audio API để phát âm thanh chúc mừng / thông báo không cần file mp3 ngoài
function playSound(type: 'correct' | 'wrong' | 'victory' | 'click') {
  try {
    const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    if (type === 'correct') {
      // Âm thanh hai nốt ding-dong vui tai
      const now = ctx.currentTime;
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(587.33, now); // D5
      gain1.gain.setValueAtTime(0.2, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.25);

      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(880, now + 0.12); // A5
      gain2.gain.setValueAtTime(0.25, now + 0.12);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.12);
      osc2.stop(now + 0.45);
    } else if (type === 'wrong') {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.linearRampToValueAtTime(160, now + 0.3);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.3);
    } else if (type === 'victory') {
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const now = ctx.currentTime + idx * 0.12;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.35);
      });
    }
  } catch {
    // Trình duyệt chặn audio autoplay
  }
}

export const RunningJapanGame: React.FC<RunningJapanGameProps> = ({ onBackHome }) => {
  // Trạng thái phiên chơi
  const [questions, setQuestions] = useState<GameQuestion[]>(() => generateGameSession());
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [isAnsweredCorrect, setIsAnsweredCorrect] = useState<Record<string, boolean>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});
  const [currentInput, setCurrentInput] = useState<string>('');
  const [inputFeedback, setInputFeedback] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  });

  // Đồng hồ đếm ngược 9 phút
  const [timeLeft, setTimeLeft] = useState<number>(GAME_DURATION_SECONDS);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [copiedText, setCopiedText] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  // Khởi động đồng hồ đếm ngược
  useEffect(() => {
    if (isGameOver) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsGameOver(true);
          playSound('victory');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isGameOver]);

  // Đồng bộ input khi đổi câu hỏi
  useEffect(() => {
    const currentQ = questions[currentIndex];
    if (currentQ) {
      setCurrentInput(userAnswers[currentQ.id] || '');
      setInputFeedback({ type: 'idle', message: '' });
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [currentIndex, questions]);

  const currentQuestion = questions[currentIndex];
  const currentRound = ROUND_CONFIG[currentQuestion?.roundNumber || 1];

  // Tính tổng điểm
  const score = Object.values(isAnsweredCorrect).filter(Boolean).length;
  const totalQuestions = questions.length;
  const isAllCompleted = score === totalQuestions;

  // Xử lý nộp câu trả lời
  const handleCheckAnswer = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!currentQuestion || isGameOver) return;

    const trimmed = currentInput.trim();
    if (!trimmed) {
      setInputFeedback({
        type: 'error',
        message: 'Bạn chưa nhập câu trả lời. Hãy điền đáp án rồi bấm Kiểm tra nhé!',
      });
      return;
    }

    // Lưu lại input của người dùng
    setUserAnswers((prev) => ({ ...prev, [currentQuestion.id]: trimmed }));

    const correct = isCorrectAnswer(trimmed, currentQuestion.acceptedAnswers);

    if (correct) {
      playSound('correct');
      setIsAnsweredCorrect((prev) => ({ ...prev, [currentQuestion.id]: true }));
      setShowExplanation((prev) => ({ ...prev, [currentQuestion.id]: true }));
      setInputFeedback({
        type: 'success',
        message: `🎉 CHÍNH XÁC! +1 Điểm! Đáp án chuẩn: ${currentQuestion.displayAnswer}`,
      });

      // Nếu đã đúng hết 5 câu
      const newScore = Object.values({ ...isAnsweredCorrect, [currentQuestion.id]: true }).filter(Boolean).length;
      if (newScore === totalQuestions) {
        setTimeout(() => {
          setIsGameOver(true);
          playSound('victory');
        }, 1200);
      }
    } else {
      playSound('wrong');
      setInputFeedback({
        type: 'error',
        message: '❌ Chưa chính xác rồi! Hãy kiểm tra kỹ lại bản dịch hoặc kết quả tìm kiếm nhé!',
      });
    }
  };

  // Khởi động lại game mới
  const handleRestart = () => {
    setQuestions(generateGameSession());
    setCurrentIndex(0);
    setUserAnswers({});
    setIsAnsweredCorrect({});
    setShowExplanation({});
    setCurrentInput('');
    setInputFeedback({ type: 'idle', message: '' });
    setTimeLeft(GAME_DURATION_SECONDS);
    setIsGameOver(false);
  };

  // Sao chép nội dung tiếng Nhật để dán vào Google Dịch
  const handleCopyJapanese = async () => {
    if (!currentQuestion) return;
    try {
      await navigator.clipboard.writeText(currentQuestion.japaneseContent);
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2000);
    } catch {
      alert('Không thể tự động chép, bạn hãy bôi đen dòng chữ và bấm Ctrl + C nhé!');
    }
  };

  // Mở Google Dịch trong tab mới
  const handleOpenGoogleTranslate = () => {
    const text = encodeURIComponent(currentQuestion?.japaneseContent || '');
    window.open(`https://translate.google.com/?sl=ja&tl=vi&text=${text}&op=translate`, '_blank');
  };

  // Mở Google Lens / Tìm kiếm ảnh
  const handleOpenGoogleImages = () => {
    window.open('https://images.google.com/', '_blank');
  };

  // Định dạng thời gian mm:ss
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeFormatted = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  const isTimeRunningOut = timeLeft <= 120; // Dưới 2 phút

  // Màn hình kết thúc trò chơi
  if (isGameOver || isAllCompleted) {
    let rankBadge = {
      title: '🌟 THÁM TỬ TÌM KIẾM CẤP S',
      desc: 'Tuyệt đỉnh thám tử số! Bạn làm chủ kỹ năng Google Dịch và Google Lens cực kỳ xuất sắc!',
      color: 'bg-gradient-to-r from-amber-500 via-rose-500 to-pink-500 text-white',
    };
    if (score <= 2) {
      rankBadge = {
        title: '🏃‍♂️ TÂN BINH ĐANG BỨT PHÁ',
        desc: 'Bạn đã nỗ lực rất tốt! Hãy luyện thêm thao tác dịch thuật và tìm ảnh bằng Google Lens nhé!',
        color: 'bg-gradient-to-r from-slate-600 to-blue-600 text-white',
      };
    } else if (score < totalQuestions) {
      rankBadge = {
        title: '🎖️ THÁM TỬ CÔNG NGHỆ CẤP A',
        desc: 'Khả năng tra cứu số rất nhanh nhẹn và chính xác! Chỉ còn một chút nữa là đạt điểm tối đa!',
        color: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white',
      };
    }

    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">
          {/* Header tổng kết */}
          <div className="relative overflow-hidden bg-gradient-to-br from-red-600 via-rose-600 to-amber-500 px-6 py-10 text-center text-white sm:px-12">
            <div className="absolute -right-8 -top-8 text-8xl opacity-15 select-none">🇯🇵</div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-3">
              <span>Hoạt động ứng dụng Lớp 10</span>
            </div>
            <h1 className="text-3xl font-black sm:text-4xl tracking-tight">RUNNING JAPAN! 🇯🇵</h1>
            <p className="mt-2 text-rose-100 text-sm sm:text-base">
              Bảng Tổng Kết Thử Thách Tìm Kiếm Thông Tin (Google Dịch & Google Lens)
            </p>

            {/* Khung Điểm số */}
            <div className="mt-6 inline-flex items-center gap-6 rounded-2xl bg-white/15 px-8 py-4 backdrop-blur-md border border-white/20">
              <div>
                <span className="block text-xs uppercase tracking-wider text-rose-100 font-semibold">Điểm số</span>
                <span className="text-4xl font-extrabold text-amber-300">
                  {score} / {totalQuestions}
                </span>
              </div>
              <div className="h-10 w-px bg-white/30" />
              <div>
                <span className="block text-xs uppercase tracking-wider text-rose-100 font-semibold">Thời gian còn lại</span>
                <span className="text-2xl font-bold font-mono text-white">{timeFormatted}</span>
              </div>
            </div>
          </div>

          {/* Danh hiệu */}
          <div className="p-6 sm:p-8">
            <div className={`rounded-2xl p-5 text-center shadow-md mb-8 ${rankBadge.color}`}>
              <h3 className="text-lg font-black tracking-wide">{rankBadge.title}</h3>
              <p className="mt-1 text-xs sm:text-sm text-white/90">{rankBadge.desc}</p>
            </div>

            {/* Chi tiết từng câu hỏi */}
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              Chi tiết câu hỏi & Đáp án chính thức:
            </h2>
            <div className="space-y-4">
              {questions.map((q, idx) => {
                const isCorrect = isAnsweredCorrect[q.id];
                return (
                  <div
                    key={q.id}
                    className={`rounded-2xl border p-4 sm:p-5 transition ${
                      isCorrect
                        ? 'border-emerald-200 bg-emerald-50/60 dark:border-emerald-900/40 dark:bg-emerald-950/20'
                        : 'border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{q.badgeEmoji}</span>
                        <span className="font-bold text-sm text-slate-900 dark:text-white">
                          Câu {idx + 1}: {q.categoryLabel}
                        </span>
                        <span className="rounded-md bg-slate-200 px-2 py-0.5 text-[10px] font-semibold text-slate-700 dark:bg-slate-700 dark:text-slate-300">
                          {ROUND_CONFIG[q.roundNumber].name.split(':')[0]}
                        </span>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold ${
                          isCorrect
                            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300'
                            : 'bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-300'
                        }`}
                      >
                        {isCorrect ? '✓ Đúng (+1 điểm)' : '✕ Chưa ghi điểm'}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 mb-2 italic">
                      "{q.japaneseContent.slice(0, 100)}..."
                    </p>

                    <div className="mt-2 text-xs sm:text-sm">
                      <p className="text-slate-700 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white">• Đáp án đúng: </strong>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">{q.displayAnswer}</span>
                      </p>
                      {userAnswers[q.id] && (
                        <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                          <strong>• Câu trả lời của bạn: </strong>
                          <span className={isCorrect ? 'text-emerald-600 font-semibold' : 'text-rose-500'}>
                            {userAnswers[q.id]}
                          </span>
                        </p>
                      )}
                      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-white/70 dark:bg-slate-900/70 p-2.5 rounded-lg border border-slate-200/60 dark:border-slate-800">
                        💡 <strong>Giải thích: </strong>{q.explanation}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Nút hành động */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={handleRestart}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-6 py-3 font-bold text-white shadow-lg shadow-rose-500/30 transition hover:from-red-700 hover:to-rose-700 active:scale-95"
              >
                <IconRotateCcw size={18} />
                <span>Chơi lại đề thi ngẫu nhiên mới</span>
              </button>
              <button
                type="button"
                onClick={onBackHome}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                <IconArrowLeft size={18} />
                <span>Quay lại danh mục bài học</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Giao diện chính của trò chơi đang diễn ra
  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
      {/* Top Banner Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <button
          type="button"
          onClick={onBackHome}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-850 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <IconArrowLeft size={16} />
          <span>Về danh mục bài học</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1 text-xs font-bold text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-200/60 dark:border-rose-900/50">
            <span>🇯🇵</span>
            <span>Running Japan! (Lớp 10)</span>
          </span>
        </div>
      </div>

      {/* Main Game Card */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900 transition-all">
        {/* Game Header Bar */}
        <div className="border-b border-slate-200/80 bg-slate-50/80 p-4 sm:p-5 dark:border-slate-800 dark:bg-slate-850/80">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🏃‍♂️</span>
                <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  RUNNING JAPAN! 🇯🇵
                </h1>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Vận dụng kỹ năng Google Dịch & Google Lens để giải mã Xứ sở Hoa anh đào!
              </p>
            </div>

            {/* Timer & Score Box */}
            <div className="flex items-center gap-3">
              {/* Đồng hồ đếm ngược 9 phút */}
              <div
                className={`flex items-center gap-2 rounded-2xl px-4 py-2 font-mono text-base sm:text-lg font-bold shadow-sm transition-all ${
                  isTimeRunningOut
                    ? 'bg-rose-500 text-white animate-pulse shadow-rose-500/30'
                    : 'bg-slate-900 text-amber-400 dark:bg-black dark:text-amber-300'
                }`}
                title="Thời gian làm bài còn lại (Tổng 9 phút)"
              >
                <span>⏱️</span>
                <span>{timeFormatted}</span>
              </div>

              {/* Điểm số */}
              <div className="rounded-2xl border border-amber-300/80 bg-amber-50 px-4 py-2 font-extrabold text-amber-800 shadow-sm dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-300">
                <span className="text-xs block leading-none font-semibold text-amber-700/80 dark:text-amber-400">Điểm</span>
                <span className="text-lg leading-tight">
                  {score} <span className="text-xs font-normal text-slate-400">/ {totalQuestions}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Vòng chơi & Điều hướng câu hỏi */}
          <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="rounded-lg bg-rose-600 text-white px-2.5 py-1 text-xs font-bold shadow-sm">
                {currentRound.badge}
              </span>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 hidden sm:inline">
                {currentRound.name}
              </span>
            </div>

            {/* List 5 câu hỏi dạng pill */}
            <div className="flex items-center gap-1.5">
              {questions.map((q, idx) => {
                const isSelected = idx === currentIndex;
                const isCorrect = isAnsweredCorrect[q.id];

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`flex h-8 w-8 items-center justify-center rounded-xl text-xs font-bold transition ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-500/40'
                        : isCorrect
                        ? 'bg-emerald-500 text-white'
                        : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'
                    }`}
                    title={`Câu ${idx + 1}: ${q.categoryLabel}`}
                  >
                    {isCorrect ? '✓' : idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Nội dung câu hỏi hiện tại */}
        <div className="p-5 sm:p-7 space-y-6">
          {/* Header câu hỏi */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-1">
              <span>{currentQuestion.badgeEmoji}</span>
              <span>CÂU HỎI {currentIndex + 1} / {totalQuestions} • {currentQuestion.categoryLabel}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-snug">
              {currentQuestion.title}
            </h2>
          </div>

          {/* Hộp nội dung tiếng Nhật cần dịch */}
          <div className="relative rounded-2xl border-2 border-slate-200 bg-slate-50 p-4 sm:p-5 dark:border-slate-800 dark:bg-slate-950/70">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Nội dung tiếng Nhật (Japanese Text)
              </span>
              <button
                type="button"
                onClick={handleCopyJapanese}
                className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                title="Sao chép toàn bộ văn bản để dán vào Google Dịch"
              >
                {copiedText ? (
                  <>
                    <IconCheck size={14} className="text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">Đã sao chép!</span>
                  </>
                ) : (
                  <>
                    <IconCopy size={14} />
                    <span>Sao chép chữ</span>
                  </>
                )}
              </button>
            </div>

            <p className="font-sans text-sm sm:text-base leading-relaxed text-slate-900 dark:text-slate-100 whitespace-pre-wrap select-all">
              {currentQuestion.japaneseContent}
            </p>
          </div>

          {/* Nếu là câu hỏi hình ảnh hoa (Vòng 3 - Tử Đằng) */}
          {currentQuestion.image && (
            <div className="rounded-2xl border border-purple-200 bg-purple-50/50 p-4 dark:border-purple-900/40 dark:bg-purple-950/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-purple-800 dark:text-purple-300 flex items-center gap-1.5">
                  <span>📸</span>
                  <span>Hình ảnh tra cứu bằng Google Lens:</span>
                </span>
                <button
                  type="button"
                  onClick={handleOpenGoogleImages}
                  className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 hover:text-purple-800 dark:text-purple-300 underline"
                >
                  <IconExternalLink size={14} />
                  <span>Mở Google Images</span>
                </button>
              </div>

              <div className="relative group overflow-hidden rounded-xl border border-purple-200 dark:border-purple-800 bg-black flex items-center justify-center max-h-96">
                <img
                  src={
                    currentQuestion.image.startsWith('http')
                      ? currentQuestion.image
                      : `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${currentQuestion.image.replace(/^\//, '')}`
                  }
                  alt="Loài hoa Nhật Bản cần tra cứu"
                  className="w-full h-auto object-cover max-h-96 transition duration-300 group-hover:scale-102"
                />
              </div>
            </div>
          )}

          {/* Quick Tools Row: Google Dịch */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="button"
              onClick={handleOpenGoogleTranslate}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-500/20 transition active:scale-95"
            >
              <span>🌐</span>
              <span>Mở Google Dịch (Đã gắn sẵn nội dung) »</span>
            </button>
          </div>

          {/* Form Nhập Đáp Án */}
          <form onSubmit={handleCheckAnswer} className="pt-2">
            <label htmlFor="answer-input" className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">
              Điền câu trả lời của bạn (Tiếng Việt hoặc Tiếng Nhật):
            </label>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <input
                id="answer-input"
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => {
                  setCurrentInput(e.target.value);
                  setInputFeedback({ type: 'idle', message: '' });
                }}
                disabled={isAnsweredCorrect[currentQuestion.id]}
                placeholder={
                  isAnsweredCorrect[currentQuestion.id]
                    ? `Đã trả lời đúng: ${currentQuestion.displayAnswer}`
                    : 'Nhập câu trả lời của bạn tại đây...'
                }
                className={`flex-1 rounded-xl border px-4 py-3 text-sm font-medium shadow-inner transition outline-none ${
                  isAnsweredCorrect[currentQuestion.id]
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200 font-bold'
                    : 'border-slate-300 bg-white text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-850 dark:text-white'
                }`}
              />

              {!isAnsweredCorrect[currentQuestion.id] ? (
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 px-6 py-3 text-sm font-bold text-white shadow-md shadow-rose-500/30 transition active:scale-95 shrink-0"
                >
                  <IconCheckCircle size={18} />
                  <span>Kiểm tra đáp án</span>
                </button>
              ) : (
                <div className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shrink-0">
                  <IconCheck size={18} />
                  <span>Đã ghi điểm (+1đ)</span>
                </div>
              )}
            </div>

            {/* Thông báo kết quả kiểm tra tức thì */}
            {inputFeedback.message && (
              <div
                className={`mt-3 rounded-xl p-3 text-xs sm:text-sm font-semibold transition-all ${
                  inputFeedback.type === 'success'
                    ? 'border border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-200'
                    : 'border border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-800 dark:bg-rose-950/60 dark:text-rose-200'
                }`}
              >
                {inputFeedback.message}
              </div>
            )}
          </form>

          {/* Giải thích chi tiết khi trả lời đúng */}
          {showExplanation[currentQuestion.id] && (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 sm:p-5 dark:border-emerald-900/50 dark:bg-emerald-950/30 animate-fadeIn">
              <h3 className="text-sm font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5 mb-1.5">
                <span>🎉</span>
                <span>Thông tin bổ ích & Giải thích chi tiết:</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {currentQuestion.explanation}
              </p>
              {currentQuestion.funFact && (
                <div className="mt-3 rounded-xl bg-white/80 p-3 text-xs text-slate-600 dark:bg-slate-900/70 dark:text-slate-400 border border-emerald-200/50 dark:border-emerald-800/40">
                  ✨ <strong>Sự thật thú vị: </strong>
                  {currentQuestion.funFact}
                </div>
              )}
            </div>
          )}

          {/* Điều hướng Trước / Sau */}
          <div className="flex items-center justify-between border-t border-slate-200/80 pt-5 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <span>« Câu trước</span>
            </button>

            {currentIndex < totalQuestions - 1 ? (
              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
                className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 px-5 py-2 text-xs sm:text-sm font-bold text-white shadow-sm transition active:scale-95"
              >
                <span>Câu tiếp theo »</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setIsGameOver(true);
                  playSound('victory');
                }}
                className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-6 py-2 text-xs sm:text-sm font-bold text-white shadow-md transition active:scale-95"
              >
                <span>Nộp bài & Xem kết quả 🏁</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
