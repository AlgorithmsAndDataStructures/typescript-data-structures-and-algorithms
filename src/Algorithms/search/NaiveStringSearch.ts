export default function naiveStringSearch(parentString, subString){
  let count = 0;
  for(let i=0; i<parentString.length; i++){
      for(let j=0; j<subString.length; j++){
          if(subString.charAt(j) !== parentString.charAt(i+j)) break;
          if(j === subString.length-1) count++;
      }
  }
  return count;
}
