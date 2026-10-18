# Học Liệu Lập Trình Web THPT (HTML, CSS & JavaScript)

Website học liệu điện tử dành cho học sinh THPT, cung cấp hệ thống kiến thức nền tảng về lập trình web bao gồm **HTML5**, **CSS3** và **JavaScript cơ bản**. Ứng dụng hỗ trợ giao diện học liệu chuẩn mực, trực quan, tích hợp khung chạy thử mã lệnh (Sandbox Playground) thời gian thực và ghi nhận tiến độ tự học.

---

## 1. Cấu trúc thư mục dự án

```text
LTweb/
├── index.html                  # Khung HTML gốc với SEO & phông chữ tiếng Việt
├── package.json                # Cấu hình dự án và dependencies
├── tsconfig.json               # Cấu hình TypeScript
├── vite.config.ts              # Cấu hình máy chủ phát triển Vite
├── tailwind.config.js          # Hệ thống màu sắc và phông chữ
├── postcss.config.js           # Cấu hình PostCSS
└── src/
    ├── main.tsx                # Điểm khởi chạy React
    ├── App.tsx                 # Điều hướng Hash Routing, Quản lý State & Layout
    ├── index.css               # Phong cách toàn cục và thanh cuộn tùy biến
    ├── types/
    │   └── lesson.ts           # Định nghĩa cấu trúc dữ liệu Lesson, Section, Example
    ├── utils/
    │   ├── storage.ts          # Lưu trữ tiến độ và giao diện sáng/tối an toàn
    │   └── vietnamese.ts       # Thuật toán tìm kiếm tiếng Việt không phân biệt dấu
    ├── data/
    │   ├── htmlLessons.ts      # Toàn bộ 11 bài học HTML chuẩn mực
    │   ├── cssLessons.ts       # Toàn bộ 11 bài học CSS chuẩn mực
    │   ├── jsLessons.ts        # Toàn bộ 12 bài học JavaScript cơ bản
    │   ├── overview.ts         # Lộ trình học tập và phương pháp tự học
    │   └── lessons.ts          # Chỉ mục tổng hợp và tìm kiếm bài học
    └── components/
        ├── Icons.tsx           # Thư viện biểu tượng SVG độc lập, siêu nhẹ
        ├── Header.tsx          # Thanh tiêu đề, ô tìm kiếm, nút đổi sáng/tối
        ├── Sidebar.tsx         # Mục lục 3 phần phân cấp, có thể thu gọn
        ├── TableOfContents.tsx # Mục lục trong bài (On-this-page) cuộn mượt
        ├── CodePlayground.tsx  # Khung soạn thảo, sao chép và chạy thử Sandbox
        ├── LessonView.tsx      # Khung trình bày bài học đầy đủ mục tiêu, ví dụ, lỗi
        ├── OverviewView.tsx    # Trang tổng quan lộ trình 3 chặng học tập
        ├── SearchModal.tsx     # Hộp tìm kiếm nhanh (Ctrl + K) không dấu
        └── ProgressModal.tsx   # Xem chi tiết tiến độ và nút xóa tiến độ
```

---

## 2. Hướng dẫn cài đặt và vận hành

### Yêu cầu hệ thống:
- Đã cài đặt **Node.js** (khuyến nghị phiên bản 18 trở lên).
- Trình quản lý gói `npm` hoặc `yarn`.

### Bước 1: Cài đặt các gói phụ thuộc
Mở cửa sổ dòng lệnh (Terminal / PowerShell) tại thư mục dự án và chạy:
```bash
npm install
```

### Bước 2: Chạy môi trường phát triển (Local Development)
```bash
npm run dev
```
Trình duyệt sẽ hiển thị địa chỉ cục bộ (thường là `http://localhost:5173`). Bạn nhấp vào liên kết để bắt đầu trải nghiệm website ngay lập tức.

### Bước 3: Đóng gói sản phẩm (Production Build)
Để xuất bản website tĩnh (sẵn sàng đưa lên GitHub Pages, Vercel hoặc Netlify):
```bash
npm run build
```
Thư mục sản phẩm cuối cùng sẽ được tạo ra tại thư mục `dist/`.

---

## 3. Các tính năng nổi bật của website

1. **Tiếp cận bài học ngay lập tức**: Khi mở trang web, học sinh được đưa thẳng vào nội dung bài học hoặc trang tổng quan lộ trình, không có banner quảng cáo hay landing page che khuất.
2. **Khung chạy thử mã Sandbox an toàn**: Mỗi bài học đều có ví dụ minh họa có thể chỉnh sửa trực tiếp và nhấn **"Chạy thử"**. Mã nguồn được thực thi bên trong `iframe sandbox="allow-scripts"` độc lập hoàn toàn, không phụ thuộc vào đường link ngoài và không làm ảnh hưởng đến trang web chính.
3. **Nút sao chép mã kèm phản hồi**: Học sinh có thể nhấn nút **"Sao chép"** để copy mã lệnh vào clipboard, màn hình sẽ hiển thị thông báo trạng thái tức thì.
4. **Tìm kiếm tiếng Việt thông minh**: Hỗ trợ tìm kiếm theo cả tiếng Việt có dấu và không dấu (ví dụ: gõ `"bang"` sẽ tìm thấy bài *"Tạo bảng"*, gõ `"bien"` sẽ tìm thấy *"Biến, hằng và kiểu dữ liệu"*). Phím tắt tiện lợi `Ctrl + K`.
5. **Điều hướng Hash Routing chuẩn xác**: Mỗi bài học có đường dẫn URL định danh riêng (ví dụ: `#/lesson/html-7`, `#/lesson/css-4`). Khi tải lại trang (F5) hoặc gửi link cho bạn bè, website luôn mở chính xác bài học đó.
6. **Lưu trữ tiến độ và Giao diện Sáng/Tối**: Tự động ghi nhớ các bài học học sinh đã đọc và giao diện ưa thích bằng `localStorage`, có cơ chế dự phòng an toàn (In-memory fallback) nếu trình duyệt chặn cookie/storage.
7. **Bảo đảm khả năng tiếp cận (Accessibility)**: Thao tác mượt mà bằng bàn phím (phím Tab, phím Esc, Enter), các nút đều có nhãn `aria-label`, không dùng emoji làm biểu tượng giao diện.

---

## 4. Hướng dẫn thêm hoặc sửa một bài học

Mọi nội dung bài học được lưu trữ riêng biệt dưới dạng dữ liệu có cấu trúc TypeScript tại thư mục `src/data/`, rất thuận tiện cho giáo viên chỉnh sửa hoặc bổ sung câu hỏi/ví dụ mới.

### Cách sửa bài học có sẵn:
- **Để sửa bài HTML**: Mở file `src/data/htmlLessons.ts`, tìm đến bài học theo `id` (ví dụ `html-1`, `html-7`).
- **Để sửa bài CSS**: Mở file `src/data/cssLessons.ts`.
- **Để sửa bài JavaScript**: Mở file `src/data/jsLessons.ts`.

### Cấu trúc chuẩn của một bài học (`Lesson`):
```typescript
{
  id: 'html-12',                     // Mã định danh duy nhất (không trùng lặp)
  track: 'html',                     // Thuộc phân hệ: 'html' | 'css' | 'js'
  order: 12,                         // Số thứ tự bài học
  title: 'Tên bài học',              // Tiêu đề hiển thị
  slug: 'ten-bai-hoc',               // Tên đường dẫn thân thiện
  description: 'Mô tả ngắn gọn...', // Đoạn văn giới thiệu ngắn
  estimatedMinutes: 20,              // Thời gian ước tính hoàn thành
  objectives: [                      // Các mục tiêu học tập (checklist)
    'Nắm được...',
    'Thực hành được...'
  ],
  sections: [                        // Các mục lý thuyết được chia nhỏ
    {
      id: 'muc-1',
      title: '1. Tiêu đề mục lý thuyết',
      paragraphs: ['Đoạn văn 1...', 'Đoạn văn 2...'],
      bulletPoints: ['Gạch đầu dòng 1', 'Gạch đầu dòng 2'],
      table: {                       // (Tùy chọn) Bảng giải thích cú pháp
        caption: 'Bảng giải thích',
        headers: ['Cột 1', 'Cột 2'],
        rows: [['Dữ liệu 1', 'Dữ liệu 2']]
      },
      callout: {                     // (Tùy chọn) Hộp lưu ý / mẹo hay
        type: 'note',                // 'note' | 'tip' | 'warning' | 'info'
        title: 'Lưu ý quan trọng',
        content: 'Nội dung nhắc nhở...'
      }
    }
  ],
  codeExamples: [                    // Ví dụ có thể chạy thử trong Sandbox
    {
      id: 'vd-1',
      title: 'Tiêu đề ví dụ',
      description: 'Mô tả ví dụ...',
      language: 'html',              // 'html' | 'css' | 'javascript'
      runnable: true,
      initialCode: `<!DOCTYPE html>...`,
      explanation: 'Giải thích chi tiết từng câu lệnh...'
    }
  ],
  commonMistakes: [                  // Lỗi thường gặp và cách khắc phục
    {
      mistake: 'Học sinh hay mắc lỗi...',
      cause: 'Nguyên nhân...',
      solution: 'Cách sửa chuẩn...'
    }
  ],
  keyTakeaways: [                    // Ghi nhớ cốt lõi cuối bài
    'Ý chính 1...',
    'Ý chính 2...'
  ]
}
```

Sau khi thêm hoặc sửa, hệ thống sẽ tự động cập nhật mục lục ở thanh bên trái, mục lục trong bài, thanh tìm kiếm và bộ đếm tiến độ học tập mà không cần sửa đổi thêm bất kỳ tệp giao diện nào khác.

## Chạy bản chính thức trên máy

Sau khi tạo bản dựng bằng npm run build, chạy npm start rồi mở http://localhost:4173. Đây là bản tĩnh trong dist, tự đổi chủ đề theo ngày thật tại Việt Nam; không hiển thị công cụ xem thử. Chỉ chạy npm run dev:themes khi cần bảo trì và kiểm tra lịch lễ. Để xuất bản lên Internet, đưa toàn bộ nội dung dist lên hosting tĩnh hoặc máy chủ đã chọn.
