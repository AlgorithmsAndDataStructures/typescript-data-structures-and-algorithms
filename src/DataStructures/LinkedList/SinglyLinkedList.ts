class ListNode<T>{
  next: ListNode<T>;
  value:T
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList<T>{
  head: ListNode<T>;
  tail: ListNode<T>;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add node at end of list
  push(value: T) {
    const newNode = new ListNode<T>(value);
    if (!this._addToEmptyList(newNode)) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this.length;
  }

  // remove node at end of list
  pop(): T {
    if (!this.head) return undefined;
    let deletedNode: ListNode<T>;
    if (this.length === 1) deletedNode = this._clearList()
    else {
      const newTail = this.getNode(this.length - 2);
      newTail.next = null;
      deletedNode = this.tail;
      this.tail = newTail;
      this.length--;
    }
    return deletedNode.value;
  }

  // remove node at start of list
  shift(): T {
    if (!this.head) return undefined;
    let deletedNode: ListNode<T>;
    if (this.length === 1) deletedNode = this._clearList();
    else {
      const newHead = this.head.next;
      this.head.next = null;
      deletedNode = this.head;
      this.head = newHead;
      this.length--;
    }
    return deletedNode.value;
  }

  // add element at start of list
  unshift(value: T) {
    const newHead = new ListNode<T>(value);
    if (!this._addToEmptyList(newHead)) {
      newHead.next = this.head;
      this.head = newHead;
      this.length++;
    }
    return this.length;
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

  private _clearList() {
    const deletedNode = this.head;
    this.head = null;
    this.tail = null;
    this.length = 0;
    return deletedNode;
  }

  getNode(position: number = Number.MAX_VALUE) {
    let currentNode = this.head;
    let iterator = 0;
    if (position !== Number.MAX_VALUE && position > this.length-1) return undefined;
    while (currentNode.next !== null && iterator < position) {
      currentNode = currentNode.next;
      iterator++;
    }
    return currentNode;
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
    const nodeAtPreviousPosition = this.getNode(position - 1);
    newNode.next = nodeAtPreviousPosition.next;
    nodeAtPreviousPosition.next = newNode;
    this.length++;
    return this.length;
  }

  remove(position: number): T {
    if (position > this.length-1) return undefined;
    if (position === 0) return this.shift();
    if (position === this.length - 1) return this.pop();
    const nodeAtPreviousPosition = this.getNode(position - 1);
    const nodeToRemove = nodeAtPreviousPosition.next;
    nodeAtPreviousPosition.next = nodeToRemove.next;
    nodeToRemove.next = null;
    this.length--;
    return nodeToRemove.value;
  }

  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let previousNode = null;
    let nextNode = null
    for (let i = 0; i < this.length; i++){
      nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }
    return this.head;
  }

  printList() {
    let currentNode = this.head;
    let arr:Array<T> = [];
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr);
  }
}

export default SinglyLinkedList;
