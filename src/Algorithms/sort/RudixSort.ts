function getDigitAtIndex(num: number, index: number) {
  //index for the numbers starts from right to left;
  return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
}

function computeNumberSize(num: number) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num)))+1;
}

function computeMaximumSize(arr: number[]) {
  let maximumSize = 0;
  for (let i = 0; i < arr.length; i++){
    maximumSize = Math.max(maximumSize, computeNumberSize(arr[i]))
  }
  return maximumSize;
}

export default function rudixSort(arr: number[]) {
  const maxNumberSize = computeMaximumSize(arr);
  for (let j = 0; j < maxNumberSize; j++){
    let rudixBucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++){
      const arrayPosition = getDigitAtIndex(arr[i], j);
      rudixBucket[arrayPosition].push(arr[i]);
    }
    arr = [].concat(...rudixBucket);
  }
  return arr;
}
