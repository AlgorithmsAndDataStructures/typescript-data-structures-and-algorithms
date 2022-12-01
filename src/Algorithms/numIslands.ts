export function numIslands(grid: string[][]): number {
  // create an object for all nodes visited
  let visited: { [key: string]: boolean } = {};
  let islands = [];
  let count = 0;
  // loop while stack contains items
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1" && !visited[`${i},${j}`]) {
        let dfsStack: Array<Array<number>> = [];
        dfsStack.push([i, j]);
        let islandNodes = [];
        while (dfsStack.length) {
          const currentNode = dfsStack.pop();
          if (!currentNode) continue;
          const row = currentNode[0];
          const column = currentNode[1];
          islandNodes.push(`${row},${column}`);
          visited[`${row},${column}`] = true;
          // check neighbours in the row
          if (
            !(row - 1 < 0) &&
            !visited[`${row - 1},${column}`] &&
            grid[row - 1][column] === "1"
          ) dfsStack.push([row - 1, column]);
          if (
            !(row + 1 >= grid.length) &&
            !visited[`${row + 1},${column}`] &&
            grid[row + 1][column] === "1"
          ) dfsStack.push([row + 1, column]);
          // check neighbours in the column
          if (
            !(column - 1 < 0) &&
            !visited[`${row},${column - 1}`] &&
            grid[row][column - 1] === "1"
          ) dfsStack.push([row, column - 1]);
          if (
            !(column + 1 >= grid[row].length) &&
            !visited[`${row},${column + 1}`] &&
            grid[row][column + 1] === "1"
          ) dfsStack.push([row, column + 1]);
        }
        islands.push(islandNodes);
        count++;
      }
    }
  }
  console.log(islands);
  return count;
}

export function numIslandsRecussive(grid: string[][]): number {
  if(grid.length === 0) return 0;
  let count = 0;
  let visited: { [key: string]: boolean } = {};
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1" && !visited[`${i},${j}`]) {
        (function dfs(i: number, j: number) {
          if (
            i < 0 || i >= grid.length ||
            j < 0 || j >= grid[i].length ||
            grid[i][j] === "0" ||
            visited[`${i},${j}`]
          ) return;

          visited[`${i},${j}`] = true;
          dfs(i - 1, j);
          dfs(i + 1, j);
          dfs(i, j - 1);
          dfs(i, j + 1);
        })(i, j);
        count++;
      }
    }
  }
  return count;
}
