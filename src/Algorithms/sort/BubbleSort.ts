import swap from "./Swap";

export default function bubbleSort(arr: number[]){
  let didSwap;
  for(let i=arr.length-1; i>0; i--){
    didSwap = false;
    for (let j = 0; j < i; j++){
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        didSwap = true;
      }
    }
    if(!didSwap) break;
  }
  return arr;
}
