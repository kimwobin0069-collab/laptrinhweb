import assert from 'node:assert/strict';
import { readFile, writeFile, mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import ts from 'typescript';
const temporary=await mkdtemp(join(tmpdir(),'web-season-tests-'));
try {
  for(const name of ['config','calendar','batFlight']){
    const source=await readFile(new URL('../src/seasonal/'+name+'.ts',import.meta.url),'utf8');
    const compiled=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2020}}).outputText.replace("from './config'","from './config.mjs'");
    await writeFile(join(temporary,name+'.mjs'),compiled);
  }
  const {resolveHoliday,millisecondsToNextVietnamDay,getVietnamDate,isWinterDate}=await import(pathToFileURL(join(temporary,'calendar.mjs')));
  let assertions=0;
  const verify=(date,id,year)=>{
    const result=resolveHoliday(new Date(date.includes('T')?date:date+'T12:00:00+07:00'));
    assert.equal(result.id,id,date);if(year!==undefined)assert.equal(result.targetYear,year,date);
    assertions++;
    return result;
  };
  // Before, first, last and after every inclusive range, across different years.
  for(const year of [2026,2027,2028]){
    for(const [suffix,id] of [['10-26','default'],['10-27','halloween'],['10-31','halloween'],['11-01','default'],['11-09','default'],['11-10','teachers'],['11-22','teachers'],['11-23','default'],['12-14','default'],['12-15','christmas'],['12-25','christmas'],['12-26','new-year']])verify(year+'-'+suffix,id);
    verify(year+'-12-31','new-year',year+1);
    verify((year+1)+'-01-01','new-year',year+1);
    verify((year+1)+'-01-02','new-year',year+1);
    verify((year+1)+'-01-03','default');
    verify((year+1)+'-01-09','default');
    verify((year+1)+'-01-10',year===2026?'spring':'default');
  }
  verify('2026-12-25','christmas');verify('2026-12-26','new-year',2027);
  verify('2027-01-02','new-year',2027);verify('2027-01-03','default');verify('2027-01-09','default');verify('2027-01-10','spring',2027);
  verify('2027-02-14','spring');verify('2027-02-15','default');
  verify('2026-01-01','default');verify('2025-12-26','default');
  for(const year of [2026,2028,2029])assert.ok(!verify(year+'-01-15','default').greeting.includes('Đinh Mùi'));
  assert.equal(verify('2026-12-26','new-year').greeting,'Happy New Year! 2027');
  assert.equal(verify('2027-01-02','new-year').greeting,'Happy New Year! 2027');
  assert.equal(verify('2027-01-10','spring').greeting,'Mừng Xuân Đinh Mùi! Vạn sự như ý - An khang thịnh vượng.');
  assert.equal(verify('2026-11-20','teachers').greeting,'Chào mừng ngày Nhà giáo Việt Nam 20/11!');
  for(const date of ['2026-10-29','2026-12-20','2026-10-17'])assert.equal(resolveHoliday(new Date(date+'T12:00:00+07:00')).greeting,'Chào mừng các em đến với Trang học lập trình web!');
  // UTC is still the previous date when Vietnam has crossed midnight.
  verify('2026-10-26T16:59:59.999Z','default');verify('2026-10-26T17:00:00.000Z','halloween');
  verify('2026-12-25T16:59:59.999Z','christmas');verify('2026-12-25T17:00:00.000Z','new-year',2027);
  verify('2026-12-31T16:59:59.999Z','new-year',2027);verify('2026-12-31T17:00:00.000Z','new-year',2027);
  verify('2027-01-02T16:59:59.999Z','new-year',2027);verify('2027-01-02T17:00:00.000Z','default');
  verify('2027-01-09T16:59:59.999Z','default');verify('2027-01-09T17:00:00.000Z','spring');
  verify('2027-02-14T16:59:59.999Z','spring');verify('2027-02-14T17:00:00.000Z','default');
  assert.equal(getVietnamDate(new Date('2026-12-31T17:00:00Z')).stamp,'2027-01-01');
  assert.equal(millisecondsToNextVietnamDay(new Date('2026-12-31T16:59:59Z')),1050);
  assert.equal(millisecondsToNextVietnamDay(new Date('2027-01-02T17:00:00Z')),86400050);
  assert.equal(millisecondsToNextVietnamDay(new Date('2028-02-28T17:00:00Z')),86400050);
  for(const [date,expected] of [['2026-11-30',false],['2026-12-01',true],['2026-12-31',true],['2027-01-01',true],['2027-01-09',true],['2027-01-10',false],['2027-01-31',false],['2027-02-01',false],['2028-01-09',true],['2028-01-10',false],['2028-01-15',false],['2028-02-01',false]]){
    assert.equal(isWinterDate(new Date(date+'T12:00:00+07:00')),expected,date);assertions++;
  }
  assert.equal(isWinterDate(new Date('2026-11-30T16:59:59Z')),false);
  assert.equal(isWinterDate(new Date('2026-11-30T17:00:00Z')),true);
  assert.equal(isWinterDate(new Date('2027-01-09T16:59:59Z')),true);
  assert.equal(isWinterDate(new Date('2027-01-09T17:00:00Z')),false);
  assert.equal(resolveHoliday(new Date('2028-01-15T12:00:00+07:00')).id,'default');
  const {createBatFlight,drawHalloweenOutcome}=await import(pathToFileURL(join(temporary,'batFlight.mjs')));
  for(let edge=0;edge<4;edge++){
    const values=[(edge+.1)/4,.2,.8,.5,.6,.7];let index=0;const flight=createBatFlight(1440,900,()=>values[index++]);
    assert.ok(flight.duration>=2.4 && flight.duration<=3.2);assert.ok(flight.count>=6 && flight.count<=8);
    if(edge===0){assert.ok(flight.start.x<0);assert.ok(flight.end.x>1440);}
    if(edge===1){assert.ok(flight.start.x>1440);assert.ok(flight.end.x<0);}
    if(edge===2){assert.ok(flight.start.y<0);assert.ok(flight.end.y>900);}
    if(edge===3){assert.ok(flight.start.y>900);assert.ok(flight.end.y<0);}
  }
  assert.equal(createBatFlight(390,844,()=>.5).count,3);
  assert.equal(drawHalloweenOutcome(()=>0),'candy');assert.equal(drawHalloweenOutcome(()=>.4999),'candy');
  assert.equal(drawHalloweenOutcome(()=>.5),'boo');assert.equal(drawHalloweenOutcome(()=>.999),'boo');
  const {BAT_TIMING,SURPRISE_TIMING}=await import(pathToFileURL(join(temporary,'config.mjs')));
  assert.ok(BAT_TIMING.minPauseSeconds>=120);assert.ok(BAT_TIMING.minPauseSeconds+BAT_TIMING.pauseJitterSeconds<=180);
  assert.equal(BAT_TIMING.firstFlightSeconds,120);
  for(const minimum of [SURPRISE_TIMING.firstInvitationMs,SURPRISE_TIMING.nextInvitationMinMs]){
    assert.equal(minimum,180000);
    assert.equal(minimum+SURPRISE_TIMING.nextInvitationJitterMs,300000);
  }
  console.log('Passed '+assertions+' calendar cases plus exact greetings, timezone and midnight-scheduling assertions.');
}finally{await rm(temporary,{recursive:true,force:true});}
