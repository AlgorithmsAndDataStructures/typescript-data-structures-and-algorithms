export function groupAnagrams(strs: string[]): string[][]{
  let anagrams: { [key: string]: string[] } = {};
  let anagramList: string[][] = [];
  for (let str of strs) {
    let alphabetArray = new Array<number>(26).fill(0);
    let key = "";
    for (let i = 0; i < str.length; i++) {
      alphabetArray[str.charCodeAt(i) - "a".charCodeAt(0)] += 1;
    }
    for (let value of alphabetArray) {
      key += `#${value}`;
    }
    if (!anagrams[key]) anagrams[key] = [str];
    else anagrams[key].push(str);
  }
  for (let key in anagrams) {
    anagramList.push(anagrams[key]);
  }
  return anagramList;
}


export function trap(height: number[]): number {
  let total = 0;
  for (let i = 0; i < height.length; i++) {
    let maxHeightLeft = 0;
    let maxHeightRight = 0;
    for (let j = i-1; j >= 0; j--){
      maxHeightLeft = Math.max(maxHeightLeft, height[j]);
    }
    for (let j = i+1; j < height.length; j++){
      maxHeightRight = Math.max(maxHeightRight, height[j]);
    }
    const selectedHeight = Math.min(maxHeightLeft, maxHeightRight);
    if (selectedHeight > height[i]) {
      total += selectedHeight-height[i];
    }
  }
  return total;
};

export function trap2(height: number[]): number {
  let total = 0;
  let leftMax: number[] = new Array(height.length);
  let rightMax: number[] = new Array(height.length);
  leftMax[0] = height[0];
  for (let i = 1; i < height.length; i++) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1]);
  }
  rightMax[height.length-1] = height[height.length-1];
  for (let i = height.length-2; i >=0; i--) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1]);
  }
  for (let i = 1; i < height.length-1; i++) {
    const selectedHeight = Math.min(leftMax[i - 1], rightMax[i + 1]);
    if (selectedHeight > height[i]) {
      total += selectedHeight-height[i];
    }
  }
  return total;
};

export function trap3(height: number[]): number {
  let total = 0;
  let leftMax = 0;
  let rightMax = 0;
  let leftPosition = 0, rightPosition = height.length - 1;
  while (leftPosition < rightPosition) {
    if (height[leftPosition] < height[rightPosition]) {
      height[leftPosition] < leftMax ? total += leftMax - height[leftPosition] : leftMax = height[leftPosition];
      leftPosition++;
    } else {
      height[rightPosition] < rightMax ? total += rightMax - height[rightPosition] : rightMax = height[rightPosition];
      rightPosition--;
    }
  }
  return total;
}

export function myAtoi(s: string): number {
  let result = 0;
  let sign = 1;
  let i = 0;
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;

  while (s.charAt(i) === " ") i++;
  if (i< s.length && (s.charAt(i) === '-' || s.charAt(i) === '+')) {
    sign = s.charAt(i) === '-' ? -1 : 1;
    i++;
  }

  while (i < s.length && (s.charAt(i) >= '0' && s.charAt(i) <= '9')) {
    const digit = s.charCodeAt(i) - "0".charCodeAt(0);
    if (
      result > Math.floor(INT_MAX / 10) ||
      (result === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)
    ) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }
    result = result * 10 + (digit);
    i++;
  }

  return result * sign;
};
