import { Lesson } from '../types/lesson';

export const cssLessons: Lesson[] = [
  {
    id: 'css-1',
    track: 'css',
    order: 1,
    title: 'Khái quát về CSS',
    slug: 'khai-quat-ve-css',
    description: 'Khám phá thế giới CSS (Cascading Style Sheets), tìm hiểu cú pháp cơ bản gồm bộ chọn, thuộc tính, giá trị và cách CSS biến đổi giao diện web.',
    estimatedMinutes: 15,
    objectives: [
      'Hiểu rõ CSS là gì và tại sao web hiện đại bắt buộc phải có CSS.',
      'Nắm vững cú pháp cơ bản của một quy tắc CSS: Bộ chọn (Selector), Thuộc tính (Property) và Giá trị (Value).',
      'Phân biệt rõ ràng vai trò của HTML (nội dung) và CSS (hình thức trình bày).'
    ],
    sections: [
      {
        id: 'css-la-gi',
        title: '1. CSS là gì và tại sao cần có CSS?',
        paragraphs: [
          'CSS viết tắt của Cascading Style Sheets (Bảng định kiểu xếp tầng). Nếu như HTML đóng vai trò dựng khung xương (tiêu đề, đoạn văn, bảng biểu, ảnh), thì CSS chính là lớp da thịt, trang phục, màu sắc và phong cách làm cho trang web trở nên đẹp mắt, cuốn hút và chuyên nghiệp.',
          'Nếu không có CSS, mọi trang web trên thế giới đều sẽ trông như một tài liệu Word thô sơ với nền trắng, chữ đen nhàm chán và các hình ảnh nằm xếp dọc lộn xộn.'
        ]
      },
      {
        id: 'cu-phap-css',
        title: '2. Cấu trúc ngữ pháp cơ bản của một quy tắc CSS',
        paragraphs: [
          'Một quy tắc CSS (CSS Rule) bao gồm 2 phần cốt lõi: Bộ chọn (Selector) và Khối khai báo (Declaration Block):',
          'Cú pháp mẫu:',
          'bo_chon { thuoc_tinh: gia_tri; }'
        ],
        bulletPoints: [
          'Bộ chọn (Selector): Chỉ định phần tử HTML nào sẽ được áp dụng kiểu dáng (ví dụ: h1, p, a).',
          'Thuộc tính (Property): Đặc điểm thẩm mỹ bạn muốn thay đổi (ví dụ: color, font-size, background-color).',
          'Giá trị (Value): Thiết lập cụ thể cho thuộc tính đó (ví dụ: blue, 24px, #ffffff).',
          'Dấu hai chấm (:): Ngăn cách giữa thuộc tính và giá trị.',
          'Dấu chấm phẩy (;): BẮT BUỘC đặt ở cuối mỗi khai báo để ngăn cách các thuộc tính với nhau.',
          'Cặp ngoặc nhọn { ... }: Bao bọc toàn bộ các khai báo dành cho bộ chọn đó.'
        ],
        callout: {
          type: 'warning',
          title: 'Lỗi cú pháp phổ biến nhất',
          content: 'Quên dấu chấm phẩy (;) ở cuối dòng là lỗi kinh điển nhất của học sinh khi mới học CSS, khiến trình duyệt bỏ qua toàn bộ các thuộc tính viết ngay sau đó.'
        }
      }
    ],
    codeExamples: [
      {
        id: 'vd-css-co-ban',
        title: 'Ví dụ: Quy tắc CSS đầu tiên',
        description: 'Định dạng màu chữ xanh dương và cỡ chữ lớn cho tiêu đề h1.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Ví dụ CSS cơ bản</title>
  <style>
    /* Đây là chú thích trong CSS */
    h1 {
      color: #1d4ed8;            /* Màu chữ xanh dương đậm */
      font-family: sans-serif;   /* Phông chữ không chân hiện đại */
      text-align: center;        /* Căn lề giữa trang */
    }
    p {
      color: #475569;            /* Màu xám thanh lịch */
      font-size: 18px;           /* Cỡ chữ 18 pixel */
      line-height: 1.6;          /* Giãn dòng dễ đọc */
    }
  </style>
</head>
<body>
  <h1>Chào mừng bạn đến với thế giới CSS!</h1>
  <p>Nhờ có CSS, trang web không còn là những dòng chữ đen trắng buồn tẻ mà đã khoác lên mình màu sắc và bố cục hài hòa.</p>
</body>
</html>`,
        explanation: 'Nhìn vào khối <style>: Ta đã chọn phần tử <h1> để tô màu xanh (#1d4ed8) và căn giữa; chọn <p> để đổi màu chữ xám và giãn dòng.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Quên dấu chấm phẩy (;) ở cuối câu lệnh CSS.',
        cause: 'Viết color: red font-size: 16px; (thiếu dấu ; sau red).',
        solution: 'Luôn kết thúc mỗi thuộc tính bằng dấu chấm phẩy (;).'
      },
      {
        mistake: 'Dùng dấu hai chấm (:) thay vì dấu chấm phẩy ở cuối dòng.',
        cause: 'Nhầm lẫn giữa dấu ngăn cách tên thuộc tính và dấu kết thúc dòng.',
        solution: 'Quy tắc: Tên_thuộc_tính : Giá_trị ;'
      }
    ],
    keyTakeaways: [
      'CSS chịu trách nhiệm toàn bộ về mặt thẩm mỹ, màu sắc và bố cục của trang web.',
      'Cú pháp CSS: Selector { Property: Value; }.',
      'Mỗi khai báo CSS phải kết thúc bằng dấu chấm phẩy (;).'
    ]
  },
  {
    id: 'css-2',
    track: 'css',
    order: 2,
    title: 'Cách tổ chức mã lệnh CSS',
    slug: 'cach-to-chuc-ma-lenh-css',
    description: 'So sánh 3 phương pháp chèn CSS vào trang web: Inline CSS, Internal CSS và External CSS. Hiểu rõ khi nào nên dùng và thứ tự ưu tiên áp dụng.',
    estimatedMinutes: 20,
    objectives: [
      'Nắm vững 3 phương pháp đưa mã CSS vào tài liệu HTML: Inline, Internal và External.',
      'So sánh ưu và nhược điểm của từng phương pháp trong các tình huống thực tế.',
      'Hiểu lý do vì sao External CSS là tiêu chuẩn tối ưu trong phát triển web chuyên nghiệp.'
    ],
    sections: [
      {
        id: 'ba-phuong-phap-css',
        title: '1. Ba cách tổ chức mã lệnh CSS',
        paragraphs: [
          'Bạn có thể đưa các quy tắc CSS vào tài liệu web theo một trong 3 cách sau:'
        ],
        bulletPoints: [
          '1. Inline CSS (Nội dòng): Viết trực tiếp mã CSS vào thuộc tính style của từng thẻ HTML cụ thể. Ví dụ: <h1 style="color: blue;">Xin chào</h1>.',
          '2. Internal CSS (Nội bộ): Viết toàn bộ quy tắc CSS vào bên trong cặp thẻ <style> đặt trong phần <head> của file HTML.',
          '3. External CSS (Rời bên ngoài): Viết mã CSS vào một tệp tin độc lập có phần mở rộng .css (ví dụ: style.css), sau đó liên kết vào trang HTML bằng thẻ <link rel="stylesheet" href="style.css"> đặt trong <head>.'
        ]
      },
      {
        id: 'so-sanh-va-khi-nao-dung',
        title: '2. So sánh và thời điểm sử dụng từng phương pháp',
        paragraphs: [
          'Dưới đây là bảng phân tích chi tiết giúp học sinh lựa chọn đúng phương pháp:'
        ],
        table: {
          caption: 'So sánh 3 cách tổ chức mã CSS',
          headers: ['Phương pháp', 'Ưu điểm', 'Nhược điểm', 'Khi nào nên dùng?'],
          rows: [
            ['Inline CSS', 'Nhanh, chỉ áp dụng cho riêng 1 phần tử', 'Khó quản lý, trùng lặp mã, làm bẩn mã HTML', 'Thử nghiệm nhanh 1 kiểu dáng hoặc dùng trong email HTML'],
            ['Internal CSS', 'Áp dụng cho toàn bộ trang hiện tại, không cần tạo thêm file ngoài', 'Không tái sử dụng được cho các trang khác trong cùng website', 'Website chỉ có đúng 1 trang đơn lẻ hoặc bài kiểm tra nhỏ'],
            ['External CSS', 'Tái sử dụng cho hàng trăm trang, tải trang nhanh hơn nhờ bộ nhớ đệm (Cache)', 'Cần quản lý thêm tệp tin .css rời', 'Tiêu chuẩn BẮT BUỘC cho mọi dự án website thực tế']
          ]
        },
        callout: {
          type: 'note',
          title: 'Lời khuyên cho học sinh',
          content: 'Trong các dự án thực tế, bạn hãy luôn tách riêng file HTML (chứa cấu trúc) và file style.css (chứa kiểu dáng). Việc này giúp mã nguồn sạch sẽ, dễ chấm điểm và dễ dàng bảo trì.'
        }
      }
    ],
    codeExamples: [
      {
        id: 'vd-external-internal-css',
        title: 'Ví dụ minh họa Internal CSS và liên kết External CSS',
        description: 'Cấu trúc đặt thẻ <link> và thẻ <style> trong phần <head>.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Ví dụ tổ chức mã CSS</title>
  
  <!-- Cách 1: Liên kết file CSS bên ngoài (External CSS) -->
  <!-- <link rel="stylesheet" href="css/style.css"> -->

  <!-- Cách 2: Viết CSS nội bộ (Internal CSS) -->
  <style>
    body {
      background-color: #f8fafc;
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    .hop-thong-bao {
      background: white;
      border-left: 4px solid #3b82f6;
      padding: 15px;
      border-radius: 6px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
  </style>
</head>
<body>
  <div class="hop-thong-bao">
    <!-- Cách 3: Inline CSS trực tiếp trên thẻ -->
    <h3 style="color: #1e40af; margin-top: 0;">Thông báo từ CLB Tin học</h3>
    <p>Nội dung này được định dạng kết hợp giữa Internal CSS và Inline CSS.</p>
  </div>
</body>
</html>`,
        explanation: 'Khối thông báo được vẽ viền xanh và bóng mờ nhờ Internal CSS, còn tiêu đề h3 được chỉnh màu trực tiếp bằng thuộc tính style inline.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Quên thuộc tính rel="stylesheet" khi dùng thẻ <link> để chèn file CSS.',
        cause: 'Chỉ viết <link href="style.css"> mà thiếu rel="stylesheet".',
        solution: 'Nếu thiếu rel="stylesheet", trình duyệt sẽ không biết đây là tệp bảng kiểu CSS và sẽ không áp dụng giao diện.'
      },
      {
        mistake: 'Lạm dụng Inline CSS cho mọi thẻ HTML trong bài làm.',
        cause: 'Tiện tay viết luôn style="" vào từng thẻ.',
        solution: 'Khi muốn đổi màu trang web từ xanh sang đỏ, bạn sẽ phải vào sửa hàng trăm thẻ. Hãy gom vào file style.css.'
      }
    ],
    keyTakeaways: [
      'Có 3 cách chèn CSS: Inline (thuộc tính style), Internal (thẻ <style>), External (file .css rời liên kết qua thẻ <link>).',
      'External CSS là cách làm chuẩn mực và chuyên nghiệp nhất trong thực tế.',
      'Thẻ <link rel="stylesheet" href="..."> luôn được đặt bên trong phần <head>.'
    ]
  },
  {
    id: 'css-3',
    track: 'css',
    order: 3,
    title: 'Định kiểu font chữ và văn bản',
    slug: 'dinh-kieu-font-chu-va-van-ban',
    description: 'Làm chủ các thuộc tính typography: font-family, font-size, font-weight, color, text-align, line-height, text-decoration và font dự phòng tiếng Việt.',
    estimatedMinutes: 20,
    objectives: [
      'Sử dụng chính xác các thuộc tính định kiểu chữ: font-family, font-size, font-weight, font-style.',
      'Làm chủ các thuộc tính căn chỉnh văn bản: color, text-align, line-height, text-decoration.',
      'Thiết lập danh sách phông chữ dự phòng (Fallback Fonts) hỗ trợ tiếng Việt mượt mà.'
    ],
    sections: [
      {
        id: 'nhom-thuoc-tinh-font',
        title: '1. Nhóm thuộc tính về phông chữ (Font Properties)',
        paragraphs: [
          'Chữ viết là nội dung quan trọng nhất trên mọi trang web giáo dục. CSS cung cấp bộ công cụ mạnh mẽ để tùy biến chữ:'
        ],
        bulletPoints: [
          'font-family: Tên phông chữ (ví dụ: Arial, "Times New Roman", sans-serif). Luôn đặt các phông dự phòng phía sau cách nhau bằng dấu phẩy.',
          'font-size: Kích thước chữ (đơn vị thông dụng: px, rem, em). Cỡ chữ chuẩn cho nội dung bài đọc thường từ 16px đến 18px.',
          'font-weight: Độ đậm của chữ (normal - bình thường 400, bold - in đậm 700).',
          'font-style: Kiểu chữ (normal - thẳng đứng, italic - in nghiêng).'
        ]
      },
      {
        id: 'nhom-thuoc-tinh-text',
        title: '2. Nhóm thuộc tính về văn bản (Text Properties)',
        paragraphs: [
          'Định dạng khối văn bản giúp bài viết thoáng đãng và dễ tiếp thu hơn rất nhiều:'
        ],
        table: {
          caption: 'Các thuộc tính căn chỉnh văn bản cốt lõi',
          headers: ['Thuộc tính', 'Giá trị mẫu', 'Mô tả tác dụng'],
          rows: [
            ['color', '#1e293b, rgb(30, 41, 59), blue', 'Màu sắc của chữ'],
            ['text-align', 'left, center, right, justify', 'Căn lề chữ (trái, giữa, phải, căn đều hai bên)'],
            ['line-height', '1.5, 1.6, 24px', 'Khoảng cách giữa các dòng chữ (rất quan trọng để tránh dính chữ)'],
            ['text-decoration', 'none, underline, line-through', 'Gạch chân hoặc xóa gạch chân mặc định của liên kết'],
            ['letter-spacing', '0.5px, 1px', 'Khoảng cách giãn giữa các ký tự chữ']
          ]
        },
        callout: {
          type: 'tip',
          title: 'Quy tắc vàng về line-height',
          content: 'Đối với các đoạn văn dài của học liệu, hãy luôn đặt line-height: 1.6 (gấp 1.6 lần cỡ chữ). Khoảng cách này đã được các nhà nghiên cứu chứng minh là giúp mắt người đọc không bị mỏi khi nhìn màn hình lâu.'
        }
      }
    ],
    codeExamples: [
      {
        id: 'vd-font-van-ban',
        title: 'Ví dụ: Thiết kế đoạn văn bản chuẩn xuất bản',
        description: 'Áp dụng phông chữ hiện đại, màu sắc tương phản cao và giãn dòng thoáng mắt.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Ví dụ định dạng văn bản</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f8fafc;
      padding: 20px;
    }
    .tieu-de {
      color: #1e3a8a;
      font-size: 26px;
      font-weight: 700;
      text-align: center;
      letter-spacing: -0.5px;
      margin-bottom: 8px;
    }
    .doan-van {
      color: #334155;
      font-size: 16px;
      line-height: 1.7;
      text-align: justify;
      max-width: 600px;
      margin: 0 auto;
    }
    .nhan-manh {
      color: #dc2626;
      font-weight: 600;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <h2 class="tieu-de">Bí quyết tự học Lập trình Web hiệu quả</h2>
  <p class="doan-van">
    Để trở thành một lập trình viên giỏi, học sinh không chỉ đọc lý thuyết suông mà phải 
    <span class="nhan-manh">tự tay gõ mã lệnh</span> mỗi ngày. 
    Việc quan sát mã chạy thực tế và tự sửa các lỗi phát sinh sẽ giúp bạn ghi nhớ cú pháp lâu hơn rất nhiều so với việc chỉ học vẹt.
  </p>
</body>
</html>`,
        explanation: 'Nhìn vào đoạn văn: Phông chữ Segoe UI thanh mảnh, căn đều hai bên (justify) và giãn dòng 1.7 rất chuyên nghiệp.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Tên phông chữ có dấu khoảng trắng mà không đặt trong dấu ngoặc kép (ví dụ: font-family: Times New Roman;).',
        cause: 'Trình duyệt sẽ hiểu nhầm Times là phông chữ riêng và New là từ khóa khác.',
        solution: 'Tên phông có khoảng trắng bắt buộc phải đặt trong dấu ngoặc kép: font-family: "Times New Roman", serif;'
      },
      {
        mistake: 'Đặt line-height quá hẹp (ví dụ: line-height: 1;).',
        cause: 'Làm các dòng chữ dính sát vào nhau, các chữ có dấu mũ như "ô", "ê" bị đè lên dòng trên.',
        solution: 'Nên đặt line-height từ 1.5 đến 1.7 cho nội dung bài viết.'
      }
    ],
    keyTakeaways: [
      'font-family quy định kiểu chữ, luôn kèm phông chữ dự phòng generic (sans-serif hoặc serif) ở cuối.',
      'line-height từ 1.5 đến 1.7 giúp bài viết thoáng đãng và dễ đọc.',
      'text-decoration: none thường dùng để loại bỏ đường gạch chân mặc định của thẻ liên kết <a>.'
    ]
  },
  {
    id: 'css-4',
    track: 'css',
    order: 4,
    title: 'Định kiểu đường viền, vùng đệm, lề và nền',
    slug: 'dinh-kieu-duong-vien-vung-dem-le-va-nen',
    description: 'Khám phá mô hình hộp CSS Box Model (Content, Padding, Border, Margin), chuẩn hóa box-sizing: border-box và tùy biến màu nền background.',
    estimatedMinutes: 25,
    objectives: [
      'Hiểu sâu sắc 4 lớp của mô hình hộp CSS Box Model: Content, Padding, Border, Margin.',
      'Nắm vững và luôn áp dụng box-sizing: border-box để kiểm soát kích thước chính xác.',
      'Sử dụng thành thạo các thuộc tính border, border-radius bo góc và các kiểu background.'
    ],
    sections: [
      {
        id: 'css-box-model',
        title: '1. Mô hình hộp CSS Box Model là gì?',
        paragraphs: [
          'Trong CSS, mọi phần tử HTML đều được trình duyệt xem như một chiếc hộp hình chữ nhật. Chiếc hộp đó được cấu thành từ 4 lớp đồng tâm tính từ trong ra ngoài:'
        ],
        bulletPoints: [
          '1. Content (Nội dung): Vùng chứa văn bản hoặc hình ảnh thực sự của phần tử.',
          '2. Padding (Vùng đệm): Khoảng cách trống từ nội dung đến đường viền bên trong.',
          '3. Border (Đường viền): Lớp viền bao quanh phần đệm và nội dung.',
          '4. Margin (Lề ngoài): Khoảng cách trống bên ngoài đường viền, dùng để đẩy các phần tử lân cận ra xa.'
        ]
      },
      {
        id: 'box-sizing-border-box',
        title: '2. Cứu tinh của lập trình viên: box-sizing: border-box',
        paragraphs: [
          'Theo cách tính mặc định cũ (content-box): Chiều rộng thực tế = width + padding trái/phải + border trái/phải. Điều này khiến khi bạn đặt width: 100px nhưng thêm padding: 10px thì chiếc hộp bị phình to thành 120px, làm tràn màn hình.',
          'Để giải quyết triệt để vấn đề này, lập trình viên hiện đại luôn áp dụng box-sizing: border-box. Khi đó, dù bạn có tăng padding hay border bao nhiêu, tổng kích thước phần tử vẫn giữ nguyên đúng bằng giá trị width bạn đã khai báo.'
        ],
        callout: {
          type: 'note',
          title: 'Quy tắc reset toàn cục bắt buộc',
          content: 'Mọi dự án web hiện đại luôn có dòng mã mở đầu: * { box-sizing: border-box; } để kích hoạt cách tính kích thước thông minh này.'
        }
      },
      {
        id: 'border-va-background',
        title: '3. Định kiểu Border và Background',
        paragraphs: [
          'Cú pháp ngắn gọn của border: border: độ_dày kiểu_viền màu_sắc (ví dụ: border: 2px solid #2563eb;).',
          'Bo tròn góc: Thuộc tính border-radius: 8px; (nếu muốn hình tròn hoàn hảo thì đặt 50%).',
          'Định dạng nền: background-color để tô màu nền, background-image: url(...) để chèn ảnh nền.'
        ]
      }
    ],
    codeExamples: [
      {
        id: 'vd-box-model',
        title: 'Ví dụ: Trực quan hóa 4 lớp của Box Model',
        description: 'Tạo thẻ bài viết (Card) có đầy đủ padding, border bo góc và margin.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Ví dụ CSS Box Model</title>
  <style>
    * {
      box-sizing: border-box;
    }
    body {
      background-color: #e2e8f0;
      padding: 30px;
      font-family: sans-serif;
    }
    .the-bai-hoc {
      background-color: #ffffff; /* Nền trắng */
      width: 100%;
      max-width: 400px;
      margin: 0 auto;            /* Căn giữa trang web bằng margin */
      padding: 24px;             /* Vùng đệm cách lề trong 24px */
      border: 2px solid #3b82f6; /* Viền xanh dày 2px */
      border-radius: 12px;       /* Bo góc tròn 12px */
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    }
    .the-bai-hoc h3 {
      margin-top: 0;
      color: #1e40af;
    }
    .the-bai-hoc p {
      color: #475569;
      line-height: 1.5;
      margin-bottom: 0;
    }
  </style>
</head>
<body>
  <div class="the-bai-hoc">
    <h3>Thẻ Bài Học Mẫu (Card)</h3>
    <p>Chiếc hộp này có nền trắng, viền xanh 2px, bo góc 12px và khoảng đệm bên trong 24px giúp chữ không bị chạm sát vào đường viền.</p>
  </div>
</body>
</html>`,
        explanation: 'Nhìn vào thẻ bài học: Khoảng cách giữa chữ và viền xanh chính là padding; khoảng cách từ viền xanh ra rìa trang màu xám chính là margin.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Nhầm lẫn giữa Padding (vùng đệm trong) và Margin (lề khoảng cách ngoài).',
        cause: 'Cả hai đều tạo khoảng cách trống.',
        solution: 'Padding nằm BÊN TRONG đường viền (làm nền nở rộng); Margin nằm BÊN NGOÀI đường viền (đẩy các vật khác ra xa).'
      },
      {
        mistake: 'Quên khai báo kiểu viền (style: solid/dashed) khi đặt border.',
        cause: 'Chỉ viết border: 2px red;.',
        solution: 'Bắt buộc phải có kiểu viền (như solid - nét liền) thì viền mới hiện ra: border: 2px solid red;.'
      }
    ],
    keyTakeaways: [
      'CSS Box Model gồm 4 lớp: Content -> Padding -> Border -> Margin.',
      'Luôn khai báo * { box-sizing: border-box; } để kích thước hộp được tính toán chuẩn xác.',
      'margin: 0 auto là công thức kinh điển để căn giữa một khối có giới hạn chiều rộng max-width.'
    ]
  },
  {
    id: 'css-5',
    track: 'css',
    order: 5,
    title: 'Định kiểu bằng bộ chọn',
    slug: 'dinh-kieu-bang-bo-chon',
    description: 'Tìm hiểu sâu các bộ chọn: thẻ, class, id, gom nhóm, bộ chọn con cháu, giả trạng thái hover/focus, cùng nguyên lý kế thừa và độ ưu tiên (Specificity).',
    estimatedMinutes: 25,
    objectives: [
      'Sử dụng linh hoạt bộ chọn thẻ, bộ chọn lớp (.class) và bộ chọn định danh (#id).',
      'Viết được bộ chọn gom nhóm và bộ chọn phân cấp con cháu (Descendant Selector).',
      'Hiểu rõ quy tắc kế thừa CSS và thứ bậc độ ưu tiên (Specificity) khi có xung đột kiểu dáng.'
    ],
    sections: [
      {
        id: 'cac-bo-chon-co-ban',
        title: '1. Các bộ chọn cơ bản và phân cấp',
        paragraphs: [
          'Bộ chọn (Selector) là chiếc chìa khóa giúp bạn chọn chính xác phần tử HTML nào cần định dạng:'
        ],
        table: {
          caption: 'Bảng các bộ chọn CSS thường dùng',
          headers: ['Bộ chọn', 'Cú pháp', 'Phần tử được chọn', 'Ví dụ'],
          rows: [
            ['Bộ chọn thẻ', 'p, h1, div', 'Mọi thẻ HTML có tên đó', 'p { color: red; }'],
            ['Bộ chọn lớp', '.ten-lop', 'Mọi phần tử có class="ten-lop"', '.btn { padding: 8px; }'],
            ['Bộ chọn định danh', '#ten-id', 'Phần tử DUY NHẤT có id="ten-id"', '#header { height: 60px; }'],
            ['Bộ chọn gom nhóm', 'h1, h2, h3', 'Nhiều phần tử cùng chung 1 kiểu', 'h1, h2 { font-weight: bold; }'],
            ['Bộ chọn con cháu', 'cha con', 'Phần tử con nằm bên trong phần tử cha', '.nav a { color: white; }'],
            ['Bộ chọn trạng thái', ':hover, :focus', 'Phần tử khi rê chuột hoặc nhận tiêu điểm', 'button:hover { opacity: 0.9; }']
          ]
        }
      },
      {
        id: 'do-uu-tien-specificity',
        title: '2. Thứ tự ưu tiên (Specificity) và Xung đột CSS',
        paragraphs: [
          'Khi có hai hoặc nhiều quy tắc CSS cùng áp dụng lên một phần tử nhưng cho ra giá trị khác nhau (ví dụ một bên bảo chữ đỏ, một bên bảo chữ xanh), trình duyệt sẽ giải quyết thế nào?',
          'Trình duyệt sẽ tính điểm độ ưu tiên theo thứ bậc từ cao xuống thấp như sau:'
        ],
        bulletPoints: [
          '1. Inline Style (viết thẳng trong style="..."): 1000 điểm (Ưu tiên cực cao).',
          '2. ID Selector (#id): 100 điểm.',
          '3. Class Selector (.class) & Pseudo-class (:hover): 10 điểm.',
          '4. Element Selector (thẻ p, h1, div): 1 điểm.',
          '5. Nếu hai bộ chọn có cùng điểm ưu tiên: Quy tắc nào được viết SAU CÙNG trong file CSS sẽ chiến thắng (nguyên lý "xếp tầng" Cascading).'
        ],
        callout: {
          type: 'warning',
          title: 'Tránh lạm dụng !important',
          content: 'Từ khóa !important có thể ghi đè mọi thứ nhưng sẽ phá vỡ quy luật tự nhiên của CSS và làm mã nguồn cực kỳ khó sửa về sau. Hãy giải quyết xung đột bằng cách tăng độ cụ thể của bộ chọn Class thay vì dùng !important.'
        }
      }
    ],
    codeExamples: [
      {
        id: 'vd-bo-chon-nang-cao',
        title: 'Ví dụ: Phân biệt tác dụng của các loại bộ chọn',
        description: 'Quan sát cách class, id và bộ chọn con cháu áp dụng lên danh sách và nút bấm.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Ví dụ bộ chọn CSS</title>
  <style>
    /* 1. Bộ chọn thẻ: áp dụng cho tất cả thẻ p */
    p {
      color: #64748b;
      font-size: 15px;
    }

    /* 2. Bộ chọn class: có thể dùng lại nhiều nơi */
    .noi-bat {
      color: #0369a1;
      font-weight: bold;
    }

    /* 3. Bộ chọn con cháu: chỉ thẻ a nằm TRONG thẻ có class menu */
    .menu a {
      color: #16a34a;
      text-decoration: none;
      font-weight: 600;
    }

    /* 4. Bộ chọn giả trạng thái hover */
    .menu a:hover {
      color: #15803d;
      text-decoration: underline;
    }

    /* 5. Bộ chọn ID: duy nhất cho nút đặc biệt */
    #nut-gui {
      background-color: #2563eb;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <p>Đoạn văn thông thường có màu xám.</p>
  <p class="noi-bat">Đoạn văn này có class .noi-bat nên chữ đậm và có màu xanh lam!</p>

  <div class="menu">
    <p>Thanh điều hướng: <a href="#">Trang chủ</a> | <a href="#">Bài học</a></p>
  </div>

  <button id="nut-gui">Nút bấm đặc biệt (#nut-gui)</button>
</body>
</html>`,
        explanation: 'Thử rê chuột vào các liên kết "Trang chủ", "Bài học" để thấy hiệu ứng đổi màu và hiện gạch chân của trạng thái :hover.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Đặt tên class hoặc id trùng nhau một cách vô tội vạ.',
        cause: 'Nghĩ rằng id cũng giống như class.',
        solution: 'Ghi nhớ: Class (.ten-lop) dùng cho NHIỀU phần tử giống nhau; ID (#ten-id) chỉ được dùng DUY NHẤT một lần trên một trang.'
      },
      {
        mistake: 'Quên dấu chấm (.) khi gọi class hoặc quên dấu thăng (#) khi gọi id trong CSS.',
        cause: 'Gõ ten-lop { ... } thay vì .ten-lop { ... }.',
        solution: 'Nếu thiếu dấu chấm, trình duyệt sẽ coi đó là tên thẻ HTML <ten-lop> và không áp dụng được.'
      }
    ],
    keyTakeaways: [
      'Dùng class (.) cho các thành phần tái sử dụng nhiều nơi (nút bấm, thẻ card, danh sách).',
      'Dùng id (#) cho thành phần độc nhất vô nhị trên trang.',
      'Bộ chọn có độ ưu tiên cao hơn sẽ chiến thắng khi xảy ra xung đột thuộc tính.'
    ]
  },
  {
    id: 'css-6',
    track: 'css',
    order: 6,
    title: 'Định kiểu siêu liên kết',
    slug: 'dinh-kieu-sieu-lien-ket',
    description: 'Thiết lập các trạng thái liên kết :link, :visited, :hover, :focus, :active, nguyên tắc LoVe HAte và kỹ thuật biến thẻ a thành nút bấm chuyên nghiệp.',
    estimatedMinutes: 20,
    objectives: [
      'Hiểu rõ 5 trạng thái vòng đời của một siêu liên kết: :link, :visited, :hover, :focus, :active.',
      'Nắm vững quy tắc thứ tự khai báo chuẩn: LoVe HAte (Link - Visited - Hover - Active).',
      'Thiết kế nút bấm (Button Link) đẹp mắt với CSS bằng hiệu ứng chuyển động mượt transition.'
    ],
    sections: [
      {
        id: 'cac-trang-thai-link',
        title: '1. Năm trạng thái tương tác của thẻ <a>',
        paragraphs: [
          'Thẻ liên kết <a> là phần tử tương tác nhiều nhất trên web. CSS cho phép bạn thay đổi hình thức theo từng trạng thái người dùng tương tác:'
        ],
        bulletPoints: [
          'a:link: Trạng thái liên kết bình thường khi chưa từng được nhấp chuột.',
          'a:visited: Trạng thái liên kết đã từng được người dùng truy cập trước đó (mặc định trình duyệt đổi sang màu tím).',
          'a:hover: Khi người dùng rê con trỏ chuột lướt qua liên kết.',
          'a:focus: Khi liên kết được chọn bằng bàn phím (nhấn phím Tab) - cực kỳ quan trọng cho tiêu chuẩn tiếp cận.',
          'a:active: Khoảnh khắc người dùng đang nhấn giữ chuột xuống trên liên kết.'
        ]
      },
      {
        id: 'quy-tac-love-hate',
        title: '2. Quy tắc thứ tự khai báo: LoVe HAte',
        paragraphs: [
          'Để các trạng thái hoạt động chính xác và không bị đè nhau, bạn BẮT BUỘC phải viết các quy tắc CSS theo đúng thứ tự kinh điển sau:',
          '1. L - :link',
          '2. V - :visited',
          '3. H - :hover',
          '4. A - :active',
          'Mẹo ghi nhớ từ tiếng Anh: LoVe HAte (Yêu - Ghét). Nếu bạn viết :hover trước :link, trạng thái hover sẽ bị mất tác dụng hoàn toàn!'
        ],
        callout: {
          type: 'tip',
          title: 'Xóa gạch chân liên kết',
          content: 'Thẻ <a> mặc định có đường gạch chân màu xanh lam rất thô. Trong thiết kế hiện đại, ta dùng text-decoration: none; để xóa nó đi và chỉ hiện gạch chân khi người dùng rê chuột vào (:hover).'
        }
      },
      {
        id: 'bien-a-thanh-nut',
        title: '3. Biến liên kết thành nút bấm (Button Link) với transition',
        paragraphs: [
          'Bằng cách thêm padding, background-color, border-radius và display: inline-block, bạn có thể biến bất kỳ thẻ <a> nào thành một nút bấm tuyệt đẹp.',
          'Đặc biệt, thuộc tính transition: all 0.2s ease giúp màu sắc chuyển đổi êm ái, mượt mà thay vì giật cục.'
        ]
      }
    ],
    codeExamples: [
      {
        id: 'vd-dinh-kieu-link',
        title: 'Ví dụ: Thiết kế nút bấm hành động (CTA Button) từ thẻ <a>',
        description: 'Quan sát hiệu ứng đổi màu êm dịu khi rê chuột (:hover) và cảm giác nhấn lún xuống (:active).',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Định kiểu liên kết</title>
  <style>
    body { font-family: sans-serif; padding: 25px; }
    
    /* Liên kết dạng chữ trong bài viết */
    .link-van-ban {
      color: #2563eb;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s ease;
    }
    .link-van-ban:hover {
      color: #1d4ed8;
      text-decoration: underline;
    }

    /* Liên kết biến thành nút bấm sang trọng */
    .nut-bam {
      display: inline-block;
      background-color: #2563eb;
      color: #ffffff;
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 8px;
      font-weight: 600;
      box-shadow: 0 2px 4px rgba(37, 99, 235, 0.2);
      transition: all 0.2s ease;
    }
    /* Khi rê chuột qua nút */
    .nut-bam:hover {
      background-color: #1d4ed8;
      transform: translateY(-2px); /* Nhẹ nhàng nổi lên 2px */
      box-shadow: 0 4px 8px rgba(37, 99, 235, 0.3);
    }
    /* Khi đang bấm giữ chuột */
    .nut-bam:active {
      transform: translateY(0);    /* Trở về vị trí cũ tạo cảm giác nhấn */
    }
  </style>
</head>
<body>
  <h3>1. Liên kết văn bản thông thường</h3>
  <p>Đọc thêm tài liệu tại <a href="#" class="link-van-ban">Cổng thông tin Giáo dục THPT</a>.</p>

  <h3>2. Nút bấm kêu gọi hành động (Call To Action)</h3>
  <a href="#" class="nut-bam">Bắt đầu học ngay →</a>
</body>
</html>`,
        explanation: 'Hãy thử rê chuột và nhấp thử vào nút "Bắt đầu học ngay": Bạn sẽ thấy nút nhô lên nhẹ khi hover và lún xuống khi bấm chuột.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Khai báo sai thứ tự LoVe HAte khiến hiệu ứng :hover không xuất hiện.',
        cause: 'Viết a:hover trước a:link hoặc a:visited.',
        solution: 'Luôn tuân thủ thứ tự: :link -> :visited -> :hover -> :active.'
      },
      {
        mistake: 'Quên thuộc tính display: inline-block khi biến thẻ <a> thành nút.',
        cause: 'Thẻ <a> mặc định là phần tử inline nên không nhận chuẩn xác padding dọc và margin trên dưới.',
        solution: 'Thêm display: inline-block; để thẻ nhận đầy đủ kích thước padding và hiệu ứng transform.'
      }
    ],
    keyTakeaways: [
      'Ghi nhớ thần chú thứ tự khai báo: LoVe HAte (:link -> :visited -> :hover -> :active).',
      'Dùng text-decoration: none; để xóa gạch chân mặc định.',
      'Sử dụng transition để các hiệu ứng hover chuyển màu mượt mà, chuyên nghiệp.'
    ]
  },
  {
    id: 'css-7',
    track: 'css',
    order: 7,
    title: 'Định kiểu danh sách',
    slug: 'dinh-kieu-danh-sach',
    description: 'Xóa bỏ dấu chấm tròn mặc định với list-style-type: none, xóa padding thừa và biến danh sách thẻ ul thành thanh điều hướng ngang đẹp mắt.',
    estimatedMinutes: 20,
    objectives: [
      'Tùy biến biểu tượng gạch đầu dòng với thuộc tính list-style-type.',
      'Xóa bỏ khoảng cách thụt lề mặc định của thẻ <ul> bằng margin và padding: 0.',
      'Xây dựng thanh điều hướng (Navigation Bar) dạng ngang chuyên nghiệp từ danh sách <ul>.'
    ],
    sections: [
      {
        id: 'list-style-type',
        title: '1. Tùy biến dấu đầu dòng: list-style-type',
        paragraphs: [
          'Thẻ <ul> và <ol> có thể thay đổi kiểu ký hiệu hiển thị ở đầu mỗi mục thông qua thuộc tính list-style-type:'
        ],
        bulletPoints: [
          'disc: Dấu chấm tròn đặc (mặc định của <ul>).',
          'circle: Vòng tròn rỗng.',
          'square: Ô vuông nhỏ đặc.',
          'decimal: Đánh số 1, 2, 3 (mặc định của <ol>).',
          'none: ẨN HOÀN TOÀN dấu đầu dòng (đây là giá trị phổ biến nhất khi dùng làm menu).'
        ]
      },
      {
        id: 'menu-ngang-tu-ul',
        title: '2. Tạo thanh điều hướng (Menu) ngang từ danh sách <ul>',
        paragraphs: [
          'Tại sao các lập trình viên chuyên nghiệp luôn dùng thẻ <ul> để làm menu trang web? Vì về mặt ngữ nghĩa (Semantics), menu chính là một "danh sách các đường liên kết".',
          'Quy trình chuẩn để biến <ul> thành menu ngang:',
          '1. Đặt list-style: none; để bỏ các dấu chấm tròn.',
          '2. Đặt margin: 0; padding: 0; để xóa khoảng thụt lề mặc định của trình duyệt.',
          '3. Áp dụng display: flex; trên thẻ <ul> để các mục con <li> tự động xếp thành hàng ngang.'
        ]
      }
    ],
    codeExamples: [
      {
        id: 'vd-menu-ngang',
        title: 'Ví dụ: Thanh điều hướng trang web hoàn chỉnh',
        description: 'Chuyển đổi danh sách <ul> thành thanh Menu ngang với hiệu ứng đổi màu khi chọn.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Menu điều hướng ngang</title>
  <style>
    body { font-family: sans-serif; margin: 0; padding: 20px; background: #f1f5f9; }
    
    /* Thanh menu cha */
    .thanh-menu {
      background-color: #1e40af; /* Xanh dương đậm */
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    
    /* Danh sách ul */
    .danh-sach-menu {
      list-style-type: none; /* Bỏ chấm tròn */
      margin: 0;
      padding: 0;
      display: flex;         /* Xếp thành hàng ngang */
    }
    
    /* Từng liên kết trong menu */
    .danh-sach-menu li a {
      display: block;
      color: #ffffff;
      text-decoration: none;
      padding: 14px 20px;
      font-weight: 500;
      transition: background-color 0.2s;
    }
    
    /* Hiệu ứng khi rê chuột */
    .danh-sach-menu li a:hover {
      background-color: #1d4ed8;
    }
    
    /* Mục đang được chọn kích hoạt */
    .danh-sach-menu li a.active {
      background-color: #0f172a; /* Xanh đen */
      border-bottom: 3px solid #60a5fa;
    }
  </style>
</head>
<body>
  <nav class="thanh-menu">
    <ul class="danh-sach-menu">
      <li><a href="#" class="active">Trang chủ</a></li>
      <li><a href="#">Giới thiệu</a></li>
      <li><a href="#">Khóa học HTML</a></li>
      <li><a href="#">Khóa học CSS</a></li>
      <li><a href="#">Liên hệ</a></li>
    </ul>
  </nav>
</body>
</html>`,
        explanation: 'Nhìn vào mã nguồn: Danh sách <ul> đã hoàn toàn biến mất dấu chấm tròn và xếp thẳng hàng ngang thành một thanh menu vô cùng bắt mắt.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Quên reset margin: 0; padding: 0; trên thẻ <ul> khiến menu bị thụt lề sang phải.',
        cause: 'Mọi trình duyệt mặc định đặt padding-left: 40px cho thẻ <ul>.',
        solution: 'Luôn viết margin: 0; padding: 0; trên danh sách khi làm menu.'
      }
    ],
    keyTakeaways: [
      'list-style-type: none giúp loại bỏ hoàn toàn các dấu đầu dòng mặc định.',
      'Sử dụng display: flex trên thẻ <ul> là phương pháp hiện đại và nhanh nhất để dàn menu hàng ngang.',
      'Luôn bọc menu trong thẻ ngữ nghĩa <nav> để chuẩn hóa cấu trúc.'
    ]
  },
  {
    id: 'css-8',
    track: 'css',
    order: 8,
    title: 'Định kiểu bảng',
    slug: 'dinh-kieu-bang',
    description: 'Biến bảng HTML thô kệch thành bảng số liệu chuyên nghiệp: border-collapse, padding ô, kẻ sọc ngựa vằn zebra striping và khung cuộn chống tràn mobile.',
    estimatedMinutes: 20,
    objectives: [
      'Khắc phục viền đôi mặc định xấu xí của bảng bằng border-collapse: collapse.',
      'Tạo hiệu ứng kẻ sọc so le (Zebra Striping) bằng bộ chọn giả lập :nth-child(even).',
      'Định kiểu responsive cuộn ngang để bảng không làm vỡ màn hình điện thoại.'
    ],
    sections: [
      {
        id: 'border-collapse',
        title: '1. Cứu tinh của bảng: border-collapse: collapse',
        paragraphs: [
          'Theo mặc định của HTML, các ô bảng có khoảng trống nhỏ ở giữa, tạo thành các đường viền kép (double border) rất thô.',
          'Thuộc tính border-collapse: collapse; yêu cầu trình duyệt gộp các đường viền sát lại thành một đường viền đơn thanh lịch duy nhất. Đây là thuộc tính luôn luôn phải có khi định kiểu bảng.'
        ]
      },
      {
        id: 'zebra-striping',
        title: '2. Kỹ thuật kẻ sọc so le (Zebra Striping)',
        paragraphs: [
          'Đối với các bảng có hàng chục hàng dữ liệu, người đọc rất dễ bị hoa mắt nhìn nhầm từ hàng này sang hàng khác.',
          'Để khắc phục, ta áp dụng màu nền xen kẽ (Zebra Striping) bằng bộ chọn CSS cực kỳ tiện lợi:',
          'tbody tr:nth-child(even) { background-color: #f8fafc; }',
          '(Áp dụng màu xám nhẹ cho các hàng chẵn 2, 4, 6, 8...).'
        ]
      },
      {
        id: 'bang-responsive-mobile',
        title: '3. Chống tràn bảng trên màn hình điện thoại di động',
        paragraphs: [
          'Bảng dữ liệu nhiều cột thường rất rộng. Nếu mở trên điện thoại, bảng sẽ đè tràn ra ngoài màn hình.',
          'Giải pháp tiêu chuẩn: Gói thẻ <table> bên trong một thẻ <div style="overflow-x: auto;">. Khi màn hình nhỏ, phần bảng sẽ xuất hiện thanh cuộn ngang mềm mại mà không làm vỡ toàn bộ trang web.'
        ]
      }
    ],
    codeExamples: [
      {
        id: 'vd-dinh-kieu-bang',
        title: 'Ví dụ: Bảng điểm danh học sinh hiện đại',
        description: 'Bảng hoàn chỉnh với tiêu đề xanh, kẻ sọc xen kẽ và hiệu ứng rê chuột nổi bật từng hàng.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Bảng điểm đẹp với CSS</title>
  <style>
    body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
    
    /* Vùng chứa cuộn ngang chống tràn mobile */
    .bang-cuon-wrapper {
      overflow-x: auto;
      border-radius: 8px;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
    }
    
    table {
      width: 100%;
      border-collapse: collapse; /* Gộp viền đơn */
      background: white;
      font-size: 15px;
    }
    
    th, td {
      padding: 12px 16px;
      text-align: left;
      border-bottom: 1px solid #e2e8f0;
    }
    
    /* Hàng tiêu đề chính */
    th {
      background-color: #2563eb;
      color: white;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 13px;
      letter-spacing: 0.5px;
    }
    
    /* Kẻ sọc ngựa vằn xen kẽ */
    tbody tr:nth-child(even) {
      background-color: #f8fafc;
    }
    
    /* Hiệu ứng rê chuột highlight hàng */
    tbody tr:hover {
      background-color: #eff6ff;
    }
  </style>
</head>
<body>
  <h2>DANH SÁCH THÀNH VIÊN ĐỘI TUYỂN TIN HỌC</h2>
  <div class="bang-cuon-wrapper">
    <table>
      <thead>
        <tr>
          <th>STT</th>
          <th>Họ và Tên</th>
          <th>Lớp</th>
          <th>Điểm Lý Thuyết</th>
          <th>Điểm Thực Hành</th>
          <th>Kết Quả</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Nguyễn Văn An</td>
          <td>12A1</td>
          <td>9.5</td>
          <td>10.0</td>
          <td><strong>Đạt</strong></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Trần Thị Mai</td>
          <td>12A2</td>
          <td>9.0</td>
          <td>9.5</td>
          <td><strong>Đạt</strong></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Lê Hoàng Long</td>
          <td>12A1</td>
          <td>8.5</td>
          <td>9.0</td>
          <td><strong>Đạt</strong></td>
        </tr>
      </tbody>
    </table>
  </div>
</body>
</html>`,
        explanation: 'Nhìn vào bảng: Viền đơn thanh thoát, hàng tiêu đề màu xanh chữ trắng nổi bật và khi rê chuột qua từng hàng sẽ đổi sang màu xanh nhạt rất dịu mắt.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Quên thuộc tính border-collapse: collapse; làm bảng có 2 viền song song nhau.',
        cause: 'Mặc định của trình duyệt là border-collapse: separate.',
        solution: 'Luôn khai báo border-collapse: collapse; đầu tiên khi định dạng bảng.'
      }
    ],
    keyTakeaways: [
      'border-collapse: collapse là thuộc tính bắt buộc số một của bảng.',
      'Sử dụng :nth-child(even) để tự động tạo kẻ sọc so le giúp bảng dễ theo dõi.',
      'Luôn bọc bảng trong khối overflow-x: auto để hỗ trợ hiển thị mượt mà trên điện thoại.'
    ]
  },
  {
    id: 'css-9',
    track: 'css',
    order: 9,
    title: 'Định kiểu phần tử div để tạo bố cục',
    slug: 'dinh-kieu-phan-tu-div-de-tao-bo-cuc',
    description: 'Sử dụng khối đa năng div, phân biệt display block và inline-block, làm chủ mô hình dàn trang hiện đại Flexbox và giới thiệu sơ lược CSS Grid.',
    estimatedMinutes: 25,
    objectives: [
      'Hiểu bản chất của thẻ <div> là chiếc hộp chứa đa năng (generic container).',
      'Phân biệt sự khác nhau giữa display: block, inline và inline-block.',
      'Làm chủ các thuộc tính cốt lõi của Flexbox: display: flex, justify-content, align-items, gap.',
      'Hiểu khái niệm lưới hai chiều CSS Grid thông qua grid-template-columns.'
    ],
    sections: [
      {
        id: 'the-div-va-display',
        title: '1. Thẻ <div> và thuộc tính display',
        paragraphs: [
          'Thẻ <div> (viết tắt của Division) là một phần tử khối thuần túy, không có ý nghĩa ngữ nghĩa cụ thể nhưng lại là công cụ quan trọng nhất để gom nhóm các phần tử và chia cột bố cục trang web.',
          'Các giá trị display cơ bản:'
        ],
        bulletPoints: [
          'display: block (mặc định của div, p, h1): Luôn bắt đầu trên dòng mới và chiếm trọn 100% chiều rộng có thể.',
          'display: inline (mặc định của span, a, strong): Chỉ chiếm chiều rộng vừa khít nội dung, không thể thiết lập width/height.',
          'display: inline-block: Nằm cùng hàng với các phần tử khác nhưng VẪN thiết lập được width và height.'
        ]
      },
      {
        id: 'flexbox-hien-dai',
        title: '2. Làm chủ bố cục 1 chiều với Flexbox',
        paragraphs: [
          'Flexbox là công nghệ dàn trang được yêu thích nhất thế giới hiện nay. Chỉ cần đặt display: flex; lên phần tử cha (Flex Container), các phần tử con (Flex Items) sẽ tự động nằm cùng hàng ngang một cách thông minh.'
        ],
        table: {
          caption: 'Các thuộc tính Flexbox cốt lõi trên phần tử cha',
          headers: ['Thuộc tính', 'Giá trị phổ biến', 'Ý nghĩa'],
          rows: [
            ['display', 'flex', 'Bật chế độ Flexbox'],
            ['justify-content', 'center, space-between, space-around', 'Căn chỉnh vị trí các cột theo trục ngang'],
            ['align-items', 'center, stretch, flex-start', 'Căn chỉnh vị trí theo trục dọc'],
            ['gap', '10px, 20px, 1.5rem', 'Khoảng cách trống giữa các cột (không cần tính margin thủ công)'],
            ['flex-wrap', 'wrap, nowrap', 'Cho phép các cột tự động rớt xuống dòng khi hết chỗ']
          ]
        }
      },
      {
        id: 'gioi-thieu-grid',
        title: '3. Giới thiệu sơ lược CSS Grid (Lưới 2 chiều)',
        paragraphs: [
          'Nếu Flexbox giỏi dàn các phần tử theo 1 hàng hoặc 1 cột, thì CSS Grid là chuyên gia dàn bố cục cả hàng và cột cùng lúc (2 chiều).',
          'Cú pháp chia 3 cột bằng nhau siêu nhanh: display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;.'
        ]
      }
    ],
    codeExamples: [
      {
        id: 'vd-bo-cuc-flexbox',
        title: 'Ví dụ: Dàn bố cục 3 cột thẻ tính năng bằng Flexbox',
        description: 'Tạo lưới 3 thẻ bài viết tự động dàn đều và căn giữa đẹp mắt.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Bố cục Flexbox</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
    
    /* Vùng chứa cha bật Flexbox */
    .luoi-the {
      display: flex;
      gap: 20px;               /* Khoảng cách giữa 3 cột */
      flex-wrap: wrap;         /* Tự xuống dòng trên màn hình nhỏ */
    }
    
    /* Từng cột con */
    .the-mon-hoc {
      flex: 1 1 250px;         /* Co giãn linh hoạt, rộng tối thiểu 250px */
      background: white;
      padding: 20px;
      border-radius: 8px;
      border-top: 4px solid #2563eb;
      box-shadow: 0 2px 4px rgba(0,0,0,0.06);
    }
    
    .the-mon-hoc h3 { margin-top: 0; color: #1e40af; }
    .the-mon-hoc p { color: #64748b; line-height: 1.5; font-size: 14px; }
  </style>
</head>
<body>
  <h2>LỘ TRÌNH 3 PHÂN HỆ HỌC TẬP</h2>
  <div class="luoi-the">
    <div class="the-mon-hoc">
      <h3>1. HTML Cơ Bản</h3>
      <p>Học cách xây dựng bộ khung, tạo tiêu đề, đoạn văn, bảng biểu và biểu mẫu nhập liệu.</p>
    </div>
    <div class="the-mon-hoc">
      <h3>2. CSS Giao Diện</h3>
      <p>Trang trí màu sắc, căn lề, định kiểu chữ, thiết kế bố cục Flexbox và Responsive.</p>
    </div>
    <div class="the-mon-hoc">
      <h3>3. JavaScript Tương Tác</h3>
      <p>Xử lý sự kiện bấm chuột, kiểm tra dữ liệu form và thay đổi giao diện động qua DOM.</p>
    </div>
  </div>
</body>
</html>`,
        explanation: 'Nhìn vào 3 thẻ: Cả 3 thẻ tự động chia đều khoảng trống và xếp thành hàng ngang nhờ display: flex và gap: 20px.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Dùng thuộc tính float: left; lỗi thời để chia cột.',
        cause: 'Đọc phải các giáo trình cũ từ chục năm trước.',
        solution: 'Hiện nay tuyệt đối dùng display: flex hoặc display: grid để chia cột bố cục, vừa đơn giản vừa không bị lỗi vỡ khung.'
      }
    ],
    keyTakeaways: [
      'Thẻ <div> là công cụ cốt lõi để gom nhóm và xây dựng bố cục trang web.',
      'display: flex giúp dàn hàng ngang các phần tử con cực kỳ linh hoạt.',
      'Thuộc tính gap giúp tạo khoảng trống giữa các cột nhanh chóng mà không cần tính toán margin phức tạp.'
    ]
  },
  {
    id: 'css-10',
    track: 'css',
    order: 10,
    title: 'Định kiểu biểu mẫu',
    slug: 'dinh-kieu-bieu-mau',
    description: 'Lột xác biểu mẫu HTML: chuẩn hóa ô nhập input, textarea, select, trạng thái :focus viền sáng, thiết kế nút bấm và thông báo lỗi trực quan.',
    estimatedMinutes: 25,
    objectives: [
      'Chuẩn hóa kích thước và đường viền cho các thẻ input, select, textarea.',
      'Làm chủ trạng thái :focus để tạo viền sáng hỗ trợ tiếp cận (Accessibility).',
      'Định kiểu các thông báo lỗi kiểm tra dữ liệu rõ ràng, chuyên nghiệp.'
    ],
    sections: [
      {
        id: 'chuan-hoa-input',
        title: '1. Chuẩn hóa ô nhập liệu: width 100% và padding',
        paragraphs: [
          'Biểu mẫu HTML mặc định có các ô nhập rất ngắn và đường viền chìm 3D cũ kỹ. Để biến thành giao diện hiện đại:',
          '1. Đặt width: 100%; và box-sizing: border-box; để ô nhập lấp đầy chiều rộng vùng chứa.',
          '2. Thêm padding: 10px 14px; để khoảng cách gõ chữ rộng rãi, ngón tay dễ chạm trên điện thoại.',
          '3. Thay viền bằng border: 1px solid #cbd5e1; và border-radius: 6px; bo góc nhẹ nhàng.'
        ]
      },
      {
        id: 'focus-outline',
        title: '2. Trạng thái nhận tiêu điểm: :focus',
        paragraphs: [
          'Khi người dùng nhấp chuột hoặc dùng phím Tab di chuyển vào ô nhập, trình duyệt kích hoạt trạng thái :focus.',
          'Hãy tạo hiệu ứng viền xanh sáng: outline: none; border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);. Hiệu ứng này giúp người dùng biết ngay mình đang gõ ở ô nào.'
        ],
        callout: {
          type: 'warning',
          title: 'Cấm xóa outline mà không thay thế',
          content: 'Nhiều người viết outline: none; rồi để mặc không làm gì. Điều này khiến người khuyết tật dùng phím Tab hoàn toàn mất dấu không biết con trỏ đang ở đâu!'
        }
      }
    ],
    codeExamples: [
      {
        id: 'vd-form-dep',
        title: 'Ví dụ: Form đăng nhập chuẩn thiết kế hiện đại',
        description: 'Bố cục nhãn gọn gàng, ô nhập có focus viền xanh và nút bấm nổi bật.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Biểu mẫu hiện đại</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: sans-serif; background: #f8fafc; padding: 30px; }
    
    .khung-form {
      max-width: 380px;
      margin: 0 auto;
      background: white;
      padding: 24px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      border: 1px solid #e2e8f0;
    }
    
    .dong-nhap {
      margin-bottom: 16px;
    }
    
    label {
      display: block;
      font-size: 14px;
      font-weight: 600;
      color: #334155;
      margin-bottom: 6px;
    }
    
    input[type="text"], input[type="password"] {
      width: 100%;
      padding: 10px 12px;
      font-size: 15px;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      transition: all 0.2s;
    }
    
    /* Hiệu ứng viền sáng khi bấm vào ô */
    input:focus {
      outline: none;
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
    }
    
    button {
      width: 100%;
      background: #2563eb;
      color: white;
      border: none;
      padding: 12px;
      font-size: 16px;
      font-weight: 600;
      border-radius: 6px;
      cursor: pointer;
      transition: background 0.2s;
    }
    button:hover { background: #1d4ed8; }
  </style>
</head>
<body>
  <div class="khung-form">
    <h3 style="margin-top:0; color:#1e293b; text-align:center;">ĐĂNG NHẬP HỆ THỐNG</h3>
    <form onsubmit="alert('Đã nhấn Đăng nhập!'); return false;">
      <div class="dong-nhap">
        <label for="tk">Tài khoản học sinh:</label>
        <input type="text" id="tk" placeholder="Nhập mã học sinh...">
      </div>
      <div class="dong-nhap">
        <label for="mk">Mật khẩu:</label>
        <input type="password" id="mk" placeholder="Nhập mật khẩu...">
      </div>
      <button type="submit">Đăng nhập ngay</button>
    </form>
  </div>
</body>
</html>`,
        explanation: 'Thử nhấp chuột vào ô "Tài khoản học sinh": Bạn sẽ thấy vòng viền sáng xanh (#2563eb) xuất hiện rất tinh tế.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Để nhãn label nằm ngang dính liền với ô input khiến giao diện bị méo khi xem trên điện thoại.',
        cause: 'Mặc định thẻ <label> là phần tử inline.',
        solution: 'Đặt display: block; trên thẻ <label> để nhãn nằm riêng một dòng phía trên ô nhập.'
      }
    ],
    keyTakeaways: [
      'Đặt width: 100% và padding thoải mái cho các ô nhập input/select/textarea.',
      'Tùy biến trạng thái :focus với viền sáng rõ nét để tăng trải nghiệm người dùng.',
      'Sử dụng nhãn label rõ ràng với display: block nằm phía trên ô nhập liệu.'
    ]
  },
  {
    id: 'css-11',
    track: 'css',
    order: 11,
    title: 'Triển khai website lên máy chủ',
    slug: 'trien-khai-website-len-may-chu',
    description: 'Tìm hiểu quy trình đưa website tĩnh lên hosting (GitHub Pages, Netlify, Vercel), chuẩn hóa đường dẫn tài nguyên và các bước kiểm tra sau triển khai.',
    estimatedMinutes: 25,
    objectives: [
      'Phân biệt rõ: Triển khai website (Deploy) là quy trình xuất bản sản phẩm lên mạng Internet, KHÔNG PHẢI là một tính năng hay thuộc tính của CSS.',
      'Nắm vững cấu trúc thư mục chuẩn của website tĩnh trước khi đưa lên máy chủ.',
      'Hiểu quy tắc kiểm tra đường dẫn tương đối để tránh lỗi mất ảnh, mất file CSS khi xuất bản.'
    ],
    sections: [
      {
        id: 'trien-khai-la-gi',
        title: '1. Khái niệm cốt lõi: Triển khai website (Web Deployment) là gì?',
        paragraphs: [
          'Sau khi bạn đã viết xong các file HTML, CSS và JavaScript trên máy tính cá nhân của mình, chỉ có duy nhất bạn mới xem được trang web đó.',
          'Để thầy cô, bạn bè và mọi người khắp nơi trên thế giới có thể truy cập được thông qua một đường link (ví dụ: https://ten-cua-ban.github.io), bạn phải thực hiện bước Triển khai website (Deploy / Publish).',
          'Triển khai là việc sao chép toàn bộ các tệp tin mã nguồn lên một Máy chủ Web (Web Server / Web Hosting) hoạt động 24/7 và kết nối liên tục với Internet.'
        ],
        callout: {
          type: 'warning',
          title: 'Lưu ý phân biệt kiến thức quan trọng',
          content: 'Triển khai website là một BƯỚC QUY TRÌNH KỸ THUẬT trong phát triển phần mềm, hoàn toàn KHÔNG PHẢI là một câu lệnh, thuộc tính hay tính năng của ngôn ngữ CSS.'
        }
      },
      {
        id: 'cau-truc-chuan-tinh',
        title: '2. Cấu trúc thư mục chuẩn trước khi triển khai',
        paragraphs: [
          'Máy chủ web chỉ nhận diện và tự động mở trang web nếu bạn sắp xếp tệp tin đúng quy chuẩn quốc tế sau:'
        ],
        bulletPoints: [
          'index.html: BẮT BUỘC phải nằm ngay ở thư mục gốc (Root folder), không được giấu bên trong bất kỳ thư mục con nào.',
          'css/: Thư mục con chứa các file định dạng như style.css.',
          'js/: Thư mục con chứa các file kịch bản tương tác như app.js.',
          'images/ hoặc img/: Thư mục con chứa hình ảnh, logo, biểu tượng.'
        ]
      },
      {
        id: 'kiem-tra-sau-trien-khai',
        title: '3. Các dịch vụ hosting miễn phí và quy trình kiểm tra',
        paragraphs: [
          'Học sinh THPT có thể xuất bản trang web của mình hoàn toàn miễn phí thông qua các nền tảng lưu trữ tĩnh uy tín hàng đầu thế giới:',
          '1. GitHub Pages: Tích hợp sẵn với kho mã nguồn GitHub, rất phù hợp cho học sinh thực hành.',
          '2. Vercel & Netlify: Chỉ cần kéo thả thư mục dự án là có ngay trang web trực tuyến trong 30 giây.'
        ],
        table: {
          caption: 'Bảng kiểm tra (Checklist) trước và sau khi triển khai',
          headers: ['Hạng mục', 'Cách kiểm tra', 'Nguyên nhân nếu lỗi'],
          rows: [
            ['Trang chủ 404 Not Found', 'Mở đường link chính', 'File trang chủ đặt tên sai (phải là index.html viết thường)'],
            ['Mất toàn bộ màu sắc CSS', 'Trang web trơ trụi chữ đen nền trắng', 'Đường dẫn <link href="..."> bị sai hoặc dùng đường dẫn tuyệt đối ổ C:\\'],
            ['Ảnh bị vỡ logo dấu X đỏ', 'Xem các thẻ <img>', 'Tên tệp ảnh phân biệt chữ hoa/thường (anh1.PNG khác anh1.png trên máy chủ Linux)'],
            ['Lỗi vỡ giao diện trên điện thoại', 'Mở link trên điện thoại', 'Quên thẻ <meta name="viewport" ...> trong phần <head>']
          ]
        }
      }
    ],
    codeExamples: [
      {
        id: 'vd-kiem-tra-deploy',
        title: 'Minh họa: Cấu trúc đường dẫn chuẩn an toàn khi triển khai',
        description: 'Ví dụ đường dẫn tương đối chuẩn xác không bao giờ bị hỏng khi đưa lên mạng.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Trang web sẵn sàng triển khai</title>
  
  <!-- ĐÚNG: Đường dẫn tương đối từ thư mục gốc -->
  <!-- <link rel="stylesheet" href="css/style.css"> -->
  
  <!-- SAI: Tuyệt đối không dùng đường dẫn máy tính cá nhân như dưới đây: -->
  <!-- <link rel="stylesheet" href="C:/Users/DELL/Desktop/style.css"> -->
</head>
<body style="font-family: sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #16a34a;">✓ Trang web đã sẵn sàng đưa lên Hosting!</h2>
  <p>Quy trình kiểm tra 3 bước:</p>
  <ol>
    <li>Tên file chính là <strong>index.html</strong> (chữ thường).</li>
    <li>Đường dẫn ảnh và CSS đều dùng đường dẫn tương đối (ví dụ: <code>css/style.css</code>).</li>
    <li>Đã có thẻ meta viewport để hiển thị đẹp trên điện thoại.</li>
  </ol>
</body>
</html>`,
        explanation: 'Mọi đường dẫn tài nguyên đều phải là đường dẫn tương đối trong dự án để máy chủ web có thể định tuyến chính xác.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Tưởng rằng triển khai web là một câu lệnh CSS.',
        cause: 'Hiểu nhầm tên bài học trong danh mục.',
        solution: 'Ghi nhớ triển khai là việc đưa sản phẩm lên môi trường truy cập Internet, không phải thuộc tính CSS.'
      },
      {
        mistake: 'Đặt tên file ảnh là Logo.PNG nhưng trong mã HTML lại gõ src="images/logo.png".',
        cause: 'Máy chủ web chạy hệ điều hành Linux phân biệt chữ hoa và chữ thường rất nghiêm ngặt.',
        solution: 'Luôn đặt tên mọi tệp tin, thư mục và đường dẫn bằng chữ thường không dấu.'
      }
    ],
    keyTakeaways: [
      'Triển khai website là bước đưa sản phẩm lên máy chủ Internet, không phải tính năng của CSS.',
      'File trang chủ luôn phải là index.html nằm ở thư mục gốc.',
      'Sử dụng đường dẫn tương đối và chữ thường không dấu cho mọi tệp tin để đảm bảo không bị lỗi 404 sau khi triển khai.'
    ]
  }
];
