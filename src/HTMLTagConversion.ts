export const htmlTagConversion = (html:string): string => {
  const htmlConversion = {
    p: '\r\n',
    strong: '',
    em: '',
    u: '',
    ul: '\r\n',
    ol: '\r\n',
    li: '    * ',
    a: '',
    span: '',
    br: ' ',
  }
  const htmlSingleTags = ['br'];
  const clearStartTagConversion = ['p', 'ul', 'ol'];
  const tagStack = [];
  let text = '';
  for (let i = 0; i < html.length; i++) {
    if (html.charAt(i) === '<') {
      let tag = '';
      let tagFound = false;
      let closingTag = false;
      for (let j = i + 1; j < html.length; j++){
        if (j === i + 1 && html.charAt(j) === '/') {
          closingTag = true;
          continue;
        }
        if (!tagFound){
          if (/^[a-zA-Z]+$/.test(html.charAt(j))){
            tag += html.charAt(j);
          } else {
            if (Object.keys(htmlConversion).includes(tag)) {
              if (!htmlSingleTags.includes(tag)) {
                if (closingTag) {
                  const openingTag = tagStack.pop();
                  if (openingTag !== tag) {
                    console.error('Invalid HTML script');
                  }
                } else {
                  tagStack.push(tag);
                }
              }
              tagFound = true;
            }
          }
        }
        if (html.charAt(j) === '>') {
          if (tagFound) {
            if (!closingTag && !(clearStartTagConversion.includes(tag) && text === '')) text += htmlConversion[tag];
            if (tag === 'li' && closingTag) text += '\r\n';
          }
          i = j;
          break;
        }
      }
    } else {
      text += html.charAt(i);
    }
  }
  return text;
}
