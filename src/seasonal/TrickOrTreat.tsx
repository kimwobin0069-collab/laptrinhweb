import { SEASON_PREVIEW_ENABLED } from './preview';
import { useEffect, useRef, useState } from 'react';
import { drawHalloweenOutcome } from './batFlight';
import { SURPRISE_TIMING } from './config';
import { FestiveGlyph } from './FestiveGlyphs';
export function TrickOrTreat({onOpenChange}:{onOpenChange:(open:boolean)=>void}){
  const [open,setOpen]=useState(()=>SEASON_PREVIEW_ENABLED&&new URLSearchParams(location.search).get('surprise')==='1');
  const [round,setRound]=useState(0);
  const [choice,setChoice]=useState<'candy'|'boo'|null>(null);
  const choose=(picked:'candy'|'boo')=>{if(choice!==null)return;setChoice(picked);setResult(drawHalloweenOutcome());};
  const [result,setResult]=useState<'candy'|'boo'|null>(null);
  const dialogRef=useRef<HTMLDialogElement>(null);
  const returnFocus=useRef<HTMLElement|null>(null);
  const continueRef=useRef<HTMLButtonElement>(null);
  const closeGame=()=>{setOpen(false);setRound(n=>n+1);};
  const playAgain=()=>{setChoice(null);setResult(null);};
  useEffect(()=>{if(result)continueRef.current?.focus({preventScroll:true});},[result]);
  useEffect(()=>{
    if(open)return;
    let timer:ReturnType<typeof setTimeout>;
    const invite=()=>{
      if(document.hidden || document.querySelector('dialog[open],[role="dialog"]') || document.activeElement?.matches('input,textarea,[contenteditable="true"]')){
        timer=setTimeout(invite,SURPRISE_TIMING.typingRetryMs);return;
      }
      setChoice(null);setResult(null);setOpen(true);
    };
    timer=setTimeout(invite,(round===0?SURPRISE_TIMING.firstInvitationMs:SURPRISE_TIMING.nextInvitationMinMs)+Math.random()*SURPRISE_TIMING.nextInvitationJitterMs);
    return()=>clearTimeout(timer);
  },[open,round]);
  useEffect(()=>{
    const dialog=dialogRef.current;if(!open||!dialog)return;
    returnFocus.current=document.activeElement as HTMLElement;
    document.documentElement.dataset.seasonDialog='open';
    onOpenChange(true);
    if(!dialog.open)dialog.showModal();
    return()=>{delete document.documentElement.dataset.seasonDialog;onOpenChange(false);if(dialog.open)dialog.close();const target=returnFocus.current?.isConnected?returnFocus.current:document.querySelector<HTMLElement>('.header-menu');target?.focus({preventScroll:true});};
  },[open,onOpenChange]);
  return <dialog className={'treat-dialog halloween-encounter '+(result?'encounter-'+result:'encounter-choice')+(choice==='candy'&&result==='boo'?' encounter-gift-then-boo':'')} ref={dialogRef} aria-labelledby="treat-title" aria-describedby="treat-description" onClose={()=>{if(dialogRef.current?.open)return;setOpen(false);}} onCancel={event=>{event.preventDefault();closeGame();}}>
    <button type="button" className="treat-close" onClick={closeGame} aria-label="Đóng trò chơi">×</button>
    <p className="treat-eyebrow">CỐC CỐC… CÓ AI Ở NHÀ KHÔNG?</p>
    <div className="halloween-door-scene" aria-hidden="true">
      <span className="encounter-moon"/><span className="encounter-star star-one">✧</span><span className="encounter-star star-two">✦</span>
      <span className="encounter-bat bat-one">⌁</span><span className="encounter-bat bat-two">⌁</span>
      <div className="halloween-doorway"><div className="door-interior"/><div className="encounter-visitor"><FestiveGlyph kind={result==='boo'?'devil':'witch'}/><span className="visitor-feet"><i/><i/></span></div><div className="door-leaf"><span className="door-panel"/><span className="door-knob"/></div><span className="door-step"/></div>
      <span className="door-pumpkin">🎃</span><span className="visitor-bucket">🎃</span>
      {(result==='candy'||choice==='candy')&&<div className="candy-shower">{[0,1,2,3,4].map(i=><span key={i} style={{animationDelay:i*.14+'s','--candy-index':i} as React.CSSProperties}><FestiveGlyph kind="candy"/></span>)}</div>}
      {result==='boo'&&<span className="encounter-boo">BOO!</span>}
    </div>
    <h2 id="treat-title">{result==='candy'?(choice==='candy'?'Cảm ơn vì kẹo ngọt!':'Bất ngờ nhận kẹo ngọt!'):result==='boo'?(choice==='candy'?'Cho kẹo rồi vẫn bị ghẹo!':'Ú òa! Ghẹo bạn nè!'):'Trick or Treat?'}</h2>
    <p id="treat-description" aria-live="polite">{result==='candy'?(choice==='candy'?'Vị khách nhỏ vui quá! Chúc bạn một Halloween thật ngọt ngào.':'Định ghẹo nhau mà vị khách nhỏ lại tặng kẹo cho bạn!'):result==='boo'?'Vị khách này tinh nghịch quá! Có kẹo vẫn thích trêu bạn một chút.':'Cho kẹo hay bị ghẹo? Chọn rồi vẫn còn một bất ngờ đang chờ!'}</p>
    {!result?<div className="encounter-choices"><button type="button" className="choose-treat" onClick={()=>choose('candy')}><FestiveGlyph kind="candy"/><span><strong>Cho kẹo</strong><small>Một chút ngọt ngào</small></span></button><button type="button" className="choose-trick" onClick={()=>choose('boo')}><FestiveGlyph kind="devil"/><span><strong>Bị ghẹo</strong><small>Thử xem ai hù ai!</small></span></button></div>:<div className="encounter-result-actions"><button type="button" ref={continueRef} className="treat-continue" onClick={closeGame}>Quay lại bài học →</button><button type="button" className="treat-replay" onClick={playAgain}>Chơi lại</button></div>}
    <small className="encounter-footnote">Kết quả ngẫu nhiên · Nhấn Esc hoặc × để đóng</small>
  </dialog>;
}
