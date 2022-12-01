// Memoization
export function fibonacciNumbersMemo(num: number, memo: number[]) {
  if (memo[num] !== undefined) return memo[num];
  if (num <= 2) return 1;
  const res = fibonacciNumbersMemo(num - 1, memo) + fibonacciNumbersMemo(num - 2, memo);
  memo[num] = res;
  return res;
}

// Tabulation
export function fibonacciNumbersTabulation(num: number) {
  if (num <= 2) return 1;
  var fibNums = [0, 1, 1];
  for (let i = 3; i <= num; i++){
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[num];
}

const value = "jnvdsvdsa";
value.toLowerCase();
