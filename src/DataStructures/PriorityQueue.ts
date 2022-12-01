import swap from "../Algorithms/sort/Swap";

class PriorityNode<T>{
  value: T;
  priority: number;
  constructor(value: T, priority: number) {
    this.value = value;
    this.priority = priority;
  }
}
class PriorityQueue<T>{
  private priorityQueue: Array<PriorityNode<T>>;

  constructor() {
    this.priorityQueue = [];
  }

  enqueue(value: PriorityNode<T>) {
    this.priorityQueue.push(value);
    this._bubbleUp();
    return this.priorityQueue;
  }

  private _bubbleUp() {
    let nodeIndex = this.size - 1;
    while (nodeIndex > 0) {
      const parentNode = this._getParentNode(nodeIndex);
      if (this.priorityQueue[parentNode].priority > this.priorityQueue[nodeIndex].priority) {
        if (parentNode === nodeIndex) return this.priorityQueue;
        swap(this.priorityQueue, parentNode, nodeIndex);
        nodeIndex = parentNode;
      } else {
        break;
      }
    }
  }

  dequeue() {
    if (this.size === 0) return null;
    const highestPriority = this.priorityQueue[0];
    const end = this.priorityQueue.pop();
    if (this.size > 0) {
      this.priorityQueue[0] = end;
      this._sinkDown();
    }
    return highestPriority.value;
  }

  private _sinkDown() {
    let nodeIndex = 0;
    while (nodeIndex < this.size) {
      const leftNodeIndex = this._getLeftNode(nodeIndex);
      const rightNodeIndex = this._getRightNode(nodeIndex);
      let maxIndex = undefined;
      if (leftNodeIndex < this.size) maxIndex = leftNodeIndex;
      if (rightNodeIndex < this.size) {
        if (!maxIndex || (this.priorityQueue[maxIndex].priority > this.priorityQueue[rightNodeIndex].priority))
          maxIndex = rightNodeIndex;
      }
      if (maxIndex && this.priorityQueue[maxIndex].priority < this.priorityQueue[nodeIndex].priority) {
        swap(this.priorityQueue, nodeIndex, maxIndex);
      } else {
        break;
      }
    }
  }


  private _getLeftNode(index: number) {
    return (2 * index) + 1;
  }

  private _getRightNode(index: number) {
    return (2 * index) + 2;
  }

  private _getParentNode(index: number) {
    if (index === 0) return 0;
    return Math.floor((index - 1) / 2);
  }

  get size() {
    return this.priorityQueue.length;
  }

  printList() {
    console.log(this.priorityQueue);
  }
}

export default PriorityQueue;
