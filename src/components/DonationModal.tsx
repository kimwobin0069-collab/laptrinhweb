import React, { useState } from 'react';
import { DONATION_CONFIG } from '../data/donation';
import { IconX, IconCopy, IconCheck, IconHeart } from './Icons';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [selectedAmount, setSelectedAmount] = useState<number>(20000);
  const [activeTab, setActiveTab] = useState<'bank' | 'momo'>('bank');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => {
      setCopiedField((prev) => (prev === fieldId ? null : prev));
    }, 2000);
  };

  const vietQrUrl = `https://img.vietqr.io/image/${DONATION_CONFIG.bank.bankCode}-${DONATION_CONFIG.bank.accountNumber}-compact2.png?amount=${selectedAmount}&addInfo=${encodeURIComponent(
    DONATION_CONFIG.bank.defaultMemo
  )}&accountName=${encodeURIComponent(DONATION_CONFIG.bank.accountName)}`;

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
        className="relative w-full max-w-lg max-h-[92vh] flex flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 transition-all"
        role="dialog"
        aria-modal="true"
        aria-label="Bao tôi ly cà phê"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-700 dark:text-amber-400 text-xl shadow-xs">
              ☕
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                Bao Tôi Một Ly Cà Phê
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Tiếp thêm năng lượng sáng tạo cho Duy Khoa
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition"
            aria-label="Đóng"
          >
            <IconX size={18} />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="overflow-y-auto p-6 space-y-5 text-xs sm:text-sm">
          {/* Lời ngỏ tinh tế */}
          <div className="rounded-2xl bg-gradient-to-r from-amber-50/80 via-orange-50/50 to-amber-50/80 p-4 border border-amber-200/60 dark:from-amber-950/20 dark:via-orange-950/15 dark:to-amber-950/20 dark:border-amber-900/40">
            <p className="text-xs text-amber-900/90 dark:text-amber-200/90 leading-relaxed">
              Trang web <strong>Học Lập Trình Web</strong> được xây dựng hoàn toàn phi lợi nhuận dành cho các bạn học sinh THPT. Mọi sự ủng hộ dù là một ly cà phê nhỏ cũng là nguồn động viên rất lớn giúp tác giả duy trì máy chủ và viết thêm nhiều bài học hay! ❤️
            </p>
          </div>

          {/* Chọn loại cà phê / Mức ủng hộ */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
              Chọn một ly cà phê bạn muốn mời:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {DONATION_CONFIG.tiers.map((tier) => {
                const isSelected = selectedAmount === tier.amount;
                return (
                  <button
                    key={tier.amount}
                    type="button"
                    onClick={() => setSelectedAmount(tier.amount)}
                    className={`flex flex-col items-center justify-center p-2.5 rounded-2xl border transition-all ${
                      isSelected
                        ? 'border-amber-500 bg-amber-500/10 text-amber-900 dark:text-amber-200 ring-2 ring-amber-500/30 scale-[1.02]'
                        : 'border-slate-200 bg-slate-50/60 text-slate-700 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-850 dark:text-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <span className="text-xl mb-0.5">{tier.emoji}</span>
                    <span className="font-bold text-xs">{tier.label}</span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 text-center leading-tight mt-0.5">
                      {tier.description.split('(')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Chuyển đổi phương thức: Ngân hàng (VietQR) / MoMo */}
          <div className="flex rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
            <button
              type="button"
              onClick={() => setActiveTab('bank')}
              className={`flex-1 rounded-lg py-1.5 text-xs font-bold transition-all ${
                activeTab === 'bank'
                  ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-900 dark:text-white'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              Chuyển khoản (VietQR)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('momo')}
              className={`flex-1 rounded-lg py-1.5 text-xs font-bold transition-all ${
                activeTab === 'momo'
                  ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-900 dark:text-white'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              Ví MoMo
            </button>
          </div>

          {/* Tab 1: VietQR */}
          {activeTab === 'bank' && (
            <div className="flex flex-col sm:flex-row items-center gap-5 rounded-2xl border border-slate-200/90 bg-white p-4 dark:border-slate-800 dark:bg-slate-850">
              {/* QR Code Container */}
              <div className="flex flex-col items-center justify-center shrink-0">
                <div className="relative overflow-hidden rounded-2xl border-2 border-amber-500/30 bg-white p-2 shadow-sm">
                  <img
                    src={vietQrUrl}
                    alt="Mã QR Chuyển khoản VietQR"
                    className="w-36 h-36 object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 font-medium">
                  Quét mã bằng app ngân hàng
                </span>
              </div>

              {/* Bank Details */}
              <div className="flex-1 w-full space-y-2.5 text-xs">
                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                    Ngân hàng
                  </span>
                  <p className="font-bold text-slate-800 dark:text-slate-100">
                    {DONATION_CONFIG.bank.bankName}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                    Số tài khoản
                  </span>
                  <div className="flex items-center justify-between gap-2 mt-0.5">
                    <span className="font-mono font-bold text-sm text-blue-600 dark:text-blue-400">
                      {DONATION_CONFIG.bank.accountNumber}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(DONATION_CONFIG.bank.accountNumber, 'accNumber')}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 text-[11px] font-medium transition"
                    >
                      {copiedField === 'accNumber' ? (
                        <>
                          <IconCheck size={13} className="text-emerald-500" />
                          <span className="text-emerald-600 dark:text-emerald-400">Đã chép</span>
                        </>
                      ) : (
                        <>
                          <IconCopy size={13} />
                          <span>Sao chép</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                    Chủ tài khoản
                  </span>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    {DONATION_CONFIG.bank.accountName}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                    Nội dung chuyển khoản
                  </span>
                  <div className="flex items-center justify-between gap-2 mt-0.5">
                    <span className="font-mono text-slate-700 dark:text-slate-300">
                      {DONATION_CONFIG.bank.defaultMemo}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(DONATION_CONFIG.bank.defaultMemo, 'memo')}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 text-[11px] font-medium transition"
                    >
                      {copiedField === 'memo' ? (
                        <>
                          <IconCheck size={13} className="text-emerald-500" />
                          <span className="text-emerald-600 dark:text-emerald-400">Đã chép</span>
                        </>
                      ) : (
                        <>
                          <IconCopy size={13} />
                          <span>Sao chép</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: MoMo */}
          {activeTab === 'momo' && (
            <div className="rounded-2xl border border-pink-200/80 bg-pink-50/40 p-5 dark:border-pink-900/40 dark:bg-pink-950/20 text-xs space-y-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#a50064] text-white font-black text-xs">
                  M
                </span>
                <span className="font-bold text-slate-900 dark:text-white text-sm">
                  Ủng hộ qua Ví điện tử MoMo
                </span>
              </div>

              <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-white dark:bg-slate-900 border border-pink-200/60 dark:border-pink-900/60">
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">Số điện thoại MoMo</span>
                  <span className="font-mono font-bold text-sm text-[#a50064] dark:text-pink-400">
                    {DONATION_CONFIG.momo.phoneNumber}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
                    Chủ tài khoản: <strong>{DONATION_CONFIG.momo.accountName}</strong>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(DONATION_CONFIG.momo.phoneNumber, 'momoPhone')}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-pink-100 hover:bg-pink-200 text-pink-700 dark:bg-pink-950 dark:hover:bg-pink-900 dark:text-pink-300 text-xs font-semibold transition"
                >
                  {copiedField === 'momoPhone' ? (
                    <>
                      <IconCheck size={14} className="text-emerald-500" />
                      <span>Đã chép</span>
                    </>
                  ) : (
                    <>
                      <IconCopy size={14} />
                      <span>Sao chép SĐT</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                Khi chuyển khoản MoMo, bạn có thể nhập lời nhắn <code className="px-1.5 py-0.5 rounded bg-pink-100 dark:bg-pink-900/50 font-mono text-pink-700 dark:text-pink-300">Ung ho Hoc Lap Trinh Web</code> để tác giả biết nhé!
              </p>
            </div>
          )}

          {/* Lời nhắn gửi tinh tế */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 dark:text-slate-500 text-center pt-1">
            <IconHeart size={14} className="text-rose-500 shrink-0" />
            <span>Việc ủng hộ là hoàn toàn tự nguyện. Cảm ơn các bạn học sinh đã luôn ủng hộ trang web!</span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 dark:bg-slate-850 border-t border-slate-100 dark:border-slate-800 flex justify-end shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200/80 hover:bg-slate-300 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-750 dark:text-slate-200 font-semibold text-xs transition"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
