import PriorityQueue from "../PriorityQueue";
import Queue from "../Queue";
import Stack from "../Stack";

class WeightedGraph{
  private adjancencyList: { [key: string]: Array<{node: string, weight: number}> };

  constructor() {
    this.adjancencyList = {};
  }

  addVertex(vertex: string) {
    if (!this.adjancencyList[vertex]) this.adjancencyList[vertex] = [];
  }

  addEdge(vertex1: string, vertex2: string, weight: number) {
    if (!this.adjancencyList[vertex1] && !this.adjancencyList[vertex2]) return false;
    this.adjancencyList[vertex1].push({ node: vertex2, weight });
    this.adjancencyList[vertex2].push({ node: vertex1, weight });
    return true;
  }

  printAdjancencyList() {
    for (const key in this.adjancencyList) {
      console.log(`${key}: ${JSON.stringify(this.adjancencyList[key])}`);
    }
  }

  dijkstraAlgorithm(start: string, end: string) {
    if (!this.adjancencyList[start] && !this.adjancencyList[end]) return false;
    let previousPath: { [key: string]: string } = {};
    let distances: { [key: string]: number } = {};
    let priorityPath: PriorityQueue<string> = new PriorityQueue();

    //build up distances initial state
    for (const vertex in this.adjancencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        priorityPath.enqueue({ value: vertex, priority: 0 });
      } else {
        distances[vertex] = Infinity;
      }
      previousPath[vertex] = null;
    }

    let smallest: string;
    while (priorityPath.size) {
      smallest = priorityPath.dequeue();
      if (smallest === end) {
        let currentVertex = smallest;
        let path: string[] = [];
        while (currentVertex) {
          path.push(currentVertex);
          currentVertex = previousPath[currentVertex];
        }
        return { path: path, distance: distances[smallest] };
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (const neighbour of this.adjancencyList[smallest]) {
          const currentDistance = distances[smallest] + neighbour.weight;
          if(currentDistance < distances[neighbour.node]){
            distances[neighbour.node] = currentDistance;
            previousPath[neighbour.node] = smallest;
            priorityPath.enqueue({value: neighbour.node, priority: currentDistance})
          }
        }
      }
    }
    return null;
  }

}

export default WeightedGraph;
