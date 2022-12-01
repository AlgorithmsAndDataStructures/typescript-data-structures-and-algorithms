import swap from "../Algorithms/sort/Swap";

class MaxBinaryHeapNode<T>{
  private binaryHeap: Array<T>;

  constructor() {
    this.binaryHeap = [];
  }

  push(value: T) {
    this.binaryHeap.push(value);
    this._bubbleUp();
    return this.binaryHeap;
  }

  private _bubbleUp() {
    let nodeIndex = this.size - 1;
    while (nodeIndex > 0) {
      const parentNode = this._getParentNode(nodeIndex);
      if (this.binaryHeap[parentNode] < this.binaryHeap[nodeIndex]) {
        if (parentNode === nodeIndex) return this.binaryHeap;
        swap(this.binaryHeap, parentNode, nodeIndex);
        nodeIndex = parentNode;
      } else {
        break;
      }
    }
  }

  extractMax() {
    if (this.size === 0) return null;
    const maxValue = this.binaryHeap[0];
    const end = this.binaryHeap.pop();
    if (this.size > 0) {
      this.binaryHeap[0] = end;
      this._sinkDown();
    }
    return maxValue;
  }

  private _sinkDown() {
    let nodeIndex = 0;
    while (nodeIndex < this.size) {
      const leftNodeIndex = this._getLeftNode(nodeIndex);
      const rightNodeIndex = this._getRightNode(nodeIndex);
      let maxIndex = undefined;
      if (leftNodeIndex < this.size) maxIndex = leftNodeIndex;
      if (rightNodeIndex < this.size) {
        if (!maxIndex || (this.binaryHeap[maxIndex] < this.binaryHeap[rightNodeIndex]))
          maxIndex = rightNodeIndex;
      }
      if (maxIndex && this.binaryHeap[maxIndex] > this.binaryHeap[nodeIndex]) {
        swap(this.binaryHeap, nodeIndex, maxIndex);
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
    return this.binaryHeap.length;
  }

  printList() {
    console.log(this.binaryHeap);
  }
}

export default MaxBinaryHeapNode;
