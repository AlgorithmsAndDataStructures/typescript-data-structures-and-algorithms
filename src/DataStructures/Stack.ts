import SinglyLinkedList from "./LinkedList/SinglyLinkedList";

class Stack<T>{
  stack: SinglyLinkedList<T>;
  constructor() {
    this.stack = new SinglyLinkedList<T>();
  }

  push(value: T) {
    this.stack.unshift(value);
    return this.stack.length;
  }

  pop() {
    if (this.stack.length === 0) return null;
    return this.stack.shift();
  }

  peek() {
    if (this.stack.length === 0) return null;
    return this.stack.getNode(0);
  }

  get size() {
    return this.stack.length;
  }
}

export default Stack;
