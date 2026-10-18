import { DrinkKind } from '../data/donation';

export function SupportHeart({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="currentColor"
        opacity="0.18"
      />
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SupportDrink({ kind = 'coffee' }: { kind?: DrinkKind | 'custom' }) {
  if (kind === 'coffee') {
    return (
      <svg className="support-drink-art drink-coffee" viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
        <path d="M26 11c0-3 3-5 3-7m7 7c0-3 3-5 3-7" stroke="#d97706" strokeWidth="2.2" strokeLinecap="round" opacity="0.85" />
        <ellipse cx="32" cy="54" rx="25" ry="5" fill="#fde68a" stroke="#d97706" strokeWidth="1.5" opacity="0.6" />
        <path d="M43 27h6a8 8 0 0 1 8 8v1a8 8 0 0 1-8 8h-6" stroke="#b45309" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <path d="M14 23h34c0 13-4 25-17 25S14 36 14 23z" fill="#fffdfa" stroke="#b45309" strokeWidth="1.8" />
        <ellipse cx="31" cy="23" rx="17" ry="6" fill="#fffbeb" stroke="#b45309" strokeWidth="1.8" />
        <ellipse cx="31" cy="24" rx="14" ry="4.2" fill="#78350f" />
        <path d="M31 25.5c-2-1.8-3.5-1-3.5.3 0 1 1.8 1.8 3.5 2.6 1.7-.8 3.5-1.6 3.5-2.6 0-1.3-1.5-2.1-3.5-.3z" fill="#fef3c7" />
      </svg>
    );
  }

  if (kind === 'black-tea') {
    return (
      <svg className="support-drink-art drink-black-tea" viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
        <path d="M18 15h28l-4 41a4.5 4.5 0 0 1-4.5 4H26.5a4.5 4.5 0 0 1-4.5-4L18 15z" fill="#fffbeb" stroke="#d97706" strokeWidth="1.8" />
        <path d="M19.5 23h25l-3.4 31a3.5 3.5 0 0 1-3.5 3H26.4a3.5 3.5 0 0 1-3.5-3L19.5 23z" fill="#ea580c" opacity="0.85" />
        <rect x="23" y="28" width="8" height="8" rx="2" fill="#fff" fillOpacity="0.65" transform="rotate(10 23 28)" />
        <rect x="33" y="37" width="8" height="8" rx="2" fill="#fff" fillOpacity="0.5" transform="rotate(-15 33 37)" />
        <circle cx="24" cy="18" r="8.5" fill="#facc15" stroke="#ca8a04" strokeWidth="1.6" />
        <circle cx="24" cy="18" r="6.5" fill="#fef08a" />
        <path d="M24 11.5v13M17.5 18h13" stroke="#ca8a04" strokeWidth="1" strokeLinecap="round" />
        <line x1="39" y1="5" x2="32" y2="43" stroke="#dc2626" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === 'americano') {
    return (
      <svg className="support-drink-art drink-americano" viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
        {/* Ly nhựa trong suốt */}
        <path d="M18 15h28l-3.5 41a4 4 0 0 1-4 3.7H25.5a4 4 0 0 1-4-3.7L18 15z" fill="#f8fafc" stroke="#64748b" strokeWidth="1.8" />
        {/* Nước cà phê Americano đá đậm màu */}
        <path d="M19.2 21h25.6l-3.2 34.5a3.5 3.5 0 0 1-3.5 3.1H25.9a3.5 3.5 0 0 1-3.5-3.1L19.2 21z" fill="#200d04" />
        <ellipse cx="32" cy="21" rx="12.8" ry="3.5" fill="#381708" />
        {/* Các viên đá pha lê mát lạnh */}
        <rect x="22" y="24" width="8.5" height="8.5" rx="2" fill="#ffffff" fillOpacity="0.7" stroke="#cbd5e1" strokeWidth="0.8" transform="rotate(14 22 24)" />
        <rect x="33.5" y="29" width="8.5" height="8.5" rx="2" fill="#ffffff" fillOpacity="0.55" stroke="#cbd5e1" strokeWidth="0.8" transform="rotate(-15 33.5 29)" />
        <rect x="24" y="40" width="7" height="7" rx="1.8" fill="#ffffff" fillOpacity="0.4" stroke="#cbd5e1" strokeWidth="0.8" transform="rotate(8 24 40)" />
        {/* Logo Highlands trắng đỏ đặc trưng */}
        <circle cx="32" cy="38" r="7.5" fill="#ffffff" />
        <circle cx="32" cy="38" r="6" stroke="#b91c1c" strokeWidth="1.2" fill="none" />
        <path d="M29 38c1-1.5 2.5-2 3-2s2 .5 3 2-2 2-3 2-2.5-.5-3-2z" fill="#b91c1c" />
        {/* Ống hút đỏ Highlands */}
        <line x1="41" y1="4" x2="33" y2="48" stroke="#dc2626" strokeWidth="3.6" strokeLinecap="round" />
        <circle cx="39" cy="26" r="1.3" fill="#ffffff" fillOpacity="0.7" />
      </svg>
    );
  }

  if (kind === 'bac-xiu') {
    return (
      <svg className="support-drink-art drink-bac-xiu" viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
        <path d="M19 14h26l-3.8 42a4 4 0 0 1-4 3.7H26.8a4 4 0 0 1-4-3.7L19 14z" fill="#fcf9f5" stroke="#92400e" strokeWidth="1.8" />
        <path d="M23 48h18l-.9 7.5a3 3 0 0 1-3 2.5h-10.2a3 3 0 0 1-3-2.5L23 48z" fill="#fef9c3" />
        <path d="M21.8 35h20.4l-1.2 13H23l-1.2-13z" fill="#78350f" />
        <path d="M20.5 21h23l-1.2 14h-20.6l-1.2-14z" fill="#fed7aa" />
        <ellipse cx="32" cy="19" rx="11" ry="3" fill="#fffbeb" />
        <line x1="41" y1="4" x2="33" y2="46" stroke="#2563eb" strokeWidth="3.5" strokeLinecap="round" />
        <rect x="25" y="25" width="7" height="7" rx="1.5" fill="#fff" fillOpacity="0.55" transform="rotate(10 25 25)" />
      </svg>
    );
  }

  if (kind === 'cold-brew') {
    return (
      <svg className="support-drink-art drink-cold-brew" viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
        <path d="M19 14h26l-3.5 42a4 4 0 0 1-4 3.7H26.5a4 4 0 0 1-4-3.7L19 14z" fill="#f8fafc" stroke="#451a03" strokeWidth="1.8" />
        <path d="M20.2 21h23.6l-3.1 34a3.5 3.5 0 0 1-3.5 3.1H26.8a3.5 3.5 0 0 1-3.5-3.1L20.2 21z" fill="#2d1305" />
        <ellipse cx="32" cy="21" rx="11.8" ry="3.5" fill="#451a03" />
        <rect x="23" y="27" width="8" height="8" rx="2" fill="#ffffff" fillOpacity="0.4" transform="rotate(12 23 27)" />
        <rect x="33" y="37" width="8" height="8" rx="2" fill="#ffffff" fillOpacity="0.3" transform="rotate(-18 33 37)" />
        <line x1="40" y1="4" x2="33" y2="48" stroke="#059669" strokeWidth="3.2" strokeLinecap="round" />
        <circle cx="25" cy="48" r="1.5" fill="#ffffff" fillOpacity="0.5" />
        <circle cx="38" cy="29" r="1.2" fill="#ffffff" fillOpacity="0.5" />
      </svg>
    );
  }

  if (kind === 'flat-white') {
    return (
      <svg className="support-drink-art drink-flat-white" viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
        {/* Hơi nóng bốc lên từ nắp */}
        <path d="M29 6c0-2.2 2-3.5 2-4.5m6 4.5c0-2.2 2-3.5 2-4.5" stroke="#006241" strokeWidth="1.8" strokeLinecap="round" opacity="0.75" />
        {/* Thân cốc giấy trắng Starbucks */}
        <path d="M19 18h26l-3.5 39a4 4 0 0 1-4 3.7H26.5a4 4 0 0 1-4-3.7L19 18z" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.6" />
        {/* Bóng đổ nhẹ trên thân cốc */}
        <path d="M32 18h13l-3.5 39a4 4 0 0 1-4 3.7H32V18z" fill="#f1f5f9" opacity="0.7" />
        {/* Nắp uống nổi tiếng của Starbucks */}
        <path d="M17 14h30a2 2 0 0 1 2 2v2.5H15V16a2 2 0 0 1 2-2z" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
        <rect x="22" y="11" width="20" height="3.2" rx="1.6" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.2" />
        <ellipse cx="26" cy="12.6" rx="1.6" ry="0.8" fill="#475569" />
        {/* Logo tròn xanh Starbucks Siren đặc trưng */}
        <circle cx="32" cy="38" r="8.5" fill="#006241" />
        <circle cx="32" cy="38" r="7" stroke="#ffffff" strokeWidth="0.9" fill="none" />
        {/* Họa tiết vương miện Siren */}
        <path d="M28.5 37l1.5-2 2 1.5 2-1.5 1.5 2v2a3.5 3.5 0 0 1-7 0v-2z" fill="#ffffff" />
        <circle cx="32" cy="33.8" r="1.1" fill="#ffffff" />
      </svg>
    );
  }

  if (kind === 'milk-tea') {
    return (
      <svg className="support-drink-art drink-milk-tea" viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
        <path d="M18 17h28l-3.8 39a4 4 0 0 1-4 3.6H25.8a4 4 0 0 1-4-3.6L18 17z" fill="#fef7ee" stroke="#9a3412" strokeWidth="1.8" />
        <path d="M19.4 23h25.2l-3.3 32a3 3 0 0 1-3 2.6H25.7a3 3 0 0 1-3-2.6L19.4 23z" fill="#d97706" opacity="0.9" />
        <path d="M16 17c0-4 7-6 16-6s16 2 16 6H16z" fill="#ffffff" fillOpacity="0.8" stroke="#9a3412" strokeWidth="1.6" />
        <line x1="38" y1="5" x2="31" y2="52" stroke="#475569" strokeWidth="5" strokeLinecap="round" />
        <circle cx="26" cy="51" r="3.2" fill="#1e1b4b" />
        <circle cx="32" cy="53" r="3.4" fill="#0f172a" />
        <circle cx="38" cy="50" r="3.2" fill="#1e1b4b" />
        <circle cx="28" cy="45" r="3" fill="#0f172a" />
        <circle cx="35" cy="46" r="3.1" fill="#1e1b4b" />
        <circle cx="25" cy="40" r="2.8" fill="#1e1b4b" />
      </svg>
    );
  }

  return (
    <svg className="support-drink-art drink-custom" viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
      <circle cx="32" cy="32" r="23" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />
      <path
        d="M32 43l-2-1.8C22.5 34.5 18 30.2 18 25c0-4.2 3.3-7.5 7.5-7.5 2.4 0 4.6 1.1 6 2.9 1.4-1.8 3.6-2.9 6-2.9 4.2 0 7.5 3.3 7.5 7.5 0 5.2-4.5 9.5-12 16.2L32 43z"
        fill="#ea580c"
      />
      <circle cx="43" cy="18" r="2.2" fill="#fbbf24" />
      <circle cx="19" cy="40" r="1.6" fill="#f59e0b" />
    </svg>
  );
}
