export interface DonationTier {
  amount: number;
  label: string;
  emoji: string;
  description: string;
}

export interface BankConfig {
  bankName: string;
  bankCode: string;
  accountNumber: string;
  accountName: string;
  defaultMemo: string;
}

export interface MomoConfig {
  phoneNumber: string;
  accountName: string;
}

export const DONATION_CONFIG = {
  authorName: 'Duy Khoa',
  tagline: 'Bao tôi ly cà phê ☕',
  description:
    'Website Học Lập Trình Web hoàn toàn phi lợi nhuận và miễn phí 100% dành cho học sinh THPT. Một ly cà phê nhỏ là nguồn động viên rất lớn giúp Duy Khoa duy trì máy chủ và phát triển thêm nhiều bài học hay!',
  bank: {
    bankName: 'MB Bank (Ngân hàng Quân Đội)',
    bankCode: 'MB', // Mã VietQR (MB, VCB, TCB, ACB, VPB, TPB, ...)
    accountNumber: '0901234567', // Bạn có thể thay đổi số tài khoản tại đây
    accountName: 'DUY KHOA',
    defaultMemo: 'Ung ho Hoc Lap Trinh Web',
  } as BankConfig,
  momo: {
    phoneNumber: '0901234567', // Bạn có thể thay đổi số MoMo tại đây
    accountName: 'DUY KHOA',
  } as MomoConfig,
  tiers: [
    { amount: 10000, label: '10.000đ', emoji: '🧊', description: 'Trà đá thanh mát' },
    { amount: 20000, label: '20.000đ', emoji: '☕', description: 'Cà phê đen tỉnh táo (Gợi ý)' },
    { amount: 30000, label: '30.000đ', emoji: '🧋', description: 'Cà phê sữa ngọt ngào' },
    { amount: 50000, label: '50.000đ', emoji: '🥤', description: 'Bạc xỉu tràn đầy năng lượng' },
  ] as DonationTier[],
};
