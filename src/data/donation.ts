export type DrinkKind='coffee'|'milk-tea'|'black-tea'|'bac-xiu'|'americano'|'cold-brew'|'flat-white';
export interface DonationTier { id:DrinkKind; amount:number; label:string; description:string; }
export interface BankConfig { bankName:string; bankCode:string; accountNumber:string; accountName:string; memoNote:string; }
export const DONATION_CONFIG={
 authorName:'Thầy Duy Khoa',
 tagline:'Một lời động viên, thêm nhiều bài học hay.',
 description:'Cảm ơn bạn đã đồng hành cùng thầy Duy Khoa, giúp duy trì website và phát triển thêm những bài học miễn phí.',
 bank:{bankName:'MB Bank (Ngân hàng Quân Đội)',bankCode:'MB',accountNumber:'0818237416',accountName:'HUYNH DUY KHOA',memoNote:'Vui lòng ghi lời nhắn nếu có thể. Xin cám ơn!'} as BankConfig,
 tiers:[
  {id:'bac-xiu',amount:30000,label:'Bạc xỉu đá',description:'Một chút cà phê, nhiều sữa ngọt ngào'},
  {id:'americano',amount:45000,label:'Americano đá',description:'Đậm đà nguyên bản, sảng khoái và tỉnh táo'},
  {id:'coffee',amount:55000,label:'Capuchino nóng',description:'Đậm đà thơm béo, ấm áp và cảm hứng'},
  {id:'cold-brew',amount:75000,label:'Cold Brew',description:'Ủ lạnh ủ chậm, êm dịu và sảng khoái'},
  {id:'flat-white',amount:100000,label:'Flat White',description:'Espresso đậm đà hòa quyện lớp bọt sữa mịn màng'}
 ] as DonationTier[]
};
export function formatDonationAmount(amount:number){return new Intl.NumberFormat('vi-VN').format(amount)+'đ';}
export function buildDonationQrUrl(amount?:number){
 const {bank}=DONATION_CONFIG;
 const params=new URLSearchParams({accountName:bank.accountName});
 if(amount!==undefined&&Number.isSafeInteger(amount)&&amount>0)params.set('amount',String(amount));
 return 'https://img.vietqr.io/image/'+bank.bankCode+'-'+bank.accountNumber+'-compact.png?'+params.toString();
}
