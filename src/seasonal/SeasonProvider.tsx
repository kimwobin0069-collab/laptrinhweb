import { SEASON_PREVIEW_ENABLED } from './preview';
import { ArtworkDefinitions } from './IllustratedArtwork';
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { EFFECTS_STORAGE_KEY, HolidayId, PREVIEW_DATES } from './config';
import { HolidayState, getVietnamDate, isWinterDate, millisecondsToNextVietnamDay, resolveHoliday } from './calendar';
interface SeasonContextValue {
  holiday: HolidayState; winter: boolean; effectsEnabled: boolean; reducedMotion: boolean;
  toggleEffects: () => void; previewDate: string; setPreviewDate: (date: string) => void;
  previewTheme: (theme: HolidayId | 'auto') => void;
  previewReducedMotion: boolean; setPreviewReducedMotion: (value: boolean) => void;
}
const SeasonContext=createContext<SeasonContextValue | null>(null);
export function SeasonProvider({children}:{children:ReactNode}) {
  const [previewReducedMotion,setPreviewReducedMotion]=useState(false);
  const [liveHoliday,setLiveHoliday]=useState(()=>resolveHoliday());
  const [previewDate,setPreviewDate]=useState(()=>{
    if(!SEASON_PREVIEW_ENABLED)return '';
    const params=new URLSearchParams(window.location.search);
    const date=params.get('date');
    if(date && /^20\d{2}-\d{2}-\d{2}$/.test(date)){
      const parsed=new Date(date+'T12:00:00+07:00');
      if(!Number.isNaN(parsed.getTime()) && getVietnamDate(parsed).stamp===date)return date;
    }
    const requested=params.get('holiday');
    if(requested && Object.prototype.hasOwnProperty.call(PREVIEW_DATES,requested))return PREVIEW_DATES[requested as HolidayId];
    return '';
  });
  const [effectsEnabled,setEffectsEnabled]=useState(()=>{try{return localStorage.getItem(EFFECTS_STORAGE_KEY)!=='off';}catch{return true;}});
  const [reducedMotion,setReducedMotion]=useState(()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(()=>{
    let timer: ReturnType<typeof setTimeout>;
    const refresh=()=>{
      clearTimeout(timer);
      const now=new Date(); setLiveHoliday(resolveHoliday(now));
      timer=setTimeout(refresh,millisecondsToNextVietnamDay(now));
    };
    const visible=()=>{if(document.visibilityState==='visible')refresh();};
    const media=window.matchMedia('(prefers-reduced-motion: reduce)');
    const motion=(event:MediaQueryListEvent)=>setReducedMotion(event.matches);
    const storage=(event:StorageEvent)=>{if(event.key===EFFECTS_STORAGE_KEY || event.key===null){try{setEffectsEnabled(localStorage.getItem(EFFECTS_STORAGE_KEY)!=='off');}catch{/* Session preference remains available. */}}};
    refresh(); media.addEventListener('change',motion);
    document.addEventListener('visibilitychange',visible); window.addEventListener('focus',refresh); window.addEventListener('storage',storage);
    return()=>{clearTimeout(timer);media.removeEventListener('change',motion);document.removeEventListener('visibilitychange',visible);window.removeEventListener('focus',refresh);window.removeEventListener('storage',storage);};
  },[]);
  const holiday=useMemo(()=>SEASON_PREVIEW_ENABLED && previewDate ? resolveHoliday(new Date(previewDate+'T12:00:00+07:00')) : liveHoliday,[liveHoliday,previewDate]);
  const winter=isWinterDate(new Date(holiday.date+'T12:00:00+07:00'));
  useEffect(()=>{
    const root=document.documentElement;
    root.dataset.season=holiday.id; root.dataset.seasonEffects=effectsEnabled?'on':'off';
    root.dataset.seasonMotion=reducedMotion||(SEASON_PREVIEW_ENABLED&&previewReducedMotion)?'reduced':'full';
    root.dataset.winter=effectsEnabled && winter ? 'on':'off';
    return()=>{delete root.dataset.season;delete root.dataset.seasonEffects;delete root.dataset.winter;delete root.dataset.seasonMotion;};
  },[holiday.id,holiday.date,winter,effectsEnabled,reducedMotion,previewReducedMotion]);
  const toggleEffects=()=>setEffectsEnabled(current=>{const next=!current;try{localStorage.setItem(EFFECTS_STORAGE_KEY,next?'on':'off');}catch{/* Still works without storage. */}return next;});
  const previewTheme=(id:HolidayId|'auto')=>setPreviewDate(id==='auto'?'':PREVIEW_DATES[id]);
  return <SeasonContext.Provider value={{holiday,winter,effectsEnabled,reducedMotion:reducedMotion||(SEASON_PREVIEW_ENABLED&&previewReducedMotion),toggleEffects,previewDate,setPreviewDate,previewTheme,previewReducedMotion,setPreviewReducedMotion}}><ArtworkDefinitions/>{children}</SeasonContext.Provider>;
}
export function useSeason(){const value=useContext(SeasonContext);if(!value)throw new Error('SeasonProvider is required');return value;}
