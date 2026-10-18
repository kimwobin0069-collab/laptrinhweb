// Explicit opt-in for maintainers; normal operation always follows the real calendar.
export const SEASON_PREVIEW_ENABLED=import.meta.env.DEV && import.meta.env.VITE_SEASON_PREVIEW==='true';
