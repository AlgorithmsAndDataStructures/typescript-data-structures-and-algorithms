function prefixSurfixTableRecussive(value: string){
  let j = 0;
  let table=new Array(value.length);
  table[j] = 0;
  for(let i=1; i<value.length; i++){
    j = (function computeSurfixPosition(j, i){
      if(value[i] === value[j]) return j+1;
      if(j === 0) return j;
      return computeSurfixPosition(table[j-1], i);
    })(j, i);
    table[i] = j;
  }
  return table;
}

function prefixSurfixTableIterative(value: string){
  let j = 0;
  let table=new Array(value.length);
  table[j] = 0;
  for(let i=1; i<value.length; i++){
    do{
      if(value[i] === value[j]){
        j++;
        table[i] = j;
        break;
      }
      if(j === 0){
        table[i] = 0;
        break;
      }
      j = table[j-1];
    }while(true);
  }
  return table;
}

export function KMPStringSearchRecusive(parentString: string, subString: string){
  const prefixTable = prefixSurfixTableRecussive(subString);
  let count = 0;
  for (let i = 0, j = 0; i < parentString.length; i++){
    j = (function compareSubString(t) {
      if (parentString[i] === subString[t]) return j + 1;
      if (t === 0) return t;
      return compareSubString(prefixTable[t - 1]);
    })(j);
    if (j === subString.length) {
      j = 0;
      count++;
    }
  }
  return count;
}

export function KMPStringSearchIterative(parentString: string, subString: string){
  const prefixTable = prefixSurfixTableIterative(subString);
  let count = 0;
  for(let i=0, j=0; i<parentString.length; i++){
      do{
          if(parentString[i] === subString[j]){
              j++;
              break;
          }
          if(j === 0 ) break;
          j = prefixTable[j-1];
      }while(true);

      if(j === subString.length){
         j = 0;
         count++;
      }
  }
  return count;
}
