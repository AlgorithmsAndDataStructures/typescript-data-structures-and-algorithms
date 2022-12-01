export function removeDuplicates(nums: number[]): number {
  // set two counters
  let i=0;
  // first counter iterates through the array, the second increases by 1 and changes the value in that position when the second first counter meets a value not equal to the second;
  for(let j=1; j<nums.length; j++){
      if(nums[i] !== nums[j]){
          i++;
          nums[i] = nums[j];
      }
  }
  console.log(i);
  // pop all the values from the first counter to the end of the string
  while (nums.length !== i + 1) {
    nums.pop();
  }
  return nums.length;
};

export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = 0; i < m + n; i++) {
    if (i >= m) {
      console.log(nums1);
      nums1[i] = nums2[i - m];
    } else {
      if (nums2[0] < nums1[i]) {
        const temp = nums1[i];
        nums1[i] = nums2[0];
        let position = 0;
        for (let j = 1; j < n; j++) {
          console.log(nums2[j] < nums2[j - 1]);
          if (nums2[j] < temp) {
            nums2[j - 1] = nums2[j];
            position = j;
          } else break;
        }

        nums2[position] = temp;
        console.log(nums2);
      }
    }
  }
}

export function merge2(nums1: number[], m: number, nums2: number[], n: number): void {
  let position = m + n - 1;
  m = m - 1;
  n = n - 1;
  while (n !== -1) {
    if (nums1[m] > nums2[n]) {
      nums1[position] = nums1[m];
      m--;
    } else {
      nums1[position] = nums2[n];
      n--;
    }
    position--;
  }
}

export function findMin(nums: number[]): number {
  if (nums[0] <= nums[nums.length - 1]) return nums[0];
  const min = (function binarySearch(start, end): number {
    if (start === end) return nums[start];
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] < nums[mid - 1]) {
      return nums[mid];
    }
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid+1]
    }
    if (nums[mid] >= nums[0]) {
      return binarySearch(mid+1, end);
    }
    else {
      return binarySearch(start, mid-1)
    }
  })(0, nums.length);
  return min;
}

export function findMin2(nums: number[]): number {
  if(nums[0] <= nums[nums.length-1]) return nums[0];
  let start = 0;
  let end = nums.length;
  while(start !== end){
      const mid = Math.floor((start + end)/2);
      if(nums[mid] < nums[mid-1]){
          return nums[mid];
      }
      if(nums[mid] > nums[mid+1]){
          return nums[mid+1];
      }
      if(nums[mid] >= nums[0]){
          start = mid + 1;
      }else {
          end = mid - 1;
      }
  }
  return nums[start];
};

export function searchMatrix(matrix: number[][], target: number): boolean {
  return (function searchColumn(startC: number, endC: number): boolean{
      if(startC === endC) return false;
      const mid = Math.floor((startC+endC)/2);
      if(target < matrix[mid][0]){
          return searchColumn(startC, mid);
      }else if(target > matrix[mid][matrix[mid].length - 1]){
          return searchColumn(mid+1, endC);
      }else{
          return (
              function searchRow(column: number, startR: number, endR: number): boolean{
                  if(startR === endR) return false;
                  const midR = Math.floor((startR+endR)/2);
                  if(target < matrix[column][midR])
                      return searchRow(column, startR, midR);
                  else if(target > matrix[column][midR])
                      return searchRow(column, midR+1, endR);
                  else
                      return true;
              }
          )(mid, 0, matrix[mid].length);
      }
  })(0, matrix.length)
};

export function longestBinaryGap(num: number) {
  const binaryArray = convertToBinary(num);
  let isGap = false;
  let longestBinaryGap = 0;
  let binaryGap = 0;
  while(binaryArray.length){
    const num = binaryArray.pop();
    if(num === 1 && isGap){
      if(binaryGap > longestBinaryGap) longestBinaryGap = binaryGap;
      binaryGap = 0;
      isGap = false;
    }
    if(num === 0){
      if(!isGap) isGap = true;
      binaryGap++;
    }
  }
  return longestBinaryGap;
}

export function convertToBinary(N: number){
  let num = N
  let arr = [];
  while(num !== 1){
      arr.push(num%2);
      num = Math.floor(num/2);
  }
  arr.push(num);
  return arr;
}

export function lengthNumber(num: number) {
  return Math.floor(Math.log10(num))+1
}

export function getNumberAtPosition(num: number, position: number) {
  return Math.floor(num / Math.pow(10, position)) % 10;
}
