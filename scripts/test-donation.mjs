import assert from 'node:assert/strict';
import {readFile,writeFile,mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {pathToFileURL} from 'node:url';
import ts from 'typescript';
const temporary=await mkdtemp(join(tmpdir(),'web-donation-'));
try{
 const source=await readFile(new URL('../src/data/donation.ts',import.meta.url),'utf8');
 const compiled=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2020}}).outputText;
 const file=join(temporary,'donation.mjs');await writeFile(file,compiled);
 const {DONATION_CONFIG,buildDonationQrUrl}=await import(pathToFileURL(file));
 const free=new URL(buildDonationQrUrl());
 assert.equal(free.searchParams.has('amount'),false,'Default QR must not fix an amount');
 assert.equal(free.searchParams.get('accountName'),DONATION_CONFIG.bank.accountName);
 assert.equal(free.pathname,'/image/'+DONATION_CONFIG.bank.bankCode+'-'+DONATION_CONFIG.bank.accountNumber+'-compact.png');
 const expected = {
  'bac-xiu': 30000,
  'americano': 45000,
  'coffee': 55000,
  'cold-brew': 75000,
  'flat-white': 100000
 };
 assert.equal(new Set(DONATION_CONFIG.tiers.map(t=>t.id)).size, 5);
 assert.deepEqual(DONATION_CONFIG.tiers.map(t=>t.amount), [30000, 45000, 55000, 75000, 100000]);
 for(const tier of DONATION_CONFIG.tiers){
  assert.equal(tier.amount, expected[tier.id]);
  const qr=new URL(buildDonationQrUrl(tier.amount));
  assert.equal(qr.searchParams.get('amount'), String(tier.amount));
  assert.equal(qr.pathname, free.pathname, 'Changing a drink must preserve the recipient');
  assert.equal(qr.searchParams.get('accountName'), free.searchParams.get('accountName'));
 }
 for(const invalid of [0,-100,NaN,Infinity,1.2])assert.equal(new URL(buildDonationQrUrl(invalid)).searchParams.has('amount'),false);
 assert.equal(new URL(buildDonationQrUrl()).searchParams.has('amount'),false,'Clearing a drink must restore the open QR');
 console.log('Passed donation QR checks: open amount, all 4 drinks, unchanged recipient and cleared selection.');
}finally{await rm(temporary,{recursive:true,force:true});}
