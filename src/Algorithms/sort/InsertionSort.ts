export default function insertionSort(arr: number[]){
  for(let i=1; i<arr.length; i++){
      let minValue = arr[i];
      for(let j=i; j>=0; j--){
          if(minValue<arr[j-1] && j !== 0){
              arr[j] = arr[j-1];
          }else{
              arr[j] = minValue;
              break;
          }
      }
  }
  return arr;
}
