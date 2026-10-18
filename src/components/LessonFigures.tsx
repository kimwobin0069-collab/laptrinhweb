interface FigureData { file: string; alt: string; caption: string; }
const figures: Record<string, FigureData[]> = {
  'web-la-gi': [{file:'browser-web-server.png',alt:'Người dùng mở trang, trình duyệt gửi HTTP Request qua Internet tới máy chủ web; máy chủ trả HTTP Response và trình duyệt hiển thị kết quả.',caption:'Trình duyệt và máy chủ web trao đổi yêu cầu và phản hồi qua Internet.'}],
  'web-tinh-web-dong': [
    {file:'static-web.png',alt:'Cơ chế web tĩnh: trình duyệt yêu cầu trang, máy chủ lấy các tệp HTML, CSS, JavaScript và hình ảnh có sẵn rồi gửi về để hiển thị.',caption:'Web tĩnh: phục vụ các tệp đã chuẩn bị trước. JavaScript vẫn có thể tạo tương tác.'},
    {file:'dynamic-web.png',alt:'Cơ chế web động: trình duyệt gửi yêu cầu, máy chủ xử lý và truy vấn cơ sở dữ liệu, nhận dữ liệu rồi trả kết quả. Ví dụ tìm kiếm bài học HTML.',caption:'Web động: ví dụ máy chủ truy vấn cơ sở dữ liệu để trả các bài học phù hợp với từ khóa.'}
  ],
  'bo-ba-cong-nghe': [{file:'html-css-javascript.png',alt:'Ba lớp tạo nên trang web: HTML xây dựng cấu trúc, CSS định dạng giao diện, JavaScript tạo tương tác.',caption:'HTML tạo cấu trúc · CSS định dạng giao diện · JavaScript tạo tương tác.'}]
};

export function LessonFigures({lessonId,sectionId}:{lessonId:string;sectionId:string}) {
  if(lessonId!=='html-1') return null;
  return <>{figures[sectionId]?.map(figure=><figure className="lesson-content-figure" key={figure.file}><a href={'/images/'+figure.file} target="_blank" rel="noreferrer" aria-label={'Mở ảnh đầy đủ: '+figure.caption}><img src={'/images/'+figure.file} alt={figure.alt} loading="lazy" width="1672" height="941"/></a><figcaption><span>{figure.caption}</span><a href={'/images/'+figure.file} target="_blank" rel="noreferrer">Xem ảnh lớn ↗</a></figcaption></figure>)}</>;
}
