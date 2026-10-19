/**
 * contentFormatter.ts
 * Bộ định dạng và làm nổi bật từ khóa, mã nguồn, khái niệm quan trọng
 * dành cho học sinh THPT học Lập trình Web (HTML, CSS, JavaScript).
 */

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

interface Candidate {
  start: number;
  end: number;
  priority: number;
  length: number;
  html: string;
}

/**
 * Biến đổi văn bản bài học thành HTML có highlight từ khóa, mã nguồn,
 * thẻ HTML, thuộc tính, thuộc tính CSS, từ khóa JS, phím tắt và khái niệm cốt lõi.
 */
export function formatContent(input: string | undefined | null): string {
  if (!input || typeof input !== 'string') return '';

  // 1. Phân tách input thành các phần HTML hợp lệ có sẵn và các đoạn văn bản thuần.
  // Các thẻ HTML hợp lệ được giữ nguyên:
  // - Liên kết chuẩn: <a href=...>...</a>
  // - Nhãn / span tùy biến: <span ...>...</span>
  // - In đậm / nghiêng: <strong>, <em>, <b>, <i>
  // - Phím / mã: <kbd ...>, <code ...>
  // - Highlight: <mark>
  // - Ngắt dòng: <br>, <hr>
  const realTagRegex = /<\/?(strong|em|mark|b|i)\b[^>]*>|<\/?(span|kbd|code)\b[^>]*>|<a\s+href=[^>]*>|<\/a>|<(br|hr)\s*\/?>/gi;

  const chunks: Array<{ type: 'html' | 'text'; content: string }> = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = realTagRegex.exec(input)) !== null) {
    if (match.index > lastIndex) {
      chunks.push({ type: 'text', content: input.substring(lastIndex, match.index) });
    }
    chunks.push({ type: 'html', content: match[0] });
    lastIndex = realTagRegex.lastIndex;
  }
  if (lastIndex < input.length) {
    chunks.push({ type: 'text', content: input.substring(lastIndex) });
  }

  // Xử lý một đoạn văn bản thuần (chưa có HTML)
  function processPlainText(text: string): string {
    if (!text) return '';

    const candidates: Candidate[] = [];

    function addMatch(pattern: RegExp, getHtml: (m: RegExpExecArray) => string, priority: number = 10) {
      const flags = pattern.flags.includes('g') ? pattern.flags : pattern.flags + 'g';
      const re = new RegExp(pattern.source, flags);
      let m: RegExpExecArray | null;
      while ((m = re.exec(text)) !== null) {
        const start = m.index;
        const end = m.index + m[0].length;
        const html = getHtml(m);
        if (html) {
          candidates.push({ start, end, priority, length: end - start, html });
        }
      }
    }

    // 1. Markdown inline code: `code`
    addMatch(/`([^`]+)`/g, (m) => `<code class="token-code">${escapeHtml(m[1])}</code>`, 100);

    // 2. Markdown bold: **text**
    addMatch(/\*\*([^*]+)\*\*/g, (m) => `<strong class="kw-bold">${escapeHtml(m[1])}</strong>`, 95);

    // 3. Các thẻ HTML được đề cập trong bài giảng (ví dụ <h1>, <p>, <a>, <img>, <!DOCTYPE html>, v.v.)
    addMatch(/<\/?([a-zA-Z0-9]+)(?:\s+[^>]*)?\/?>|<!DOCTYPE\s+html>/gi, (m) => {
      return `<code class="token-tag">${escapeHtml(m[0])}</code>`;
    }, 90);

    // 4. Phím tắt thao tác (F12, Ctrl + S, Ctrl + K, Ctrl + Shift + M, Ctrl + C, Ctrl + V, Enter, Tab, Esc)
    addMatch(/\b(Ctrl\s*\+\s*Shift\s*\+\s*[A-Z]|Ctrl\s*\+\s*[A-Za-z0-9]|F12|F11|F5)\b/g, (m) => {
      return `<kbd class="token-kbd">${m[0]}</kbd>`;
    }, 85);

    // 5. Tên tệp tin và phần mở rộng chuẩn (.html, .css, .js, index.html, style.css, script.js)
    addMatch(/\b([a-zA-Z0-9_-]+\.(html|css|js|json|png|jpg|svg))\b/g, (m) => {
      return `<code class="token-file">${m[0]}</code>`;
    }, 80);
    addMatch(/(?<=^|[\s(])(\.(html|css|js))\b/g, (m) => {
      return `<code class="token-file">${m[0]}</code>`;
    }, 79);

    // 6. Nhãn nhận diện 3 trụ cột công nghệ (HTML5, CSS3, JavaScript)
    addMatch(/\b(HTML5?)\b/g, (m) => `<span class="tech-html">${m[0]}</span>`, 76);
    addMatch(/\b(CSS3?)\b/g, (m) => `<span class="tech-css">${m[0]}</span>`, 76);
    addMatch(/\b(JavaScript)\b/g, (m) => `<span class="tech-js">${m[0]}</span>`, 76);

    // 7. Khái niệm kiến trúc mạng và nền tảng Web cốt lõi (ưu tiên từ dài trước)
    const conceptTerms = [
      'Visual Studio Code',
      'Developer Tools',
      'Cây DOM', 'DOM Tree',
      'Mô hình hộp', 'Box Model',
      'Web tĩnh', 'Web động',
      'Máy khách', 'Máy chủ',
      'Yêu cầu', 'Phản hồi',
      'Tên miền', 'Địa chỉ IP',
      'Bảng mã UTF-8',
      'Đường dẫn tương đối', 'Đường dẫn tuyệt đối',
      'Bộ chọn', 'Selector',
      'Live Server',
      'DevTools', 'Client', 'Server',
      'Request', 'Response',
      'DNS', 'HTTPS', 'HTTP', 'URL', 'DOM'
    ];
    for (const term of conceptTerms) {
      const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const pattern = new RegExp(`(?<=^|[\\s,.:;()""''/\\\\!?<>\\[\\]])(${escaped})(?=$|[\\s,.:;()""''/\\\\!?<>\\[\\]])`, 'g');
      addMatch(pattern, (m) => `<span class="token-concept">${m[1]}</span>`, 72);
    }

    // 8. Phương thức và API JavaScript thông dụng
    const jsMethods = [
      'console\\.log', 'console\\.error', 'console\\.warn',
      'document\\.getElementById', 'document\\.querySelector', 'document\\.querySelectorAll',
      'addEventListener', 'removeEventListener',
      'JSON\\.stringify', 'JSON\\.parse',
      'Math\\.floor', 'Math\\.random', 'Math\\.round',
      'parseInt', 'parseFloat',
      'localStorage', 'sessionStorage',
      'setTimeout', 'setInterval', 'clearTimeout', 'clearInterval'
    ];
    for (const method of jsMethods) {
      const pattern = new RegExp(`\\b(${method}(?:\\(\\))?)\\b`, 'g');
      addMatch(pattern, (m) => `<code class="token-js">${m[0]}</code>`, 68);
    }

    // 9. Từ khóa ngôn ngữ JavaScript
    const jsKeywords = [
      'else if', 'let', 'const', 'var', 'function', 'return',
      'if', 'else', 'for', 'while', 'switch', 'case', 'break',
      'typeof', 'true', 'false', 'null', 'undefined', 'NaN'
    ];
    for (const kw of jsKeywords) {
      const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const pattern = new RegExp(`(?<=^|[\\s,.:;()""''/\\\\!?<>\\[\\]])(${escaped})(?=$|[\\s,.:;()""''/\\\\!?<>\\[\\]])`, 'g');
      addMatch(pattern, (m) => `<code class="token-js">${m[1]}</code>`, 64);
    }

    // 10. Các thuộc tính CSS tiêu chuẩn
    const cssProps = [
      'justify-content', 'align-items', 'background-color',
      'background-image', 'font-size', 'font-family', 'font-weight',
      'border-radius', 'box-shadow', 'box-sizing', 'line-height',
      'text-align', 'text-decoration', 'flex-direction',
      'grid-template-columns', 'grid-template-rows',
      'min-width', 'max-width', 'min-height', 'max-height',
      'display', 'position', 'margin', 'padding', 'border', 'z-index', 'cursor'
    ];
    for (const prop of cssProps) {
      const escaped = prop.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const pattern = new RegExp(`(?<=^|[\\s,.:;()""''/\\\\!?<>\\[\\]])(${escaped})(?=$|[\\s,.:;()""''/\\\\!?<>\\[\\]])`, 'g');
      addMatch(pattern, (m) => `<code class="token-css">${m[1]}</code>`, 58);
    }

    // 11. Các thuộc tính HTML thông dụng (href, src, alt, class, id, target, v.v.)
    const htmlAttrs = [
      'href', 'src', 'alt', 'class', 'id', 'target',
      'placeholder', 'colspan', 'rowspan', 'action', 'method'
    ];
    for (const attr of htmlAttrs) {
      const pattern = new RegExp(`(?<=^|[\\s,.:;()""''/\\\\!?<>\\[\\]])(${attr}(?:="[^"]*")?)(?=$|[\\s,.:;()""''/\\\\!?<>\\[\\]])`, 'g');
      addMatch(pattern, (m) => `<code class="token-attr">${m[1]}</code>`, 54);
    }

    // Sắp xếp các đoạn khớp: bắt đầu tăng dần, ưu tiên độ ưu tiên cao hơn, độ dài dài hơn
    candidates.sort((a, b) => {
      if (a.start !== b.start) return a.start - b.start;
      if (a.priority !== b.priority) return b.priority - a.priority;
      return b.length - a.length;
    });

    // Lọc bỏ các đoạn bị trùng / lồng nhau
    const nonOverlapping: Candidate[] = [];
    let curEnd = 0;
    for (const cand of candidates) {
      if (cand.start >= curEnd) {
        nonOverlapping.push(cand);
        curEnd = cand.end;
      }
    }

    // Tái cấu trúc chuỗi kết quả
    let result = '';
    let idx = 0;
    for (const cand of nonOverlapping) {
      result += text.substring(idx, cand.start);
      result += cand.html;
      idx = cand.end;
    }
    result += text.substring(idx);

    return result;
  }

  // Ghép nối các phần
  let insideCodeTag = false;
  return chunks.map(chunk => {
    if (chunk.type === 'html') {
      const lower = chunk.content.toLowerCase();
      if (/^<\s*(code|kbd)\b/i.test(lower)) {
        insideCodeTag = true;
      } else if (/^<\/\s*(code|kbd)\s*>/i.test(lower)) {
        insideCodeTag = false;
      }
      return chunk.content;
    }
    if (insideCodeTag) {
      return chunk.content;
    }
    return processPlainText(chunk.content);
  }).join('');
}
