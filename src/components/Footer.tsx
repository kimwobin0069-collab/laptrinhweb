import React from 'react';
import { SeasonalAccent } from '../seasonal/SeasonalEffects';
import { IconCode } from './Icons';

interface FooterProps {
  onOpenDonation?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="site-learning-footer">
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

