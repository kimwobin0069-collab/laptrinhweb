import { useEffect, useState } from 'react';

export function StaticDynamicDemo() {
  const [person, setPerson] = useState('An');
  return (
    <div className="concept-demo">
      <div className="concept-toolbar">
        <span>MÔ PHỎNG · ĐỔI NGƯỜI TRUY CẬP</span>
        <div role="group" aria-label="Chọn người truy cập">
          {['An', 'Bình'].map((name) => (
            <button
              key={name}
              aria-pressed={person === name}
              onClick={() => setPerson(name)}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
      <div className="web-type-grid">
        <article>
          <span className="concept-label">01 / WEB TĨNH</span>
          <h3>Tệp đã có sẵn</h3>
          <div className="request-flow">
            <code>Trình duyệt</code>
            <span>⇄</span>
            <code>Web Server</code>
          </div>
          <div className="sample-response">
            <small>THÔNG BÁO CỦA TRƯỜNG</small>
            <h4>Lịch sinh hoạt câu lạc bộ</h4>
            <p>Thứ Sáu · 15:00 · Phòng Tin học</p>
          </div>
          <p>
            Cùng một tệp được gửi cho An và Bình. Đổi người truy cập không làm
            thay đổi nội dung của tệp.
          </p>
        </article>
        <article>
          <span className="concept-label">02 / WEB ĐỘNG PHÍA MÁY CHỦ</span>
          <h3>Phản hồi theo yêu cầu</h3>
          <div className="request-flow">
            <code>Trình duyệt</code>
            <span>⇄</span>
            <code>Ứng dụng</code>
            <span>⇄</span>
            <code>DB</code>
          </div>
          <div className="sample-response" aria-live="polite">
            <small>CỔNG HỌC TẬP · TÀI KHOẢN {person.toUpperCase()}</small>
            <h4>Xin chào, {person}!</h4>
            <p>
              Điểm Tin học: <strong>{person === 'An' ? '9,0' : '8,5'}</strong>
            </p>
          </div>
          <p>
            Ứng dụng kiểm tra tài khoản và lấy dữ liệu phù hợp để tạo phản hồi
            riêng cho từng người.
          </p>
        </article>
      </div>
      <p className="concept-note">
        Đây là mô phỏng trong trình duyệt với dữ liệu mẫu, không kết nối máy
        chủ hay cơ sở dữ liệu thật. Trong hệ thống thực tế, máy chủ phải xác
        thực và kiểm tra quyền xem điểm.
      </p>
    </div>
  );
}

/* =========================================================================
   MÔ PHỎNG TƯƠNG TÁC THẾ HỆ MỚI: HÀNH TRÌNH TRUY CẬP WEB (SINH ĐỘNG & GỌN CHỮ)
   ========================================================================= */

interface StepConfig {
  step: number;
  speaker: string;
  avatar: string;
  dialogue: string;
  activePath: 'none' | 'client-dns' | 'dns-client' | 'client-server' | 'server-db' | 'server-client' | 'client-render';
  packetText: string;
  packetIcon: string;
  packetColor: string;
  activeNodes: ('client' | 'dns' | 'server' | 'database')[];
  clientScreen: 'input' | 'search-dns' | 'dns-ok' | 'sending-req' | 'waiting' | 'got-pack' | 'done-web';
  shortAction: string;
}

const STEPS_DATA: StepConfig[] = [
  {
    step: 1,
    speaker: 'Bạn (Máy khách)',
    avatar: '💻',
    dialogue: 'Mình muốn xem bài học! Nhập "thpt-honggam.edu.vn" vào thanh địa chỉ rồi nhấn Enter nào!',
    activePath: 'none',
    packetText: 'Nhấn phím Enter ⏎',
    packetIcon: '⌨️',
    packetColor: '#3b82f6',
    activeNodes: ['client'],
    clientScreen: 'input',
    shortAction: '1. Nhập URL trang web và nhấn Enter'
  },
  {
    step: 2,
    speaker: 'Máy khách ➔ Máy chủ DNS',
    avatar: '🔍',
    dialogue: 'DNS ơi! Bạn tra giúp mình số IP của trang "thpt-honggam.edu.vn" ở đâu với?',
    activePath: 'client-dns',
    packetText: 'Hỏi IP: thpt-honggam.edu.vn?',
    packetIcon: '📨',
    packetColor: '#8b5cf6',
    activeNodes: ['client', 'dns'],
    clientScreen: 'search-dns',
    shortAction: '2. Hỏi danh bạ DNS tìm địa chỉ IP máy chủ'
  },
  {
    step: 3,
    speaker: 'Máy chủ DNS ➔ Máy khách',
    avatar: '📖',
    dialogue: 'Tìm thấy rồi! Cuốn danh bạ ghi số nhà (IP) của trường là 118.69.18.25 nha!',
    activePath: 'dns-client',
    packetText: 'Trả lời: IP = 118.69.18.25',
    packetIcon: '🏷️',
    packetColor: '#10b981',
    activeNodes: ['client', 'dns'],
    clientScreen: 'dns-ok',
    shortAction: '3. DNS gửi lại địa chỉ IP cho máy khách'
  },
  {
    step: 4,
    speaker: 'Máy khách ➔ Máy chủ Web',
    avatar: '📤',
    dialogue: 'Chào máy chủ 118.69.18.25! Cho mình gửi Yêu cầu (Request) xin dữ liệu bài học nhé!',
    activePath: 'client-server',
    packetText: 'HTTPS GET /bai-hoc',
    packetIcon: '🚀',
    packetColor: '#f59e0b',
    activeNodes: ['client', 'server'],
    clientScreen: 'sending-req',
    shortAction: '4. Gửi yêu cầu HTTPS (Request) đến máy chủ'
  },
  {
    step: 5,
    speaker: 'Máy chủ Web ⇄ Database',
    avatar: '🗄️',
    dialogue: 'Database ơi! Tra cứu giúp tôi nội dung bài học và bảng điểm học sinh để gửi cho bạn ấy!',
    activePath: 'server-db',
    packetText: 'SQL: SELECT * FROM bai_hoc',
    packetIcon: '⚡',
    packetColor: '#ec4899',
    activeNodes: ['server', 'database'],
    clientScreen: 'waiting',
    shortAction: '5. Máy chủ truy vấn Cơ sở dữ liệu (Database)'
  },
  {
    step: 6,
    speaker: 'Máy chủ Web ➔ Máy khách',
    avatar: '📦',
    dialogue: 'Đã chuẩn bị xong! Đóng gói khung HTML + màu CSS + mã JS gửi bưu phẩm về cho bạn đây!',
    activePath: 'server-client',
    packetText: 'HTTP 200 OK [HTML + CSS + JS]',
    packetIcon: '🎁',
    packetColor: '#10b981',
    activeNodes: ['client', 'server'],
    clientScreen: 'got-pack',
    shortAction: '6. Máy chủ gửi Phản hồi (Response) kèm mã nguồn'
  },
  {
    step: 7,
    speaker: 'Máy khách (Trình duyệt)',
    avatar: '🎨',
    dialogue: 'Nhận được mã rồi! Trình duyệt bóc tách HTML, CSS, JS và "VẼ" ra website lung linh! 🎉',
    activePath: 'client-render',
    packetText: 'Vẽ giao diện (Rendering) xong!',
    packetIcon: '⭐',
    packetColor: '#2563eb',
    activeNodes: ['client'],
    clientScreen: 'done-web',
    shortAction: '7. Trình duyệt Render giao diện website hoàn chỉnh'
  }
];

export function WebMechanism() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = window.setInterval(() => {
      setCurrentIdx((prev) => {
        if (prev === STEPS_DATA.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 4000);
    return () => window.clearInterval(interval);
  }, [isPlaying]);

  const step = STEPS_DATA[currentIdx];

  const handleNext = () => {
    if (currentIdx < STEPS_DATA.length - 1) setCurrentIdx(currentIdx + 1);
  };
  const handlePrev = () => {
    if (currentIdx > 0) setCurrentIdx(currentIdx - 1);
  };
  const togglePlay = () => {
    if (currentIdx === STEPS_DATA.length - 1) {
      setCurrentIdx(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="web-interactive-circuit my-8 rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
      
      {/* 1. Header điều khiển gọn nhẹ */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-50/90 px-4 py-3 sm:px-6 dark:border-slate-800 dark:bg-slate-850">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-xs shadow-sm">
            ⚡
          </span>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight">
              Sơ Đồ Tương Tác: 7 Bước Tải Một Trang Web
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Nhấn nút hoặc chạm vào sơ đồ để theo dõi gói tin di chuyển
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={togglePlay}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold shadow-sm transition ${
              isPlaying
                ? 'bg-amber-500 hover:bg-amber-600 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {isPlaying ? '⏸ Tạm dừng' : '▶ Tự động chạy'}
          </button>
          <button
            onClick={() => {
              setIsPlaying(false);
              setCurrentIdx(0);
            }}
            title="Xem lại từ đầu"
            className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            ↺ Đầu trang
          </button>
        </div>
      </div>

      {/* 2. Bong bóng đối thoại vui nhộn (Dialogue Speech Bubble) - Ít chữ, siêu sinh động */}
      <div className="bg-gradient-to-r from-blue-50 via-indigo-50/60 to-purple-50 p-3.5 sm:p-4 border-b border-slate-200 dark:border-slate-800 dark:from-slate-900 dark:via-blue-950/40 dark:to-purple-950/30">
        <div className="flex items-start gap-3 anim-speech-pop" key={step.step}>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white shadow-md text-xl border border-slate-100 dark:bg-slate-800 dark:border-slate-700">
            {step.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold text-blue-700 dark:text-blue-300 uppercase tracking-wide">
                {step.speaker}
              </span>
              <span className="rounded-full bg-blue-100 px-2 py-0.2 text-[10px] font-bold text-blue-800 dark:bg-blue-900/80 dark:text-blue-200">
                Bước {step.step}/7
              </span>
            </div>
            <p className="mt-1 text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-100 leading-snug">
              &ldquo;{step.dialogue}&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* 3. SÂN KHẤU TƯƠNG TÁC CHÍNH (INTERACTIVE TOPOLOGY CANVAS) */}
      <div className="relative p-4 sm:p-6 bg-slate-50/40 dark:bg-slate-950/50">
        
        {/* Layout: Client ở Bên Trái, Hệ thống Máy chủ ở Bên Phải */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
          
          {/* CỘT TRÁI: MÁY KHÁCH (CLIENT / BẠN) - 5 COLS */}
          <div className="lg:col-span-5">
            <div
              className={`rounded-2xl border-2 p-3.5 sm:p-4 transition-all duration-300 ${
                step.activeNodes.includes('client')
                  ? 'border-blue-500 bg-white shadow-xl ring-4 ring-blue-500/10 dark:bg-slate-850 dark:border-blue-400 glow-client'
                  : 'border-slate-200 bg-white/70 opacity-75 dark:border-slate-800 dark:bg-slate-850/60'
              }`}
            >
              {/* Node Header */}
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-xl">💻</span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                      MÁY KHÁCH (CLIENT)
                    </h4>
                    <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold">
                      Trình duyệt của bạn
                    </span>
                  </div>
                </div>
                <span className="rounded-full bg-blue-100 text-blue-700 px-2 py-0.5 text-[10px] font-bold dark:bg-blue-950 dark:text-blue-300">
                  Phía Bạn
                </span>
              </div>

              {/* Laptop Screen Simulator */}
              <div className="rounded-xl border border-slate-300 bg-slate-900 p-2 shadow-inner dark:border-slate-750">
                {/* Browser bar */}
                <div className="flex items-center gap-2 rounded bg-slate-800 px-2.5 py-1 text-slate-200 text-xs">
                  <div className="flex gap-1 shrink-0">
                    <span className="h-2 w-2 rounded-full bg-rose-500" />
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="flex flex-1 items-center gap-1 font-mono text-[11px] truncate text-slate-300">
                    <span className="text-emerald-400 text-[10px]">🔒</span>
                    <span className="truncate">thpt-honggam.edu.vn</span>
                  </div>
                </div>

                {/* Live Screen Content */}
                <div className="mt-2 h-28 rounded-lg bg-white p-2.5 text-center text-slate-800 dark:bg-slate-950 dark:text-slate-100 flex flex-col items-center justify-center overflow-hidden transition-all">
                  
                  {step.clientScreen === 'input' && (
                    <div className="space-y-2">
                      <p className="text-xs text-slate-500">Thanh URL đã sẵn sàng</p>
                      <button
                        onClick={handleNext}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-bold text-white shadow-md hover:bg-blue-700 anim-packet-pulse"
                      >
                        🖱️ Bấm Enter để gửi đi!
                      </button>
                    </div>
                  )}

                  {step.clientScreen === 'search-dns' && (
                    <div className="space-y-1 animate-pulse">
                      <span className="text-2xl">🔍</span>
                      <p className="text-xs font-bold text-purple-600 dark:text-purple-400">
                        Đang hỏi DNS tìm IP...
                      </p>
                    </div>
                  )}

                  {step.clientScreen === 'dns-ok' && (
                    <div className="space-y-1">
                      <span className="text-xl">🏷️</span>
                      <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        Đã có IP: 118.69.18.25!
                      </p>
                      <p className="text-[10px] text-slate-400">Chuẩn bị gửi Request...</p>
                    </div>
                  )}

                  {step.clientScreen === 'sending-req' && (
                    <div className="space-y-1.5">
                      <div className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-amber-500 border-t-transparent" />
                      <p className="text-xs font-bold text-amber-600 dark:text-amber-400">
                        Đang gửi Request đến Máy chủ...
                      </p>
                    </div>
                  )}

                  {step.clientScreen === 'waiting' && (
                    <div className="space-y-1.5">
                      <div className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-rose-500 border-t-transparent" />
                      <p className="text-xs font-bold text-rose-600 dark:text-rose-400">
                        Máy chủ đang xử lý dữ liệu...
                      </p>
                    </div>
                  )}

                  {step.clientScreen === 'got-pack' && (
                    <div className="space-y-1 animate-pulse">
                      <span className="text-2xl">🎁</span>
                      <p className="text-xs font-bold text-emerald-600">
                        Đã nhận: [HTML + CSS + JS]!
                      </p>
                      <p className="text-[10px] text-slate-400">Trình duyệt chuẩn bị Render</p>
                    </div>
                  )}

                  {step.clientScreen === 'done-web' && (
                    <div className="w-full text-left bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg text-white shadow-md">
                      <div className="flex items-center justify-between text-[9px] border-b border-white/20 pb-0.5">
                        <span className="font-extrabold">THPT LÊ THỊ HỒNG GẤM</span>
                        <span className="bg-emerald-400 text-slate-900 px-1 rounded font-bold">10/10 ⭐</span>
                      </div>
                      <div className="mt-1 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-bold">Lê Văn Nam · 12A1</p>
                          <p className="text-[8px] text-blue-100">Điểm Tin học: 10.0</p>
                        </div>
                        <span className="rounded bg-white/20 px-1.5 py-0.5 text-[9px] font-bold">
                          Đã tải xong 🎉
                        </span>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>

          {/* CỘT GIỮA & PHẢI: ĐƯỜNG TRUYỀN & CÁC MÁY CHỦ - 7 COLS */}
          <div className="lg:col-span-7 space-y-3.5">
            
            {/* TRẠM 1 (TOP): MÁY CHỦ DNS */}
            <div
              className={`relative rounded-xl border-2 p-3 transition-all duration-300 ${
                step.activeNodes.includes('dns')
                  ? 'border-purple-500 bg-white shadow-lg ring-4 ring-purple-500/10 dark:bg-slate-850 dark:border-purple-400 glow-dns'
                  : 'border-slate-200 bg-white/70 opacity-75 dark:border-slate-800 dark:bg-slate-850/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">📖</span>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      MÁY CHỦ DNS (DANH BẠ INTERNET)
                    </h5>
                    <span className="text-[10px] text-purple-600 dark:text-purple-400 font-semibold">
                      Chuyển tên miền ➔ Địa chỉ IP
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-[11px]">
                  <span className="text-slate-400">thpt-honggam.edu.vn</span>
                  <span className="text-slate-400">➔</span>
                  <span
                    className={`rounded px-1.5 py-0.5 font-bold transition-all ${
                      step.activeNodes.includes('dns')
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300'
                    }`}
                  >
                    118.69.18.25
                  </span>
                </div>
              </div>

              {/* Đường ống kết nối Client ⇄ DNS */}
              {(step.activePath === 'client-dns' || step.activePath === 'dns-client') && (
                <div className="mt-2.5 pt-2 border-t border-purple-100 dark:border-purple-900/60 flex items-center justify-between text-xs font-bold text-purple-700 dark:text-purple-300 anim-speech-pop">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-purple-500 anim-packet-pulse" />
                    <span>Đường truyền DNS:</span>
                  </span>
                  <span className="rounded-full bg-purple-100 dark:bg-purple-900/80 px-2.5 py-0.5 text-[11px] font-mono shadow-sm">
                    {step.packetIcon} {step.packetText}
                  </span>
                </div>
              )}
            </div>

            {/* TRẠM 2 (CENTER): MÁY CHỦ WEB (WEB SERVER) */}
            <div
              className={`relative rounded-xl border-2 p-3 transition-all duration-300 ${
                step.activeNodes.includes('server')
                  ? 'border-amber-500 bg-white shadow-lg ring-4 ring-amber-500/10 dark:bg-slate-850 dark:border-amber-400 glow-server'
                  : 'border-slate-200 bg-white/70 opacity-75 dark:border-slate-800 dark:bg-slate-850/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🖥️</span>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      MÁY CHỦ WEB (WEB SERVER)
                    </h5>
                    <span className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold">
                      Tiếp nhận yêu cầu & Đóng gói phản hồi
                    </span>
                  </div>
                </div>

                {/* 3 Đèn LED nhấp nháy */}
                <div className="flex items-center gap-1.5 bg-slate-900 px-2 py-1 rounded-md text-[10px] font-mono text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 anim-led-1" />
                  <span className="h-2 w-2 rounded-full bg-blue-400 anim-led-2" />
                  <span className="h-2 w-2 rounded-full bg-amber-400 anim-led-3" />
                  <span>Port 443</span>
                </div>
              </div>

              {/* Đường ống kết nối Client ⇄ Web Server */}
              {(step.activePath === 'client-server' || step.activePath === 'server-client') && (
                <div className="mt-2.5 pt-2 border-t border-amber-100 dark:border-amber-900/60 flex items-center justify-between text-xs font-bold text-amber-700 dark:text-amber-300 anim-speech-pop">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-amber-500 anim-packet-pulse" />
                    <span>Đường truyền HTTPS:</span>
                  </span>
                  <span className="rounded-full bg-amber-100 dark:bg-amber-900/80 px-2.5 py-0.5 text-[11px] font-mono shadow-sm">
                    {step.packetIcon} {step.packetText}
                  </span>
                </div>
              )}
            </div>

            {/* TRẠM 3 (BOTTOM): CƠ SỞ DỮ LIỆU (DATABASE) */}
            <div
              className={`relative rounded-xl border-2 p-3 transition-all duration-300 ${
                step.activeNodes.includes('database')
                  ? 'border-rose-500 bg-white shadow-lg ring-4 ring-rose-500/10 dark:bg-slate-850 dark:border-rose-400 glow-db'
                  : 'border-slate-200 bg-white/70 opacity-75 dark:border-slate-800 dark:bg-slate-850/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🗄️</span>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      CƠ SỞ DỮ LIỆU (DATABASE)
                    </h5>
                    <span className="text-[10px] text-rose-600 dark:text-rose-400 font-semibold">
                      Kho chứa bảng điểm & bài học
                    </span>
                  </div>
                </div>

                <span className="rounded bg-rose-100 px-2 py-0.5 text-[10px] font-mono font-bold text-rose-700 dark:bg-rose-950 dark:text-rose-300">
                  bảng: bang_diem
                </span>
              </div>

              {/* Đường ống kết nối Web Server ⇄ Database */}
              {step.activePath === 'server-db' && (
                <div className="mt-2.5 pt-2 border-t border-rose-100 dark:border-rose-900/60 flex items-center justify-between text-xs font-bold text-rose-700 dark:text-rose-300 anim-speech-pop">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-rose-500 anim-packet-pulse" />
                    <span>Truy vấn nội bộ:</span>
                  </span>
                  <span className="rounded-full bg-rose-100 dark:bg-rose-900/80 px-2.5 py-0.5 text-[11px] font-mono shadow-sm">
                    {step.packetIcon} {step.packetText}
                  </span>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>

      {/* 4. Thanh điều hướng 7 bước trực quan (Interactive Stepper Control) */}
      <div className="border-t border-slate-200 bg-slate-50 p-3 sm:p-4 dark:border-slate-800 dark:bg-slate-850">
        
        {/* Step dots & title */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xs">
              {step.step}
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100">
              {step.shortAction}
            </span>
          </div>

          {/* 7 Nút bấm chọn bước nhanh */}
          <div className="flex items-center gap-1.5">
            {STEPS_DATA.map((s, idx) => (
              <button
                key={s.step}
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentIdx(idx);
                }}
                className={`h-7 w-7 rounded-lg text-xs font-bold transition-all ${
                  idx === currentIdx
                    ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-400/40'
                    : 'bg-white text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                }`}
                title={s.shortAction}
              >
                {s.step}
              </button>
            ))}
          </div>
        </div>

        {/* Nút điều khiển Trước / Sau */}
        <div className="flex items-center justify-between pt-1">
          <button
            onClick={handlePrev}
            disabled={currentIdx === 0}
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            ← Bước trước
          </button>

          <span className="text-[11px] font-mono text-slate-400">
            {currentIdx + 1} / {STEPS_DATA.length}
          </span>

          <button
            onClick={handleNext}
            disabled={currentIdx === STEPS_DATA.length - 1}
            className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-blue-700 disabled:opacity-30 disabled:pointer-events-none shadow-sm"
          >
            {currentIdx === STEPS_DATA.length - 1 ? '✓ Hoàn tất' : 'Bước tiếp theo →'}
          </button>
        </div>

      </div>

    </div>
  );
}
