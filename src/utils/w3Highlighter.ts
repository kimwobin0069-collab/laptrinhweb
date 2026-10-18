// Tokenizer and syntax highlighter for HTML/CSS/JS in authentic W3Schools style

export function highlightW3Code(source: string, isLight: boolean = true): string {
  const colors = isLight
    ? {
        bracket: '#0000ff', // W3Schools blue for brackets < >
        tag: '#990000',     // W3Schools crimson/brown for tags
        attr: '#ea580c',    // W3Schools red/amber for attributes
        equal: '#334155',   // Slate for equal sign
        str: '#047857',     // Green for attribute values
        comment: '#059669', // Green italic for comments
        doctype: '#7c3aed', // Purple for DOCTYPE
      }
    : {
        bracket: '#38bdf8', // Sky for brackets
        tag: '#f43f5e',     // Rose for tags
        attr: '#fbbf24',    // Amber for attributes
        equal: '#94a3b8',   // Slate for equal sign
        str: '#34d399',     // Emerald for attribute values
        comment: '#94a3b8', // Slate italic for comments
        doctype: '#c084fc', // Purple for DOCTYPE
      };

  function escapeHtml(s: string): string {
    return s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // Tokenize using a single-pass regex
  const tokenRegex = /(<!--[\s\S]*?-->)|(<!DOCTYPE[\s\S]*?>)|(<\/?)([a-zA-Z0-9\-]+)((?:\s+[^>]*?)?)(\/?>)|([^<]+)/gi;

  return source.replace(tokenRegex, (match, comment, doctype, openBracket, tagName, attrs, closeBracket, text) => {
    if (comment) {
      return `<span style="color:${colors.comment};font-style:italic;">${escapeHtml(comment)}</span>`;
    }
    if (doctype) {
      return `<span style="color:${colors.doctype};font-weight:bold;">${escapeHtml(doctype)}</span>`;
    }
    if (tagName) {
      let result = '';
      if (openBracket) {
        result += `<span style="color:${colors.bracket};font-weight:bold;">${escapeHtml(openBracket)}</span>`;
      }
      result += `<span style="color:${colors.tag};font-weight:bold;">${escapeHtml(tagName)}</span>`;

      if (attrs) {
        const attrRegex = /(\s+)([a-zA-Z0-9\-:]+)(?:(=)(".*?"|'.*?'|[^\s>]+))?/g;
        result += attrs.replace(attrRegex, (_m: string, space: string, name: string, eq: string, val: string) => {
          let attrStr = space + `<span style="color:${colors.attr};font-weight:600;">${escapeHtml(name)}</span>`;
          if (eq) {
            attrStr += `<span style="color:${colors.equal};">${eq}</span>`;
          }
          if (val) {
            attrStr += `<span style="color:${colors.str};font-weight:500;">${escapeHtml(val)}</span>`;
          }
          return attrStr;
        });
      }

      if (closeBracket) {
        result += `<span style="color:${colors.bracket};font-weight:bold;">${escapeHtml(closeBracket)}</span>`;
      }
      return result;
    }
    if (text) {
      return escapeHtml(text);
    }
    return escapeHtml(match);
  });
}
