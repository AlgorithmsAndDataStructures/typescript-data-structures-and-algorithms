export function isMatch(s: string, p: string): boolean {
  // remove duplicate * in string
  const removedDuplicates = removeDuplicatesString(p, '*');
  const patternChecked: {[key: string]: boolean}  = {}

  return (function checkMatch(str1: string, patternMatch: string): boolean {
    if (patternChecked[`${str1},${patternMatch}`])
      return patternChecked[`${str1},${patternMatch}`];

    if (str1 === patternMatch)
      patternChecked[`${str1},${patternMatch}`] = true;
    else if (patternMatch === '*')
      patternChecked[`${str1},${patternMatch}`] = true;
    else if (!str1.length || !p.length)
      patternChecked[`${str1},${patternMatch}`] = false;
    else if (str1[0] === patternMatch[0] || patternMatch[0] === '?')
      patternChecked[`${str1},${patternMatch}`] = checkMatch(str1.slice(1), patternMatch.slice(1));
    else if (patternMatch[0] === '*')
      patternChecked[`${str1},${patternMatch}`] = checkMatch(str1.slice(1), patternMatch) || checkMatch(str1, patternMatch.slice(1));
    else
      patternChecked[`${str1},${patternMatch}`] = false;

    return patternChecked[`${str1},${patternMatch}`];
  })(s, removedDuplicates)
};

export function removeDuplicatesString(str: string, dupChar: string): string{
  let str2 = '';
  let check = false;
  for (let i = 0; i < str.length; i++){
    if (!check) {
      if(str.charAt(i) === dupChar.charAt(0)) check = true;
      str2 += str.charAt(i);
    } else {
      if (str.charAt(i) !== dupChar) {
        check = false;
        str2 += str.charAt(i);
      }
      continue;
    }
  }
  return str2;
}


export function isMatch2(s: string, p: string): boolean {
  // remove duplicate * in string
  p = removeDuplicatesString(p, '*');
  if (p === '*') return true;
  if (s === p) return true;
  if (!s.length || !p.length) return false;

  // records the point where the * last appeared
  let lastAllIndex = -1;
  // records the point we last tests the s string on the * index
  let sTmpIndex = -1
  let sIndex = 0;
  let pIndex = 0;
  while (sIndex < s.length) {
    if (pIndex < p.length && (s.charAt(sIndex) === p.charAt(pIndex) || p.charAt(pIndex) === '?')) {
      sIndex++;
      pIndex++;
    } else if (pIndex < p.length && p.charAt(pIndex) === '*') {
      if(pIndex === p.length)
      sTmpIndex = sIndex;
      lastAllIndex = pIndex;
      pIndex++;
    } else if (lastAllIndex > -1) {
      pIndex = lastAllIndex + 1;
      sIndex = sTmpIndex + 1;
      sTmpIndex = sIndex;
    } else return false;
  }

  if (pIndex === p.length - 1 && p.charAt(p.length - 1) === '*') return true;
  if (pIndex < p.length) return false;
  return true;
}


export function letterCombinations(digits: string): string[] {
  const numMap: { [key: string]: string[] } = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  };
  const list = [];

  (function makeCombination(digits: string, combination: string) {
    if (!digits.length) {
      if(combination.length)list.push(combination);
      return;
    };
    if(digits.charAt(0) < '2' || digits.charAt(0) > '9') {
      makeCombination(digits.slice(1), combination);
      return;
    }
    const letters = numMap[digits.charAt(0)];
    for (let letter of letters) {
      let comb = combination + letter;
      makeCombination(digits.slice(1), comb);
    }
  })(digits, '');
  return list;
}
