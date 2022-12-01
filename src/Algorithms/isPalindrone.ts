export function isPalindrome(s: string): boolean {
  //if (!s) return false;
  const removeSpecialChar = s.replace(/[^a-zA-Z0-9]/g, "");
  const lowerCase = removeSpecialChar.toLowerCase();
  console.log(lowerCase);
  let i=0;
  while(true){
    const j = lowerCase.length-1-i;
    if(i < j && lowerCase[i] !== lowerCase[j]) return false;
    else if(i >= j) return true;
    i++;
  }
};

// export function atoi(s: string): boolean {
//   const value = s.trim();
//   const testRegEx = new RegExp("^[\-?0-9]");
//   return testRegEx.test(value);
// }

export function reverseString(s: string[]): string[] {
  if(s.length === 0 || s.length === 1) return s;
  let i=0, j=Infinity;
  while(i<j){
      j=s.length-1-i;
      const temp = s[i];
      s[i] = s[j];
      s[j] = temp;
      i++;
  }
  return s;
};

export function reverseWords(s: string): string {
  let word = "";
  let count = 0;
  let words:string[] = [];
  for (let i = 0; i < s.length; i++) {
      if (s[i] !== " ") {
          word += s[i];
      } else if(word !== ""){
          words[count] = word;
          count++;
          word = "";
      }
      if (i === s.length - 1 && word !== "") {
          words[count] = word;
      }
  }
  let newString = "";
  for (let j = words.length-1; j >= 0; j--){
      if (j === 0) {
          newString += words[j];
      } else {
          newString += `${words[j]} `;
      }
  }
  return newString;
};

export function reverseWords2(s: string[]): void {
  let spaces = [];
  let word = new Array(s.length);
  for (let i = 0; i < s.length; i++){
    if (s[i] === " ") spaces.push(i);
  }
};

export function isValid(s: string): boolean {
  let stack = [];
  for(let i=0; i<s.length; i++){
      if(s[i] === '(' || s[i] === '{' || s[i] === '['){
          stack.push(s[i]);
      }
      if(s[i] === ')' || s[i] === '}' || s[i] === ']'){
        const value = stack.pop();
        switch (value) {
          case '(':
            if (s[i] !== ')') return false;
            break;
          case '{':
            if (s[i] !== '}') return false;
            break;
          case '[':
            if (s[i] !== ']') return false;
            break;
          default:
            return false;
        }
      }
  }
  if (stack.length > 0) return false;
  return true;
};

export function longestPalSubstr(str: string) {
  // get length of input string
  let n = str.length;

  // table[i][j] will be false if
  // substring str[i..j] is not palindrome.
  // Else table[i][j] will be true
  let table: Array<Array<number>> = new Array(n).fill(0).map(() => Array(n).fill(0));

  // All substrings of length 1 are palindromes
  let maxLength = 1;
  for (let i = 0; i < n; ++i) table[i][i] = 1;
  // check for sub-string of length 2.
  let start = 0;
  console.log(table)
  for (let i = 0; i < n - 1; ++i) {
    if (str.charAt(i) == str.charAt(i + 1)) {
      table[i][i + 1] = 1;
      start = i;
      maxLength = 2;
    }
  }
  console.log(table)
  // Check for lengths greater than 2.
  // k is length of substring
  for (let k = 3; k <= n; ++k) {

    // Fix the starting index
    for (let i = 0; i < n - k + 1; ++i) {
      // Get the ending index of substring from
      // starting index i and length k
      let j = i + k - 1;

      // checking for sub-string from ith index to
      // jth index iff str.charAt(i+1) to
      // str.charAt(j-1) is a palindrome
      if (table[i + 1][j - 1]
        && str.charAt(i) == str.charAt(j)) {
        table[i][j] = 1;

        if (k > maxLength) {
          start = i;
          maxLength = k;
        }
      }
    }
  }

  console.log(table);
  console.log("Longest palindrome substring is; ");
  console.log(str.substring(start, (start + maxLength)));

  // return length of LPS
  return maxLength;
}

