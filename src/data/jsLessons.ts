import { Lesson } from '../types/lesson';

export const jsLessons: Lesson[] = [
  {
    id: 'js-1',
    track: 'js',
    order: 1,
    title: 'Khái quát về JavaScript',
    slug: 'khai-quat-ve-javascript',
    description: 'Khám phá ngôn ngữ lập trình của thế giới web, môi trường chạy trực tiếp trên trình duyệt (Client-side) và thử nghiệm câu lệnh đầu tiên với Console.',
    estimatedMinutes: 15,
    objectives: [
      'Hiểu rõ JavaScript là ngôn ngữ lập trình giúp trang web có khả năng tương tác và hành vi sống động.',
      'Nắm được nguyên lý chạy trực tiếp phía máy khách (Client-side) trên trình duyệt mà không cần cài đặt phần mềm biên dịch.',
      'Sử dụng tab Console trong Developer Tools (F12) để chạy thử các câu lệnh JavaScript đầu tiên.'
    ],
    sections: [
      {
        id: 'js-la-gi',
        title: '1. JavaScript là gì?',
        paragraphs: [
          'Nếu HTML là bộ khung xương và CSS là quần áo diện mạo, thì JavaScript (viết tắt là JS) chính là bộ não và hệ thần kinh của trang web.',
          'JavaScript là ngôn ngữ lập trình thực sự (Programming Language), có khả năng tính toán, xử lý dữ liệu, ghi nhớ biến số và phản hồi lại từng hành động bấm chuột, gõ phím của người dùng trong thời gian thực.'
        ]
      },
      {
        id: 'js-lam-duoc-gi',
        title: '2. JavaScript cơ bản có thể làm được những gì?',
        paragraphs: [
          'Hầu như mọi tính năng chuyển động và tương tác bạn nhìn thấy trên mạng hàng ngày đều có sự góp mặt của JavaScript:'
        ],
        bulletPoints: [
          'Đổi màu nền trang web (ví dụ: nút bấm chuyển đổi giữa giao diện Sáng và Tối).',
          'Hiện bảng thông báo, đóng/mở thanh menu điều hướng khi chạm vào biểu tượng 3 dấu gạch.',
          'Kiểm tra xem người dùng đã nhập đúng số điện thoại hay để trống mật khẩu chưa trước khi gửi biểu mẫu.',
          'Tính toán số liệu tức thì (ví dụ: máy tính tổng tiền đơn hàng, bảng tính điểm trung bình).'
        ]
      },
      {
        id: 'chay-tren-trinh-duyet',
        title: '3. Môi trường chạy phía Client và tab Console',
        paragraphs: [
          'Điểm tuyệt vời của JavaScript là bạn không cần phải cài đặt trình biên dịch phức tạp như C++ hay Java. Mọi trình duyệt web (Chrome, Edge, Safari, Firefox) đều tích hợp sẵn một bộ máy thực thi JavaScript cực mạnh.',
          'Bạn chỉ cần nhấn F12, chuyển sang tab Console và gõ lệnh: console.log("Xin chào các bạn!"); rồi nhấn Enter là kết quả sẽ xuất hiện ngay lập tức.'
        ],
        callout: {
          type: 'info',
          title: 'Khác biệt giữa Java và JavaScript',
          content: 'Nhiều người lầm tưởng Java và JavaScript là một. Thực chất đây là 2 ngôn ngữ hoàn toàn khác nhau về cả cú pháp lẫn mục đích sử dụng. Câu nói đùa nổi tiếng trong giới lập trình: "Java với JavaScript giống như Con Bò (Car) với Bò Cạp (Carpet vậy)!"'
        }
      }
    ],
    codeExamples: [
      {
        id: 'vd-js-dau-tien',
        title: 'Ví dụ: Tương tác đổi màu chữ với JavaScript',
        description: 'Bấm nút để kích hoạt mã JavaScript thay đổi thuộc tính style của đoạn văn.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Ví dụ JavaScript đầu tiên</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2 id="tieu-de">Dòng chữ này sắp đổi màu!</h2>
  <p>Nhấp vào nút bên dưới để ra lệnh cho JavaScript hành động:</p>

  <button onclick="document.getElementById('tieu-de').style.color = '#dc2626'; document.getElementById('tieu-de').textContent = 'Đã đổi thành màu đỏ rực rỡ!';">
    Bấm vào đây để đổi màu
  </button>
</body>
</html>`,
        explanation: 'Khi bấm nút, sự kiện onclick kích hoạt câu lệnh JavaScript tìm đến phần tử có id="tieu-de" và đổi thuộc tính màu chữ sang đỏ.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Tưởng rằng phải cài thêm phần mềm mới chạy được JavaScript.',
        cause: 'Nghĩ giống như môn Pascal hay Python cần cài môi trường.',
        solution: 'Chỉ cần một trình duyệt web như Google Chrome có sẵn trên máy là đủ.'
      }
    ],
    keyTakeaways: [
      'JavaScript là ngôn ngữ lập trình tạo nên sự sống động và tương tác thông minh cho web.',
      'JavaScript chạy trực tiếp trên trình duyệt của người dùng (Client-side).',
      'Tab Console (F12) là nơi xem kết quả và kiểm tra các lỗi JavaScript.'
    ]
  },
  {
    id: 'js-2',
    track: 'js',
    order: 2,
    title: 'Cách nhúng và tổ chức mã JavaScript',
    slug: 'cach-nhung-va-to-chuc-ma-javascript',
    description: 'Tìm hiểu 3 cách đặt mã JavaScript: Inline, Internal trong thẻ script và External file .js. Hiểu lý do nên đặt script ở cuối body hoặc dùng defer.',
    estimatedMinutes: 20,
    objectives: [
      'Nắm vững 3 cách đưa mã JavaScript vào tài liệu: Inline, Internal (<script>) và External (.js).',
      'Hiểu rõ vị trí đặt thẻ <script> ở cuối thẻ <body> để tránh lỗi không tìm thấy phần tử HTML.',
      'Hiểu tác dụng của thuộc tính defer khi chèn script ở phần <head>.'
    ],
    sections: [
      {
        id: 'ba-cach-nhung-js',
        title: '1. Ba cách chèn JavaScript vào HTML',
        paragraphs: [
          'Tương tự như CSS, JavaScript có 3 cách tổ chức mã nguồn:'
        ],
        bulletPoints: [
          '1. Inline JavaScript: Viết trực tiếp câu lệnh vào thuộc tính sự kiện của thẻ HTML (ví dụ: onclick="alert(\'Xin chào\')"). Cách này chỉ dùng cho ví dụ cực ngắn vì khó bảo trì.',
          '2. Internal JavaScript: Viết các câu lệnh JS bên trong cặp thẻ <script> ... </script> trong file HTML.',
          '3. External JavaScript: Tách mã JS sang file riêng có đuôi .js (ví dụ: main.js), rồi nhúng vào HTML bằng cú pháp: <script src="main.js"></script>. Đây là phương pháp tối ưu và chuyên nghiệp nhất.'
        ]
      },
      {
        id: 'vi-tri-dat-the-script',
        title: '2. Tại sao nên đặt thẻ <script> ở cuối thẻ <body>?',
        paragraphs: [
          'Trình duyệt đọc file HTML tuần tự từ trên xuống dưới. Nếu bạn đặt thẻ <script> ở phần <head> và cố tìm một thẻ HTML có id="nut-bam" ở dưới thân trang, JavaScript sẽ báo lỗi "null" ngay lập tức vì lúc đó trình duyệt chưa kịp đọc đến phần tử HTML đó!',
          'Vì vậy, có 2 giải pháp chuẩn mực:'
        ],
        bulletPoints: [
          'Giải pháp 1: Đặt thẻ <script src="app.js"></script> ở đáy cùng của thẻ <body> (ngay phía trên thẻ đóng </body>).',
          'Giải pháp 2: Đặt ở phần <head> nhưng thêm thuộc tính defer: <script src="app.js" defer></script>. Thuộc tính defer yêu cầu trình duyệt tải script ngầm nhưng chỉ thực thi sau khi toàn bộ cây HTML đã được dựng xong.'
        ],
        callout: {
          type: 'warning',
          title: 'Lỗi vỡ lòng của học sinh',
          content: 'Rất nhiều học sinh đặt script ở <head> rồi thắc mắc tại sao document.getElementById() không hoạt động. Hãy luôn nhớ đặt script ở cuối body hoặc dùng defer!'
        }
      }
    ],
    codeExamples: [
      {
        id: 'vd-nhung-script-chuan',
        title: 'Ví dụ: Đặt mã JavaScript chuẩn ở cuối thẻ body',
        description: 'Tách biệt cấu trúc HTML ở trên và khối mã xử lý kịch bản ở dưới.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Ví dụ nhúng JavaScript</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h1>Học cách tổ chức mã JavaScript</h1>
  <p id="loi-chuc">Nội dung ban đầu...</p>
  
  <button id="nut-chuc">Nhận lời chúc</button>

  <!-- Đặt thẻ script ở cuối body để đảm bảo các thẻ HTML phía trên đã được tạo xong -->
  <script>
    const nut = document.getElementById('nut-chuc');
    const doanVan = document.getElementById('loi-chuc');

    nut.addEventListener('click', function() {
      doanVan.textContent = 'Chúc bạn một ngày học lập trình thật nhiều niềm vui và sáng tạo!';
      doanVan.style.color = '#16a34a';
      doanVan.style.fontWeight = 'bold';
    });
  </script>
</body>
</html>`,
        explanation: 'Thử nhấn nút "Nhận lời chúc" để xem đoạn văn được cập nhật chữ và đổi màu xanh lá thành công.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Đặt script ở đầu thẻ <head> không có defer khiến lệnh JS không tìm thấy thẻ HTML.',
        cause: 'Mã JS chạy trước khi các thẻ HTML được trình duyệt render.',
        solution: 'Di chuyển thẻ <script> xuống cuối thẻ <body> hoặc thêm từ khóa defer.'
      }
    ],
    keyTakeaways: [
      'Nên tách mã JavaScript ra file riêng có đuôi .js để mã nguồn gọn gàng và dễ tái sử dụng.',
      'Luôn đặt thẻ <script> ở đáy thẻ <body> hoặc dùng thuộc tính defer trong thẻ <head>.',
      'Hạn chế tối đa việc viết inline onclick trực tiếp trên thẻ HTML.'
    ]
  },
  {
    id: 'js-3',
    track: 'js',
    order: 3,
    title: 'Biến, hằng và kiểu dữ liệu',
    slug: 'bien-hang-va-kieu-du-lieu',
    description: 'Học cách khai báo biến với let, hằng số với const, tìm hiểu 5 kiểu dữ liệu nguyên thủy thông dụng và kỹ thuật chuyển đổi kiểu an toàn.',
    estimatedMinutes: 25,
    objectives: [
      'Phân biệt rõ ràng khi nào sử dụng let (biến có thể thay đổi) và const (hằng số cố định).',
      'Hiểu lý do không còn sử dụng từ khóa cũ var trong JavaScript hiện đại.',
      'Làm chủ 5 kiểu dữ liệu nguyên thủy cơ bản: String, Number, Boolean, Null, Undefined.',
      'Biết cách dùng toán tử typeof và chuyển đổi chuỗi sang số bằng hàm Number().'
    ],
    sections: [
      {
        id: 'let-va-const',
        title: '1. Khai báo biến với let và hằng số với const',
        paragraphs: [
          'Biến (Variable) giống như những chiếc hộp có dán nhãn tên, dùng để lưu trữ dữ liệu trong bộ nhớ máy tính để sử dụng lại nhiều lần:',
          'Tại sao không dùng var? Từ khóa var ra đời từ năm 1995 có phạm vi hoạt động lỏng lẻo dễ gây ra lỗi rò rỉ biến (hoisting). Tiêu chuẩn JS hiện đại (ES6+) quy định chỉ sử dụng let và const.'
        ],
        bulletPoints: [
          'let: Dùng cho các giá trị CÓ THỂ THAY ĐỔI trong quá trình chạy (ví dụ: điểm số tăng dần, số lượng hàng trong giỏ, biến đếm vòng lặp).',
          'const: Dùng cho các HẰNG SỐ KHÔNG THAY ĐỔI sau khi đã gán giá trị lần đầu (ví dụ: số Pi = 3.14, tên trường học, một phần tử DOM cố định).',
          'Quy tắc vàng: Luôn ưu tiên dùng const trước; chỉ khi nào chắc chắn giá trị đó cần thay đổi thì mới đổi sang dùng let.'
        ]
      },
      {
        id: 'cac-kieu-du-lieu',
        title: '2. Các kiểu dữ liệu cơ bản trong JavaScript',
        paragraphs: [
          'JavaScript có các kiểu dữ liệu nguyên thủy thường gặp nhất:'
        ],
        table: {
          caption: 'Bảng các kiểu dữ liệu cơ bản trong JavaScript',
          headers: ['Kiểu dữ liệu', 'Ý nghĩa', 'Ví dụ minh họa'],
          rows: [
            ['String', 'Chuỗi ký tự văn bản, đặt trong dấu ngoặc kép hoặc đơn', '"Nguyễn Văn A", \'Hà Nội\''],
            ['Number', 'Số nguyên hoặc số thực (không phân biệt int hay float)', '10, 3.14, -50'],
            ['Boolean', 'Giá trị logic chỉ gồm đúng hoặc sai', 'true hoặc false'],
            ['Undefined', 'Biến đã khai báo nhưng chưa được gán giá trị', 'let diem; (giá trị là undefined)'],
            ['Null', 'Giá trị rỗng có chủ đích (người lập trình cố ý để trống)', 'let nguoiDung = null;']
          ]
        }
      },
      {
        id: 'chuyen-doi-kieu',
        title: '3. Kiểm tra kiểu và chuyển đổi kiểu dữ liệu',
        paragraphs: [
          'Bạn dùng toán tử typeof để kiểm tra kiểu dữ liệu của một biến: typeof "Xin chào" trả về "string".',
          'Chuyển đổi kiểu: Khi đọc dữ liệu từ ô nhập HTML input.value, kết quả luôn luôn là dạng chuỗi (String). Nếu muốn cộng trừ toán học, bắt buộc bạn phải ép sang kiểu số bằng Number(input.value) hoặc parseInt().'
        ],
        callout: {
          type: 'tip',
          title: 'Cạm bẫy nối chuỗi',
          content: 'Nếu bạn có chuỗi "10" và cộng với "20", kết quả sẽ là "1020" (ghép chữ) chứ không phải 30! Bạn phải viết Number("10") + Number("20") để được kết quả là 30.'
        }
      }
    ],
    codeExamples: [
      {
        id: 'vd-bien-kieu-du-lieu',
        title: 'Ví dụ: Khai báo thông tin học sinh và ép kiểu số',
        description: 'Chạy thử câu lệnh khai báo biến và xem kết quả tính toán.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Ví dụ Biến và Kiểu dữ liệu</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Thông tin hồ sơ học sinh</h2>
  <div id="ket-qua" style="background: #f1f5f9; padding: 15px; border-radius: 8px;"></div>

  <script>
    // Khai báo hằng số và biến
    const tenTruong = "THPT Lê Thị Hồng Gấm";
    let hoTen = "Trần Minh Quân";
    let tuoi = 17;
    let laDoanVien = true;

    // Tính toán ép kiểu
    let diemToanStr = "8.5";
    let diemVanStr = "7.5";
    let tongDiem = Number(diemToanStr) + Number(diemVanStr);

    // Hiển thị ra màn hình
    const hopKetQua = document.getElementById('ket-qua');
    hopKetQua.innerHTML = \`
      <p><strong>Trường:</strong> \${tenTruong}</p>
      <p><strong>Học sinh:</strong> \${hoTen} (\${tuoi} tuổi)</p>
      <p><strong>Đoàn viên:</strong> \${laDoanVien ? "Đã vào Đoàn" : "Chưa"}</p>
      <p><strong>Tổng điểm (Toán + Văn):</strong> \${tongDiem} điểm</p>
    \`;
  </script>
</body>
</html>`,
        explanation: 'Nhìn vào mã nguồn: Ta dùng Number(diemToanStr) để chuyển từ chuỗi "8.5" sang số 8.5 thực thụ, nhờ đó phép tính cộng ra kết quả chính xác là 16.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Cố tình gán lại giá trị mới cho một biến khai báo bằng const.',
        cause: 'Viết const pi = 3.14; sau đó lại viết pi = 3.14159;.',
        solution: 'Trình duyệt sẽ ném lỗi "TypeError: Assignment to constant variable". Hãy đổi sang dùng let nếu giá trị đó cần thay đổi.'
      },
      {
        mistake: 'Cộng hai số lấy từ ô input mà quên dùng Number() làm chuỗi bị ghép lại (ví dụ "5" + "5" = "55").',
        cause: 'Thuộc tính input.value luôn luôn trả về kiểu String.',
        solution: 'Luôn bọc hàm Number() xung quanh giá trị ô nhập: Number(input.value).'
      }
    ],
    keyTakeaways: [
      'Ưu tiên dùng const cho giá trị cố định, dùng let cho biến có thay đổi; không dùng var.',
      'Các kiểu dữ liệu chính: String, Number, Boolean, Null, Undefined.',
      'Dữ liệu lấy từ người dùng qua ô input luôn là kiểu String, phải dùng Number() trước khi tính toán số học.'
    ]
  },
  {
    id: 'js-4',
    track: 'js',
    order: 4,
    title: 'Toán tử và biểu thức',
    slug: 'toan-tu-va-bieu-thuc',
    description: 'Thực hành các toán tử số học (+, -, *, /, %), toán tử so sánh (ưu tiên tuyệt đối === thay vì ==) và toán tử logic (&&, ||, !).',
    estimatedMinutes: 20,
    objectives: [
      'Sử dụng thành thạo các toán tử số học: cộng, trừ, nhân, chia và chia lấy phần dư (%).',
      'Hiểu sự khác biệt sống còn giữa so sánh tuyệt đối (===) và so sánh lỏng (==).',
      'Kết hợp các điều kiện logic bằng toán tử VÀ (&&), HOẶC (||) và PHỦ ĐỊNH (!).'
    ],
    sections: [
      {
        id: 'toan-tu-so-hoc',
        title: '1. Toán tử số học',
        paragraphs: [
          'JavaScript cung cấp các phép toán quen thuộc trong toán học THPT:',
          '+ : Phép cộng (hoặc ghép chuỗi).',
          '- : Phép trừ.',
          '* : Phép nhân.',
          '/ : Phép chia.',
          '% : Phép chia lấy phần dư (Modulus). Ví dụ: 10 % 3 = 1 (vì 10 chia 3 được 3 dư 1). Rất tiện để kiểm tra số chẵn/lẻ (n % 2 === 0 là số chẵn).'
        ]
      },
      {
        id: 'so-sanh-bang',
        title: '2. Cực kỳ quan trọng: Tại sao luôn ưu tiên === thay vì ==?',
        paragraphs: [
          'Trong JavaScript có hai loại toán tử so sánh bằng:',
          '1. So sánh lỏng (==): Chỉ so sánh giá trị sau khi tự động chuyển đổi kiểu ngầm (Type Coercion). Điều này dẫn đến những điều vô lý: 5 == "5" là true; 0 == false là true.',
          '2. So sánh nghiêm ngặt (===): So sánh CẢ GIÁ TRỊ LẪN KIỂU DỮ LIỆU. Chỉ trả về true khi cả hai hoàn toàn cùng kiểu và cùng giá trị: 5 === "5" là false (vì một bên là Number, một bên là String).'
        ],
        callout: {
          type: 'warning',
          title: 'Quy chuẩn vàng trong lập trình JS',
          content: 'Luôn luôn sử dụng === (so sánh bằng nghiêm ngặt) và !== (so sánh khác nghiêm ngặt). Tuyệt đối tránh dùng == và != để không gặp những lỗi ngầm khó hiểu.'
        }
      },
      {
        id: 'toan-tu-logic',
        title: '3. Toán tử logic: &&, || và !',
        paragraphs: [
          'Dùng để kết hợp nhiều biểu thức điều kiện:',
          '&& (AND - VÀ): Trả về true khi TẤT CẢ các điều kiện đều đúng (ví dụ: diemToan >= 8 && diemVan >= 8).',
          '|| (OR - HOẶC): Trả về true khi CHỈ CẦN ÍT NHẤT 1 điều kiện đúng.',
          '! (NOT - PHỦ ĐỊNH): Đảo ngược giá trị logic: !true thành false, !false thành true.'
        ]
      }
    ],
    codeExamples: [
      {
        id: 'vd-toan-tu',
        title: 'Ví dụ: Ứng dụng tính tổng hai số và kiểm tra chẵn lẻ',
        description: 'Nhập hai số để thực hiện phép cộng và kiểm tra chia hết.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Ví dụ Toán tử</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h3>Chương trình tính toán đơn giản</h3>
  <input type="number" id="soA" placeholder="Nhập số A" value="15" style="padding: 6px; width: 100px;">
  <span>+</span>
  <input type="number" id="soB" placeholder="Nhập số B" value="7" style="padding: 6px; width: 100px;">
  <button id="btn-tinh" style="padding: 6px 12px; margin-left: 8px;">Tính kết quả</button>

  <div id="ket-qua-toan" style="margin-top: 15px; font-weight: bold; color: #1e40af;"></div>

  <script>
    document.getElementById('btn-tinh').addEventListener('click', function() {
      const a = Number(document.getElementById('soA').value);
      const b = Number(document.getElementById('soB').value);
      const tong = a + b;
      const laSoChan = (tong % 2 === 0);

      document.getElementById('ket-qua-toan').innerHTML = 
        'Tổng hai số: ' + tong + '<br>' +
        'Đây là ' + (laSoChan ? 'SỐ CHẴN' : 'SỐ LẺ') + ' (vì ' + tong + ' % 2 = ' + (tong % 2) + ')';
    });
  </script>
</body>
</html>`,
        explanation: 'Nhấn nút "Tính kết quả" để xem phép cộng hai số và kiểm tra xem tổng đó là số chẵn hay số lẻ nhờ toán tử %.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Dùng nhầm 1 dấu bằng (=) trong mệnh đề so sánh if (a = 5).',
        cause: 'Dấu 1 bằng (=) là phép GÁN giá trị, không phải phép SO SÁNH.',
        solution: 'Luôn dùng 3 dấu bằng (===) khi so sánh bằng.'
      }
    ],
    keyTakeaways: [
      'Toán tử % rất tiện lợi để chia lấy dư và nhận biết số chẵn hay lẻ.',
      'Luôn ưu tiên dùng === và !== thay cho == và !=.',
      'Sử dụng && (VÀ), || (HOẶC) để ghép nối các điều kiện logic phức tạp.'
    ]
  },
  {
    id: 'js-5',
    track: 'js',
    order: 5,
    title: 'Câu lệnh điều kiện',
    slug: 'cau-lenh-dieu-kien',
    description: 'Điều khiển luồng chương trình với if, if...else, phân nhánh đa điều kiện if...else if, câu lệnh switch...case và toán tử ba ngôi ngắn gọn.',
    estimatedMinutes: 25,
    objectives: [
      'Nắm chắc cú pháp rẽ nhánh với if, if...else và if...else if...else.',
      'Sử dụng câu lệnh switch...case khi so sánh một biến với nhiều giá trị rời rạc.',
      'Ứng dụng toán tử ba ngôi (Ternary Operator) để viết câu lệnh điều kiện gọn gàng trên 1 dòng.'
    ],
    sections: [
      {
        id: 'cau-truc-if-else',
        title: '1. Cấu trúc rẽ nhánh if...else',
        paragraphs: [
          'Chương trình máy tính thông minh vì nó có khả năng đưa ra quyết định khác nhau tùy theo từng điều kiện cụ thể:',
          'Cú pháp mẫu:',
          'if (dieu_kien) { // Làm gì khi đúng } else { // Làm gì khi sai }'
        ],
        bulletPoints: [
          'if đơn: Chỉ thực hiện khối lệnh nếu điều kiện thỏa mãn true.',
          'if ... else: Thực hiện khối 1 nếu đúng, ngược lại thực hiện khối 2.',
          'if ... else if ... else: Kiểm tra nhiều nấc điều kiện nối tiếp nhau từ trên xuống dưới (ví dụ xếp loại học lực: Xuất sắc -> Giỏi -> Khá -> Trung bình).'
        ]
      },
      {
        id: 'cau-lenh-switch-case',
        title: '2. Câu lệnh switch...case',
        paragraphs: [
          'Khi bạn cần so sánh MỘT biến số duy nhất với rất nhiều giá trị cố định cụ thể (ví dụ: thứ trong tuần từ Thứ 2 đến Chủ nhật, hoặc các tháng trong năm), dùng switch...case sẽ rõ ràng hơn chuỗi if...else dài dằng dặc.',
          'Lưu ý từ khóa break;: Phải có break; ở cuối mỗi case để chương trình dừng lại và không bị chạy tràn sang case tiếp theo.'
        ]
      },
      {
        id: 'toan-tu-ba-ngoi',
        title: '3. Toán tử ba ngôi (Ternary Operator)',
        paragraphs: [
          'Khi bạn chỉ muốn gán một giá trị đơn giản dựa trên một điều kiện, toán tử ba ngôi là giải pháp nhanh gọn nhất:',
          'Cú pháp: dieu_kien ? gia_tri_khi_dung : gia_tri_khi_sai;',
          'Ví dụ: const trangThai = (diem >= 5) ? "Đạt" : "Thi lại";'
        ]
      }
    ],
    codeExamples: [
      {
        id: 'vd-dieu-kien',
        title: 'Ví dụ: Ứng dụng xếp loại học lực học sinh THPT',
        description: 'Nhập điểm trung bình để hệ thống tự động phân loại kết quả học tập.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Ví dụ Câu lệnh điều kiện</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h3>Tra cứu xếp loại học tập</h3>
  <label for="dtb">Nhập điểm trung bình (0 - 10):</label>
  <input type="number" id="dtb" step="0.1" min="0" max="10" value="8.2" style="padding: 6px; width: 120px;">
  <button id="btn-xep-loai" style="padding: 6px 12px;">Xếp loại</button>

  <div id="hop-thong-bao" style="margin-top: 15px; padding: 12px; border-radius: 6px;"></div>

  <script>
    document.getElementById('btn-xep-loai').addEventListener('click', function() {
      const diem = Number(document.getElementById('dtb').value);
      const hop = document.getElementById('hop-thong-bao');
      let danhGia = "";
      let mauNen = "";
      let mauChu = "";

      if (diem < 0 || diem > 10 || isNaN(diem)) {
        danhGia = "Điểm số không hợp lệ! Vui lòng nhập từ 0 đến 10.";
        mauNen = "#fee2e2"; mauChu = "#dc2626";
      } else if (diem >= 9.0) {
        danhGia = "Xuất sắc! Thành tích học tập vượt trội.";
        mauNen = "#dcfce7"; mauChu = "#15803d";
      } else if (diem >= 8.0) {
        danhGia = "Giỏi! Bạn đã có một học kỳ rất chăm chỉ.";
        mauNen = "#e0f2fe"; mauChu = "#0369a1";
      } else if (diem >= 6.5) {
        danhGia = "Khá! Cần cố gắng thêm ở một số môn.";
        mauNen = "#fef9c3"; mauChu = "#a16207";
      } else {
        danhGia = "Cần nỗ lực ôn tập nhiều hơn để nâng cao kết quả.";
        mauNen = "#ffedd5"; mauChu = "#c2410c";
      }

      hop.textContent = danhGia;
      hop.style.backgroundColor = mauNen;
      hop.style.color = mauChu;
      hop.style.fontWeight = "bold";
    });
  </script>
</body>
</html>`,
        explanation: 'Nhập thử các mức điểm khác nhau (ví dụ: 9.5, 7.8, 5.0) rồi bấm nút "Xếp loại" để quan sát các nhánh if...else rẽ màu sắc khác nhau.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Quên từ khóa break; trong câu lệnh switch...case.',
        cause: 'Khiến chương trình chạy lọt (Fall-through) sang thực hiện luôn cả các case phía dưới.',
        solution: 'Luôn kết thúc mỗi case bằng lệnh break;.'
      }
    ],
    keyTakeaways: [
      'Cấu trúc if...else if...else kiểm tra điều kiện từ trên xuống dưới theo thứ tự.',
      'switch...case phù hợp khi so sánh một biến với các giá trị cố định rời rạc.',
      'Toán tử ba ngôi ? : giúp viết câu điều kiện ngắn gọn, sạch đẹp.'
    ]
  },
  {
    id: 'js-6',
    track: 'js',
    order: 6,
    title: 'Vòng lặp',
    slug: 'vong-lap',
    description: 'Tự động hóa tác vụ lặp đi lặp lại với vòng lặp for, while, do...while; làm chủ break, continue và cách phòng tránh lỗi vòng lặp vô tận (Infinite loop).',
    estimatedMinutes: 20,
    objectives: [
      'Hiểu rõ mục đích của vòng lặp là giúp lặp lại khối lệnh tự động mà không cần viết lặp code.',
      'Sử dụng thành thạo vòng lặp for (khi biết trước số lần lặp) và while (khi phụ thuộc điều kiện dừng).',
      'Phân biệt break (dừng vòng lặp ngay) và continue (bỏ qua lượt này sang lượt tiếp theo).',
      'Biết cách phòng ngừa lỗi vòng lặp vô tận làm treo đơ trình duyệt web.'
    ],
    sections: [
      {
        id: 'vong-lap-for',
        title: '1. Vòng lặp for: Khi biết trước số lần lặp',
        paragraphs: [
          'Cú pháp kinh điển của vòng lặp for:',
          'for (khoi_tao; dieu_kien_lap; buoc_nhay) { // Khối mã thực thi }',
          'Ví dụ: for (let i = 1; i <= 5; i++) sẽ lặp chính xác 5 lần với biến i nhận lần lượt các giá trị 1, 2, 3, 4, 5.'
        ]
      },
      {
        id: 'vong-lap-while',
        title: '2. Vòng lặp while và do...while',
        paragraphs: [
          'while (dieu_kien): Lặp khi điều kiện còn đúng. Phù hợp khi bạn chưa biết trước chính xác phải lặp bao nhiêu lần (ví dụ: lặp cho đến khi người dùng nhập đúng mật khẩu).',
          'do ... while: Giống while nhưng ĐẢM BẢO chạy ít nhất 1 lần đầu tiên trước khi kiểm tra điều kiện.'
        ]
      },
      {
        id: 'break-continue-canh-bao',
        title: '3. Điều khiển vòng lặp và hiểm họa Vòng lặp vô tận',
        paragraphs: [
          'break: Lập tức thoát khỏi vòng lặp ngay lập tức.',
          'continue: Bỏ qua các dòng còn lại của vòng lặp hiện tại để chuyển ngay sang vòng lặp kế tiếp.',
          'Hiểm họa vòng lặp vô tận (Infinite Loop): Nếu điều kiện lặp luôn luôn đúng (hoặc quên tăng biến đếm i++), vòng lặp sẽ chạy hàng tỷ lần khiến tab trình duyệt bị đơ cứng và người dùng phải tắt trình duyệt bằng Task Manager.'
        ],
        callout: {
          type: 'warning',
          title: 'Cẩn thận với biến đếm',
          content: 'Trong vòng lặp while, hãy luôn kiểm tra xem biến điều kiện có được thay đổi (như tăng giảm giá trị) ở bên trong thân vòng lặp hay không trước khi bấm chạy.'
        }
      }
    ],
    codeExamples: [
      {
        id: 'vd-vong-lap-for',
        title: 'Ví dụ: Tự động in bảng cửu chương bằng vòng lặp for',
        description: 'Chỉ với 5 dòng code, vòng lặp for sẽ tự động sinh ra toàn bộ bảng cửu chương.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Ví dụ Vòng lặp for</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h3>Bảng cửu chương nhân 7</h3>
  <button id="btn-in-bang" style="padding: 6px 12px; margin-bottom: 10px;">In bảng nhân 7</button>
  <ul id="danh-sach-phep-tinh" style="line-height: 1.8; color: #1e3a8a;"></ul>

  <script>
    document.getElementById('btn-in-bang').addEventListener('click', function() {
      const danhSach = document.getElementById('danh-sach-phep-tinh');
      danhSach.innerHTML = ""; // Xóa nội dung cũ

      for (let i = 1; i <= 10; i++) {
        const phepTinh = '7 x ' + i + ' = ' + (7 * i);
        const li = document.createElement('li');
        li.textContent = phepTinh;
        danhSach.appendChild(li);
      }
    });
  </script>
</body>
</html>`,
        explanation: 'Nhấn nút "In bảng nhân 7" để xem vòng lặp for tự động tính toán từ 1 đến 10 và vẽ thành các thẻ <li> trên trang.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Quên cập nhật bước nhảy (ví dụ quên viết i++) trong vòng lặp while.',
        cause: 'Khiến điều kiện mãi mãi đúng và gây treo trình duyệt.',
        solution: 'Luôn đảm bảo biến đếm được tăng hoặc giảm tiến về điều kiện dừng.'
      }
    ],
    keyTakeaways: [
      'Vòng lặp giúp máy tính thực hiện các tác vụ lặp lại hàng nghìn lần trong nháy mắt.',
      'Dùng for khi biết trước số lượt lặp; dùng while khi lặp dựa trên điều kiện.',
      'Sử dụng break để ngắt vòng lặp khẩn cấp và continue để bỏ qua lượt hiện tại.'
    ]
  },
  {
    id: 'js-7',
    track: 'js',
    order: 7,
    title: 'Hàm',
    slug: 'ham',
    description: 'Đóng gói mã lệnh có thể tái sử dụng với hàm (Function), tham số đầu vào (Parameters), giá trị trả về (return) và phân biệt phạm vi biến cục bộ / toàn cục.',
    estimatedMinutes: 25,
    objectives: [
      'Hiểu khái niệm hàm là một khối mã thực hiện một nhiệm vụ chuyên biệt có thể gọi lại nhiều lần.',
      'Viết hàm có tham số (Parameters) và truyền đối số (Arguments) khi gọi hàm.',
      'Sử dụng từ khóa return để trả về kết quả tính toán.',
      'Phân biệt phạm vi biến cục bộ (Local Scope) bên trong hàm và phạm vi toàn cục (Global Scope).'
    ],
    sections: [
      {
        id: 'khai-niem-ham',
        title: '1. Hàm (Function) là gì?',
        paragraphs: [
          'Trong lập trình, nguyên tắc quan trọng hàng đầu là DRY (Don\'t Repeat Yourself - Đừng lặp lại chính mình).',
          'Nếu bạn cần tính chỉ số khối cơ thể (BMI) ở 5 trang khác nhau, bạn không nên gõ lại công thức đó 5 lần. Thay vào đó, hãy gom công thức đó vào một Hàm (Function), đặt tên cho nó, và mỗi khi cần chỉ việc "gọi" tên hàm đó ra dùng.'
        ]
      },
      {
        id: 'cu-phap-ham-va-return',
        title: '2. Cú pháp khai báo và từ khóa return',
        paragraphs: [
          'Cú pháp khai báo hàm truyền thống:',
          'function tenHam(thamSo1, thamSo2) {\n  // Khối xử lý tính toán\n  return ketQua;\n}',
          'Từ khóa return: Dùng để trả giá trị tính toán được về cho nơi gọi hàm và LẬP TỨC KẾT THÚC hàm. Mọi dòng lệnh viết phía sau return bên trong hàm đó sẽ không bao giờ được chạy.'
        ]
      },
      {
        id: 'pham-vi-bien',
        title: '3. Phạm vi của biến (Scope)',
        paragraphs: [
          'Biến cục bộ (Local Scope): Các biến khai báo bằng let/const BÊN TRONG thân một hàm thì CHỈ CÓ THỂ dùng trong hàm đó. Bên ngoài hàm hoàn toàn không biết biến đó là gì.',
          'Biến toàn cục (Global Scope): Khai báo ngoài cùng file, bất kỳ hàm nào cũng có thể đọc và sửa đổi.'
        ],
        callout: {
          type: 'tip',
          title: 'Khuyên dùng biến cục bộ',
          content: 'Nên giới hạn biến trong phạm vi hàm (Local Scope) để tránh việc các hàm khác nhau vô tình ghi đè lên biến của nhau làm sai lệch dữ liệu.'
        }
      }
    ],
    codeExamples: [
      {
        id: 'vd-ham-tinh-toan',
        title: 'Ví dụ: Xây dựng hàm tính chỉ số BMI học sinh',
        description: 'Định nghĩa hàm tinhBMI(canNang, chieuCao) nhận 2 tham số và trả về kết quả số thập phân.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Ví dụ Hàm trong JavaScript</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h3>Công cụ đo chỉ số sức khỏe BMI</h3>
  <p>Cân nặng (kg): <input type="number" id="cn" value="55" style="width: 80px;"></p>
  <p>Chiều cao (mét): <input type="number" id="cc" step="0.01" value="1.65" style="width: 80px;"></p>
  <button id="btn-tinh-bmi" style="padding: 6px 14px;">Tính BMI</button>

  <p id="kq-bmi" style="font-weight: bold; color: #2563eb;"></p>

  <script>
    // 1. Định nghĩa hàm tính toán độc lập
    function tinhChiSoBMI(canNangKg, chieuCaoMet) {
      if (chieuCaoMet <= 0) return 0;
      const bmi = canNangKg / (chieuCaoMet * chieuCaoMet);
      return bmi.toFixed(1); // Làm tròn 1 chữ số thập phân
    }

    // 2. Gọi hàm khi người dùng nhấn nút
    document.getElementById('btn-tinh-bmi').addEventListener('click', function() {
      const cn = Number(document.getElementById('cn').value);
      const cc = Number(document.getElementById('cc').value);

      const ketQua = tinhChiSoBMI(cn, cc);
      document.getElementById('kq-bmi').textContent = 'Chỉ số BMI của bạn là: ' + ketQua;
    });
  </script>
</body>
</html>`,
        explanation: 'Hàm tinhChiSoBMI được viết độc lập, nhận vào cân nặng và chiều cao rồi return kết quả. Ta có thể tái sử dụng hàm này ở bất kỳ đâu trong chương trình.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Quên từ khóa return trong hàm tính toán, khiến hàm trả về undefined.',
        cause: 'Tính toán xong nhưng không có lệnh return để gửi kết quả ra ngoài.',
        solution: 'Bổ sung return ketQua; ở cuối hàm.'
      }
    ],
    keyTakeaways: [
      'Hàm giúp tái sử dụng mã nguồn và chia nhỏ chương trình thành các phần dễ quản lý.',
      'Từ khóa return gửi kết quả về cho nơi gọi hàm và dừng hàm ngay lập tức.',
      'Biến khai báo trong hàm là biến cục bộ, biến ngoài là toàn cục.'
    ]
  },
  {
    id: 'js-8',
    track: 'js',
    order: 8,
    title: 'Chuỗi và mảng cơ bản',
    slug: 'chuoi-va-mang-co-ban',
    description: 'Thao tác với chuỗi (length, toUpperCase, slice, template literals) và mảng Array (tạo mảng, truy cập chỉ số 0, length, push, pop, duyệt mảng với for).',
    estimatedMinutes: 25,
    objectives: [
      'Làm chủ các phương thức xử lý chuỗi: length, toUpperCase(), toLowerCase(), trim(), slice().',
      'Sử dụng chuỗi tiêu bản Template Literals (dấu backtick `... ${ten}`) để nối chuỗi hiện đại.',
      'Khởi tạo mảng (Array), truy xuất phần tử theo chỉ số (Index bắt đầu từ 0) và duyệt mảng bằng vòng lặp.'
    ],
    sections: [
      {
        id: 'thao-tac-chuoi',
        title: '1. Thao tác với chuỗi ký tự (String)',
        paragraphs: [
          'Một chuỗi là tập hợp các ký tự đặt trong dấu ngoặc kép hoặc ngoặc đơn:',
          'Các công cụ xử lý chuỗi thông dụng:'
        ],
        bulletPoints: [
          '.length: Đếm số lượng ký tự trong chuỗi (ví dụ: "Hà Nội".length là 6).',
          '.toUpperCase() & .toLowerCase(): Chuyển toàn bộ thành chữ HOA hoặc chữ thường.',
          '.trim(): Cực kỳ quan trọng khi xử lý form - dùng để cắt bỏ các dấu cách vô tình gõ thừa ở đầu và cuối chuỗi.',
          'Template Literals (Dấu backtick `): Cho phép nhúng trực tiếp biến vào trong chuỗi theo cú pháp `${tenBien}`, không cần nối chuỗi bằng dấu + rườm rà.'
        ]
      },
      {
        id: 'mang-co-ban',
        title: '2. Mảng (Array): Danh sách có thứ tự',
        paragraphs: [
          'Mảng là cấu trúc dữ liệu cho phép bạn chứa danh sách nhiều giá trị trong cùng một biến số:',
          'let hoaQua = ["Cam", "Xoài", "Táo"];'
        ],
        bulletPoints: [
          'Chỉ số (Index): Các phần tử trong mảng được đánh số BẮT ĐẦU TỪ 0 (hoaQua[0] là "Cam", hoaQua[1] là "Xoài").',
          '.length: Cho biết tổng số phần tử hiện có trong mảng.',
          '.push(gia_tri): Thêm một phần tử mới vào cuối mảng.',
          '.pop(): Lấy ra và xóa phần tử cuối cùng của mảng.'
        ]
      },
      {
        id: 'duyet-mang-for',
        title: '3. Duyệt qua từng phần tử của mảng',
        paragraphs: [
          'Để xử lý từng phần tử trong danh sách, ta kết hợp mảng với vòng lặp for:',
          'for (let i = 0; i < danhSach.length; i++) {\n  console.log(danhSach[i]);\n}'
        ]
      }
    ],
    codeExamples: [
      {
        id: 'vd-mang-va-chuoi',
        title: 'Ví dụ: Ứng dụng quản lý danh sách việc cần làm (Todo List đơn giản)',
        description: 'Thêm mục mới vào mảng bằng push() và duyệt mảng hiển thị ra giao diện.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Ví dụ Mảng và Chuỗi</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h3>Nhiệm vụ học tập trong ngày</h3>
  <input type="text" id="o-nhap-viec" placeholder="Nhập việc cần làm..." style="padding: 6px; width: 220px;">
  <button id="btn-them-viec" style="padding: 6px 12px;">Thêm việc</button>

  <ol id="ds-nhiem-vu" style="margin-top: 15px; line-height: 1.6;"></ol>

  <script>
    // Khởi tạo mảng ban đầu
    const congViec = ["Đọc bài 1 môn Lập trình Web", "Làm bài tập Toán giải tích"];

    function capNhatGiaoDien() {
      const danhSachUl = document.getElementById('ds-nhiem-vu');
      danhSachUl.innerHTML = ""; // Xóa danh sách cũ

      // Duyệt mảng bằng vòng lặp for
      for (let i = 0; i < congViec.length; i++) {
        const li = document.createElement('li');
        li.textContent = congViec[i];
        danhSachUl.appendChild(li);
      }
    }

    // Hiển thị lần đầu
    capNhatGiaoDien();

    // Thêm việc mới
    document.getElementById('btn-them-viec').addEventListener('click', function() {
      const oNhap = document.getElementById('o-nhap-viec');
      const noiDung = oNhap.value.trim(); // Cắt bỏ khoảng trắng thừa

      if (noiDung !== "") {
        congViec.push(noiDung); // Thêm vào mảng
        oNhap.value = "";       // Xóa trắng ô nhập
        capNhatGiaoDien();      // Vẽ lại giao diện
      }
    });
  </script>
</body>
</html>`,
        explanation: 'Thử gõ một công việc mới (ví dụ: "Soạn văn bài Sóng") rồi nhấn "Thêm việc" để thấy mảng được bổ sung bằng hàm push() và hiển thị tức thì.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Truy xuất phần tử đầu tiên của mảng bằng chỉ số 1 thay vì 0.',
        cause: 'Theo thói quen đếm thông thường từ 1.',
        solution: 'Trong tin học, chỉ số mảng luôn bắt đầu từ 0: phanTuDauTien = mang[0].'
      },
      {
        mistake: 'Vòng lặp duyệt mảng viết điều kiện i <= mang.length.',
        cause: 'Chỉ số phần tử cuối cùng là length - 1, nên nếu viết <= sẽ bị duyệt dư 1 lần và ra undefined.',
        solution: 'Luôn dùng dấu nhỏ hơn nghiêm ngặt: i < mang.length.'
      }
    ],
    keyTakeaways: [
      'Dùng chuỗi tiêu bản Template Literals (dấu backtick `) để nhúng biến tiện lợi.',
      'Mảng đánh chỉ số từ 0 đến mảng.length - 1.',
      'Sử dụng .push() để thêm phần tử vào cuối mảng và vòng lặp for để duyệt mảng.'
    ]
  },
  {
    id: 'js-9',
    track: 'js',
    order: 9,
    title: 'Truy cập và thay đổi nội dung HTML bằng DOM',
    slug: 'truy-cap-va-thay-doi-noi-dung-html-bang-dom',
    description: 'Hiểu cây mô hình DOM (Document Object Model), tìm kiếm phần tử với querySelector, thay đổi văn bản textContent, sửa đổi style và quản lý classList.',
    estimatedMinutes: 25,
    objectives: [
      'Hiểu khái niệm cây DOM là cầu nối trung gian cho phép JavaScript điều khiển toàn bộ cấu trúc HTML.',
      'Sử dụng thành thạo hai phương thức tìm kiếm hiện đại: document.querySelector() và document.querySelectorAll().',
      'Thay đổi an toàn nội dung với .textContent (thay vì innerHTML dễ bị hack) và thay đổi kiểu dáng trực tiếp qua .style.',
      'Làm chủ đối tượng .classList với các phương thức .add(), .remove() và .toggle().'
    ],
    sections: [
      {
        id: 'dom-la-gi',
        title: '1. Cây đối tượng DOM (Document Object Model) là gì?',
        paragraphs: [
          'Khi trình duyệt tải file HTML của bạn, nó sẽ dịch mã văn bản đó thành một cây cấu trúc đối tượng trong bộ nhớ, gọi là cây DOM (Document Object Model).',
          'Mỗi thẻ HTML (h1, p, div, button) trở thành một "nút" (Node / Element) trên cây này. JavaScript đóng vai trò như chiếc đũa thần có thể tìm đến bất kỳ nút nào để thay đổi chữ, đổi màu hoặc ẩn hiện tùy ý.'
        ]
      },
      {
        id: 'tim-kiem-phan-tu-dom',
        title: '2. Tìm kiếm phần tử với querySelector',
        paragraphs: [
          'Ngày nay, các lập trình viên chuyên nghiệp ưa chuộng document.querySelector vì nó cho phép bạn dùng chính xác các bộ chọn CSS quen thuộc:'
        ],
        bulletPoints: [
          'document.querySelector("#ten-id"): Tìm phần tử đầu tiên có id đó.',
          'document.querySelector(".ten-class"): Tìm phần tử đầu tiên có class đó.',
          'document.querySelector("h1"): Tìm thẻ h1 đầu tiên.',
          'document.querySelectorAll(".card"): Tìm TẤT CẢ các phần tử có class card và gom vào một danh sách.'
        ]
      },
      {
        id: 'thay-doi-content-va-class',
        title: '3. Thay đổi nội dung và điều khiển classList',
        paragraphs: [
          'Thay đổi nội dung chữ: Luôn ưu tiên dùng element.textContent = "Chữ mới"; (tuyệt đối an toàn, chống tấn công XSS).',
          'Thay đổi kiểu dáng qua classList: Thay vì viết mã CSS trực tiếp dài dòng trong JS, cách làm chuẩn là định nghĩa class trong CSS, rồi dùng JavaScript để bật/tắt class đó:'
        ],
        bulletPoints: [
          'element.classList.add("ten-class"): Thêm class vào phần tử.',
          'element.classList.remove("ten-class"): Xóa class khỏi phần tử.',
          'element.classList.toggle("ten-class"): BẬT/TẮT class (nếu chưa có thì thêm vào, nếu có rồi thì gỡ ra - rất lý tưởng để làm công tắc bật đèn hoặc menu).'
        ]
      }
    ],
    codeExamples: [
      {
        id: 'vd-dom-thao-tac',
        title: 'Ví dụ: Ứng dụng Bật / Tắt đèn với classList.toggle',
        description: 'Sử dụng classList.toggle để chuyển đổi trạng thái hộp sáng tối.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Ví dụ thao tác DOM</title>
  <style>
    .hop-den {
      width: 200px;
      height: 120px;
      background-color: #334155;
      color: #94a3b8;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      border-radius: 10px;
      margin: 15px 0;
      transition: all 0.3s ease;
    }
    /* Class khi đèn được bật */
    .hop-den.dang-sang {
      background-color: #facc15; /* Màu vàng rực rỡ */
      color: #713f12;
      box-shadow: 0 0 25px rgba(250, 204, 21, 0.6);
      transform: scale(1.05);
    }
  </style>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Thực hành DOM: Công tắc đèn phòng học</h2>
  
  <div id="bong-den" class="hop-den">ĐÈN ĐANG TẮT</div>
  
  <button id="nut-cong-tac" style="padding: 8px 16px; cursor: pointer;">
    Bấm để Bật / Tắt đèn
  </button>

  <script>
    const bongDen = document.querySelector('#bong-den');
    const nutBam = document.querySelector('#nut-cong-tac');

    nutBam.addEventListener('click', function() {
      // Bật/tắt class dang-sang chỉ bằng 1 dòng lệnh
      bongDen.classList.toggle('dang-sang');

      // Kiểm tra trạng thái để đổi dòng chữ
      if (bongDen.classList.contains('dang-sang')) {
        bongDen.textContent = 'ĐÈN ĐANG BẬT SÁNG';
      } else {
        bongDen.textContent = 'ĐÈN ĐANG TẮT';
      }
    });
  </script>
</body>
</html>`,
        explanation: 'Nhấn nút "Bật / Tắt đèn" liên tục: Bạn sẽ thấy bóng đèn đổi màu vàng rực rỡ và phóng to nhẹ nhờ phương thức classList.toggle.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Truyền dấu chấm (.) vào trong hàm classList.add(".active").',
        cause: 'Nhầm lẫn cú pháp bộ chọn querySelector với tên class thuần túy.',
        solution: 'Trong classList chỉ truyền tên class thuần: classList.add("active") (không có dấu chấm).'
      },
      {
        mistake: 'Lạm dụng innerHTML để chèn nội dung văn bản người dùng gõ vào.',
        cause: 'Tiện tay viết innerHTML thay vì textContent.',
        solution: 'Nếu người dùng gõ mã độc <script>, innerHTML có thể gây ra lỗ hổng bảo mật XSS. Luôn dùng textContent để gán chữ an toàn.'
      }
    ],
    keyTakeaways: [
      'DOM biến mã HTML thành cây đối tượng có thể điều khiển trực tiếp bằng JavaScript.',
      'Dùng querySelector() với bộ chọn CSS để tìm phần tử nhanh chóng.',
      'Sử dụng classList.add, remove, toggle là cách tốt nhất để thay đổi giao diện mượt mà.'
    ]
  },
  {
    id: 'js-10',
    track: 'js',
    order: 10,
    title: 'Xử lý sự kiện',
    slug: 'xu-ly-su-kien',
    description: 'Bắt các tương tác người dùng bằng addEventListener: click, input, submit; làm chủ đối tượng sự kiện event và phương thức ngăn tải lại trang event.preventDefault().',
    estimatedMinutes: 25,
    objectives: [
      'Hiểu rõ khái niệm sự kiện (Event) là những tín hiệu phát ra khi người dùng tương tác với website.',
      'Sử dụng cú pháp tiêu chuẩn hiện đại: element.addEventListener(tenSuKien, hamXuLy).',
      'Làm chủ các sự kiện thông dụng nhất: click, input, change, submit.',
      'Sử dụng e.preventDefault() để ngăn trình duyệt tự động tải lại trang khi submit form.'
    ],
    sections: [
      {
        id: 'addEventListener-chuan',
        title: '1. Cú pháp bắt sự kiện: addEventListener',
        paragraphs: [
          'Trình duyệt luôn lắng nghe các hành động của người dùng (bấm chuột, nhấn phím, cuộn trang).',
          'Để giao việc cho JavaScript khi có một sự kiện xảy ra, ta dùng cú pháp chuẩn W3C:',
          'phanTu.addEventListener("ten_su_kien", function(event) {\n  // Mã lệnh xử lý tại đây\n});'
        ],
        bulletPoints: [
          '"click": Người dùng nhấp chuột vào phần tử.',
          '"input": Người dùng đang gõ hoặc xóa từng ký tự trong ô nhập liệu (phản hồi tức thì).',
          '"change": Khi giá trị của ô lựa chọn dropdown hoặc checkbox thay đổi.',
          '"submit": Khi người dùng nhấn nút gửi biểu mẫu form.'
        ]
      },
      {
        id: 'doi-tuong-event-va-preventDefault',
        title: '2. Đối tượng Event và phương thức e.preventDefault()',
        paragraphs: [
          'Khi hàm xử lý sự kiện được kích hoạt, trình duyệt sẽ tự động gửi kèm một đối tượng chứa toàn bộ thông tin về sự kiện đó (thường đặt tên tham số là event hoặc e).',
          'Đặc biệt quan trọng: Biểu mẫu <form> trong HTML có hành vi mặc định là khi bấm nút Submit, trình duyệt sẽ tự động tải lại (reload) toàn bộ trang web. Để giữ nguyên trang và xử lý dữ liệu mượt mà, ta bắt buộc phải gọi câu lệnh:',
          'e.preventDefault(); (Ngăn chặn hành vi mặc định của trình duyệt).'
        ],
        callout: {
          type: 'warning',
          title: 'Thuộc lòng câu lệnh e.preventDefault()',
          content: 'Mọi bài thực hành xử lý form trong JavaScript đều phải mở đầu bằng e.preventDefault(); để trang web không bị nháy trắng và mất dữ liệu vừa nhập.'
        }
      }
    ],
    codeExamples: [
      {
        id: 'vd-xu-ly-su-kien',
        title: 'Ví dụ: Bộ đếm số lần bấm và xem trước văn bản trực tiếp (Live Preview)',
        description: 'Kết hợp hai sự kiện click (tăng bộ đếm) và input (gõ đến đâu hiện chữ đến đó).',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Ví dụ Xử lý sự kiện</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h3>1. Sự kiện 'click': Bộ đếm tương tác</h3>
  <button id="btn-dem" style="padding: 8px 16px; font-size: 15px; cursor: pointer;">
    Số lần bạn đã bấm: <span id="so-luong" style="color: #2563eb; font-weight: bold;">0</span>
  </button>

  <hr style="margin: 20px 0;">

  <h3>2. Sự kiện 'input': Phản hồi gõ chữ thời gian thực</h3>
  <label for="o-ten">Gõ tên của bạn vào đây:</label><br>
  <input type="text" id="o-ten" placeholder="Ví dụ: Hoàng Nam..." style="padding: 8px; width: 250px; margin-top: 6px;">
  
  <p style="font-size: 16px;">
    Xin chào: <strong id="hien-thi-ten" style="color: #16a34a;">(Chưa nhập tên)</strong>
  </p>

  <script>
    // Xử lý bộ đếm click
    let dem = 0;
    const btnDem = document.querySelector('#btn-dem');
    const spanSoLuong = document.querySelector('#so-luong');

    btnDem.addEventListener('click', function() {
      dem++;
      spanSoLuong.textContent = dem;
    });

    // Xử lý sự kiện gõ chữ input
    const oTen = document.querySelector('#o-ten');
    const hienThiTen = document.querySelector('#hien-thi-ten');

    oTen.addEventListener('input', function(e) {
      const giaTri = e.target.value.trim();
      hienThiTen.textContent = giaTri === "" ? "(Chưa nhập tên)" : giaTri;
    });
  </script>
</body>
</html>`,
        explanation: 'Thử bấm nút liên tục để thấy số tăng dần. Thử gõ tên vào ô nhập để thấy chữ hiển thị ngay tức khắc theo từng phím gõ nhờ sự kiện input.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Viết tên sự kiện có thêm chữ on (ví dụ: btn.addEventListener("onclick", ...)).',
        cause: 'Nhầm lẫn giữa thuộc tính HTML inline (onclick) và tên sự kiện chuẩn của addEventListener ("click").',
        solution: 'Trong addEventListener, tên sự kiện không có tiền tố on: chỉ viết "click", "input", "submit".'
      }
    ],
    keyTakeaways: [
      'Sử dụng addEventListener để gắn hàm xử lý sự kiện một cách chuyên nghiệp.',
      'Sự kiện "input" phát hiện tức thì mỗi khi người dùng gõ hoặc xóa chữ.',
      'Dùng e.preventDefault() để chặn tải lại trang khi xử lý sự kiện submit của biểu mẫu.'
    ]
  },
  {
    id: 'js-11',
    track: 'js',
    order: 11,
    title: 'Đọc và kiểm tra dữ liệu biểu mẫu',
    slug: 'doc-va-kiem-tra-du-lieu-bieu-mau',
    description: 'Quy trình kiểm tra tính hợp lệ (Form Validation): đọc giá trị value, trim cắt khoảng trắng, ép kiểu số, kiểm tra để trống và hiển thị thông báo lỗi thân thiện.',
    estimatedMinutes: 25,
    objectives: [
      'Đọc chính xác dữ liệu từ các ô input và dùng .trim() để cắt bỏ khoảng trắng đánh lừa.',
      'Thực hiện kiểm tra dữ liệu bắt buộc (Validation): kiểm tra để trống, kiểm tra độ dài tối thiểu, kiểm tra định dạng số.',
      'Hiển thị thông báo phản hồi thân thiện ngay dưới ô nhập thay vì dùng hàm alert() gây khó chịu.'
    ],
    sections: [
      {
        id: 'doc-du-lieu-input',
        title: '1. Quy trình đọc dữ liệu từ Form',
        paragraphs: [
          'Các bước chuẩn để xử lý dữ liệu nhập vào:',
          '1. Lắng nghe sự kiện "submit" trên thẻ <form>.',
          '2. Ngay lập tức gọi e.preventDefault(); để ngăn trang bị tải lại.',
          '3. Truy xuất giá trị bằng inputElement.value.',
          '4. Luôn áp dụng phương thức .trim() để loại bỏ các dấu cách trống ở đầu và cuối chuỗi.'
        ]
      },
      {
        id: 'kiem-tra-tinh-hop-le',
        title: '2. Các tiêu chí kiểm tra tính hợp lệ (Validation)',
        paragraphs: [
          'Trước khi chấp nhận dữ liệu, học sinh cần viết các câu lệnh kiểm tra logic:'
        ],
        bulletPoints: [
          'Kiểm tra để trống: if (giaTri === "") { báo lỗi... }',
          'Kiểm tra độ dài mật khẩu: if (matKhau.length < 6) { báo lỗi... }',
          'Kiểm tra số hợp lệ: if (isNaN(tuoi) || tuoi < 15 || tuoi > 19) { báo lỗi... }'
        ]
      },
      {
        id: 'thong-bao-loi-than-thien',
        title: '3. Hiển thị thông báo lỗi chuyên nghiệp',
        paragraphs: [
          'Trong các ứng dụng hiện đại, không bao giờ dùng hàm alert("Lỗi rồi") vì nó làm gián đoạn trải nghiệm người dùng.',
          'Cách làm chuyên nghiệp: Đặt một thẻ <span class="loi"> có chữ màu đỏ ngay phía dưới mỗi ô nhập. Khi phát hiện dữ liệu sai, JavaScript sẽ gán dòng thông báo lỗi vào thẻ span đó và đổi viền ô input thành màu đỏ cảnh báo.'
        ],
        callout: {
          type: 'tip',
          title: 'Trải nghiệm người dùng tốt',
          content: 'Khi người dùng gõ sửa lại dữ liệu, hãy tự động xóa dòng thông báo lỗi đỏ đi để giao diện trở lại trạng thái bình thường.'
        }
      }
    ],
    codeExamples: [
      {
        id: 'vd-form-validation',
        title: 'Ví dụ: Kiểm tra biểu mẫu đăng ký thành viên với thông báo lỗi trực quan',
        description: 'Biểu mẫu tự động kiểm tra họ tên không được để trống và mật khẩu tối thiểu 6 ký tự.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Ví dụ Kiểm tra dữ liệu Form</title>
  <style>
    .khung-nhap { margin-bottom: 14px; }
    label { display: block; font-weight: bold; margin-bottom: 4px; }
    input { width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; box-sizing: border-box; }
    /* Lớp viền đỏ khi có lỗi */
    input.co-loi { border-color: #ef4444; background-color: #fef2f2; }
    /* Dòng chữ báo lỗi */
    .thong-bao-loi { color: #dc2626; font-size: 13px; margin-top: 4px; display: block; min-height: 18px; }
    button { background: #2563eb; color: white; border: none; padding: 10px 18px; border-radius: 4px; cursor: pointer; }
    .thanh-cong { color: #16a34a; font-weight: bold; margin-top: 10px; }
  </style>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h3>ĐĂNG KÝ THÀNH VIÊN CLB TIN HỌC</h3>

  <form id="form-dang-ky" style="max-width: 350px;">
    <div class="khung-nhap">
      <label for="ho-ten">Họ và tên:</label>
      <input type="text" id="ho-ten" placeholder="Nhập họ và tên...">
      <span id="loi-ho-ten" class="thong-bao-loi"></span>
    </div>

    <div class="khung-nhap">
      <label for="mat-khau">Mật khẩu bảo vệ:</label>
      <input type="password" id="mat-khau" placeholder="Tối thiểu 6 ký tự...">
      <span id="loi-mat-khau" class="thong-bao-loi"></span>
    </div>

    <button type="submit">Xác nhận đăng ký</button>
    <div id="thong-bao-chung" class="thanh-cong"></div>
  </form>

  <script>
    const form = document.querySelector('#form-dang-ky');
    const inputTen = document.querySelector('#ho-ten');
    const inputPass = document.querySelector('#mat-khau');
    const loiTen = document.querySelector('#loi-ho-ten');
    const loiPass = document.querySelector('#loi-mat-khau');
    const tbChung = document.querySelector('#thong-bao-chung');

    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Ngăn tải lại trang
      tbChung.textContent = "";

      let hopLe = true;

      // 1. Kiểm tra Họ và tên
      const ten = inputTen.value.trim();
      if (ten === "") {
        loiTen.textContent = "Vui lòng nhập họ và tên của bạn!";
        inputTen.classList.add('co-loi');
        hopLe = false;
      } else {
        loiTen.textContent = "";
        inputTen.classList.remove('co-loi');
      }

      // 2. Kiểm tra Mật khẩu
      const pass = inputPass.value;
      if (pass.length < 6) {
        loiPass.textContent = "Mật khẩu phải chứa ít nhất 6 ký tự!";
        inputPass.classList.add('co-loi');
        hopLe = false;
      } else {
        loiPass.textContent = "";
        inputPass.classList.remove('co-loi');
      }

      // Nếu tất cả đều đúng
      if (hopLe) {
        tbChung.textContent = "Đăng ký thành công! Chào mừng " + ten + ".";
        form.reset(); // Xóa sạch dữ liệu ô nhập
      }
    });
  </script>
</body>
</html>`,
        explanation: 'Thử để trống rồi bấm "Xác nhận đăng ký": Bạn sẽ thấy các dòng thông báo lỗi đỏ hiện ra ngay dưới ô nhập và ô nhập đổi màu viền đỏ rất chuyên nghiệp.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Chỉ kiểm tra if (input.value === "") mà không dùng .trim().',
        cause: 'Nếu người dùng chỉ gõ 5 dấu cách, chương trình vẫn tưởng là có nhập chữ.',
        solution: 'Luôn áp dụng input.value.trim() để loại bỏ các dấu cách trống.'
      }
    ],
    keyTakeaways: [
      'Luôn gọi e.preventDefault() khi xử lý sự kiện submit của form.',
      'Sử dụng .trim() để loại bỏ khoảng trắng giả mạo ở hai đầu.',
      'Hiển thị lỗi trực tiếp tại thẻ span dưới ô nhập giúp website thân thiện và chuyên nghiệp.'
    ]
  },
  {
    id: 'js-12',
    track: 'js',
    order: 12,
    title: 'Thực hành kết hợp HTML, CSS và JavaScript',
    slug: 'thuc-hanh-ket-hop-html-css-va-javascript',
    description: 'Tổng kết kiềng ba chân Web: tự tay làm mini-project hoàn chỉnh kết hợp HTML cấu trúc, CSS giao diện và JavaScript xử lý tương tác; định hướng phát triển bản thân.',
    estimatedMinutes: 30,
    objectives: [
      'Tổng kết và quan sát sự phối hợp nhịp nhàng giữa ba trụ cột: HTML, CSS và JavaScript trong một ứng dụng thực tế.',
      'Tự tay xây dựng hoàn chỉnh ứng dụng "Bộ đếm thông minh" (Smart Counter) với các chức năng tăng, giảm, reset và đổi màu sắc sống động.',
      'Xây dựng tư duy phát triển dự án từ phân tích yêu cầu -> dựng HTML -> làm đẹp CSS -> lập trình JS.',
      'Nắm được định hướng các bước tiếp theo để nâng cao kỹ năng lập trình web cho học sinh THPT.'
    ],
    sections: [
      {
        id: 'kieng-ba-chan-web',
        title: '1. Khái quát sức mạnh tổng hợp của bộ ba Web',
        paragraphs: [
          'Chúc mừng bạn đã đi trọn vẹn hành trình từ những thẻ HTML đầu tiên qua các thuộc tính trang trí CSS và các câu lệnh logic JavaScript!',
          'Một sản phẩm web chất lượng luôn là sự kết hợp nhuần nhuyễn của cả ba công nghệ:',
          '1. HTML: Xây dựng cấu trúc vững chãi, rõ ràng và chuẩn ngữ nghĩa.',
          '2. CSS: Thổi hồn thẩm mỹ, tạo màu sắc hài hòa, phông chữ dễ đọc và thích ứng màn hình.',
          '3. JavaScript: Thổi bùng sự sống, tạo tương tác mượt mà và xử lý logic cho người dùng.'
        ]
      },
      {
        id: 'quy-trinh-lam-project',
        title: '2. Quy trình 4 bước chuẩn để xây dựng một tính năng web',
        paragraphs: [
          'Khi nhận một đề bài làm web, đừng vội vàng gõ code ngay. Hãy làm theo 4 bước chuyên nghiệp:',
          'Bước 1 - Phân tích yêu cầu: Xác định người dùng cần bấm vào đâu và điều gì sẽ xảy ra.',
          'Bước 2 - Dựng khung HTML: Viết các thẻ cần thiết (hộp chứa, tiêu đề, nút bấm, vùng hiển thị kết quả) kèm theo các thuộc tính id hoặc class rõ ràng.',
          'Bước 3 - Trang điểm CSS: Canh chỉnh khoảng cách padding, bo tròn border-radius, phối màu chữ và màu nền bắt mắt.',
          'Bước 4 - Lập trình JavaScript: Tìm các phần tử qua querySelector, gắn sự kiện addEventListener và cập nhật nội dung qua textContent hoặc classList.'
        ]
      },
      {
        id: 'dinh-huong-tuong-lai',
        title: '3. Lời khuyên và lộ trình nâng cao cho học sinh THPT',
        paragraphs: [
          'Sau khi hoàn thành chương trình này, học sinh đã có nền tảng vững chắc để tự tin:',
          '- Tự tay làm một trang web cá nhân (Portfolio) giới thiệu bản thân hoặc làm trang web báo tường trực tuyến cho lớp.',
          '- Tìm hiểu thêm hệ thống quản lý mã nguồn Git và GitHub để lưu trữ dự án.',
          '- Khám phá các thư viện giao diện hiện đại như Tailwind CSS.',
          '- Tham gia các cuộc thi Sáng tạo Khoa học Kỹ thuật và Tin học trẻ dành cho học sinh phổ thông.'
        ],
        callout: {
          type: 'tip',
          title: 'Bí quyết thành công',
          content: 'Không có cách nào học lập trình nhanh hơn việc tự tay bắt tay vào làm một dự án nhỏ của riêng mình. Hãy bắt đầu ngay hôm nay từ những ý tưởng giản dị nhất xung quanh trường lớp bạn!'
        }
      }
    ],
    codeExamples: [
      {
        id: 'vd-project-tong-hop',
        title: 'Mini-Project: Ứng dụng "Bộ đếm thông minh" hoàn chỉnh',
        description: 'Dự án thực tế gồm đầy đủ HTML cấu trúc, CSS hiện đại và JavaScript xử lý logic đổi màu số.',
        language: 'html',
        runnable: true,
        initialCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Ứng dụng Bộ Đếm Thông Minh</title>
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      padding: 15px;
    }
    .hop-ung-dung {
      background: #ffffff;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 10px 25px rgba(37, 99, 235, 0.15);
      text-align: center;
      max-width: 320px;
      width: 100%;
    }
    h2 { margin-top: 0; color: #1e3a8a; font-size: 20px; }
    /* Số hiển thị */
    .con-so {
      font-size: 64px;
      font-weight: 700;
      margin: 20px 0;
      color: #64748b; /* Mặc định khi = 0 */
      transition: all 0.2s ease;
    }
    /* Các nút bấm */
    .nhom-nut { display: flex; gap: 10px; justify-content: center; }
    button {
      padding: 10px 18px;
      font-size: 16px;
      font-weight: 600;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .btn-giam { background: #fee2e2; color: #dc2626; }
    .btn-giam:hover { background: #fca5a5; }
    
    .btn-reset { background: #f1f5f9; color: #475569; }
    .btn-reset:hover { background: #e2e8f0; }

    .btn-tang { background: #dbeafe; color: #2563eb; }
    .btn-tang:hover { background: #bfdbfe; }

    .ghi-chu {
      margin-top: 20px;
      font-size: 13px;
      color: #94a3b8;
    }
  </style>
</head>
<body>
  <div class="hop-ung-dung">
    <h2>BỘ ĐẾM THÔNG MINH</h2>
    <div id="hien-thi-so" class="con-so">0</div>

    <div class="nhom-nut">
      <button id="btn-giam" class="btn-giam">- Giảm</button>
      <button id="btn-reset" class="btn-reset">Đặt lại</button>
      <button id="btn-tang" class="btn-tang">+ Tăng</button>
    </div>

    <p class="ghi-chu">Số dương màu xanh lam, số âm màu đỏ, số 0 màu xám.</p>
  </div>

  <script>
    // 1. Quản lý trạng thái
    let giaTri = 0;

    // 2. Tìm kiếm các phần tử DOM
    const soEl = document.querySelector('#hien-thi-so');
    const btnTang = document.querySelector('#btn-tang');
    const btnGiam = document.querySelector('#btn-giam');
    const btnReset = document.querySelector('#btn-reset');

    // 3. Hàm cập nhật màu sắc và giao diện
    function capNhatHienThi() {
      soEl.textContent = giaTri;

      if (giaTri > 0) {
        soEl.style.color = '#2563eb'; // Xanh lam khi dương
      } else if (giaTri < 0) {
        soEl.style.color = '#dc2626'; // Đỏ khi âm
      } else {
        soEl.style.color = '#64748b'; // Xám khi bằng 0
      }
    }

    // 4. Lắng nghe sự kiện người dùng
    btnTang.addEventListener('click', function() {
      giaTri++;
      capNhatHienThi();
    });

    btnGiam.addEventListener('click', function() {
      giaTri--;
      capNhatHienThi();
    });

    btnReset.addEventListener('click', function() {
      giaTri = 0;
      capNhatHienThi();
    });
  </script>
</body>
</html>`,
        explanation: 'Thử nhấn các nút "+ Tăng" và "- Giảm": Bạn sẽ thấy con số không chỉ thay đổi mà còn tự động đổi màu xanh khi dương và màu đỏ khi âm nhờ hàm capNhatHienThi() điều khiển DOM.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Viết mã logic JavaScript dồn cục lộn xộn mà không chia nhỏ thành các hàm chuyên biệt.',
        cause: 'Chưa có thói quen tổ chức mã bài bản.',
        solution: 'Tách riêng hàm cập nhật giao diện (như capNhatHienThi()) giúp mã ngắn gọn, không bị trùng lặp.'
      }
    ],
    keyTakeaways: [
      'HTML, CSS và JavaScript là bộ ba nguyên tử hoàn hảo tạo nên mọi ứng dụng web trên thế giới.',
      'Quy trình làm việc chuẩn: Phân tích -> Dựng khung HTML -> Định dạng CSS -> Lập trình tương tác JS.',
      'Thường xuyên tự làm các mini-project thực tế là con đường ngắn nhất để làm chủ lập trình web.'
    ]
  }
];
