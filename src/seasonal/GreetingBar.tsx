import { SEASON_PREVIEW_ENABLED } from './preview';
import { useLayoutEffect, useRef } from 'react';
import { HOLIDAY_NAMES } from './config';
import { useSeason } from './SeasonProvider';
export function GreetingBar(){
  const {holiday,effectsEnabled,reducedMotion,toggleEffects}=useSeason();
  const moving=effectsEnabled&&!reducedMotion;
  const barRef=useRef<HTMLDivElement>(null);
  useLayoutEffect(()=>{
    const element=barRef.current;if(!element)return;
    const measure=()=>document.documentElement.style.setProperty('--greeting-height',element.getBoundingClientRect().height+'px');
    const observer=new ResizeObserver(measure);observer.observe(element);measure();
    return()=>{observer.disconnect();document.documentElement.style.removeProperty('--greeting-height');};
  },[]);
  return <div ref={barRef} className={'greeting-bar '+(moving?'':'greeting-static')}>
    <span className="greeting-occasion">{HOLIDAY_NAMES[holiday.id]}</span>
    <div className="greeting-window"><span className="sr-only" role="status">{holiday.greeting}</span><div className="greeting-track" aria-hidden="true"><span className="greeting-copy">{holiday.greeting}</span>{moving&&<span className="greeting-copy">{holiday.greeting}</span>}</div></div>
    <button type="button" className="season-effects-toggle" onClick={toggleEffects} aria-pressed={effectsEnabled} title={reducedMotion?'Đang dùng chế độ giảm chuyển động của thiết bị':undefined}><span className="season-toggle-dot" aria-hidden="true"/><span>{effectsEnabled?'Tắt hiệu ứng':'Bật hiệu ứng'}</span></button>
  </div>;
}
export function SeasonPreview(){
  const {holiday,previewDate,setPreviewDate,previewTheme,previewReducedMotion,setPreviewReducedMotion}=useSeason();
  if(!SEASON_PREVIEW_ENABLED)return null;
  return <details className="season-preview"><summary>Xem thử chủ đề</summary><div><label>Chủ đề<select aria-label="Xem thử chủ đề" value={previewDate?holiday.id:'auto'} onChange={event=>previewTheme(event.target.value as Parameters<typeof previewTheme>[0])}><option value="auto">Tự động theo ngày Việt Nam</option>{Object.entries(HOLIDAY_NAMES).map(([id,name])=><option key={id} value={id}>{name}</option>)}</select></label><label>Ngày tại Việt Nam<input type="date" aria-label="Ngày xem thử tại Việt Nam" value={previewDate} min="2000-01-01" max="2100-12-31" onChange={event=>{if(!event.target.value || event.target.validity.valid)setPreviewDate(event.target.value);}}/></label><label className="preview-motion"><input type="checkbox" checked={previewReducedMotion} onChange={event=>setPreviewReducedMotion(event.target.checked)}/>Mô phỏng giảm chuyển động</label><p>{previewDate?'Đang xem thử':'Lịch tự động'} · {holiday.date} · Asia/Ho_Chi_Minh</p><button onClick={()=>previewTheme('auto')}>Trở về lịch tự động</button></div></details>;
}
