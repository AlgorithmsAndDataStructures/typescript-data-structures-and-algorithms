class HashTable<T>{
  hashTable: Array<Array<Array<any>>>;
  constructor(tableSize=53) {
    this.hashTable = new Array(tableSize);
  }

  private _hash(key: string, hashTableSize: number) {
    let total = 0
    let WEIRD_PRIME = 8191;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let charCode = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + charCode) % hashTableSize;
    }
    return total;
  }

  set(key: string, value: T) {
    const hash = this._hash(key, this.hashTable.length);
    if (!this.hashTable[hash]) this.hashTable[hash] = [[key, value]];
    else {
      const keyIndex = this._getKeyIndex(key);
      if (typeof keyIndex !== "undefined") this.hashTable[hash][keyIndex][1] = value;
      else this.hashTable[hash].push([key, value]);
    }
    return this.hashTable;
  }

  delete(key: string) {
    const hash = this._hash(key, this.hashTable.length);
    if (!this.hashTable[hash]) return undefined;
    const keyIndex = this._getKeyIndex(key);
    if (typeof keyIndex === "undefined") return undefined;
    this.hashTable[hash].splice(keyIndex,1);
    return true;
  }

  get(key: string) {
    const hash = this._hash(key, this.hashTable.length);
    if (!this.hashTable[hash]) return undefined;
    let i = 0;
    while (i < this.hashTable[hash].length) {
      if (this.hashTable[hash][i][0] === key) {
        return this.hashTable[hash][i][1];
      }
      i++;
    }
    return undefined;
  }

  keys() {
    let keysArr: string[] = [];
    for (const valArray of this.hashTable) {
      if(valArray)
        for (const value of valArray) {
          if(value) keysArr.push(value[0]);
        }
    }
    return keysArr;
  }

  values() {
    let valuesArr: string[] = [];
    let i = 0;
    for (const valArray of this.hashTable) {
      if(valArray)
        for (const value of valArray) {
          if(value && !valuesArr.includes(value[1]))
          valuesArr.push(value[1]);
        }
    }
    return valuesArr;
  }

  private _getKeyIndex(key: string) {
    const hash = this._hash(key, this.hashTable.length);
    if (!this.hashTable[hash]) return undefined;
    let i = 0;
    while (i < this.hashTable[hash].length) {
      if (this.hashTable[hash][i][0] === key) {
        return i;
      }
      i++;
    }
    return undefined;
  }
}

export default HashTable;
