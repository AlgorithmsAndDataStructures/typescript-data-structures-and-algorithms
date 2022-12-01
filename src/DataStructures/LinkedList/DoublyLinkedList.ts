class ListNode<T>{
  value: T;
  prev: ListNode<T>;
  next: ListNode<T>;
  constructor(value: T) {
    this.next = null;
    this.prev = null;
    this.value = value;
  }
}

class DoublyLinkedList<T>{
  head: ListNode<T>;
  tail: ListNode<T>;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: T) {
    const newNode = new ListNode<T>(value);
    if (!this._addToEmptyList(newNode)) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++;
    }
    return this.length;
  }

  pop(): T {
    if (!this.head) return undefined;
    let deletedNode: ListNode<T>;
    if (this.length === 1) deletedNode = this._clearList();
    else {
      const newTail = this.tail.prev;
      this.tail.prev = null;
      newTail.next = null;
      deletedNode = this.tail;
      this.tail = newTail;
      this.length--;
    }
    return deletedNode.value;
  }

  shift(): T {
    if (!this.head) return undefined;
    let deletedNode: ListNode<T>;
    if (this.length === 1) deletedNode = this._clearList();
    else {
      const newHead = this.head.next;
      this.head.next = null;
      newHead.prev = null;
      deletedNode = this.head;
      this.head = newHead;
      this.length--;
    }
    return deletedNode.value;
  }

  unshift(value: T) {
    const newNode = new ListNode<T>(value);
    if (!this._addToEmptyList(newNode)) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
    }
    return this.length;
  }

  setNode(position: number, value: T) {
    const nodeAtPosition = this.getNode(position);
    if (!nodeAtPosition) return undefined;
    nodeAtPosition.value = value;
    return nodeAtPosition;
  }

  insert(position: number, value: T) {
    if (position > this.length) return undefined;
    if (position === 0) return this.unshift(value);
    if (position === this.length) return this.push(value);
    const newNode = new ListNode<T>(value);
    const nodeAtPosition = this.getNode(position);
    const prevNode = nodeAtPosition.prev;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nodeAtPosition;
    nodeAtPosition.prev = newNode;
    this.length++;
    return this.length;
  }

  remove(position: number): T {
    if (position > this.length - 1) return undefined;
    if (position === 0) return this.shift();
    if (position === this.length - 1) return this.pop();
    const deletedNode = this.getNode(position);
    deletedNode.prev.next = deletedNode.next;
    deletedNode.next.prev = deletedNode.prev;
    deletedNode.prev = null;
    deletedNode.next = null;
    this.length--;
    return deletedNode.value;
  }

  printList() {
    let currentNode = this.head;
    let arr: Array<T> = [];
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr);
  }

  printReverse() {
    let currentNode = this.tail;
    let arr: Array<T> = [];
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.prev;
    }
    console.log(arr);
  }

  getNode(position: number) {
    if (position > this.length - 1) return undefined;
    let currentNode: ListNode<T> = null;
    if (position < this.length / 2) {
      currentNode = this.head;
      let counter = 0;
      while (counter < position) {
        counter++
        currentNode = currentNode.next;
      }
    } else {
      currentNode = this.tail;
      let counter = this.length-1;
      while (counter > position) {
        currentNode = currentNode.prev;
        counter--;
      }
    }
    return currentNode;
  }

  private _clearList() {
    const deletedNode = this.head;
    this.head = null;
    this.tail = null;
    this.length = 0;
    return deletedNode;
  }

  private _addToEmptyList(node: ListNode<T>) {
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
      this.length++;
      return true;
    }
    return false;
  }
}

export default DoublyLinkedList;
