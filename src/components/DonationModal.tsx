import { useEffect, useRef, useState } from 'react';
import { buildDonationQrUrl, DONATION_CONFIG, formatDonationAmount, DrinkKind } from '../data/donation';
import { IconX, IconCopy, IconCheck, IconArrowRight } from './Icons';
import { SupportDrink, SupportHeart } from './SupportArtwork';
import './donation.css';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function DonationQr({ src, label }: { src: string; label: string }) {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setStatus('ready');
      return;
    }

    setStatus('loading');

    const interval = setInterval(() => {
      if (imgRef.current && imgRef.current.complete) {
        if (imgRef.current.naturalWidth > 0) {
          setStatus('ready');
          clearInterval(interval);
        } else {
          setStatus('error');
          clearInterval(interval);
        }
      }
    }, 100);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      if (imgRef.current && imgRef.current.naturalWidth > 0) {
        setStatus('ready');
      } else if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth === 0) {
        setStatus('error');
      } else {
        setStatus('ready');
      }
    }, 1200);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [src]);

  return (
    <div className={`support-qr-frame qr-${status}`} aria-busy={status === 'loading'}>
      <div className="support-qr-viewfinder">
        <span className="qr-reticle corner-tl" />
        <span className="qr-reticle corner-tr" />
        <span className="qr-reticle corner-bl" />
        <span className="qr-reticle corner-br" />

        {status === 'loading' && (
          <div className="support-qr-placeholder" role="status">
            <div className="support-qr-spinner" />
            <span>Đang tải mã VietQR…</span>
          </div>
        )}

        {status === 'error' && (
          <div className="support-qr-error" role="status">
            <p>Chưa tải được mã QR.</p>
            <small>Bạn vẫn có thể chuyển khoản bằng thông tin bên dưới.</small>
          </div>
        )}

        <img
          ref={imgRef}
          src={src}
          alt={label}
          width="180"
          height="180"
          loading="eager"
          decoding="async"
          style={{
            display: status === 'error' ? 'none' : 'block',
            opacity: status === 'ready' ? 1 : 0.05,
            transition: 'opacity 0.2s ease',
          }}
          onLoad={() => setStatus('ready')}
          onError={() => setStatus('error')}
        />
      </div>
    </div>
  );
}

function DonationDialog({ onClose }: { onClose: () => void }) {
  const [selectedId, setSelectedId] = useState<DrinkKind | null>('coffee');
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');
  const dialog = useRef<HTMLDialogElement>(null);
  const copyTimer = useRef<ReturnType<typeof setTimeout>>();

  const selectedTier = DONATION_CONFIG.tiers.find((tier) => tier.id === selectedId);
  const effectiveAmount = selectedTier?.amount;
  const qrUrl = buildDonationQrUrl(effectiveAmount);

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (!element.open) element.showModal();

    return () => {
      clearTimeout(copyTimer.current);
      if (element.open) element.close();
      document.body.style.overflow = oldOverflow;
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, []);

  const copyAccount = async () => {
    clearTimeout(copyTimer.current);
    try {
      await navigator.clipboard.writeText(DONATION_CONFIG.bank.accountNumber);
      setCopyStatus('copied');
      copyTimer.current = setTimeout(() => setCopyStatus('idle'), 2500);
    } catch {
      setCopyStatus('error');
    }
  };

  const handleSelectDrink = (id: DrinkKind) => {
    setSelectedId((current) => (current === id ? null : id));
  };

  return (
    <dialog
      ref={dialog}
      className="support-dialog"
      aria-labelledby="support-title"
      aria-describedby="support-intro"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="support-dialog-shell">
        {/* Header */}
        <header className="support-dialog-heading">
          <div className="support-coffee-heading">
            <span className="support-coffee-mark">
              <SupportDrink kind="coffee" />
            </span>
            <div className="support-coffee-titles">
              <h2 id="support-title">Bao tôi ly cà phê nhé!</h2>
            </div>
          </div>
          <button
            type="button"
            className="support-close"
            onClick={onClose}
            aria-label="Đóng cửa sổ ủng hộ"
            title="Đóng (Esc)"
          >
            <IconX size={18} />
          </button>
        </header>

        {/* Lời nhắn kéo dài toàn chiều rộng (Full width) */}
        <div className="support-announcement-wrap">
          <div className="support-teacher-card" id="support-intro">
            <div className="teacher-card-badge">
              <span className="teacher-icon">☕</span>
              <span>Lời nhắn!</span>
            </div>
            <p>
              Trang web <strong>Học Lập Trình Web THPT</strong> được xây dựng hoàn toàn{' '}
              <strong>phi lợi nhuận</strong> nhằm mang kiến thức bổ ích đến gần hơn với
              học sinh. Mọi sự ủng hộ dù là một ly cà phê nhỏ hay lời chúc đều là nguồn động viên vô giá
              giúp tôi duy trì máy chủ và phát triển thêm nhiều bài học hay!
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="support-dialog-body">
          {/* Cột trái: Chọn món nước */}
          <section className="support-choice-panel">
            {/* Menu món nước */}
            <div className="support-drink-menu">
              <div className="support-menu-caption">
                <div className="menu-caption-left">
                  <h3>Hôm nay, bạn muốn mời thầy món gì?</h3>
                </div>
                {selectedId && (
                  <button
                    type="button"
                    className="support-quick-clear"
                    onClick={() => setSelectedId(null)}
                  >
                    Bỏ chọn món (Tự nhập số tiền)
                  </button>
                )}
              </div>

              <div className="support-drink-grid" role="group" aria-label="Chọn món nước ủng hộ">
                {DONATION_CONFIG.tiers.map((tier) => {
                  const isChosen = selectedId === tier.id;
                  const isPopular = tier.id === 'coffee';
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      className={`support-drink-option ${isChosen ? 'is-selected' : ''}`}
                      aria-pressed={isChosen}
                      aria-label={`${tier.label} - ${formatDonationAmount(tier.amount)}`}
                      onClick={() => handleSelectDrink(tier.id)}
                    >
                      <span className="support-drink-visual">
                        <SupportDrink kind={tier.id} />
                      </span>
                      <div className="support-drink-info">
                        <div className="support-drink-title-row">
                          <span className="support-drink-name">{tier.label}</span>
                          {isPopular && <span className="drink-popular-tag">Gợi ý ⭐</span>}
                        </div>
                        <span className="support-drink-description">{tier.description}</span>
                      </div>
                      <div className="support-drink-action">
                        <strong className="support-drink-price">
                          {formatDonationAmount(tier.amount)}
                        </strong>
                        <span className="support-selection-check" aria-hidden="true">
                          <IconCheck size={12} />
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Cam kết phi lợi nhuận */}
            <div className="support-voluntary">
              <SupportHeart className="voluntary-heart" />
              <span>Học liệu luôn miễn phí 100% · Mọi sự ủng hộ là hoàn toàn tự nguyện.</span>
            </div>
          </section>

          {/* Cột phải: Phiếu thanh toán VietQR & Thông tin ngân hàng */}
          <aside className="support-payment-panel" aria-label="Thông tin chuyển khoản qua ngân hàng">
            {/* Khung mã VietQR */}
            <div className="support-qr-wrapper">
              <DonationQr
                src={qrUrl}
                label={`Mã VietQR chuyển khoản ủng hộ thầy Duy Khoa - ${
                  effectiveAmount ? formatDonationAmount(effectiveAmount) : 'Tự chọn số tiền'
                }`}
              />
            </div>

            {/* Thẻ thông tin ngân hàng điện tử (MB Bank Digital Card) */}
            <div className="support-bank-card">
              <div className="bank-card-pattern" aria-hidden="true" />

              <div className="bank-card-top">
                <div className="bank-badge">
                  <span className="bank-logo-tag">MB</span>
                  <span className="bank-full-name">{DONATION_CONFIG.bank.bankName}</span>
                </div>
                <div className="bank-card-chip" aria-hidden="true">
                  <svg width="22" height="18" viewBox="0 0 24 20" fill="none" className="chip-svg">
                    <rect x="0.5" y="0.5" width="23" height="19" rx="3.5" stroke="#fcd34d" strokeOpacity="0.8" fill="#fbbf24" fillOpacity="0.25"/>
                    <path d="M0.5 7H8M0.5 13H8M16 7H23.5M16 13H23.5M8 7V13M16 7V13M8 10H16" stroke="#fcd34d" strokeOpacity="0.8"/>
                  </svg>
                </div>
              </div>

              {/* Dòng số tài khoản */}
              <div className="bank-field-row main-acc-row">
                <div className="bank-field-info">
                  <span className="bank-field-label">Số tài khoản</span>
                  <span className="bank-account-num">
                    <span>0818</span> <span>237</span> <span>416</span>
                  </span>
                </div>
                <button
                  type="button"
                  className={`bank-copy-btn ${copyStatus === 'copied' ? 'is-copied' : ''}`}
                  onClick={copyAccount}
                  title="Sao chép số tài khoản"
                  aria-label="Sao chép số tài khoản"
                >
                  {copyStatus === 'copied' ? (
                    <>
                      <IconCheck size={13} />
                      <span>Đã chép</span>
                    </>
                  ) : (
                    <>
                      <IconCopy size={13} />
                      <span>Sao chép</span>
                    </>
                  )}
                </button>
              </div>

              {/* Dòng chủ tài khoản */}
              <div className="bank-card-bottom">
                <div className="bank-field-info">
                  <span className="bank-field-label">Chủ tài khoản</span>
                  <strong className="bank-field-value">{DONATION_CONFIG.bank.accountName}</strong>
                </div>
                <span className="bank-napas-tag">NAPAS 247</span>
              </div>
            </div>

            {/* Thông báo trạng thái sao chép / Lời nhắn */}
            <div className="support-status-line" role="status">
              {copyStatus === 'copied' && (
                <span className="status-toast success">✓ Đã sao chép 0818237416 vào bộ nhớ tạm!</span>
              )}
              {copyStatus === 'error' && (
                <span className="status-toast error">Chưa sao chép được. Bạn vui lòng sao chép thủ công.</span>
              )}
              {copyStatus === 'idle' && (
                <div className="support-memo-pill">
                  <span className="memo-pill-icon">💬</span>
                  <span className="memo-pill-text">{DONATION_CONFIG.bank.memoNote}</span>
                </div>
              )}
            </div>
          </aside>
        </div>

        {/* Footer */}
        <footer className="support-dialog-footer">
          <div className="footer-left-quote">
            <span>Cảm ơn bạn vì đã luôn đồng hành và tiếp lửa cho môn Tin học! ☕❤️</span>
          </div>
          <button type="button" className="support-dialog-cta" onClick={onClose}>
            <span>Tiếp tục học bài</span>
            <span className="cta-icon-wrapper">
              <IconArrowRight size={15} />
            </span>
          </button>
        </footer>
      </div>
    </dialog>
  );
}

export function DonationModal({ isOpen, onClose }: DonationModalProps) {
  return isOpen ? <DonationDialog onClose={onClose} /> : null;
}
