class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  // Time Complexity: O(1) — appends using the tracked tail pointer
  // Space Complexity: O(1) — creates a single new node
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Time Complexity: O(1) — tail's prev pointer gives direct access, no traversal needed
  // Space Complexity: O(1) — no extra allocation
  pop() {
    if (this.length === 0) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  // Time Complexity: O(1) — new node just replaces the head pointer
  // Space Complexity: O(1) — creates a single new node
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // Time Complexity: O(1) — head pointer advances using the next node's link
  // Space Complexity: O(1) — no extra allocation
  shift() {
    if (this.length === 0) {
      return undefined;
    }
    let temp = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      temp.next = null;
      this.head.prev = null;
    }
    this.length--;
    return temp;
  }

  // Time Complexity: O(n) — walks from whichever end (head or tail) is closer to the index
  // Space Complexity: O(1) — only a temp pointer and loop counter
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp;
    if (index < this.length / 2) {
      temp = this.head;
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }

  // Time Complexity: O(n) — delegates to get(), which walks the list
  // Space Complexity: O(1) — no extra allocation
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  // Time Complexity: O(n) — calls get() to locate the node at the index
  // Space Complexity: O(1) — creates a single new node
  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;

    let after = this.get(index);
    let before = after.prev;
    let newNode = new Node(value);

    newNode.prev = before;
    newNode.next = after;
    after.prev = newNode;
    before.next = newNode;

    this.length++;
    return true;
  }

  // Time Complexity: O(n) — calls get() to locate the node at the index
  // Space Complexity: O(1) — only pointer updates, no extra allocation
  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return null;

    let temp = this.get(index);

    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.next = null;
    temp.prev = null;

    this.length--;
    return temp;
  }
}

let newDoublyLinkedList = new DoublyLinkedList(100);
newDoublyLinkedList.push(3);
newDoublyLinkedList.push(22);
newDoublyLinkedList.push(23);
newDoublyLinkedList.push(2555);
// newDoublyLinkedList.shift();
console.log(newDoublyLinkedList.get(1));
// console.log(newDoublyLinkedList);
