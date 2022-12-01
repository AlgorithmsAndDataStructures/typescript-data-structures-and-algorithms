function merge(arr1, arr2){
  let i = 0, j=0;
  let mergedArray = [];
  while (i < arr1.length && j < arr2.length) {
      if(arr1[i] <= arr2[j]){
          mergedArray.push(arr1[i]);
          i = i+1;
      }else{
          mergedArray.push(arr2[j]);
          j = j+1;
      }
  }
  while(i < arr1.length){
      mergedArray.push(arr1[i]);
      i++;
  }
  while(j < arr2.length){
      mergedArray.push(arr2[j]);
      j++;
  }
  return mergedArray;
}

function mergeSort(arr, start, end){
  if(start === end){
      if(arr[start]) return [arr[start]];
      return [];
  }
  let mid = Math.floor((start+end)/2);
  const leftSide = mergeSort(arr, start, mid);
  const rightSide = mergeSort(arr, mid+1, end);
  return merge(leftSide, rightSide);
}

export default function utiliseMergeSort(arr){
  return mergeSort(arr, 0, arr.length);
}
