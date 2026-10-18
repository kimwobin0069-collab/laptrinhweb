import React from 'react';
import { SeasonalAccent, SeasonalBotanical } from '../seasonal/SeasonalEffects';
import { TechnologyLogo } from './TechnologyLogo';
import { tracksInfo, roadmapSteps, studyTips } from '../data/overview';
import { TrackId, UserProgress } from '../types/lesson';
import { lessonsByTrack } from '../data/lessons';
import { IconArrowRight, IconCheckCircle } from './Icons';
interface OverviewViewProps { onStartTrack: (id: TrackId) => void; progress: UserProgress; }
export const OverviewView: React.FC<OverviewViewProps> = ({ onStartTrack, progress }) => (
  <div className="learning-home">
    <section className="home-hero">
      <SeasonalBotanical/>
      <div className="hero-copy">
        <p className="eyebrow">THPT LÊ THỊ HỒNG GẤM · HỌC LIỆU TIN HỌC</p>
        <h1>Từ dòng code đầu tiên.<br/><span>Đến website của bạn.</span></h1>
        <p>Hiểu lý thuyết bằng hình ảnh, tự tay viết mã và nhìn thấy kết quả. Khám phá HTML, CSS và JavaScript theo cách của bạn.</p>
        <button className="primary-action" onClick={() => onStartTrack('html')}>Bắt đầu học HTML <SeasonalAccent placement="button" variant={0}/><IconArrowRight size={18}/></button>
        <div className="hero-facts"><span><b>34</b> bài học</span><span><b>03</b> chặng khám phá</span><span>Thực hành ngay trên web</span></div>
      </div>
      <div className="hero-visual"><img src="/images/web-layers.png" alt="Ba lớp HTML, CSS và JavaScript kết hợp tạo thành một trang web"/><div className="visual-caption"><span className="status-dot"/> Học bằng cách tạo ra.</div></div>
    </section>
    <section className="course-section"><div className="section-heading"><div><p className="eyebrow">LỘ TRÌNH CỦA BẠN</p><h2>Ba bước để làm chủ web</h2></div><span>Đi từ nền tảng đến tương tác</span></div>
      <div className="course-grid">{(['html','css','js'] as TrackId[]).map((id, i) => { const track=tracksInfo[id]; const count=lessonsByTrack[id].filter(l=>progress.completedLessons.includes(l.id)).length; return <button key={id} className="course-card" onClick={()=>onStartTrack(id)}><SeasonalAccent placement="card" variant={i}/><div className="course-top"><span className="course-symbol course-brand"><TechnologyLogo track={id} size={40}/></span><span>0{i+1} / {track.totalLessons} bài học</span></div><h3>{['HTML · Dựng cấu trúc','CSS · Tạo phong cách','JavaScript · Thêm tương tác'][i]}</h3><p>{track.shortDescription}</p><div className="course-progress"><span style={{width:count/track.totalLessons*100+'%'}}/></div><div className="course-bottom"><span>{count > 0 ? count+' bài đã hoàn thành' : 'Sẵn sàng khám phá'}</span><IconArrowRight size={20}/></div></button>; })}</div>
    </section>
    <section className="concept-entry"><div><p className="eyebrow">HIỂU CÁCH WEB HOẠT ĐỘNG</p><h2>Từ một cú nhấp đến cả hệ thống.</h2><p>Web tĩnh, web động, DNS, máy chủ và cơ sở dữ liệu — khám phá bằng ví dụ và sơ đồ từng bước.</p></div><a className="primary-action" href="#/lesson/html-1">Khám phá cơ chế web <IconArrowRight size={18}/></a></section>
    <section className="roadmap-section"><div className="section-heading"><div><p className="eyebrow">HỌC TỪNG CHÚT, TIẾN TỪNG BƯỚC</p><h2>Một hành trình rõ ràng</h2></div></div>{roadmapSteps.map(step=><div className="roadmap-row" key={step.step}><span className="step-number">0{step.step}</span><div><h3>{step.title}</h3><p>{step.description}</p><div className="roadmap-tags">{step.highlights.map(item=><span key={item}><IconCheckCircle size={14}/>{item}</span>)}</div></div><span className="step-duration">{step.focus}</span></div>)}</section>
    <section className="study-section"><p className="eyebrow">GÓC HỌC TẬP</p><h2>Đọc. Thử. Hiểu. Nhớ.</h2><div>{studyTips.map((tip,i)=><article key={tip.title}><span>0{i+1}</span><h3>{tip.title}</h3><p>{tip.content}</p></article>)}</div></section>
  </div>
);
