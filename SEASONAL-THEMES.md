# Chủ đề theo lịch Việt Nam

Ứng dụng dùng React/Vite hiện có, không thêm thư viện chạy nền hoặc thay đổi dữ liệu bài học.

## Vị trí cấu hình

- src/seasonal/config.ts: khoảng ngày, lời chào, các phiên bản mùa xuân theo năm.
- src/seasonal/calendar.ts: phân giải ngày tại Asia/Ho_Chi_Minh và thời gian đến nửa đêm kế tiếp.
- src/seasonal/SeasonProvider.tsx: trạng thái toàn ứng dụng, cập nhật nửa đêm/focus/visibility, lưu tùy chọn hiệu ứng.
- src/seasonal/GreetingBar.tsx: thanh lời chào liên tục bằng CSS và công cụ xem thử chỉ dành cho phát triển.
- src/seasonal/SeasonalEffects.tsx: một Canvas (tối đa 64 hạt desktop, 24 hạt mobile) và các SVG trang trí. Canvas giới hạn 30 fps, DPR tối đa 1.5, dừng khi tab ẩn. Các listener, timer, ResizeObserver và animation frame đều có hàm dọn.
- src/seasonal/seasonal.css: màu, mật độ, độ mờ, responsive và các hiệu ứng của từng dịp.

## Lịch

Halloween, Nhà giáo Việt Nam và Giáng sinh lặp hằng năm, bao gồm cả hai đầu khoảng. Chào năm mới lặp hằng năm từ 26/12/2026, xác định năm đích bằng năm sau ở cuối tháng 12 và năm hiện tại ở đầu tháng 1. Xuân Đinh Mùi chỉ có 10/01/2027–14/02/2027; muốn thêm mùa xuân khác, thêm một phiên bản có năm và lời chào riêng trong SPRING_EDITIONS. Ngoài các khoảng cấu hình, giao diện và lời chào trở về mặc định.

## Xem thử khi phát triển

Chạy npm run dev, mở bảng “Xem thử chủ đề” ở góc trái dưới. Chọn chủ đề hoặc nhập ngày cụ thể để kiểm tra lịch. Chọn “Trở về lịch tự động” để kết thúc xem thử. Có ô “Mô phỏng giảm chuyển động” để kiểm tra trạng thái tĩnh, độc lập với thiết lập giảm chuyển động thật của thiết bị (thiết lập thật luôn được tôn trọng).

Có thể mở trực tiếp các URL phát triển:

- /?holiday=default#/overview
- /?holiday=halloween#/overview
- /?holiday=teachers#/overview
- /?holiday=christmas#/overview
- /?holiday=new-year#/overview
- /?holiday=spring#/overview

Thay #/overview bằng #/lesson/html-1, #/lesson/css-4 hoặc #/lesson/js-10 để kiểm tra trang bài dài. Các tham số và bảng xem thử không hoạt động trong bản production. Chế độ xem thử không được lưu; tùy chọn Bật/tắt hiệu ứng được lưu riêng với khóa web-learning-seasonal-effects. Tắt hiệu ứng dừng cả Canvas và chữ chạy, vẫn giữ đúng lời chào và bảng màu dịp lễ.

## Kiểm tra

- npm run test:seasonal: 95 trường hợp lịch và các khẳng định bổ sung về lời chào, múi giờ, nửa đêm; gồm trước/đầu/cuối/sau khoảng, 31/12–01/01, 02/01–03/01 và không lặp tên Đinh Mùi.
- npm run build: kiểm tra TypeScript và tạo bản production.
- Kiểm tra trình duyệt: cả 5 chủ đề, mặc định, tắt hiệu ứng và tải lại, mô phỏng giảm chuyển động, bài CSS/JS dài và chạy thử mã.
- Kiểm tra viewport điện thoại bằng iframe rộng 390px: không tràn ngang, hiệu ứng pointer-events:none, một Canvas, bố cục thu gọn. File QA tạm được xóa sau kiểm tra.

Chuyển động giảm mật độ trên điện thoại. Trang trí cố định ở mép màn hình, trong header, sidebar, thẻ khóa học, đầu bài và footer; màu nền đọc bài vẫn trung tính. Thanh lời chào cập nhật chiều cao bằng ResizeObserver để mục lục và neo bài học không bị che khi văn bản tĩnh xuống dòng.

## Hiệu ứng mở rộng

- Halloween: màn Trick or Treat tự xuất hiện ở chính giữa sau 24 giây (hoãn khi đang nhập liệu, tab ẩn hoặc có hộp thoại khác). Có hoạt cảnh mở cửa và vị khách hóa trang. Học sinh chủ động chọn “Cho kẹo” hoặc “Bị ghẹo”, cả hai lựa chọn đều có kết quả ngẫu nhiên 50% kẹo/50% bị ghẹo; cho kẹo vẫn có thể bị ghẹo. Đóng bằng Escape hoặc ×; các lần tiếp theo cách 90–135 giây. Đàn 6–8 dơi (3 trên điện thoại) bay nhanh trong 2,4–3,2 giây từ trái, phải, trên hoặc dưới, thay đổi độ cao và đường chéo mỗi đợt, mỗi đợt cách nhau ngẫu nhiên 120–180 giây (2–3 phút), tính từ lúc bắt đầu; đợt đầu cũng chờ 2–3 phút.
- Giáng sinh: thêm người tuyết, Santa, tuần lộc, vớ, bóng trang trí và quà; đoàn Santa bay qua theo chu kỳ dài.
- Tuyết: WINTER_RULE={start:1201,end:109} áp dụng hằng năm từ 01/12 đến hết 09/01; từ 10/01 tắt tuyết rơi và băng đọng. Tuyết rơi và lớp tuyết đọng ở mép bài học, thẻ khóa học và khung thực hành. Tắt hiệu ứng xóa cả tuyết rơi và đọng. Giảm chuyển động giữ tuyết đọng tĩnh.
- Tết: hoa mai, hoa đào, bánh chưng xanh, dưa hấu đỏ, câu đối, lân nhún nhẹ, đèn lồng và lì xì.
- Nút bật/tắt hiệu ứng được giữ trong thanh đầu trang hiện tại; lời chào tích hợp trong header cũng dừng khi tắt hoặc giảm chuyển động.

Xem nhanh trò chơi ở môi trường phát triển: /?holiday=halloween&surprise=1#/lesson/html-1. Tham số surprise mở ngay màn hoạt cảnh ở giữa để kiểm tra; kết quả tùy lựa chọn Cho kẹo/Bị ghẹo của học sinh. Dùng lịch xem thử để kiểm tra 01/12, 09/01 và 10/01.

Xem ngày cụ thể bằng URL phát triển: /?date=2028-01-15#/lesson/css-4 (chủ đề mặc định và đã hết tuyết), /?date=2027-02-01#/overview (xuân nhưng hết tuyết). Các tham số ngày và surprise không hoạt động trong production.

## Trang trí trong bài học

lessonDecorations.css và các SeasonalAccent dùng chung được áp dụng vào tiêu đề từng phần lý thuyết, mục tiêu, bảng, thanh công cụ thực hành, nhãn trình soạn thảo/kết quả, nút sao chép/khôi phục/chạy và chuyển bài. Mọi chủ đề đều có hoa/vật trang trí tương ứng; mùa đông có băng xanh nhạt, viền xanh lam và nhũ băng trên các bề mặt này để nhìn rõ trên nền trắng. Không đặt trang trí lên textarea hoặc nội dung iframe. Nút tắt hiệu ứng và giảm chuyển động vẫn được tôn trọng.

Mốc mới: ngày 03–09/01/2027 dùng giao diện mặc định có mùa đông; đúng 00:00 ngày 10/01/2027 tại Việt Nam chuyển sang Mừng Xuân Đinh Mùi và bỏ toàn bộ băng/tuyết. Thời gian mùa xuân vẫn kết thúc hết ngày 14/02/2027.

### Bộ minh họa theo mùa
- IllustratedArtwork.tsx: bộ SVG chung cho mọi chủ đề, màu chuyển sắc, chi tiết và điểm sáng; dùng chung bảng màu để tránh lặp định nghĩa.
- Mai vàng và đào hồng có nhánh gỗ, lá, nụ, nhị hoa; xuất hiện ở góc trang tổng quan và trong tiêu đề bài học của chủ đề Tết/chào năm mới.
- Cành đung đưa, hoa chuyển động nhẹ; thu nhỏ trên điện thoại, dừng khi giảm chuyển động; tắt hiệu ứng sẽ ẩn cả cành hoa.

### Năm mới dương lịch
Lời chào: Happy New Year! {year}, năm đích giữ đúng qua giao thừa. Chủ đề xanh đêm và vàng champagne, bóng bay, đồng hồ gần nửa đêm, pháo hoa và confetti. Cành mai/đào, đèn lồng, câu đối và lì xì chỉ dùng cho chủ đề mừng xuân.

Tết bổ sung tiền vàng có lỗ vuông xoay khi rơi, xen cánh hoa, dây pháo đỏ và ảnh lân nền trong suốt tại public/images/tet-lion-dance.png. Năm mới dương lịch có chai/ly champagne và pháo hoa cách điệu, không âm thanh. Prompt tạo ảnh lân ghi tại docs/seasonal-artwork.md.

Dê Đinh Mùi dùng SVG toàn thân phong cách cắt giấy đỏ vàng (GoatPapercut.tsx), kích thước nhỏ, sừng dài và họa tiết hoa. Trang tổng quan có linh vật nhỏ ở góc dưới; lớp trang trí Tết chỉ giữ 6 điểm nhấn, lân nhún nhẹ và dê đung đưa chậm. Trên điện thoại dành khoảng riêng cho cành hoa phía trên chữ.

Bộ TetArtwork.tsx bổ sung quả dưa hấu tròn nguyên vỏ, nhãn Tết, túi tài lộc, thỏi vàng, chồng tiền và ống quẻ. SeasonalAccent chọn nhóm hình riêng theo vị trí và biến thể: tiêu đề nội dung, chú thích bảng, hộp lưu ý, ghi nhớ, thanh soạn thảo, thanh kết quả, giải thích và nút Sao chép/Khôi phục/Chạy thử/hoàn thành/chuyển bài. Các thẻ khóa học dùng hình khác nhau. Cành mai đào xen kẽ ở một số tiêu đề. Tất cả ẩn theo nút tắt hiệu ứng và không nhận thao tác chuột.

### Hiệu năng hộp Halloween
Khi trò chơi mở: dừng vòng vẽ Canvas, tạm dừng trang trí nền và chữ chạy; backdrop chỉ phủ màu, không làm mờ toàn trang. Hình SVG chỉ dựng nhánh đang dùng. Hộp có kết quả ngay sau khi chọn, nút Chơi lại, Quay lại bài học, nút × và Esc; focus chuyển đến nút quay lại khi có kết quả, khôi phục khi đóng. Khi đóng/tháo hộp, gỡ trạng thái tạm dừng và tiếp tục nền. Đã thử hai lựa chọn, chơi lại, đóng và nền trên máy tính/khung điện thoại 390px.

Trick or Treat: lần đầu và những lần sau đều chờ ngẫu nhiên 3–5 phút (180–300 giây). Khoảng chờ tiếp theo tính từ khi đóng trò chơi; vẫn hoãn khi đang nhập mã, tab ẩn hoặc có hộp thoại khác. Tham số surprise=1 chỉ mở ngay để xem thử trong môi trường phát triển.

Halloween luôn dùng giao diện tối, kể cả khi tắt trang trí. Ẩn nút chuyển sáng trong Halloween; lựa chọn sáng/tối đã lưu không bị ghi đè và được khôi phục khi sang chủ đề khác. Áp dụng trong App theo ngày/chủ đề của SeasonProvider, cập nhật trước khi vẽ giao diện.

Dê bản 2 thay nét SVG cũ bằng ảnh nền trong suốt tại public/images/tet-goat-papercut-v2.png: đường cong cổ/lưng mềm, sừng cong dài, chân nhấc nhẹ và họa tiết hoa. Giữ nguyên kích thước nhỏ và chuyển động nhẹ, không thêm phần tử nền.

### Vận hành chính thức
Chạy npm run build rồi npm start để phục vụ bản dist tại http://localhost:4173. Mặc định cả môi trường thường và bản chính thức chỉ theo ngày thật tại Việt Nam, không có bảng xem thử và không nhận các tham số holiday/date/surprise. Dành riêng cho bảo trì: npm run dev:themes mới bật lại công cụ xem thử; bản build production luôn tắt.
