import Queue from "../Queue";
import Stack from "../Stack";

class Graph{
  private adjancencyList: { [key: string]: Array<string> };

  constructor() {
    this.adjancencyList = {};
  }

  addVertex(vertex: string) {
    if (!this.adjancencyList[vertex]) this.adjancencyList[vertex] = [];
  }

  addEdge(vertex1: string, vertex2: string) {
    if (!this.adjancencyList[vertex1] && !this.adjancencyList[vertex2]) return false;
    if (!this.adjancencyList[vertex1].includes(vertex2)){
      this.adjancencyList[vertex1].push(vertex2);
    }
    if (!this.adjancencyList[vertex2].includes(vertex1)){
      this.adjancencyList[vertex2].push(vertex1);
    }
    return true;
  }

  removeEdge(vertex1: string, vertex2: string) {
    if (!this.adjancencyList[vertex1] && !this.adjancencyList[vertex2]) return false;
    this.adjancencyList[vertex1] = this.adjancencyList[vertex1].filter((vertex) => vertex !== vertex2);
    this.adjancencyList[vertex2] = this.adjancencyList[vertex2].filter((vertex) => vertex !== vertex1);
    return true;
  }

  removeVertex(vertex: string) {
    if (!this.adjancencyList[vertex]) return false;
    for (const vertice of this.adjancencyList[vertex]) {
      this.removeEdge(vertice, vertex);
    }
    delete this.adjancencyList[vertex];
  }

  depthFirstSearchRecursive(start: string) {
    if (!this.adjancencyList[start] || !this.adjancencyList[start].length) return;
    let visited: { [key: string]: boolean } = {};
    let resultsList: string[] = [];
    const adjancencyList = this.adjancencyList;

    (function DFS(vertex) {
      if (!vertex) return null;
      if (visited[vertex]) return null;
      visited[vertex] = true;
      resultsList.push(vertex);
      for (const neighbor of adjancencyList[vertex]) {
        DFS(neighbor);
      }
    })(start);
    return resultsList;
  }

  depthFirstSearchIterative(start: string) {
    if (!this.adjancencyList[start] || !this.adjancencyList[start].length) return;
    let visited: { [key: string]: boolean } = {};
    let resultsList: string[] = [];
    let vertexStack: Stack<string> = new Stack<string>();
    vertexStack.push(start);
    while (vertexStack.size > 0) {
      const vertex = vertexStack.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        resultsList.push(vertex);
        for (const neighbor of this.adjancencyList[vertex]) {
          vertexStack.push(neighbor);
        }
      }
    }
    return resultsList;
  }

  breadthFirstSearch(start: string) {
    if (!this.adjancencyList[start] || !this.adjancencyList[start].length) return;
    let visited: { [key: string]: boolean } = {};
    let resultsList: string[] = [];
    let vertexStack: Queue<string> = new Queue<string>();
    vertexStack.enqueue(start);
    while (vertexStack.size > 0) {
      const vertex = vertexStack.dequeue();
      if (!visited[vertex]) {
        visited[vertex] = true;
        resultsList.push(vertex);
        for (const neighbor of this.adjancencyList[vertex]) {
          vertexStack.enqueue(neighbor);
        }
      }
    }
    return resultsList;
  }

  printAdjancencyList() {
    console.log(JSON.stringify(this.adjancencyList));
  }
}

export default Graph;
