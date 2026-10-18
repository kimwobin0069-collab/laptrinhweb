import { TrackId } from '../types/lesson';

/** Technology marks, with original brand colors, shared across course navigation. */
export function TechnologyLogo({ track, size = 32 }: { track: TrackId; size?: number }) {
  if (track === 'js') return <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" focusable="false" className="technology-logo"><rect width="100" height="100" rx="3" fill="#f7df1e"/><path fill="#323330" d="M26 77l8-5c2 4 4 6 8 6 4 0 6-2 6-7V38h10v33c0 11-6 16-15 16-8 0-14-4-17-10zm36-1l8-5c3 5 6 7 11 7 4 0 7-2 7-5 0-4-3-5-8-7l-3-1c-8-4-13-8-13-16 0-7 6-13 15-13 6 0 11 2 15 9l-8 5c-2-3-4-5-7-5s-5 2-5 4c0 3 2 4 6 6l3 1c10 5 15 9 15 17 0 9-7 14-17 14-10 0-16-4-19-11z"/></svg>;
  const html = track === 'html';
  return <svg width={size} height={size} viewBox="0 0 100 112" aria-hidden="true" focusable="false" className="technology-logo"><path fill={html?'#e44d26':'#1572b6'} d="M0 0h100l-9 101-41 11-41-11z"/><path fill={html?'#f16529':'#33a9dc'} d="M50 8v95l33-9L91 8z"/>{html ? <><path fill="#ebebeb" d="M19 21h31v12H32l1 12h17v12H22zm4 42h12l1 16 14 4v13l-25-7z"/><path fill="#fff" d="M50 21h31l-1 12H50zm0 24h29l-4 44-25 7V83l14-4 2-22H50z"/></> : <><path fill="#ebebeb" d="M19 21h31v12H20zm2 24h29v12H35l1 22 14 4v13l-25-7z"/><path fill="#fff" d="M50 21h31l-1 12-18 12h17l-4 44-25 7V83l14-4 2-22H50V45l17-12H50z"/></>}</svg>;
}
