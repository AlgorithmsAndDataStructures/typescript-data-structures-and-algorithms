import swap from "./Swap";

function pivotHelper(arr: number[], start: number, end: number) {
  let swapPosition = start;
  const pivotValue = arr[start];
  for (let i = start+1; i < end; i++){
    if (arr[i] < pivotValue) {
      swapPosition++;
      swap(arr, swapPosition, i);
    }
  }
  swap(arr, start, swapPosition);
  return swapPosition;
}

function quickSort(arr: number[], start:number, end:number) {
  if (start < end) {
    const pivot = pivotHelper(arr, start, end);
    //handle left side
    quickSort(arr, start, pivot);
    //handle right side
    quickSort(arr, pivot + 1, end);
  }
  return arr;
}

export default function utiliseQuickSort(arr: number[]) {
  return quickSort(arr, 0, arr.length);
}

