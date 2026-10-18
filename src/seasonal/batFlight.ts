export interface BatFlight { start: {x:number;y:number}; end: {x:number;y:number}; duration:number; count:number; seed:number; }
/** Each flock gets a new edge, altitude and diagonal; all paths start/end off screen. */
export function createBatFlight(width:number,height:number,random:()=>number=Math.random):BatFlight {
  const edge=Math.min(3,Math.floor(random()*4));
  const lane=.18+random()*.64, endLane=.18+random()*.64;
  const margin=120;
  const paths=[
    {start:{x:-margin,y:height*lane},end:{x:width+margin,y:height*endLane}},
    {start:{x:width+margin,y:height*lane},end:{x:-margin,y:height*endLane}},
    {start:{x:width*lane,y:-margin},end:{x:width*endLane,y:height+margin}},
    {start:{x:width*lane,y:height+margin},end:{x:width*endLane,y:-margin}}
  ];
  return {...paths[edge],duration:2.4+random()*.8,count:width<768?3:6+Math.floor(random()*3),seed:random()*Math.PI*2};
}

export function drawHalloweenOutcome(random:()=>number=Math.random):'candy'|'boo' { return random()<.5?'candy':'boo'; }
