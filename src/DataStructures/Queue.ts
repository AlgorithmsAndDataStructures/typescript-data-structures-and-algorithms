import SinglyLinkedList from "./LinkedList/SinglyLinkedList";

class Queue<T>{
  private queue: SinglyLinkedList<T>;
  constructor() {
    this.queue = new SinglyLinkedList<T>();
  }

  enqueue(value: T) {
    this.queue.push(value);
    return this.queue.length;
  }

  dequeue() {
    if (this.queue.length === 0) return null;
    return this.queue.shift();
  }

  get size() {
    return this.queue.length;
  }
}

export default Queue;
