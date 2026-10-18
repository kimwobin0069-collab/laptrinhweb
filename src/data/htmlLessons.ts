import { Lesson } from '../types/lesson';

export const htmlLessons: Lesson[] = [
  {
    id: 'html-1',
    track: 'html',
    order: 1,
    title: 'Khái quát về HTML và web',
    slug: 'khai-quat-ve-html-va-web',
    description: 'Tìm hiểu bản chất của World Wide Web, vai trò của bộ ba HTML - CSS - JavaScript và cách trình duyệt hiển thị một trang web.',
    estimatedMinutes: 25,
    objectives: [
      'Giải thích luồng trình duyệt, DNS, máy chủ web và cơ sở dữ liệu.',
      'Phân biệt web tĩnh và web động phía máy chủ qua ví dụ thực tế.',
      'Phân biệt rõ ràng vai trò của HTML (bộ khung), CSS (trang điểm) và JavaScript (hành vi).',
      'Nắm vững khái niệm HTML là ngôn ngữ đánh dấu siêu văn bản, không phải ngôn ngữ lập trình thuật toán.'
    ],
    sections: [
      {
        id: 'web-la-gi',
        title: '1. Mạng lưới toàn cầu (World Wide Web) hoạt động ra sao?',
        paragraphs: [
          'Khi bạn gõ <strong>địa chỉ một trang web</strong> <em>(ví dụ: <code class="web-domain">google.com</code> hay <code class="web-domain">dantri.com.vn</code>)</em> vào trình duyệt và nhấn <kbd class="key-enter">Enter</kbd>, máy tính của bạn (đóng vai trò là <span class="badge badge-client">💻 Máy khách – Client</span>) sẽ gửi một <span class="badge badge-request">📤 Yêu cầu (Request)</span> qua <strong>Internet</strong> đến <span class="badge badge-server">🖥️ Máy chủ (Server)</span> lưu trữ trang web đó.',
          '<strong>Máy chủ</strong> sẽ <span class="badge badge-response">📥 Phản hồi (Response)</span> bằng cách gửi về các tệp tin chứa <strong>mã lệnh văn bản</strong> gồm <span class="tech-html">HTML</span>, <span class="tech-css">CSS</span>, <span class="tech-js">JavaScript</span> cùng các tệp <strong>hình ảnh, âm thanh</strong>. <strong>Trình duyệt web</strong> <em>(như Google Chrome, Microsoft Edge, Firefox)</em> có nhiệm vụ <strong>đọc, phân tích và "vẽ" lại</strong> <em>(render)</em> các mã lệnh đó thành <span class="highlight-visual">giao diện trực quan</span> cho bạn đọc.'
        ]
      },
{
  "id": "web-tinh-web-dong",
  "title": "2. Web tĩnh và web động khác nhau thế nào?",
  "illustration": "static-dynamic",
  "paragraphs": [
    "Web tĩnh: máy chủ gửi các tệp đã chuẩn bị sẵn (HTML, CSS, JavaScript, hình ảnh) cho trình duyệt. Ví dụ: trang giới thiệu trường hoặc trang tài liệu. Khi muốn thay đổi nội dung đã xuất bản, người quản trị thường sửa nguồn rồi xuất bản lại.",
    "Web động phía máy chủ: ứng dụng xử lý yêu cầu và tạo nội dung hoặc dữ liệu phản hồi tại thời điểm truy cập. Kết quả có thể phụ thuộc tài khoản, từ khóa tìm kiếm hoặc dữ liệu hiện tại. Ví dụ: cổng xem điểm sau khi đăng nhập."
  ],
  "table": {
    "headers": [
      "Tiêu chí",
      "Web tĩnh",
      "Web động phía máy chủ"
    ],
    "rows": [
      [
        "Cách phục vụ",
        "Gửi tệp có sẵn",
        "Xử lý yêu cầu rồi tạo phản hồi"
      ],
      [
        "Dữ liệu",
        "Nội dung được xuất bản sẵn",
        "Có thể đọc/ghi cơ sở dữ liệu hoặc gọi dịch vụ khác"
      ],
      [
        "Ví dụ",
        "Trang giới thiệu câu lạc bộ",
        "Cổng xem điểm, cửa hàng có tài khoản và đơn hàng"
      ],
      [
        "Cập nhật",
        "Thường sửa nguồn và xuất bản lại",
        "Có thể cập nhật dữ liệu qua trang quản trị"
      ]
    ]
  },
  "callout": {
    "type": "note",
    "title": "Có animation chưa có nghĩa là web động phía máy chủ",
    "content": "Trang tĩnh vẫn có thể dùng JavaScript để làm menu, animation, tìm kiếm trong dữ liệu có sẵn hoặc lưu tiến độ trên trình duyệt. Web động không bắt buộc có cơ sở dữ liệu; một website cũng có thể kết hợp phần tĩnh và API động."
  }
},
{
  "id": "co-che-hoat-dong-web",
  "title": "3. Từ tên miền đến trang web trên màn hình",
  "illustration": "web-mechanism",
  "paragraphs": [
    "Ví dụ bạn mở https://truong.example/diem. Trình duyệt cần tìm địa chỉ IP của máy chủ qua hệ thống DNS (hoặc dùng kết quả còn lưu trong bộ nhớ đệm), rồi mới gửi yêu cầu đến máy chủ. DNS giúp tìm địa chỉ, không chuyển tiếp toàn bộ nội dung trang web.",
    "Với HTTPS, trình duyệt thiết lập kết nối được bảo vệ bằng TLS. Máy chủ web có thể trả tệp tĩnh ngay hoặc chuyển yêu cầu cho ứng dụng phía máy chủ. Ứng dụng có thể kiểm tra quyền truy cập và truy vấn cơ sở dữ liệu trước khi trả kết quả."
  ],
  "bulletPoints": [
    "Người dùng (User): nhập địa chỉ, nhấp liên kết hoặc gửi biểu mẫu.",
    "Trình duyệt (Client): gửi yêu cầu HTTP(S), nhận tài nguyên và hiển thị trang.",
    "DNS (Domain Name System): phân giải tên miền sang địa chỉ IP; kết quả thường được lưu đệm.",
    "Web Server (Web SV): nhận yêu cầu và gửi phản hồi; có thể phối hợp với ứng dụng phía máy chủ.",
    "Database (DB): lưu dữ liệu như tài khoản, bài viết hoặc điểm. Trong mô hình thông thường, trình duyệt gọi máy chủ/API thay vì kết nối trực tiếp đến DB."
  ],
  "callout": {
    "type": "info",
    "title": "Sơ đồ là mô hình rút gọn",
    "content": "Một trang thực tế thường cần nhiều yêu cầu để tải HTML, CSS, JavaScript, ảnh và dữ liệu. Cache, CDN, proxy hoặc máy chủ ứng dụng có thể tham gia; không phải mọi lượt truy cập đều hỏi DNS hay truy vấn DB."
  }
},
      {
        id: 'bo-ba-cong-nghe',
        title: '4. Bộ ba công nghệ cốt lõi của website',
        paragraphs: [
          'Một trang web hoàn chỉnh giống như một ngôi nhà hoặc một con người, được tạo nên từ 3 thành phần chính:',
          'Mỗi công nghệ giữ một nhiệm vụ chuyên biệt và không thể thay thế cho nhau. Bạn bắt buộc phải học HTML trước tiên để xây dựng nên phần khung cốt lõi.'
        ],
        bulletPoints: [
          'HTML (HyperText Markup Language): Bộ khung xương của ngôi nhà, xác định vị trí phòng khách, cửa sổ, cột nhà (tiêu đề, đoạn văn, hình ảnh, bảng biểu).',
          'CSS (Cascading Style Sheets): Sơn tường, nội thất, ánh sáng làm cho ngôi nhà đẹp mắt, hài hòa và hiện đại (màu sắc, phông chữ, khoảng cách, bố cục).',
          'JavaScript: Hệ thống điện thông minh, cửa tự động, cảm biến (tương tác bấm nút, hiệu ứng chuyển động, xử lý dữ liệu người dùng).'
        ],
        table: {
          caption: 'So sánh vai trò của HTML, CSS và JavaScript',
          headers: ['Công nghệ', 'Tên đầy đủ', 'Vai trò chính', 'Ví dụ thực tế'],
          rows: [
            ['HTML', 'HyperText Markup Language', 'Xác định cấu trúc & nội dung', 'Tạo ra nút bấm có chữ "Đăng nhập"'],
            ['CSS', 'Cascading Style Sheets', 'Định dạng giao diện & thẩm mỹ', 'Đổi màu nút thành xanh lam, bo góc tròn'],
            ['JavaScript', 'JavaScript', 'Xử lý logic & tương tác động', 'Khi bấm nút, kiểm tra tài khoản và mật khẩu']
          ]
        }
      },
      {
        id: 'html-la-gi',
        title: '5. Bản chất của HTML: Ngôn ngữ đánh dấu siêu văn bản',
        paragraphs: [
          'HTML viết tắt của cụm từ HyperText Markup Language:',
          'Đặc biệt, HTML không có biến, vòng lặp hay câu lệnh rẽ nhánh tính toán như Pascal, C++ hay Python. Bạn không thể dùng HTML thuần túy để giải phương trình bậc 2 hay tính dãy Fibonacci. HTML chỉ dùng để "đánh dấu" cho trình duyệt biết từng khối nội dung có ý nghĩa gì.'
        ],
        bulletPoints: [
          'HyperText (Siêu văn bản): Văn bản có chứa liên kết (link) dẫn đến các văn bản, trang web hoặc tệp tài nguyên khác.',
          'Markup Language (Ngôn ngữ đánh dấu): Sử dụng các "thẻ" (tags) quy ước đặc biệt (đặt trong dấu ngoặc nhọn <...>) để đánh dấu ý nghĩa cho từng mẩu nội dung.'
        ],
        callout: {
          type: 'note',
          title: 'Khái niệm quan trọng',
          content: 'HTML là ngôn ngữ đánh dấu (Markup Language), hoàn toàn không phải là ngôn ngữ lập trình (Programming Language).'
        }
      }
    ],
    codeExamples: [
      {
        id: 'vd-html-co-ban',
        title: 'Ví dụ: Trang web HTML đầu tiên',
        description: 'Đoạn mã HTML đơn giản hiển thị một tiêu đề lớn và một đoạn văn giới thiệu.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8">
    <title>Trang web đầu tiên của tôi</title>
  </head>
  <body>
    <h1>Chào mừng đến với lập trình Web!</h1>
    <p>Tôi là học sinh THPT đang bắt đầu học HTML, CSS và JavaScript.</p>
    <p>Học lập trình web giúp tôi tự tay tạo ra sản phẩm thực tế.</p>
  </body>
</html>`,
        explanation: 'Thẻ <h1> định nghĩa tiêu đề chính quan trọng nhất, thẻ <p> định nghĩa một đoạn văn bản. Trình duyệt tự động hiển thị chữ <h1> to và đậm hơn bình thường.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Xem HTML là ngôn ngữ lập trình và cố tìm câu lệnh vòng lặp for hay rẽ nhánh if.',
        cause: 'Hiểu nhầm thuật ngữ "ngôn ngữ đánh dấu" thành "ngôn ngữ lập trình".',
        solution: 'Ghi nhớ HTML chỉ chịu trách nhiệm đánh dấu cấu trúc văn bản. Để viết thuật ngữ logic rẽ nhánh, ta sẽ học ở phần JavaScript.'
      },
      {
        mistake: 'Lưu file với định dạng tệp .txt thay vì .html.',
        cause: 'Dùng Notepad thông thường và để mặc định lưu dạng văn bản thuần .txt.',
        solution: 'Luôn lưu tệp với phần mở rộng .html (ví dụ: index.html).'
      }
    ],
    keyTakeaways: [
      'Trình duyệt đọc mã nguồn HTML từ máy chủ để dựng thành giao diện trang web.',
      'Bộ ba Web: HTML xây khung nội dung, CSS làm đẹp giao diện, JavaScript tạo tương tác thông minh.',
      'HTML là ngôn ngữ đánh dấu siêu văn bản, sử dụng các cặp thẻ mở và đóng để quy định ý nghĩa dữ liệu.'
    ]
  },
  {
    id: 'html-2',
    track: 'html',
    order: 2,
    title: 'Công cụ viết mã lệnh',
    slug: 'cong-cu-viet-ma-lenh',
    description: 'Tìm hiểu trình soạn thảo mã nguồn VS Code, trình duyệt web, công cụ DevTools và cách tạo, lưu và mở một tệp HTML chuẩn xác.',
    estimatedMinutes: 20,
    objectives: [
      'Lựa chọn và cài đặt trình soạn thảo mã nguồn phù hợp (Visual Studio Code).',
      'Biết cách mở Developer Tools (F12) trên trình duyệt để kiểm tra cấu trúc trang.',
      'Nắm vững thao tác tạo thư mục dự án, tạo file .html và mở xem kết quả.'
    ],
    sections: [
      {
        id: 'trinh-soan-thao',
        title: '1. Trình soạn thảo mã nguồn (Code Editor)',
        paragraphs: [
          'Bạn tuyệt đối không dùng Microsoft Word hoặc Google Docs để viết code, vì các phần mềm này tự động chèn thêm nhiều định dạng ẩn khiến trình duyệt không đọc được mã.',
          'Công cụ tiêu chuẩn công nghiệp hiện nay là Visual Studio Code (VS Code) do Microsoft phát triển: hoàn toàn miễn phí, hỗ trợ tô màu mã lệnh, tự động gợi ý cú pháp và có kho tiện ích mở rộng (Extensions) vô cùng phong phú.'
        ],
        bulletPoints: [
          'Visual Studio Code: Khuyên dùng cho tất cả học sinh THPT.',
          'Notepad++ / Sublime Text: Lựa chọn thay thế nhẹ nhàng cho máy tính cấu hình khiêm tốn.',
          'Tiện ích mở rộng Live Server trong VS Code: Tự động tải lại trang ngay khi bạn nhấn Ctrl + S lưu file.'
        ]
      },
      {
        id: 'trinh-duyet-devtools',
        title: '2. Trình duyệt web và công cụ Developer Tools',
        paragraphs: [
          'Mọi trình duyệt hiện đại (Google Chrome, Microsoft Edge, Firefox, Brave) đều tích hợp sẵn một bộ công cụ dành cho lập trình viên mang tên Developer Tools (gọi tắt là DevTools).',
          'Để bật DevTools, bạn nhấn phím F12 (hoặc chuột phải vào trang web và chọn "Kiểm tra" / "Inspect").'
        ],
        bulletPoints: [
          'Tab Elements: Cho phép bạn soi trực tiếp từng thẻ HTML và kiểu dáng CSS trên trang.',
          'Tab Console: Nơi hiển thị các thông báo lỗi và chạy các câu lệnh JavaScript thử nghiệm.',
          'Chế độ Device Toolbar (Ctrl + Shift + M): Giả lập màn hình điện thoại để kiểm tra độ tương thích giao diện.'
        ],
        callout: {
          type: 'tip',
          title: 'Mẹo cho học sinh',
          content: 'Phím tắt F12 là trợ thủ đắc lực nhất của mọi lập trình viên web. Hãy tập thói quen mở F12 để quan sát lỗi khi trang web không chạy như ý muốn.'
        }
      },
      {
        id: 'quy-trinh-tao-file',
        title: '3. Quy trình tạo và mở một tệp HTML trên máy tính',
        paragraphs: [
          'Để bắt đầu dự án web, hãy tuân theo quy trình chuẩn sau:',
          '1. Tạo một thư mục riêng trên máy tính (ví dụ: D:\\LapTrinhWeb\\BaiTap1). Không đặt tên thư mục có dấu tiếng Việt hoặc khoảng trắng.',
          '2. Mở thư mục đó bằng VS Code (File -> Open Folder...).',
          '3. Tạo file mới có tên là index.html (trang chủ mặc định luôn đặt tên là index.html).',
          '4. Soạn thảo mã HTML và nhấn Ctrl + S để lưu lại.',
          '5. Nhấp đúp chuột vào file index.html trên máy tính để mở bằng trình duyệt.'
        ]
      }
    ],
    codeExamples: [
      {
        id: 'vd-file-html-co-ban',
        title: 'Mã mẫu chuẩn trong file index.html',
        description: 'Cấu trúc tối thiểu nhưng đầy đủ để thử nghiệm mở trực tiếp trên trình duyệt.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Bài thực hành mở tệp HTML</title>
</head>
<body>
  <h1>Xin chào! Tôi đã tạo thành công file index.html</h1>
  <p>File này được lưu và mở trực tiếp bằng trình duyệt Google Chrome/Microsoft Edge.</p>
</body>
</html>`,
        explanation: 'Nhấn nút "Chạy thử" phía trên để quan sát kết quả trình duyệt hiển thị.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Windows ẩn phần mở rộng tệp tin khiến file bị đặt tên là index.html.txt.',
        cause: 'Chế độ ẩn đuôi file mặc định "Hide extensions for known file types" của hệ điều hành Windows.',
        solution: 'Trong File Explorer của Windows, vào mục View -> tích chọn "File name extensions" để thấy rõ đuôi tệp và đổi lại thành .html.'
      },
      {
        mistake: 'Đặt tên file hoặc tên thư mục chứa dấu cách và tiếng Việt có dấu (ví dụ: bài tập 1.html).',
        cause: 'Thói quen đặt tên văn bản tiếng Việt.',
        solution: 'Luôn dùng chữ thường không dấu, nối nhau bằng dấu gạch ngang (ví dụ: bai-tap-1.html).'
      }
    ],
    keyTakeaways: [
      'Sử dụng VS Code kết hợp với trình duyệt Google Chrome hoặc Edge để lập trình web.',
      'Sử dụng phím tắt F12 để kiểm tra lỗi và xem cấu trúc thẻ HTML trong DevTools.',
      'File trang chủ của một website luôn được đặt tên chuẩn là index.html.'
    ]
  },
  {
    id: 'html-3',
    track: 'html',
    order: 3,
    title: 'Cấu trúc trang web',
    slug: 'cau-truc-trang-web',
    description: 'Mổ xẻ từng dòng trong cấu trúc tệp HTML chuẩn: DOCTYPE, html, head, meta UTF-8, viewport, title, body và quy ước thẻ mở/đóng/rỗng.',
    estimatedMinutes: 25,
    objectives: [
      'Giải thích được ý nghĩa từng dòng trong bộ khung tài liệu HTML5 tiêu chuẩn.',
      'Hiểu rõ sự khác biệt giữa phần đầu (<head>) và phần thân (<body>).',
      'Nắm chắc khái niệm: thẻ mở, thẻ đóng, phần tử, thuộc tính và phần tử rỗng (void elements).'
    ],
    sections: [
      {
        id: 'bo-khung-chuan',
        title: '1. Bộ khung tài liệu HTML5 chuẩn',
        paragraphs: [
          'Mọi trang web hiện đại trên thế giới đều bắt đầu bằng một bộ khung xương thống nhất. Dưới đây là ý nghĩa chi tiết của từng thành phần:'
        ],
        bulletPoints: [
          '<!DOCTYPE html>: Khai báo cho trình duyệt biết đây là tài liệu viết theo chuẩn HTML5 mới nhất.',
          '<html lang="vi">: Phần tử gốc chứa toàn bộ trang web. Thuộc tính lang="vi" báo hiệu ngôn ngữ chính là tiếng Việt.',
          '<head>: Chứa các thông tin cấu hình (Metadata) dành cho trình duyệt và máy tìm kiếm, KHÔNG hiển thị trực tiếp lên mặt trang.',
          '<meta charset="UTF-8">: Khai báo bảng mã ký tự UTF-8, giúp hiển thị tiếng Việt có dấu hoàn hảo mà không bị lỗi chữ vuông hay ký tự lạ.',
          '<meta name="viewport" content="width=device-width, initial-scale=1.0">: Thiết lập tỉ lệ hiển thị vừa vặn với kích thước màn hình điện thoại di động.',
          '<title>: Đặt tiêu đề hiển thị trên thanh tiêu đề hoặc tab của trình duyệt.',
          '<body>: Chứa toàn bộ nội dung hiển thị cho người xem: văn bản, hình ảnh, video, nút bấm,...'
        ]
      },
      {
        id: 'khai-niem-the-thuoc-tinh',
        title: '2. Thẻ (Tag), Phần tử (Element) và Thuộc tính (Attribute)',
        paragraphs: [
          'Một phần tử HTML đầy đủ thường được cấu thành từ 3 phần:',
          '1. Thẻ mở (Opening Tag): <ten_the>',
          '2. Nội dung bên trong (Content): Đoạn chữ hoặc các thẻ con lồng bên trong.',
          '3. Thẻ đóng (Closing Tag): </ten_the> (có dấu gạch chéo / phía trước tên thẻ).'
        ],
        bulletPoints: [
          'Thuộc tính (Attributes): Cung cấp thông tin bổ sung cho thẻ, luôn nằm trong thẻ mở theo cú pháp: ten_thuoc_tinh="gia_tri". Ví dụ: <html lang="vi">.',
          'Phần tử rỗng (Void elements / Self-closing tags): Các thẻ không chứa nội dung văn bản và không có thẻ đóng, ví dụ: <img>, <br>, <hr>, <meta>, <input>.'
        ],
        callout: {
          type: 'warning',
          title: 'Lưu ý về chữ hoa và chữ thường',
          content: 'Mặc dù trình duyệt không phân biệt <p> hay <P>, theo quy chuẩn quốc tế W3C hiện đại, bạn PHẢI luôn viết tên thẻ và tên thuộc tính bằng chữ thường (lowercase).'
        }
      }
    ],
    codeExamples: [
      {
        id: 'vd-cau-truc-chuan',
        title: 'Bộ khung HTML5 hoàn chỉnh',
        description: 'Cấu trúc khung tài liệu chuẩn mà mọi trang web đều phải có.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trường THPT Lê Thị Hồng Gấm</title>
  </head>
  <body>
    <h1>Chào mừng năm học mới</h1>
    <p>Trang web câu lạc bộ Tin học và Lập trình ứng dụng.</p>
  </body>
</html>`,
        explanation: 'Nhìn vào mã nguồn: phần <head> chứa tiêu đề tab và mã hóa ký tự UTF-8; phần <body> chứa tiêu đề <h1> và đoạn văn <p> hiển thị ra màn hình.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Quên khai báo thẻ <meta charset="UTF-8">.',
        cause: 'Nghĩ rằng không cần thiết.',
        solution: 'Nếu thiếu dòng này, các chữ có dấu như "đ", "ê", "ơ" có thể bị lỗi thành các ký tự rác như , &atilde; khi mở trên một số hệ điều hành.'
      },
      {
        mistake: 'Đặt nội dung muốn hiển thị ra màn hình vào trong thẻ <head>.',
        cause: 'Nhầm lẫn giữa phần đầu và phần thân của trang web.',
        solution: 'Chỉ đặt nội dung hiển thị trong thẻ <body>. Thẻ <head> chỉ dành cho tiêu đề tab, liên kết file CSS và thẻ meta.'
      }
    ],
    keyTakeaways: [
      'Một trang HTML luôn có 2 phần tách biệt: <head> (thông tin cấu hình) và <body> (nội dung hiển thị).',
      '<meta charset="UTF-8"> là cứu cánh bắt buộc để hiển thị tiếng Việt chính xác.',
      'Thẻ rỗng (như <img>, <br>, <meta>) không có nội dung và không có thẻ đóng.'
    ]
  },
  {
    id: 'html-4',
    track: 'html',
    order: 4,
    title: 'Tạo đoạn văn bản',
    slug: 'tao-doan-van-ban',
    description: 'Học cách sử dụng thẻ p, thẻ ngắt dòng br, đường kẻ ngang phân cách hr và hiểu quy tắc xử lý khoảng trắng trong HTML.',
    estimatedMinutes: 15,
    objectives: [
      'Sử dụng thành thạo thẻ <p> để chia nhỏ bài viết thành các đoạn văn mạch lạc.',
      'Hiểu bản chất của thẻ xuống dòng <br> và đường kẻ ngang phân cách <hr>.',
      'Nắm được quy tắc gộp khoảng trắng (whitespace collapsing) của trình duyệt web.'
    ],
    sections: [
      {
        id: 'the-p',
        title: '1. Thẻ đoạn văn bản: <p>',
        paragraphs: [
          'Thẻ <p> (viết tắt của Paragraph) được dùng để định nghĩa một đoạn văn bản.',
          'Theo mặc định, trình duyệt sẽ tự động thêm một khoảng cách lề (margin) ở phía trên và phía dưới mỗi thẻ <p>, giúp bài viết rõ ràng, dễ đọc hơn thay vì dính liền vào nhau.'
        ]
      },
      {
        id: 'the-br-hr',
        title: '2. Thẻ ngắt dòng <br> và đường phân cách <hr>',
        paragraphs: [
          'Trong nhiều trường hợp (như viết thơ, ghi lời bài hát, hoặc ghi địa chỉ liên hệ), bạn muốn xuống dòng nhưng KHÔNG muốn tạo ra khoảng cách lớn giữa hai đoạn. Khi đó, hãy sử dụng thẻ ngắt dòng <br> (break).',
          'Thẻ <hr> (horizontal rule) tạo ra một đường kẻ ngang trên trang web, dùng để phân tách các chủ đề hoặc các phần nội dung khác nhau.'
        ],
        bulletPoints: [
          '<br>: Xuống dòng ngay tại vị trí đặt thẻ, là thẻ rỗng không cần thẻ đóng.',
          '<hr>: Đường phân cách chủ đề nằm ngang, cũng là thẻ rỗng.'
        ]
      },
      {
        id: 'khoang-trang-html',
        title: '3. Quy tắc xử lý khoảng trắng trong HTML',
        paragraphs: [
          'Trong tệp mã nguồn HTML, dù bạn gõ 10 dấu cách liên tiếp hoặc nhấn phím Enter xuống dòng 5 lần, trình duyệt cũng sẽ tự động rút gọn lại thành DUY NHẤT một dấu cách đơn.',
          'Hiện tượng này gọi là "Whitespace Collapsing". Nếu muốn xuống dòng, bắt buộc phải dùng thẻ <br> hoặc gói nội dung trong thẻ <p> riêng biệt.'
        ],
        callout: {
          type: 'tip',
          title: 'Mẹo định dạng',
          content: 'Nếu bạn muốn trình duyệt giữ nguyên từng dấu cách và ngắt dòng đúng y hệt như trong mã soạn thảo (ví dụ hiển thị thơ hoặc khối mã lệnh), hãy sử dụng thẻ <pre> (preformatted text).'
        }
      }
    ],
    codeExamples: [
      {
        id: 'vd-doan-van-va-tho',
        title: 'So sánh đoạn văn và trình bày bài thơ với <br>',
        description: 'Quan sát sự khác nhau giữa khoảng cách của thẻ <p> và ngắt dòng của thẻ <br>.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Ví dụ thẻ đoạn văn</title>
</head>
<body>
  <h2>Đoạn văn tự sự</h2>
  <p>Hôm nay là buổi học đầu tiên của môn Lập trình Web. Lớp học ai cũng hào hứng.</p>
  <p>Mỗi bạn đều có một máy tính riêng để tự tay gõ mã lệnh.</p>

  <hr>

  <h2>Khổ thơ (dùng thẻ br để ngắt dòng)</h2>
  <p>
    Sóng bắt đầu từ gió<br>
    Gió bắt đầu từ đâu?<br>
    Em cũng không biết nữa<br>
    Khi nào ta yêu nhau.
  </p>
</body>
</html>`,
        explanation: 'Giữa hai đoạn văn trên có một khoảng trống rõ rệt. Trong khổ thơ, các câu thơ xuống dòng sát nhau nhờ thẻ <br>.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Lạm dụng liên tiếp nhiều thẻ <br><br><br> để tạo khoảng cách lớn giữa các phần tử.',
        cause: 'Muốn đẩy nội dung xuống dưới nhanh chóng.',
        solution: 'Không nên dùng <br> để chỉnh khoảng cách bố cục. Hãy để dành nhiệm vụ căn lề (margin/padding) cho CSS.'
      },
      {
        mistake: 'Quên đóng thẻ </p> khiến cấu trúc HTML bị lồng ghép sai.',
        cause: 'Bất cẩn khi soạn thảo nhiều đoạn văn.',
        solution: 'Luôn kiểm tra thẻ đóng </p> ở cuối mỗi đoạn văn.'
      }
    ],
    keyTakeaways: [
      'Thẻ <p> tạo đoạn văn có khoảng cách trên dưới mặc định hợp lý.',
      'Thẻ <br> dùng để xuống dòng đơn lẻ bên trong cùng một đoạn văn bản.',
      'Trình duyệt luôn gộp nhiều phím cách và phím Enter liên tiếp thành một phím cách duy nhất.'
    ]
  },
  {
    id: 'html-5',
    track: 'html',
    order: 5,
    title: 'Định dạng nội dung văn bản',
    slug: 'dinh-dang-noi-dung-van-ban',
    description: 'Làm quen các thẻ định dạng văn bản: in đậm (strong, b), in nghiêng (em, i), đánh dấu dạ quang (mark), chỉ số trên/dưới (sup, sub) và thẻ code.',
    estimatedMinutes: 20,
    objectives: [
      'Phân biệt thẻ mang ý nghĩa ngữ nghĩa (strong, em) và thẻ chỉ định hình thức thuần túy (b, i).',
      'Ứng dụng được các thẻ <mark>, <u>, <del>, <ins> để biểu diễn văn bản sinh động.',
      'Sử dụng <sup> và <sub> để viết công thức toán học và hóa học chuẩn xác.'
    ],
    sections: [
      {
        id: 'in-dam-in-nghieng',
        title: '1. Thẻ in đậm và in nghiêng: Ý nghĩa ngữ nghĩa vs Hình thức',
        paragraphs: [
          'Trình duyệt cung cấp hai nhóm thẻ để in đậm và in nghiêng:',
          'Tại sao lại chia làm 2 loại? Các công cụ hỗ trợ người khiếm thị đọc màn hình (Screen Readers) sẽ nhấn mạnh cao độ giọng đọc khi gặp thẻ <strong> hoặc <em>, trong khi thẻ <b> và <i> chỉ đổi hình thức chữ mà không làm thay đổi giọng đọc.'
        ],
        bulletPoints: [
          '<strong>: In đậm VÀ mang ý nghĩa "nội dung này cực kỳ quan trọng, cần đặc biệt lưu ý".',
          '<b> (bold): Chỉ in đậm về mặt thị giác đơn thuần, không mang ý nghĩa nhấn mạnh đặc biệt.',
          '<em> (emphasize): In nghiêng VÀ mang ý nghĩa "nhấn mạnh sắc thái câu nói".',
          '<i> (italic): Chỉ in nghiêng về mặt hình thức (thường dùng cho thuật ngữ kỹ thuật, tên khoa học hoặc từ tiếng nước ngoài).'
        ]
      },
      {
        id: 'cac-the-dinh-dang-khac',
        title: '2. Các thẻ định dạng văn bản phổ biến khác',
        paragraphs: [
          'Dưới đây là các thẻ vô cùng tiện lợi khi bạn cần trình bày nội dung bài học, tài liệu hoặc công thức:'
        ],
        table: {
          caption: 'Bảng các thẻ định dạng văn bản thường dùng',
          headers: ['Thẻ', 'Ý nghĩa', 'Hiển thị mặc định', 'Ví dụ sử dụng'],
          rows: [
            ['<mark>', 'Bút dạ quang đánh dấu', 'Nền vàng nổi bật', '<mark>từ khóa</mark>'],
            ['<del>', 'Nội dung bị xóa bỏ / giá cũ', 'Gạch ngang thân chữ', 'Giá cũ: <del>50.000đ</del>'],
            ['<ins>', 'Nội dung được bổ sung / giá mới', 'Gạch chân dưới chữ', 'Giá mới: <ins>35.000đ</ins>'],
            ['<sub>', 'Chỉ số dưới (Subscript)', 'Chữ nhỏ nằm thấp xuống', 'Công thức nước: H<sub>2</sub>O'],
            ['<sup>', 'Chỉ số trên (Superscript)', 'Chữ nhỏ nhô lên cao', 'Phương trình: x<sup>2</sup> + y = 0'],
            ['<code>', 'Đoạn mã lập trình inline', 'Font chữ đơn cách monospace', 'Dùng lệnh <code>console.log()</code>']
          ]
        }
      }
    ],
    codeExamples: [
      {
        id: 'vd-dinh-dang-van-ban',
        title: 'Ví dụ tổng hợp định dạng văn bản',
        description: 'Áp dụng các thẻ định dạng trong bài viết giới thiệu môn Hóa và Toán học.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Ví dụ định dạng văn bản</title>
</head>
<body>
  <h2>Thông báo học tập</h2>
  <p>Học sinh <strong>bắt buộc</strong> phải nộp bài tập trước <mark>22h00 tối nay</mark>.</p>
  <p>Công thức hóa học của Axit Sunfuric là: <b>H<sub>2</sub>SO<sub>4</sub></b>.</p>
  <p>Định lý Pytago trong tam giác vuông: <i>a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></i>.</p>
  <p>Ưu đãi sách giáo khoa: Giá gốc <del>120.000đ</del> giảm còn <ins>90.000đ</ins>.</p>
  <p>Để in ra màn hình, học sinh gõ thẻ <code>&lt;p&gt;</code> trong file HTML.</p>
</body>
</html>`,
        explanation: 'Nhìn vào kết quả xem thử: Bạn sẽ thấy thẻ mark có nền vàng, H2SO4 có các số 2 và 4 nhỏ nằm dưới, a2 + b2 có số 2 nhô lên trên rất đẹp mắt.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Viết công thức H2O thành H<sup>2</sup>O thay vì H<sub>2</sub>O.',
        cause: 'Nhầm lẫn giữa <sup> (superior - trên) và <sub> (subordinate - dưới).',
        solution: 'Mẹo nhớ: sub nghĩa là ở dưới (như submarine - tàu ngầm lặn dưới nước).'
      },
      {
        mistake: 'Lạm dụng thẻ <mark> tô vàng gần như toàn bộ đoạn văn.',
        cause: 'Muốn người đọc chú ý nhưng tô quá nhiều.',
        solution: 'Chỉ đánh dấu 1-3 từ khóa trọng tâm nhất để giữ độ tương phản tốt.'
      }
    ],
    keyTakeaways: [
      'Ưu tiên dùng <strong> và <em> để bảo đảm ý nghĩa ngữ nghĩa (Semantic HTML).',
      'Thẻ <sub> dùng cho chỉ số dưới (H₂O), thẻ <sup> dùng cho lũy thừa (x²).',
      'Thẻ <del> và <ins> rất hữu ích khi trình bày giá khuyến mãi hoặc lịch sửa đổi.'
    ]
  },
  {
    id: 'html-6',
    track: 'html',
    order: 6,
    title: 'Tạo đề mục và danh sách',
    slug: 'tao-de-muc-va-danh-sach',
    description: 'Phân cấp tài liệu khoa học bằng 6 cấp độ tiêu đề h1 đến h6; tạo danh sách có thứ tự ol, không thứ tự ul và lồng danh sách.',
    estimatedMinutes: 20,
    objectives: [
      'Hiểu thứ bậc phân cấp từ <h1> đến <h6> và quy tắc chỉ dùng duy nhất một thẻ <h1> trên mỗi trang.',
      'Tạo danh sách gạch đầu dòng với <ul> và danh sách đánh số với <ol>.',
      'Tùy biến thuộc tính type, start và kỹ thuật lồng danh sách nhiều cấp.'
    ],
    sections: [
      {
        id: 'cac-cap-de-muc',
        title: '1. Sáu cấp độ đề mục: từ <h1> đến <h6>',
        paragraphs: [
          'HTML cung cấp 6 cấp độ đề mục giảm dần từ <h1> (lớn nhất, quan trọng nhất) đến <h6> (nhỏ nhất).',
          'Đề mục giúp tạo ra mục lục tự nhiên cho trang web, hỗ trợ người đọc quét nhanh thông tin và giúp các công cụ tìm kiếm hiểu rõ cấu trúc bài viết.'
        ],
        bulletPoints: [
          '<h1>: Tiêu đề chính của toàn bộ trang (mỗi trang web chỉ nên có đúng MỘT thẻ <h1>).',
          '<h2>: Tiêu đề các chương, các phần lớn.',
          '<h3>: Tiêu đề các mục con bên trong <h2>.',
          '<h4>, <h5>, <h6>: Các mục con chi tiết hơn (ít khi cần dùng đến).'
        ],
        callout: {
          type: 'warning',
          title: 'Quy tắc ngữ nghĩa đề mục',
          content: 'Không được chọn thẻ chỉ vì muốn chữ to hay nhỏ. Muốn chữ to hơn hãy dùng CSS font-size. Đề mục phải tuân thủ thứ bậc: Không bao giờ nhảy cóc từ <h1> thẳng xuống <h3> mà bỏ qua <h2>.'
        }
      },
      {
        id: 'danh-sach-ul-ol',
        title: '2. Danh sách không thứ tự (<ul>) và có thứ tự (<ol>)',
        paragraphs: [
          'Để liệt kê các mục, HTML cung cấp hai loại danh sách chính. Cả hai đều chứa các phần tử con là thẻ <li> (List Item):'
        ],
        bulletPoints: [
          '<ul> (Unordered List): Danh sách dạng dấu chấm tròn hoặc gạch đầu dòng. Thứ tự các mục không quan trọng (ví dụ: danh sách đồ dùng học tập).',
          '<ol> (Ordered List): Danh sách được đánh số thứ tự 1, 2, 3... Thứ tự các bước có ý nghĩa quan trọng (ví dụ: các bước cài đặt phần mềm).',
          'Thuộc tính type của <ol>: Có thể đổi kiểu đánh số: type="1" (số 1, 2, 3), type="A" (chữ hoa A, B, C), type="a" (chữ thường a, b, c), type="I" (số La Mã I, II, III).',
          'Thuộc tính start của <ol>: Quy định số bắt đầu (ví dụ: start="5" sẽ bắt đầu đếm từ số 5).'
        ]
      },
      {
        id: 'danh-sach-long-nhau',
        title: '3. Danh sách lồng nhau (Nested Lists)',
        paragraphs: [
          'Bạn hoàn toàn có thể đặt một danh sách <ul> hoặc <ol> mới bên trong một thẻ <li> của danh sách cha để tạo ra mục lục phân cấp nhiều tầng.'
        ]
      }
    ],
    codeExamples: [
      {
        id: 'vd-de-muc-va-danh-sach',
        title: 'Tổ chức bài viết với đề mục và danh sách lồng nhau',
        description: 'Tài liệu hướng dẫn kế hoạch ôn tập học kỳ của học sinh THPT.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Kế hoạch học tập</title>
</head>
<body>
  <h1>KẾ HOẠCH ÔN TẬP TIN HỌC 12</h1>

  <h2>1. Dụng cụ cần chuẩn bị</h2>
  <ul>
    <li>Vở ghi chép tóm tắt lý thuyết</li>
    <li>Máy tính cá nhân có cài đặt VS Code</li>
    <li>USB sao lưu bài tập thực hành</li>
  </ul>

  <h2>2. Lộ trình học lập trình Web</h2>
  <ol type="A">
    <li>
      Học HTML cơ bản
      <ol type="1">
        <li>Cấu trúc trang web</li>
        <li>Tạo bảng và danh sách</li>
        <li>Tạo biểu mẫu liên hệ</li>
      </ol>
    </li>
    <li>Học CSS định dạng giao diện</li>
    <li>Học JavaScript tạo tương tác</li>
  </ol>
</body>
</html>`,
        explanation: 'Thẻ <ol type="A"> đánh thứ tự A, B, C; danh sách lồng bên trong dùng <ol type="1"> đánh số 1, 2, 3 rõ ràng.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Đặt văn bản trực tiếp trong <ul> hoặc <ol> mà không bọc trong thẻ <li>.',
        cause: 'Viết thẳng <ul>Văn bản</ul>.',
        solution: 'Con trực tiếp duy nhất hợp lệ của <ul> và <ol> bắt buộc phải là thẻ <li>.'
      },
      {
        mistake: 'Dùng nhiều thẻ <h1> trong cùng một bài viết.',
        cause: 'Thấy thẻ <h1> chữ to đẹp nên dùng ở mọi tiêu đề con.',
        solution: 'Mỗi trang web chỉ có 1 thẻ <h1> duy nhất đại diện cho tiêu đề trang. Các tiêu đề con dùng <h2>, <h3>.'
      }
    ],
    keyTakeaways: [
      'Mỗi trang web chỉ có duy nhất 1 thẻ <h1>, sau đó chia nhỏ theo <h2>, <h3>.',
      '<ul> dùng cho danh sách không quan trọng thứ tự, <ol> dùng cho danh sách có thứ tự các bước.',
      'Các mục con trong danh sách luôn phải được gói trong cặp thẻ <li>...</li>.'
    ]
  },
  {
    id: 'html-7',
    track: 'html',
    order: 7,
    title: 'Tạo bảng',
    slug: 'tao-bang',
    description: 'Xây dựng bảng dữ liệu chuẩn chỉnh với table, tr, th, td, caption, nhóm thead/tbody/tfoot và kỹ thuật gộp ô rowspan, colspan.',
    estimatedMinutes: 25,
    objectives: [
      'Nắm chắc vai trò của các thẻ cơ bản: <table>, <tr>, <th>, <td> và <caption>.',
      'Sử dụng các thẻ phân nhóm ngữ nghĩa: <thead>, <tbody>, <tfoot>.',
      'Làm chủ kỹ thuật gộp ô: colspan (gộp cột) và rowspan (gộp hàng).'
    ],
    sections: [
      {
        id: 'cac-the-bang-co-ban',
        title: '1. Cấu trúc bảng cơ bản trong HTML',
        paragraphs: [
          'Bảng (Table) được dùng để hiển thị dữ liệu dạng lưới 2 chiều gồm các hàng và cột (ví dụ: thời khóa biểu, bảng điểm, bảng báo giá).',
          'Các thẻ cấu thành bảng bao gồm:'
        ],
        bulletPoints: [
          '<table>: Thẻ bao bọc toàn bộ bảng.',
          '<caption>: Tiêu đề hoặc chú thích cho bảng, luôn đặt ngay sau thẻ mở <table>.',
          '<tr> (Table Row): Tạo ra một hàng mới trong bảng.',
          '<th> (Table Header): Ô tiêu đề cột, chữ tự động in đậm và căn giữa.',
          '<td> (Table Data): Ô chứa dữ liệu thông thường, chữ căn lề trái.'
        ]
      },
      {
        id: 'nhom-ngu-nghia-bang',
        title: '2. Nhóm ngữ nghĩa: <thead>, <tbody>, <tfoot>',
        paragraphs: [
          'Để bảng có cấu trúc chuẩn mực cho trình duyệt xử lý và in ấn, người ta chia bảng thành 3 phần rõ rệt:',
          '1. <thead>: Chứa các hàng tiêu đề cột của bảng.',
          '2. <tbody>: Chứa toàn bộ nội dung dữ liệu chính của bảng.',
          '3. <tfoot>: Chứa hàng tổng kết cuối bảng (ví dụ: hàng tính tổng điểm, tổng tiền).'
        ]
      },
      {
        id: 'gop-o-colspan-rowspan',
        title: '3. Kỹ thuật gộp ô với colspan và rowspan',
        paragraphs: [
          'Giống như tính năng Merge Cells trong Microsoft Excel, HTML cho phép bạn gộp nhiều ô lại với nhau:',
          'colspan="n": Gộp n ô nằm trên CÙNG MỘT HÀNG (mở rộng theo chiều ngang sang phải).',
          'rowspan="n": Gộp n ô nằm trên CÙNG MỘT CỘT (kéo dài theo chiều dọc xuống các hàng dưới).'
        ],
        callout: {
          type: 'tip',
          title: 'Mẹo tính số ô khi gộp',
          content: 'Khi một ô dùng colspan="2", hàng đó đã có thêm 1 ô ảo, nên bạn phải bớt đi 1 thẻ <td> ở cùng hàng. Nếu dùng rowspan="2", hàng liền kề phía dưới phải bỏ bớt 1 thẻ <td> để tránh vỡ bố cục.'
        }
      }
    ],
    codeExamples: [
      {
        id: 'vd-thoi-khoa-bieu',
        title: 'Thời khóa biểu có gộp ô và phân nhóm thead/tbody',
        description: 'Bảng thời khóa biểu học tập với các ngày trong tuần và gộp ô môn thực hành.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Bảng Thời Khóa Biểu</title>
  <style>
    table { width: 100%; border-collapse: collapse; margin-top: 10px; }
    th, td { border: 1px solid #94a3b8; padding: 8px 12px; text-align: center; }
    th { background-color: #2563eb; color: white; }
    caption { font-weight: bold; font-size: 1.2rem; margin-bottom: 8px; }
    tfoot td { background-color: #f1f5f9; font-weight: bold; }
  </style>
</head>
<body>
  <table>
    <caption>THỜI KHÓA BIỂU BUỔI SÁNG - LỚP 12A1</caption>
    <thead>
      <tr>
        <th>Tiết</th>
        <th>Thứ Hai</th>
        <th>Thứ Ba</th>
        <th>Thứ Tư</th>
        <th>Thứ Năm</th>
        <th>Thứ Sáu</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Chào cờ</td>
        <td>Toán</td>
        <td>Hóa học</td>
        <td>Ngữ văn</td>
        <td>Lịch sử</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Sinh hoạt</td>
        <td>Toán</td>
        <td>Vật lý</td>
        <td>Ngữ văn</td>
        <td>Địa lý</td>
      </tr>
      <tr>
        <td>3</td>
        <td colspan="2">Tin học (Thực hành 2 tiết)</td>
        <td>Tiếng Anh</td>
        <td>Toán</td>
        <td>GDCD</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="6">Ghi chú: Tiết thực hành Tin học học tại Phòng máy 2</td>
      </tr>
    </tfoot>
  </table>
</body>
</html>`,
        explanation: 'Quan sát ô "Tin học (Thực hành 2 tiết)": dùng colspan="2" nên một ô đã chiếm trọn không gian của cả Thứ Hai và Thứ Ba.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Quên trừ bớt thẻ <td> ở hàng sau khi đã dùng rowspan ở hàng trước.',
        cause: 'Quên rằng ô gộp từ hàng trên đã chiếm sẵn một vị trí ở hàng dưới.',
        solution: 'Đếm tổng số cột thực tế trên mỗi hàng để đảm bảo mọi hàng đều có cùng tổng số cột.'
      },
      {
        mistake: 'Dùng bảng <table> để chia cột và căn bố cục toàn bộ trang web.',
        cause: 'Cách làm lỗi thời từ những năm 2000.',
        solution: 'Bảng chỉ dùng để trình bày dữ liệu dạng bảng. Để chia cột bố cục trang web, ta dùng CSS Flexbox hoặc Grid.'
      }
    ],
    keyTakeaways: [
      'Cấu trúc bảng: <table> chứa <tr>, bên trong <tr> chứa <th> (tiêu đề) hoặc <td> (dữ liệu).',
      'Phân nhóm <thead>, <tbody>, <tfoot> giúp bảng rõ ràng và dễ bảo trì.',
      'Sử dụng colspan để gộp cột (chiều ngang) và rowspan để gộp hàng (chiều dọc).'
    ]
  },
  {
    id: 'html-8',
    track: 'html',
    order: 8,
    title: 'Tạo siêu liên kết',
    slug: 'tao-sieu-lien-ket',
    description: 'Tạo liên kết với thẻ a, phân biệt đường dẫn tuyệt đối vs tương đối, liên kết neo #id trong trang, mở tab mới và liên kết email/điện thoại.',
    estimatedMinutes: 20,
    objectives: [
      'Sử dụng thẻ <a> cùng thuộc tính href để liên kết các trang web lại với nhau.',
      'Phân biệt rõ ràng đường dẫn tuyệt đối (Absolute URL) và đường dẫn tương đối (Relative URL).',
      'Tạo liên kết neo (Anchor Link) cuộn đến một vị trí cụ thể trong trang bằng thuộc tính id.'
    ],
    sections: [
      {
        id: 'the-a-va-href',
        title: '1. Thẻ <a> và thuộc tính cốt lõi href',
        paragraphs: [
          'Siêu liên kết (Hyperlink) chính là linh hồn của mạng World Wide Web, cho phép người dùng nhấp chuột để chuyển từ trang này sang trang khác một cách tức thì.',
          'Thẻ <a> (viết tắt của Anchor) được dùng để tạo liên kết. Thuộc tính quan trọng nhất là href (Hypertext Reference), chứa địa chỉ đích cần dẫn đến.'
        ]
      },
      {
        id: 'duong-dan-tuyet-doi-tuong-doi',
        title: '2. Phân biệt đường dẫn tuyệt đối và tương đối',
        paragraphs: [
          'Đây là kiến thức cực kỳ quan trọng mà học sinh rất hay nhầm lẫn khi làm bài tập thực hành:',
          '1. Đường dẫn tuyệt đối (Absolute URL): Là địa chỉ đầy đủ bắt đầu bằng giao thức http:// hoặc https:// dẫn đến một trang web bên ngoài Internet. Ví dụ: https://vnexpress.net.',
          '2. Đường dẫn tương đối (Relative URL): Dẫn đến một tệp nằm ngay trong cùng thư mục dự án của bạn:',
          '- Cùng thư mục: href="gioi-thieu.html"',
          '- Vào thư mục con: href="bai-viet/bai-1.html"',
          '- Lên thư mục cha: href="../index.html"'
        ]
      },
      {
        id: 'mo-tab-moi-va-anchor',
        title: '3. Mở tab mới và liên kết neo trong trang (Anchor)',
        paragraphs: [
          'Các tính năng nâng cao thông dụng của thẻ <a>:',
          'Mở trong tab mới: Thêm thuộc tính target="_blank". Luôn đi kèm rel="noopener noreferrer" để bảo mật trình duyệt.',
          'Liên kết neo cuộn trong trang: Dùng dấu thăng # kèm theo id của phần tử đích (ví dụ: href="#chuong-2" sẽ cuộn màn hình đến phần tử có id="chuong-2").',
          'Liên kết gửi email & gọi điện: href="mailto:thpt@edu.vn" hoặc href="tel:0912345678".'
        ]
      }
    ],
    codeExamples: [
      {
        id: 'vd-sieu-lien-ket',
        title: 'Ví dụ các kiểu siêu liên kết thường dùng',
        description: 'Thực hành tạo liên kết ngoài, liên kết mở tab mới và liên kết neo cuộn trang.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Ví dụ siêu liên kết</title>
</head>
<body>
  <h2>Menu điều hướng nhanh</h2>
  <p>
    <a href="#phan-1">Đến Phần 1</a> |
    <a href="#phan-2">Đến Phần 2</a> |
    <a href="https://vi.wikipedia.org" target="_blank" rel="noopener noreferrer">Mở Wikipedia (Tab mới)</a>
  </p>

  <hr>

  <h3 id="phan-1">Phần 1: Giới thiệu chung</h3>
  <p>Đây là nội dung của phần 1. Thẻ neo giúp học sinh cuộn nhanh đến mục này.</p>

  <h3 id="phan-2">Phần 2: Thông tin liên hệ</h3>
  <p>
    Liên hệ cố vấn học tập: 
    <a href="mailto:giaovien@school.edu.vn">Gửi Email cho Thầy Cô</a>
  </p>
</body>
</html>`,
        explanation: 'Nhấp vào "Đến Phần 1" hoặc "Đến Phần 2" để thấy trang web tự động nhảy đến đúng tiêu đề tương ứng nhờ thuộc tính id.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Điền đường dẫn tệp tuyệt đối trên ổ cứng máy tính cá nhân (ví dụ: href="C:\\Users\\Admin\\Desktop\\gioi-thieu.html").',
        cause: 'Sao chép trực tiếp đường dẫn từ thanh địa chỉ File Explorer của Windows.',
        solution: 'Khi nộp bài cho thầy cô hoặc đưa lên mạng, máy người khác không có ổ C:\\Users\\Admin đó nên link sẽ chết hoàn toàn! Luôn dùng đường dẫn tương đối như href="gioi-thieu.html".'
      },
      {
        mistake: 'Quên ký tự # trong liên kết neo (viết href="phan-1" thay vì href="#phan-1").',
        cause: 'Trình duyệt sẽ hiểu nhầm đó là một file có tên phan-1 và báo lỗi 404 Not Found.',
        solution: 'Luôn bắt đầu bằng dấu # khi liên kết đến id trong cùng trang.'
      }
    ],
    keyTakeaways: [
      'Thẻ <a> dùng thuộc tính href để khai báo đích đến của liên kết.',
      'Tuyệt đối không dùng đường dẫn ổ cứng cục bộ (C:\\...) trong dự án web.',
      'Dùng target="_blank" để mở trang trong tab mới và dùng href="#id" để cuộn trong trang.'
    ]
  },
  {
    id: 'html-9',
    track: 'html',
    order: 9,
    title: 'Tạo khung nhúng',
    slug: 'tao-khung-nhung',
    description: 'Sử dụng thẻ iframe để nhúng trang web con, video YouTube, Google Maps và hiểu lý do các website lớn chặn nhúng (X-Frame-Options).',
    estimatedMinutes: 20,
    objectives: [
      'Hiểu bản chất của iframe (Inline Frame) là một cửa sổ nhúng trang web khác vào trang hiện tại.',
      'Biết cách nhúng bản đồ Google Maps và video YouTube chuẩn xác.',
      'Hiểu rõ cơ chế bảo mật khiến nhiều website (Facebook, Google tìm kiếm) chặn nhúng iframe.'
    ],
    sections: [
      {
        id: 'iframe-la-gi',
        title: '1. Thẻ <iframe> là gì?',
        paragraphs: [
          'Thẻ <iframe> (viết tắt của Inline Frame) cho phép bạn nhúng cả một tài liệu HTML độc lập khác vào bên trong trang web hiện tại.',
          'Nó giống như việc bạn mở một khung cửa sổ nhỏ trên bức tường để nhìn sang một ngôi nhà khác. Khung nhúng thường được dùng phổ biến để nhúng video từ YouTube, bản đồ vị trí từ Google Maps, hoặc tài liệu trình chiếu.'
        ],
        bulletPoints: [
          'src: Địa chỉ URL của trang web hoặc tài nguyên cần nhúng.',
          'width & height: Chiều rộng và chiều cao của khung nhúng (đơn vị pixel hoặc %).',
          'title: Mô tả nội dung khung nhúng (bắt buộc theo tiêu chuẩn trợ năng tiếp cận).',
          'allowfullscreen: Cho phép người xem bấm phóng to toàn màn hình (rất quan trọng với video).'
        ]
      },
      {
        id: 'luu-y-chan-nhung',
        title: '2. Lưu ý sống còn: Vì sao nhiều website chặn nhúng?',
        paragraphs: [
          'Nhiều học sinh khi mới học thường thử viết <iframe src="https://google.com"> hoặc nhúng Facebook, nhưng kết quả chỉ thấy một khung xám trắng báo lỗi "google.com từ chối kết nối".',
          'Lý do: Đây là tính năng BẢO MẬT của Internet. Để ngăn chặn hình thức tấn công lừa đảo (Clickjacking - kẻ xấu nhúng website ngân hàng vào rồi đặt nút bấm trong suốt lên trên để lừa lấy mật khẩu), các website lớn sẽ gửi kèm một tiêu đề bảo mật tên là X-Frame-Options hoặc Content-Security-Policy (CSP) cấm các trang khác nhúng họ vào iframe.'
        ],
        callout: {
          type: 'warning',
          title: 'Quy tắc nhúng YouTube',
          content: 'Không thể nhúng đường link xem thông thường (https://youtube.com/watch?v=...). Bạn phải dùng đường link nhúng chuẩn có dạng https://www.youtube.com/embed/MÃ_VIDEO do YouTube cung cấp trong mục "Chia sẻ -> Nhúng".'
        }
      },
      {
        id: 'thuoc-tinh-sandbox',
        title: '3. Thuộc tính an toàn sandbox',
        paragraphs: [
          'Thuộc tính sandbox giúp bảo vệ website của bạn khỏi mã độc chạy ngầm trong trang được nhúng. Khi khai báo sandbox, iframe sẽ bị vô hiệu hóa việc chạy mã JavaScript, gửi form hoặc mở cửa sổ mới trừ khi bạn cấp phép cụ thể (ví dụ: sandbox="allow-scripts").'
        ]
      }
    ],
    codeExamples: [
      {
        id: 'vd-nhung-iframe',
        title: 'Ví dụ: Nhúng khung tài liệu an toàn',
        description: 'Mô phỏng nhúng một trang tài liệu nội bộ và một bản đồ mô phỏng.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Ví dụ khung nhúng iframe</title>
</head>
<body>
  <h2>Khung nhúng bản tin trường học</h2>
  <p>Dưới đây là một iframe hiển thị trang con độc lập:</p>
  
  <iframe 
    srcdoc="<h3 style='color: #2563eb;'>Bản tin Đoàn trường</h3><p>Chào mừng ngày Nhà giáo Việt Nam 20-11!</p>"
    width="100%" 
    height="160" 
    title="Bản tin Đoàn trường"
    style="border: 2px dashed #3b82f6; border-radius: 8px; padding: 10px;">
  </iframe>

  <p><em>(Thuộc tính srcdoc dùng để nhúng trực tiếp mã HTML vào khung mà không phụ thuộc tệp bên ngoài).</em></p>
</body>
</html>`,
        explanation: 'Khung viền nét đứt màu xanh là một khung iframe độc lập hoàn toàn với trang web mẹ.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Cố gắng nhúng trang chủ Google Search hoặc Facebook vào iframe rồi tưởng mình viết sai mã.',
        cause: 'Các trang này bật cấu hình X-Frame-Options: SAMEORIGIN để chống đánh cắp thông tin.',
        solution: 'Chỉ nhúng những dịch vụ hỗ trợ đường dẫn embed công khai như YouTube Embed, Google Maps Embed hoặc các trang trong cùng hệ thống.'
      }
    ],
    keyTakeaways: [
      'Thẻ <iframe> dùng để nhúng trang web con, video hoặc bản đồ vào trang chính.',
      'Cần có thuộc tính title để tăng khả năng tiếp cận và hỗ trợ người đọc màn hình.',
      'Các website lớn chặn nhúng iframe để bảo vệ người dùng khỏi tấn công lừa đảo Clickjacking.'
    ]
  },
  {
    id: 'html-10',
    track: 'html',
    order: 10,
    title: 'Tạo đa phương tiện',
    slug: 'tao-da-phuong-tien',
    description: 'Chèn hình ảnh với img và thuộc tính bắt buộc alt; phát âm thanh với audio; phát video với video và các thuộc tính điều khiển controls.',
    estimatedMinutes: 25,
    objectives: [
      'Chèn hình ảnh đúng kỹ thuật với thẻ <img>, nắm rõ vai trò sống còn của thuộc tính alt.',
      'Nhúng và phát tập tin âm thanh với thẻ <audio> và điều khiển controls.',
      'Nhúng và phát video tự lưu trữ với thẻ <video>, poster và các thẻ con <source>.'
    ],
    sections: [
      {
        id: 'the-img-va-alt',
        title: '1. Chèn hình ảnh với thẻ <img>',
        paragraphs: [
          'Thẻ <img> là thẻ rỗng (không có thẻ đóng), dùng để nhúng hình ảnh vào trang web.',
          'Hai thuộc tính quan trọng nhất của thẻ <img> là:'
        ],
        bulletPoints: [
          'src (Source): Đường dẫn đến tệp hình ảnh (có thể là đường dẫn tương đối trong dự án hoặc link ảnh trên mạng).',
          'alt (Alternative Text): Văn bản thay thế mô tả nội dung bức ảnh.',
          'width & height: Thiết lập chiều rộng và chiều cao ảnh (khuyên dùng để trình duyệt giữ sẵn chỗ trước khi ảnh tải xong, chống giật khung hình Layout Shift).'
        ],
        callout: {
          type: 'note',
          title: 'Tại sao thuộc tính alt lại BẮT BUỘC?',
          content: '1. Khi đường link ảnh bị hỏng hoặc mạng yếu, nội dung alt sẽ hiển thị để người dùng vẫn biết bức ảnh chụp gì.\n2. Người khiếm thị dùng phần mềm đọc màn hình sẽ dựa vào alt để "nghe" bức ảnh.\n3. Công cụ tìm kiếm Google dùng alt để hiểu nội dung ảnh và hiển thị trên Google Hình ảnh.'
        }
      },
      {
        id: 'the-audio',
        title: '2. Chèn âm thanh với thẻ <audio>',
        paragraphs: [
          'HTML5 cung cấp thẻ <audio> chuẩn để phát nhạc hoặc bài giảng âm thanh mà không cần cài thêm plugin ngoài.',
          'Các thuộc tính chính: controls (hiển thị thanh điều khiển phát/dừng, âm lượng), autoplay (tự động phát - hầu hết trình duyệt chặn tính năng này nếu chưa có tương tác người dùng), loop (lặp lại vô tận).'
        ]
      },
      {
        id: 'the-video',
        title: '3. Chèn video với thẻ <video>',
        paragraphs: [
          'Thẻ <video> cho phép phát video trực tiếp. Bên trong thẻ <video>, ta thường dùng nhiều thẻ con <source> với các định dạng khác nhau (.mp4, .webm) để đảm bảo trình duyệt nào cũng xem được.',
          'Thuộc tính poster="anh-bia.jpg" dùng để hiển thị bức ảnh bìa trước khi người dùng bấm nút Play.'
        ]
      }
    ],
    codeExamples: [
      {
        id: 'vd-da-phuong-tien',
        title: 'Ví dụ chèn hình ảnh SVG và thẻ video điều khiển',
        description: 'Trình bày hình ảnh logo và khung phát đa phương tiện tự hoạt động.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Ví dụ đa phương tiện</title>
</head>
<body>
  <h2>1. Chèn hình ảnh minh họa (có thuộc tính alt)</h2>
  <!-- Sử dụng ảnh vector SVG nhúng trực tiếp an toàn, không sợ link ngoài bị chết -->
  <img 
    src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'><rect width='100' height='100' fill='%232563eb' rx='15'/><text x='50' y='60' font-size='35' text-anchor='middle' fill='white' font-family='sans-serif' font-weight='bold'>WEB</text></svg>" 
    alt="Logo minh họa câu lạc bộ Lập trình Web" 
    width="120" 
    height="120"
  >

  <h2>2. Phát âm thanh với thẻ audio</h2>
  <p>Bộ điều khiển âm thanh HTML5 tiêu chuẩn:</p>
  <audio controls>
    <!-- Trình duyệt sẽ phát nguồn hợp lệ nếu có tệp mp3 -->
    <source src="audio-sample.mp3" type="audio/mpeg">
    Trình duyệt của bạn không hỗ trợ thẻ audio.
  </audio>

  <h2>3. Phát video với thẻ video</h2>
  <video width="320" height="180" controls poster="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='180'><rect width='100%25' height='100%25' fill='%23334155'/><text x='50%25' y='50%25' fill='white' font-size='18' text-anchor='middle' dy='.3em'>Bấm để xem video</text></svg>">
    <source src="movie.mp4" type="video/mp4">
    Trình duyệt không hỗ trợ phát video.
  </video>
</body>
</html>`,
        explanation: 'Thẻ <img> có đủ alt, width, height. Thẻ audio và video có thuộc tính controls để người dùng chủ động bấm phát, tạm dừng hoặc kéo thanh thời gian.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Bỏ trống hoặc không viết thuộc tính alt cho thẻ <img>.',
        cause: 'Nghĩ rằng ảnh hiển thị được là đủ rồi.',
        solution: 'Luôn viết mô tả súc tích cho thuộc tính alt (ví dụ: alt="Học sinh lớp 12A1 trong giờ tin học").'
      },
      {
        mistake: 'Quên thuộc tính controls trên thẻ <audio> hoặc <video>.',
        cause: 'Nghĩ rằng trình duyệt sẽ tự động hiện nút bấm.',
        solution: 'Nếu không có controls, trình duyệt sẽ ẩn hoàn toàn thanh điều khiển và người dùng không thể bấm phát nhạc/video được.'
      }
    ],
    keyTakeaways: [
      'Thẻ <img> là thẻ rỗng, bắt buộc phải có thuộc tính src và alt.',
      'Thẻ <audio> và <video> cần thuộc tính controls để hiển thị nút bật/tắt âm thanh và thanh thời gian.',
      'Sử dụng nhiều thẻ con <source> bên trong <video> để tương thích nhiều trình duyệt.'
    ]
  },
  {
    id: 'html-11',
    track: 'html',
    order: 11,
    title: 'Tạo biểu mẫu',
    slug: 'tao-bieu-mau',
    description: 'Xây dựng biểu mẫu nhập liệu form với label, input (text, email, password, radio, checkbox), select, textarea, button và hiểu rõ giới hạn của front-end.',
    estimatedMinutes: 30,
    objectives: [
      'Hiểu cấu trúc thẻ <form> cùng hai thuộc tính cốt lõi action và method (GET / POST).',
      'Sử dụng đúng thẻ <label> gắn kết với <input> qua thuộc tính for và id.',
      'Làm chủ các kiểu nhập liệu phổ biến: text, password, email, number, radio, checkbox, select, textarea.',
      'Phân biệt rõ: HTML form chỉ thu thập dữ liệu; muốn lưu trữ hay xử lý bắt buộc phải có máy chủ backend.'
    ],
    sections: [
      {
        id: 'the-form-va-label',
        title: '1. Thẻ <form> và cặp đôi hoàn hảo <label> - <input>',
        paragraphs: [
          'Biểu mẫu (Form) là công cụ tương tác chủ chốt trên web, cho phép người dùng nhập thông tin (đăng ký tài khoản, gửi phản hồi, tìm kiếm, đặt mua hàng).',
          'Một biểu mẫu được gói bên trong cặp thẻ <form action="..." method="...">.'
        ],
        bulletPoints: [
          'action: Địa chỉ trang web hoặc dịch vụ máy chủ sẽ tiếp nhận dữ liệu khi người dùng gửi form.',
          'method: Phương thức gửi dữ liệu, thông dụng nhất là "GET" (dữ liệu hiện lên thanh địa chỉ, dùng cho tìm kiếm) hoặc "POST" (dữ liệu gửi ẩn trong gói tin, dùng cho mật khẩu, đăng nhập).',
          'Thẻ <label>: Nhãn mô tả ô nhập. Bắt buộc gắn kết thuộc tính for của <label> trùng khớp với id của <input>. Khi đó, người dùng chạm vào dòng chữ nhãn thì con trỏ sẽ tự động nhảy vào ô nhập.'
        ]
      },
      {
        id: 'cac-kieu-input',
        title: '2. Các loại phần tử nhập liệu thông dụng',
        paragraphs: [
          'Thẻ <input> có thể biến đổi thành hàng chục công cụ nhập liệu khác nhau chỉ nhờ thay đổi thuộc tính type:'
        ],
        table: {
          caption: 'Các kiểu type phổ biến của thẻ <input>',
          headers: ['type', 'Mục đích', 'Đặc điểm hiển thị'],
          rows: [
            ['text', 'Nhập chữ thông thường', 'Một dòng văn bản'],
            ['password', 'Nhập mật khẩu', 'Ký tự bị ẩn thành dấu chấm tròn ••••'],
            ['email', 'Nhập hòm thư điện tử', 'Trình duyệt tự kiểm tra ký tự @'],
            ['number', 'Nhập số (tuổi, điểm, số lượng)', 'Có mũi tên tăng giảm số'],
            ['radio', 'Chọn 1 trong nhiều phương án', 'Nút tròn (phải cùng thuộc tính name)'],
            ['checkbox', 'Chọn nhiều phương án cùng lúc', 'Ô vuông tích chọn'],
            ['date', 'Chọn ngày tháng năm', 'Hiện lịch chọn trực quan'],
            ['submit', 'Nút gửi biểu mẫu', 'Kích hoạt hành động gửi dữ liệu']
          ]
        },
        bulletPoints: [
          '<select> & <option>: Tạo danh sách lựa chọn thả xuống (Dropdown menu).',
          '<textarea>: Ô nhập văn bản nhiều dòng (dùng cho mục gửi lời nhắn, bình luận).',
          'Thuộc tính bổ trợ hữu ích: placeholder (dòng chữ gợi ý mờ), required (bắt buộc nhập không được để trống), value (giá trị mặc định).'
        ]
      },
      {
        id: 'gioi-han-frontend',
        title: '3. Giới hạn của HTML: Tại sao cần có Backend?',
        paragraphs: [
          'Rất nhiều bạn học sinh tự hỏi: "Sau khi tạo xong form đăng ký rất đẹp bằng HTML, dữ liệu học sinh gõ vào sẽ lưu ở đâu?".',
          'Câu trả lời thẳng thắn: HTML và front-end CHỈ có thể vẽ ra giao diện để thu thập dữ liệu đầu vào. Bản thân HTML KHÔNG THỂ tự lưu dữ liệu vào cơ sở dữ liệu (Database), không thể tự gửi email xác nhận và không thể tự mã hóa bảo mật mật khẩu.',
          'Để làm được việc lưu trữ và xử lý đó, ta bắt buộc phải có máy chủ Backend (được lập trình bằng các ngôn ngữ như Node.js, Python, PHP, Java, C#) cùng các hệ quản trị cơ sở dữ liệu như MySQL, PostgreSQL hoặc MongoDB.'
        ],
        callout: {
          type: 'info',
          title: 'Ghi nhớ nguyên lý hoạt động',
          content: 'HTML Form = Chiếc phiếu đăng ký bằng giấy. Người dùng điền thông tin vào phiếu, nhưng phiếu đó muốn được lưu vào sổ lưu trữ thì phải nộp về phòng văn thư (Máy chủ Backend).'
        }
      }
    ],
    codeExamples: [
      {
        id: 'vd-form-dang-ky',
        title: 'Ví dụ: Phiếu đăng ký câu lạc bộ tin học hoàn chỉnh',
        description: 'Biểu mẫu chứa đầy đủ các kiểu nhập liệu thực tế.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Đăng ký câu lạc bộ</title>
  <style>
    body { font-family: sans-serif; padding: 15px; }
    .form-group { margin-bottom: 12px; }
    label { display: block; font-weight: bold; margin-bottom: 4px; }
    input[type="text"], input[type="email"], select, textarea {
      width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box;
    }
    button { background: #2563eb; color: white; border: none; padding: 10px 16px; border-radius: 4px; cursor: pointer; }
    button:hover { background: #1d4ed8; }
  </style>
</head>
<body>
  <h2>PHIẾU ĐĂNG KÝ THAM GIA CLB WEB</h2>
  
  <form onsubmit="alert('Thu thập dữ liệu thành công! (Lưu ý: Cần có backend để lưu vào Database)'); return false;">
    <div class="form-group">
      <label for="hoten">Họ và tên học sinh:</label>
      <input type="text" id="hoten" name="hoten" placeholder="Nguyễn Văn A" required>
    </div>

    <div class="form-group">
      <label for="email">Địa chỉ Email:</label>
      <input type="email" id="email" name="email" placeholder="hocsinh@gmail.com" required>
    </div>

    <div class="form-group">
      <label>Khối lớp:</label>
      <label style="font-weight: normal;"><input type="radio" name="khoi" value="10" checked> Khối 10</label>
      <label style="font-weight: normal;"><input type="radio" name="khoi" value="11"> Khối 11</label>
      <label style="font-weight: normal;"><input type="radio" name="khoi" value="12"> Khối 12</label>
    </div>

    <div class="form-group">
      <label for="linhvuc">Lĩnh vực muốn học:</label>
      <select id="linhvuc" name="linhvuc">
        <option value="html-css">Thiết kế giao diện (HTML/CSS)</option>
        <option value="js">Lập trình tương tác (JavaScript)</option>
        <option value="all">Cả hai lĩnh vực</option>
      </select>
    </div>

    <div class="form-group">
      <label for="ghichu">Lời nhắn gửi đến CLB:</label>
      <textarea id="ghichu" name="ghichu" rows="3" placeholder="Em muốn tự tay làm web cá nhân..."></textarea>
    </div>

    <button type="submit">Gửi đơn đăng ký</button>
  </form>
</body>
</html>`,
        explanation: 'Thử nhập thông tin vào biểu mẫu rồi bấm nút "Gửi đơn đăng ký" để xem thông báo tương tác.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Các nút radio không cùng chung thuộc tính name.',
        cause: 'Đặt name="khoi10" và name="khoi11".',
        solution: 'Muốn người dùng chỉ được chọn 1 trong các nút radio, tất cả các nút radio đó phải có CÙNG thuộc tính name (ví dụ: name="khoi").'
      },
      {
        mistake: 'Tưởng rằng bấm nút submit là dữ liệu đã được lưu vào hệ thống máy chủ.',
        cause: 'Chưa phân biệt giữa Front-end và Back-end.',
        solution: 'Hiểu rõ form HTML chỉ gửi gói tin HTTP request. Muốn lưu dữ liệu vào cơ sở dữ liệu thì phải có mã lệnh xử lý ở phía Backend.'
      }
    ],
    keyTakeaways: [
      'Gắn kết <label for="id_input"> với <input id="id_input"> để tăng trải nghiệm người dùng.',
      'Các nút radio cùng nhóm bắt buộc phải có cùng thuộc tính name để chỉ chọn được 1 mục.',
      'Form HTML chỉ đóng vai trò thu thập thông tin người dùng ở phía client, muốn lưu trữ dữ liệu cần kết hợp máy chủ backend.'
    ]
  }
];
