class Matrix {
  matrix: Array<Array<string>>;
  columnSize: number;
  rowSize: number;
  constructor(columnSize: number, rowSize: number) {
    this.columnSize = columnSize;
    this.rowSize = rowSize;
    this.matrix = new Array<Array<string>>(columnSize).fill([]).map(() => Array(rowSize));
  }

  addSampleData() {
    for (let i = 0; i < this.columnSize; i++) {
      for (let j = 0; j < this.rowSize; j++) {
        this.matrix[i][j] = `${i}${j}`;
      }
    }
  }

  printMatrix() {
    console.log(this.matrix);
  }

  rotateMatrixClockWise(): string[][] {
    // transpose matrix
    let rotatedMatrix = this.transposeMatrix(this.matrix);
    //reflect matrix
    return this.reflectMatrix(rotatedMatrix);
  };

  rotateMatrixAntiClockWise(): string[][] {
    // reflect matrix
    let rotatedMatrix = this.reflectMatrix(this.matrix);
    // transpose matrix
    return this.transposeMatrix(rotatedMatrix);
  };

  reflectMatrix(matrix: string[][]): string[][] {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length / 2; j++) {
        let tmp = matrix[i][j];
        matrix[i][j] = matrix[i][matrix[i].length - j - 1];
        matrix[i][matrix[i].length - j - 1] = tmp;
      }
    }
    return matrix;
  }


  transposeMatrix(matrix: string[][]): string[][] {
    const columnSize = matrix.length;
    const rowSize = matrix[0].length;
    let transposedMatrix = new Array<Array<string>>(rowSize).fill([]).map(() => Array(columnSize));
    if (columnSize <= rowSize) {
      for (let i = 0; i < columnSize; i++) {
        for (let j = i; j < rowSize; j++) {
          if (i === j) transposedMatrix[i][j] = matrix[i][j];
          else {
            if (j < columnSize && i < rowSize)
              transposedMatrix[i][j] = matrix[j][i];
            if (i < columnSize && j < rowSize)
              transposedMatrix[j][i] = matrix[i][j];
          }
        }
      }
    } else {
      for (let i = 0; i < columnSize; i++) {
        for (let j = 0; j <= i && j < rowSize; j++) {
          if (i === j) transposedMatrix[i][j] = matrix[i][j];
          else {
            if (j < columnSize && i < rowSize)
              transposedMatrix[i][j] = matrix[j][i];
            if (i < columnSize && j < rowSize)
              transposedMatrix[j][i] = matrix[i][j];
          }
        }
      }
    }
    return transposedMatrix;
  }

  spiralOrder(): number[] {
    let visited: { [key: string]: true } = {};
    let arr = [];
    let i = 0, j = 0, row = true, rowLimit = 0, columLimit = 0;
    while (true) {
      if (row) {
        if (j === rowLimit) {
          while (j < this.matrix[i].length - rowLimit) {
            if (visited[`${i}${j}`]) return arr;
            visited[`${i}${j}`] = true;
            arr.push(this.matrix[i][j]);
            j++;
          }
          row = false;
          j--;
        } else {
          while (j >= rowLimit) {
            if (visited[`${i}${j}`]) return arr;
            visited[`${i}${j}`] = true;
            arr.push(this.matrix[i][j]);
            j--;
          }
          row = false;
          columLimit++;
          j++;
        }
      }
      else {
        if (i === columLimit) {
          i++;
          while (i < this.matrix.length - columLimit) {
            if (visited[`${i}${j}`]) return arr;
            visited[`${i}${j}`] = true;
            arr.push(this.matrix[i][j]);
            i++;
          }
          row = true;
          i--;
          j--;
        } else {
          i--;
          while (i >= columLimit) {
            if (visited[`${i}${j}`]) return arr;
            visited[`${i}${j}`] = true;
            arr.push(this.matrix[i][j]);
            i--;
          }
          row = true;
          rowLimit++;
          i++;
          j++;
        }
      }
    }
    return arr;
  };
}

export default Matrix;

export function spiralOrder(matrix: number[][]): number[] {
  let visited: { [key: string]: true } = {};
  let arr = [];
  let i = 0, j = 0, row = true, rowLimit = 0, columLimit = 0;
  while (true) {
    if (row) {
      if (j === rowLimit) {
        console.log(`This happens 1`);
        while (j < matrix[i].length - rowLimit) {
          if (visited[`${i}${j}`]) return arr;
          visited[`${i}${j}`] = true;
          arr.push(matrix[i][j]);
          j++;
        }
        row = false;
        j--;
      } else {
        console.log(`This happens 3`);
        while (j >= rowLimit) {
          if (visited[`${i}${j}`]) return arr;
          visited[`${i}${j}`] = true;
          arr.push(matrix[i][j]);
          j--;
        }
        row = false;
        columLimit++;
        j++;
      }
    }
    else {
      if (i === columLimit) {
        console.log(`This happens 2`);
        i++;
        while (i < matrix.length - columLimit) {
          if (visited[`${i}${j}`]) return arr;
          visited[`${i}${j}`] = true;
          arr.push(matrix[i][j]);
          i++;
        }
        row = true;
        i--;
        j--;
      } else {
        console.log(`This happens 4`);
        i--;
        while (i >= columLimit) {
          if (visited[`${i}${j}`]) return arr;
          visited[`${i}${j}`] = true;
          arr.push(matrix[i][j]);
          i--;
        }
        row = true;
        rowLimit++;
        i++;
        j++;
      }
    }
  }
  return arr;
};
