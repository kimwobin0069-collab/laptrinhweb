/**
 * Tiện ích hỗ trợ tìm kiếm tiếng Việt không dấu và chuẩn hóa chuỗi
 */

export function removeVietnameseTones(str: string): string {
  if (!str) return '';
  let result = str.toLowerCase();
  result = result.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  result = result.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  result = result.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  result = result.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  result = result.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  result = result.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  result = result.replace(/đ/g, 'd');
  // Combine diacritical marks
  result = result.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
  result = result.replace(/\u02C6|\u0306|\u031B/g, '');
  return result.trim();
}

/**
 * Kiểm tra chuỗi target có chứa search query hay không (hỗ trợ cả có dấu và không dấu)
 */
export function matchesSearch(target: string, query: string): boolean {
  if (!query || !query.trim()) return true;
  if (!target) return false;

  const normalizedTarget = removeVietnameseTones(target);
  const normalizedQuery = removeVietnameseTones(query);

  return (
    target.toLowerCase().includes(query.toLowerCase().trim()) ||
    normalizedTarget.includes(normalizedQuery)
  );
}

/**
 * Tạo đoạn trích dẫn (snippet) hiển thị xung quanh từ khóa tìm kiếm
 */
export function createSearchSnippet(fullText: string, query: string, maxLength: number = 100): string {
  if (!fullText) return '';
  const cleanQuery = query.trim().toLowerCase();
  const normalizedText = removeVietnameseTones(fullText);
  const normalizedQuery = removeVietnameseTones(cleanQuery);

  const idx = normalizedText.indexOf(normalizedQuery);
  if (idx === -1) {
    return fullText.slice(0, maxLength) + (fullText.length > maxLength ? '...' : '');
  }

  const start = Math.max(0, idx - 30);
  const end = Math.min(fullText.length, idx + normalizedQuery.length + 50);

  let snippet = fullText.slice(start, end);
  if (start > 0) snippet = '...' + snippet;
  if (end < fullText.length) snippet = snippet + '...';

  return snippet;
}
