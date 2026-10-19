import React from 'react';
import { SeasonalAccent } from '../seasonal/SeasonalEffects';
import { IconCode } from './Icons';
import { SupportDrink } from './SupportArtwork';

interface FooterProps {
  onOpenDonation?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDonation }) => {
  const year = new Date().getFullYear();
  return (
    <footer className="site-learning-footer">
      {onOpenDonation && (
        <div className="support-footer-banner">
          <div className="support-footer-symbol" aria-hidden="true">
            <SupportDrink kind="coffee" />
          </div>
          <div className="support-footer-copy">
            <span className="support-eyebrow">Ủng hộ dự án</span>
            <h2>Bao tôi một ly cà phê nhé?</h2>
            <p>
              Dự án học tập hoàn toàn miễn phí cho học sinh THPT. Mỗi ly cà phê là nguồn động lực to lớn giúp tác giả duy trì và hoàn thiện website.
            </p>
          </div>
          <div className="support-footer-action">
            <button
              type="button"
              onClick={onOpenDonation}
              aria-label="Mở cửa sổ bao tôi một ly cà phê"
            >
              <SupportDrink kind="coffee" />
              <span>Bao tôi ly cà phê</span>
            </button>
            <span>Quét mã QR MB Bank nhanh chóng</span>
          </div>
          <div className="support-footer-drinks" aria-hidden="true">
            <SupportDrink kind="bac-xiu" />
            <SupportDrink kind="cold-brew" />
          </div>
        </div>
      )}

      <div className="site-footer-meta">
        <div className="site-footer-brand">
          <IconCode size={18} />
          <strong>Học Lập Trình Web</strong>
          <SeasonalAccent placement="footer" />
        </div>
        <p>© {year} THPT Lê Thị Hồng Gấm <span>· All rights reserved.</span></p>
        <span className="site-footer-credit">Designed by <strong>Duy Khoa</strong></span>
      </div>
    </footer>
  );
};

