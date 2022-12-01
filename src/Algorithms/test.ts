export function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    const operations = S.split(" ");
    console.log(operations);
    let wordMachine = new WordMachine();
    for (let i = 0; i < operations.length; i++) {
        console.log(parseInt(operations[i]));
        if(operations[i] === 'DUP'){
            const result = wordMachine.duplicate();
            if(!result) return -1;
        }
    else if(operations[i] === 'POP'){
            const result = wordMachine.pop();
            if(!result) return -1;
        }
    else if(operations[i] === '-'){
            const result = wordMachine.subtruct();
            if(!result) return -1;
        }
    else if(operations[i] === '+'){
            const result = wordMachine.add();
            if(!result) return -1;
    }
        else if (parseInt(operations[i])) {
            wordMachine.push(parseInt(operations[i]));
        }
    else return -1;
    }
    return wordMachine.pop();
}

class WordMachine{
  // utilising an array to create the stack
    wordMachine = [];
    MAX_VALUE;
    MIN_VALUE;
  constructor(){
      this.wordMachine = [];
      this.MAX_VALUE = Math.pow(2,20)-1;
      this.MIN_VALUE = 0;
  }

  push(num){
      this.wordMachine.push(num);
  }

  pop(){
      return this.wordMachine.pop();
  }

  duplicate(){
      if(this.wordMachine.length){
          const lastItem = this.wordMachine[this.wordMachine.length - 1];
          this.wordMachine.push(lastItem);
          return true;
      }
      return false;
  }

  add(){
      if(this.wordMachine.length >= 2){
          const value1 = this.wordMachine.pop();
          const value2 = this.wordMachine.pop();
          const result = value1+value2;
          if(result > this.MAX_VALUE) return false;
          this.wordMachine.push(result);
          return true;
      }
      return false;
  }

  subtruct(){
      if(this.wordMachine.length >= 2){
          const value1 = this.wordMachine.pop();
          const value2 = this.wordMachine.pop();
          const result = value1-value2;
          if(result < this.MIN_VALUE) return false;
          this.wordMachine.push(result);
          return true;
      }
      return false;
  }
}
