import { ANNUAL_HOLIDAYS, DEFAULT_GREETING, HolidayId, NEW_YEAR_RULE, SPRING_EDITIONS, VIETNAM_TIME_ZONE, WINTER_RULE } from './config';
export interface HolidayState { id: HolidayId; greeting: string; targetYear?: number; date: string; }
const formatter = new Intl.DateTimeFormat('en-CA', {timeZone:VIETNAM_TIME_ZONE, year:'numeric', month:'2-digit', day:'2-digit'});
export function getVietnamDate(now: Date) {
  const parts = formatter.formatToParts(now);
  const value = (type: string) => Number(parts.find(part=>part.type===type)!.value);
  const year=value('year'), month=value('month'), day=value('day');
  return {year, month, day, stamp:year+'-'+String(month).padStart(2,'0')+'-'+String(day).padStart(2,'0')};
}
export function resolveHoliday(now: Date = new Date()): HolidayState {
  const {year,month,day,stamp:date}=getVietnamDate(now);
  const md=month*100+day;
  const spring=SPRING_EDITIONS.find(entry=>entry.year===year && md>=entry.start && md<=entry.end);
  if(spring) return {id:'spring',greeting:spring.greeting,date,targetYear:year};
  const targetYear=md>=NEW_YEAR_RULE.start ? year+1 : md<=NEW_YEAR_RULE.end ? year : undefined;
  if(targetYear!==undefined && targetYear>NEW_YEAR_RULE.firstStartYear) {
    return {id:'new-year',greeting:NEW_YEAR_RULE.greeting.replace('{year}',String(targetYear)),targetYear,date};
  }
  const annual=ANNUAL_HOLIDAYS.find(entry=>md>=entry.start && md<=entry.end);
  return annual ? {id:annual.id,greeting:annual.greeting,date} : {id:'default',greeting:DEFAULT_GREETING,date};
}
export function millisecondsToNextVietnamDay(now: Date): number {
  const {year,month,day}=getVietnamDate(now);
  // Vietnam uses UTC+07:00 year-round. Date.UTC also handles month/year rollover.
  const nextMidnight=Date.UTC(year,month-1,day+1)-7*60*60*1000;
  return Math.max(1,nextMidnight-now.getTime()+50);
}

export function isWinterDate(now: Date): boolean { const {month,day}=getVietnamDate(now); const md=month*100+day; return md>=WINTER_RULE.start || md<=WINTER_RULE.end; }
