export type HolidayId = 'default' | 'halloween' | 'teachers' | 'christmas' | 'new-year' | 'spring';
export const VIETNAM_TIME_ZONE = 'Asia/Ho_Chi_Minh';
export const EFFECTS_STORAGE_KEY = 'web-learning-seasonal-effects';
export const DEFAULT_GREETING = 'Chào mừng các em đến với Trang học lập trình web!';
export const HOLIDAY_NAMES: Record<HolidayId, string> = {
  default: 'Cùng học mỗi ngày', halloween: 'Halloween', teachers: 'Tri ân thầy cô',
  christmas: 'Giáng sinh', 'new-year': 'Happy New Year', spring: 'Mừng xuân'
};

// Month/day ranges are inclusive and recur every year.
export const ANNUAL_HOLIDAYS: {id: HolidayId; start: number; end: number; greeting: string}[] = [
  {id:'halloween', start:1027, end:1031, greeting:DEFAULT_GREETING},
  {id:'teachers', start:1110, end:1122, greeting:'Chào mừng ngày Nhà giáo Việt Nam 20/11!'},
  {id:'christmas', start:1215, end:1225, greeting:DEFAULT_GREETING}
];
export const NEW_YEAR_RULE = {
  firstStartYear: 2026, start: 1226, end: 102,
  greeting: 'Happy New Year! {year}'
};
// Explicit years prevent a zodiac name from accidentally recurring in future years.
// Add a new entry with its own greeting when the next spring schedule is approved.
export const SPRING_EDITIONS = [
  {year:2027, start:110, end:214, greeting:'Mừng Xuân Đinh Mùi! Vạn sự như ý - An khang thịnh vượng.'}
];
export const PREVIEW_DATES: Record<HolidayId, string> = {
  default:'2026-10-17', halloween:'2026-10-29', teachers:'2026-11-20',
  christmas:'2026-12-20', 'new-year':'2026-12-31', spring:'2027-01-15'
};

// Winter is a visual layer, independent of the active holiday and its greeting.
export const WINTER_RULE = { start: 1201, end: 109 }; // Inclusive: Dec 1 through Jan 9.
export const SURPRISE_TIMING = { firstInvitationMs: 180000, nextInvitationMinMs: 180000, nextInvitationJitterMs: 120000, typingRetryMs: 15000 };

export const BAT_TIMING = { firstFlightSeconds: 120, minPauseSeconds: 120, pauseJitterSeconds: 60 };
