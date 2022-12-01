import swap from "./Swap";

export default function selectionSort(arr){
  for(let i=0; i<arr.length-1; i++){
      let minValuePosition = i;
      for(let j=i+1; j<arr.length; j++){
          if(arr[minValuePosition]>arr[j]) minValuePosition = j;
      }
      if(minValuePosition !== i){
          swap(arr, i, minValuePosition);
      }
  }
  return arr;
}
