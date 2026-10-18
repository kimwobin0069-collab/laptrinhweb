// Shared six-fold crystal geometry for the SVG ornaments and cached canvas flakes.
const ARM='M0 0L-1.5-7V-26L0-30L1.5-26V-7Z M-1-10L-10-18L-11-22L-7-20L-1-14 M1-10L10-18L11-22L7-20L1-14 M-1-18L-6-23V-26L-3-25L-1-22 M1-18L6-23V-26L3-25L1-22';
const VEINS='M0-2V-28 M0-12L-9-21M0-12L9-21M0-21L-5-25M0-21L5-25';
export function SnowCrystal(){return <svg viewBox="0 0 64 64" className="illustrated-glyph crystal-snowflake" aria-hidden="true" focusable="false"><g transform="translate(32 32)" strokeLinejoin="round">{[0,60,120,180,240,300].map(angle=><g key={angle} transform={'rotate('+angle+')'}><path d={ARM} fill="#e9faff" fillOpacity=".65" stroke="#469fc7" strokeWidth=".85"/><path d={VEINS} fill="none" stroke="#fff" strokeWidth=".65"/><path d="M-1-7V-25M-8-19L-2-14" stroke="#9cdeed" strokeWidth=".45" fill="none"/></g>)}<path d="M0-5L4.33-2.5V2.5L0 5L-4.33 2.5V-2.5Z" fill="#efffff" stroke="#55a9ce" strokeWidth=".8"/><circle r="1.5" fill="#fff"/></g></svg>;}
export function createSnowCrystalSprite(dark:boolean){
 const sprite=document.createElement('canvas');sprite.width=128;sprite.height=128;
 const ctx=sprite.getContext('2d');if(!ctx)return sprite;
 const outline=new Path2D(ARM),veins=new Path2D(VEINS);
 ctx.translate(64,64);ctx.scale(1.9,1.9);ctx.lineJoin='round';
 for(let arm=0;arm<6;arm++){
  ctx.save();ctx.rotate(arm*Math.PI/3);ctx.fillStyle=dark?'#dffaffbb':'#def6ffbb';ctx.strokeStyle=dark?'#a9e4ff':'#3c95bc';ctx.lineWidth=.85;ctx.fill(outline);ctx.stroke(outline);ctx.strokeStyle='#ffffff';ctx.lineWidth=.6;ctx.stroke(veins);ctx.restore();
 }
 ctx.beginPath();for(let i=0;i<6;i++){const angle=i*Math.PI/3-Math.PI/2;const x=Math.cos(angle)*5,y=Math.sin(angle)*5;if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}ctx.closePath();ctx.fillStyle='#ffffff';ctx.fill();ctx.strokeStyle='#80c6df';ctx.lineWidth=.7;ctx.stroke();return sprite;
}
