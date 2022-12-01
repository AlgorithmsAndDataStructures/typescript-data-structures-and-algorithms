export function setZeroes(matrix: number[][]): number[][] {
  let column: number[] = [], row: number[] = [];
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
      if (matrix[i][j] === 0) {
        if(!row.includes(i))row.push(i);
        if(!column.includes(j))column.push(j);
      }
    }
  }

  for (let i = 0; i < row.length; i++){
    const index = row[i];
    for (let j = 0; j < matrix[index].length; j++){
      matrix[index][j] = 0;
    }
  }

  for (let i = 0; i < column.length; i++){
    const index = column[i];
    for (let j = 0; j < matrix.length; j++){
      matrix[j][index] = 0;
    }
  }
  return matrix;
};

export function setZeroes2(matrix: number[][]){
  let isCol = false;
  for (let i = 0; i < matrix.length; i++){
    if (matrix[i][0] === 0) {
      isCol = true;
    }
    for (let j = 1; j < matrix[i].length; j++){
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < matrix.length; i++){
    for (let j = 1; j < matrix[i].length; j++){
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (matrix[0][0] === 0) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }

  if (isCol) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
  return matrix
};

