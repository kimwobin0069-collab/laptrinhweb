import { createSnowCrystalSprite } from './SnowCrystal';
import { useEffect, useRef, useState } from 'react';
import { HolidayId, BAT_TIMING } from './config';
import { useSeason } from './SeasonProvider';
import { FestiveGlyph, FestiveKind } from './FestiveGlyphs';
import { IllustratedGlyph, BlossomBranch } from './IllustratedArtwork';
import { TrickOrTreat } from './TrickOrTreat';
import { BatFlight, createBatFlight } from './batFlight';
type BaseGlyph = 'pumpkin'|'bat'|'ghost'|'web'|'flower'|'book'|'pen'|'card'|'tree'|'bell'|'gift'|'snow'|'lantern'|'couplet'|'envelope'|'goat'|'balloons'|'party'|'clock'|'firework'|'champagne'|'coin'|'firecrackers'|'wealth-bag'|'ingot'|'coin-stack'|'fortune-sticks';
type Glyph = BaseGlyph | FestiveKind;
const decorations:Record<HolidayId,Glyph[]>={default:[],halloween:['pumpkin','bat','ghost','web','devil','witch','ghost','pumpkin','ghost','bat','devil','web'],teachers:['flower','book','pen','card'],christmas:['snowman','santa','reindeer','stocking','bauble','gift','tree','bell'],'new-year':['champagne','clock','firework','party','balloons','champagne'],spring:['lion','mai','chung','watermelon','couplet','lantern','envelope','peach','goat','coin','firecrackers']};
const EMOJI_ACCENTS:Partial<Record<Glyph,string>>={pumpkin:'🎃',bat:'🦇',flower:'🌸',book:'📚',pen:'✒️',card:'💌',tree:'🎄',gift:'🎁',snow:'❄️',lantern:'🏮',envelope:'🧧',peach:'🌸'};
function SeasonalGlyph({kind}:{kind:Glyph}){return <IllustratedGlyph kind={kind}/>;}
export function SeasonalBotanical(){
  const {holiday,effectsEnabled}=useSeason();
  if(!effectsEnabled || holiday.id!=='spring')return null;
  return <><div className="season-botanical" aria-hidden="true"><span className="botanical-mai"><BlossomBranch flower="mai"/></span><span className="botanical-peach"><BlossomBranch flower="peach"/></span></div><span className="spring-hero-goat" aria-hidden="true"><IllustratedGlyph kind="goat"/></span></>;
}
type AccentPlacement = 'header'|'sidebar'|'card'|'lesson'|'footer'|'section'|'bar'|'button'|'panel';
export function SeasonalAccent({placement,variant=0}:{placement:AccentPlacement;variant?:number}){
  const {holiday,effectsEnabled,winter}=useSeason();
  if((holiday.id==='default'&&!winter)||!effectsEnabled)return null;
  const index={header:0,sidebar:1,card:2,lesson:1,footer:3,section:1,bar:2,button:0,panel:3}[placement];
  const glyphs=holiday.id==='default'?['snow' as Glyph]:decorations[holiday.id];
  const springPools:Partial<Record<AccentPlacement,Glyph[]>>={
 section:['watermelon','wealth-bag','ingot','fortune-sticks','coin-stack','chung','firecrackers','envelope'],
 bar:['fortune-sticks','coin-stack','wealth-bag','watermelon','chung','ingot'],
 button:['envelope','coin','ingot','wealth-bag','watermelon','firecrackers'],
 card:['watermelon','wealth-bag','ingot'],panel:['chung','coin-stack','fortune-sticks'],lesson:['watermelon'],footer:['wealth-bag']
 };
 const pool=holiday.id==='spring'?springPools[placement]:undefined;
 const kind=pool?pool[variant%pool.length]:glyphs[(index+variant)%glyphs.length];
  if(placement==='section' && holiday.id==='spring' && variant%4===3)return <span className="season-accent season-accent-section season-branch-accent" aria-hidden="true"><BlossomBranch flower={variant%2?'mai':'peach'}/></span>;
  const emoji=variant%5===4?EMOJI_ACCENTS[kind]:undefined;
  return <span className={'season-accent season-accent-'+placement} data-season-glyph={kind} aria-hidden="true">{emoji?<span className="season-emoji">{emoji}</span>:<SeasonalGlyph kind={kind}/>}</span>;
}
function ParticleCanvas({season,winter,paused}:{season:HolidayId;winter:boolean;paused:boolean}){
  const canvasRef=useRef<HTMLCanvasElement>(null);
  useEffect(()=>{
    const canvas=canvasRef.current;const ctx=canvas?.getContext('2d');if(!canvas||!ctx||paused)return;
    let width=0,height=0,dpr=1,frame=0,previous=0,elapsed=0,centerOpacity=.12,edgeOpacity=.38;
    let snowSprite=createSnowCrystalSprite(document.documentElement.classList.contains('dark'));
    let batFlight: (BatFlight & {began:number}) | null=null;
    let nextFlockAt=BAT_TIMING.firstFlightSeconds+Math.random()*BAT_TIMING.pauseJitterSeconds;
    let particles:{x:number;y:number;size:number;speed:number;phase:number}[]=[];
    const resize=()=>{
      snowSprite=createSnowCrystalSprite(document.documentElement.classList.contains('dark'));
      width=window.innerWidth;height=window.innerHeight;dpr=Math.min(window.devicePixelRatio||1,1.5);
      canvas.width=width*dpr;canvas.height=height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
      batFlight=null;nextFlockAt=elapsed+BAT_TIMING.firstFlightSeconds+Math.random()*BAT_TIMING.pauseJitterSeconds;
      const styles=getComputedStyle(document.documentElement);
      centerOpacity=Number(styles.getPropertyValue('--season-particle-opacity'))||.12;
      edgeOpacity=Number(styles.getPropertyValue('--season-edge-opacity'))||.38;
      const count=Math.min(width<768?24:64,Math.round((winter?52:32)*(Number(styles.getPropertyValue('--season-density'))||1)));
      particles=Array.from({length:count},()=>({x:Math.random()*width,y:Math.random()*height,size:winter?(Math.random()<.6?1.5+Math.random()*2:7+Math.random()*7):(width<768?3:5)+Math.random()*6,speed:(winter?22:10)+Math.random()*(winter?30:16),phase:Math.random()*Math.PI*2}));
    };
    const draw=(time:number)=>{
      frame=requestAnimationFrame(draw);if(time-previous<33)return;
      const dt=Math.min((time-previous)/1000,.06);previous=time;elapsed+=dt;
      ctx.clearRect(0,0,width,height);
      particles.forEach(p=>{
        p.y+=p.speed*dt;if(p.y>height+20)p.y=-20;
        const x=p.x+Math.sin(elapsed*.5+p.phase)*18;
        const edge=x<55||x>width-55;ctx.globalAlpha=edge ? edgeOpacity : centerOpacity;
        ctx.save();ctx.translate(x,p.y);ctx.rotate(elapsed*.15+p.phase);
        if(winter && (season!=='spring' && season!=='new-year' || p.phase<4.7)){
          ctx.globalAlpha=edge ? .85 : .42;
          if(p.size<4){ctx.fillStyle=document.documentElement.classList.contains('dark')?'#edfaff':'#7cb5d1';ctx.beginPath();ctx.arc(0,0,p.size*.5,0,Math.PI*2);ctx.fill();}
          else ctx.drawImage(snowSprite,-p.size,-p.size,p.size*2,p.size*2);
        }else if(season==='halloween'){
          ctx.fillStyle='#8c6aa3';ctx.beginPath();ctx.moveTo(-p.size,0);ctx.lineTo(-p.size,-p.size*.6);ctx.lineTo(-2,0);ctx.lineTo(0,-3);ctx.lineTo(2,0);ctx.lineTo(p.size,-p.size*.6);ctx.lineTo(p.size,0);ctx.lineTo(0,4);ctx.closePath();ctx.fill();
        }else if(season==='new-year'){
          ctx.globalAlpha=edge?.65:.36;ctx.fillStyle=['#d9ac41','#658cda','#ca8bdc','#c6d7ee'][Math.floor(p.phase*2)%4];
          ctx.fillRect(-p.size*.2,-p.size*.55,p.size*.4,p.size*1.1);
        }else if(season==='spring' && p.phase<3.2){
          const r=Math.max(5,p.size*.85),hole=r*.3;ctx.globalAlpha=edge?.9:.62;
          // Keep the square opening upright while the coin turns about its vertical axis.
          ctx.rotate(-elapsed*.15-p.phase);ctx.scale(.55+.45*Math.abs(Math.cos(elapsed*.9+p.phase)),1);
          const gold=ctx.createLinearGradient(-r,-r,r,r);gold.addColorStop(0,'#fff0a0');gold.addColorStop(.45,'#ffca3b');gold.addColorStop(1,'#d99110');
          ctx.fillStyle=gold;ctx.strokeStyle='#b77c14';ctx.lineWidth=.7;ctx.beginPath();ctx.arc(0,0,r,0,Math.PI*2);ctx.closePath();ctx.rect(-hole,-hole,hole*2,hole*2);ctx.fill('evenodd');ctx.stroke();
          ctx.strokeStyle='#fff1a1';ctx.beginPath();ctx.arc(0,0,r*.76,0,Math.PI*2);ctx.stroke();
          ctx.strokeStyle='#fff1b0';ctx.lineWidth=.6;ctx.beginPath();ctx.moveTo(-hole-.6,hole+.6);ctx.lineTo(-hole-.6,-hole-.6);ctx.lineTo(hole+.6,-hole-.6);ctx.stroke();
        }else{
          ctx.fillStyle=season==='teachers'?'#e44f92':(p.phase>3?'#f4ab12':'#f15695');
          ctx.beginPath();ctx.ellipse(0,0,p.size*.45,p.size,0,0,Math.PI*2);ctx.fill();
        }
        ctx.restore();
      });
      if(season==='halloween'){
        if(!batFlight&&elapsed>=nextFlockAt)batFlight={...createBatFlight(width,height),began:elapsed};
        if(batFlight){
          const flight=batFlight,progress=(elapsed-flight.began)/flight.duration;
          if(progress>1.2){batFlight=null;nextFlockAt=flight.began+BAT_TIMING.minPauseSeconds+Math.random()*BAT_TIMING.pauseJitterSeconds;}
          else for(let bat=0;bat<flight.count;bat++){
            const localProgress=progress-bat*.018;
            const x=flight.start.x+(flight.end.x-flight.start.x)*localProgress+Math.sin(bat*2.4+flight.seed)*24;
            const y=flight.start.y+(flight.end.y-flight.start.y)*localProgress+Math.sin(localProgress*9+bat*.55+flight.seed)*30+(bat%3-1)*24;
            const wing=Math.sin(elapsed*24+bat)*8,size=width<768?10:13+bat%3;
            ctx.save();ctx.translate(x,y);ctx.rotate(Math.sin(localProgress*8+bat)*.16);ctx.globalAlpha=.52;ctx.fillStyle=document.documentElement.classList.contains('dark')?'#b39bce':'#59396e';
            ctx.beginPath();ctx.moveTo(0,-3);ctx.lineTo(-4,-7);ctx.lineTo(-5,-1);ctx.quadraticCurveTo(-size,-14-wing,-size*1.7,-5-wing);ctx.lineTo(-size*.9,7);ctx.lineTo(-4,4);ctx.lineTo(0,9);ctx.lineTo(4,4);ctx.lineTo(size*.9,7);ctx.lineTo(size*1.7,-5-wing);ctx.quadraticCurveTo(size,-14-wing,5,-1);ctx.lineTo(4,-7);ctx.closePath();ctx.fill();ctx.restore();
          }
        }
      }
      if(season==='new-year'){
        for(let burst=0;burst<2;burst++){
          const age=(elapsed+burst*5.5)%11;if(age>2.8)continue;
          const radius=8+age*30;ctx.globalAlpha=Math.sin(age/2.8*Math.PI)*.24;
          ctx.strokeStyle=burst?'#8f9fde':'#d9ac41';ctx.lineWidth=1.5;
          for(let spoke=0;spoke<14;spoke++){
            const angle=spoke*Math.PI/7;const x=width*(burst?.94:.06),y=height*.22;
            ctx.beginPath();ctx.moveTo(x+Math.cos(angle)*radius*.8,y+Math.sin(angle)*radius*.8);ctx.lineTo(x+Math.cos(angle)*radius,y+Math.sin(angle)*radius);ctx.stroke();
          }
        }
      }
      ctx.globalAlpha=1;
    };
    const visibility=()=>{cancelAnimationFrame(frame);previous=0;if(!document.hidden)frame=requestAnimationFrame(draw);};
    resize();if(!document.hidden)frame=requestAnimationFrame(draw);
    window.addEventListener('resize',resize);document.addEventListener('visibilitychange',visibility);
    return()=>{cancelAnimationFrame(frame);window.removeEventListener('resize',resize);document.removeEventListener('visibilitychange',visibility);ctx.clearRect(0,0,width,height);};
  },[season,winter,paused]);
  return <canvas ref={canvasRef} className="season-particles" aria-hidden="true"/>;
}
export function SeasonalEffects(){
  const [encounterOpen,setEncounterOpen]=useState(false);
  const {holiday,effectsEnabled,reducedMotion,winter}=useSeason();
  if((holiday.id==='default'&&!winter)||!effectsEnabled||reducedMotion)return null;
  const glyphs=decorations[holiday.id];
  return <><div className={'season-scene scene-'+holiday.id} data-paused={encounterOpen} aria-hidden="true"><ParticleCanvas season={holiday.id} winter={winter} paused={encounterOpen}/>{glyphs.map((kind,index)=>holiday.id==='spring' && ![0,1,3,4,8,10].includes(index)?null:<span key={index} className={'season-ornament ornament-'+index+' ornament-kind-'+kind}>{index>3&&index%3===0&&EMOJI_ACCENTS[kind]?<span className="season-emoji">{EMOJI_ACCENTS[kind]}</span>:<SeasonalGlyph kind={kind}/>}</span>)}{holiday.id==='halloween'&&<div className="season-mist"/>}{holiday.id==='christmas'&&<div className="season-light-string">{Array.from({length:12},(_,index)=><i key={index} style={{animationDelay:index*.4+'s'}}/>)}</div>}{holiday.id==='christmas'&&<div className="santa-caravan"><FestiveGlyph kind="reindeer"/><FestiveGlyph kind="reindeer"/><FestiveGlyph kind="santa"/><SeasonalGlyph kind="gift"/></div>}</div>{holiday.id==='halloween'&&<TrickOrTreat onOpenChange={setEncounterOpen}/>}</>;
}
