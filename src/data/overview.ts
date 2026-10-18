import { TrackInfo } from '../types/lesson';

export const tracksInfo: Record<string, TrackInfo> = {
  html: {
    id: 'html',
    name: 'HTML',
    title: 'Khung Xương Trang Web (HTML5)',
    shortDescription: '11 bài học từ khái niệm web, cấu trúc tài liệu, định dạng văn bản, bảng, liên kết đến biểu mẫu nhập liệu.',
    color: '#2563eb', // blue
    badgeBg: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200',
    borderColor: 'border-blue-500',
    totalLessons: 11,
    prerequisites: 'Không yêu cầu kiến thức lập trình trước đó.',
    summary: 'HTML định nghĩa cấu trúc và nội dung hiển thị của mọi trang web trên Internet. Đây là bước khởi đầu bắt buộc của mọi lập trình viên web.'
  },
  css: {
    id: 'css',
    name: 'CSS',
    title: 'Giao Diện & Thẩm Mỹ (CSS3)',
    shortDescription: '11 bài học về màu sắc, phông chữ, CSS Box Model, bộ chọn nâng cao, hiệu ứng liên kết, Flexbox và quy trình triển khai hosting.',
    color: '#0284c7', // sky
    badgeBg: 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-200',
    borderColor: 'border-sky-500',
    totalLessons: 11,
    prerequisites: 'Đã hoàn thành phần kiến thức HTML cơ bản.',
    summary: 'CSS thổi hồn vẻ đẹp hiện đại, bố cục khoa học và màu sắc sinh động cho trang web. Bạn sẽ học cách làm cho trang web tương thích mượt mà trên cả máy tính lẫn điện thoại.'
  },
  js: {
    id: 'js',
    name: 'JavaScript',
    title: 'Tương Tác & Hành Vi Động',
    shortDescription: '12 bài học về biến, kiểu dữ liệu, rẽ nhánh, vòng lặp, hàm, thao tác cây DOM, xử lý sự kiện bấm chuột và kiểm tra biểu mẫu.',
    color: '#d97706', // amber
    badgeBg: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200',
    borderColor: 'border-amber-500',
    totalLessons: 12,
    prerequisites: 'Đã nắm vững cấu trúc thẻ HTML và định kiểu CSS.',
    summary: 'JavaScript là ngôn ngữ lập trình chạy trực tiếp trên trình duyệt, biến trang web từ dạng tĩnh thành ứng dụng thông minh có thể phản hồi mọi thao tác của người dùng.'
  }
};

export const roadmapSteps = [
  {
    step: 1,
    title: 'Chặng 1: Xây Dựng Khung Xương Với HTML',
    description: 'Bắt đầu từ cách tạo file index.html, hiểu ý nghĩa từng thẻ, học cách trình bày văn bản, chia đoạn, tạo bảng thời khóa biểu và biểu mẫu liên hệ.',
    focus: '11 bài học • Thời gian gợi ý: 2-3 tuần',
    trackId: 'html',
    highlights: ['Cấu trúc HTML5 chuẩn', 'Bảng dữ liệu & gộp ô', 'Biểu mẫu nhập liệu form', 'Khung nhúng iframe & đa phương tiện']
  },
  {
    step: 2,
    title: 'Chặng 2: Trang Trí & Dàn Trang Bằng CSS',
    description: 'Khoác áo mới cho khung xương HTML. Nắm vững mô hình hộp Box Model, kiểm soát kích thước với border-box, tạo menu ngang và dàn bố cục hiện đại với Flexbox.',
    focus: '11 bài học • Thời gian gợi ý: 3-4 tuần',
    trackId: 'css',
    highlights: ['CSS Box Model', 'Hiệu ứng liên kết hover/active', 'Menu ngang từ thẻ ul', 'Bố cục Flexbox', 'Quy trình xuất bản web lên hosting']
  },
  {
    step: 3,
    title: 'Chặng 3: Lập Trình Tương Tác Cùng JavaScript',
    description: 'Thổi bùng sức sống cho website. Tự tay viết code xử lý sự kiện bấm chuột, kiểm tra dữ liệu đăng ký form và thay đổi giao diện linh hoạt qua cây DOM.',
    focus: '12 bài học • Thời gian gợi ý: 3-4 tuần',
    trackId: 'js',
    highlights: ['Biến let/const & kiểu dữ liệu', 'Rẽ nhánh if/else & vòng lặp', 'Điều khiển cây DOM với querySelector', 'Bắt sự kiện addEventListener', 'Mini Project tổng hợp']
  }
];

export const studyTips = [
  {
    title: 'Tự tay gõ mã lệnh',
    content: 'Tuyệt đối không chỉ đọc lý thuyết suông hoặc sao chép mã dán vào. Hãy tận dụng khung "Chạy thử" sandbox ở mỗi bài học để tự gõ lại từng dòng code.'
  },
  {
    title: 'Thử nghiệm thay đổi giá trị',
    content: 'Khi gặp một ví dụ CSS hay JS, hãy thử đổi màu xanh thành đỏ, đổi số 10 thành 50 và bấm "Chạy thử" để xem điều gì xảy ra. Thử sai là cách nhanh nhất để hiểu bản chất.'
  },
  {
    title: 'Làm quen với F12 DevTools',
    content: 'Bật phím F12 trên bàn phím bất cứ khi nào code không chạy đúng. Tab Console sẽ chỉ rõ cho bạn biết dòng code nào đang gặp lỗi cú pháp.'
  },
  {
    title: 'Kiên trì theo từng bài',
    content: 'Chương trình được thiết kế nối tiếp tuần tự từ cơ bản đến nâng cao. Hãy đánh dấu hoàn thành từng bài trước khi chuyển sang bài tiếp theo.'
  }
];
