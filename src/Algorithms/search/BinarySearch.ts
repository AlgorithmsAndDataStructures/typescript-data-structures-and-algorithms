export function binarySearchRecussive(arr: number[], value: number, start: number, end: number){
  if(start>end) return false;
  const mid = Math.floor((end + start)/2);
  if(arr[mid] === value) return mid;
  if(arr[mid] > value)
      return binarySearchRecussive(arr, value, start, mid-1);
  if(arr[mid] < value)
      return binarySearchRecussive(arr, value, mid+1, end);
}

export function binarySearchIterative(arr: number[], value: number){
  let start = 0;
  let end = arr.length-1;

  while (start<end){
      let mid = Math.floor((end+start)/2);
      if(arr[mid] === value) return mid;
      if(arr[mid] > value) end = mid - 1;
      if(arr[mid] < value) start = mid + 1;
  }
  return false;
}
