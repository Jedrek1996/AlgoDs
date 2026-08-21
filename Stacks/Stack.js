
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//Stack: The first element to go in is the last one to come out.
class Stack {
  // Time Complexity: O(1) — allocates and links a single node
  // Space Complexity: O(1) — allocates one node
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  // Time Complexity: O(1) — creates a node and updates the top pointer
  // Space Complexity: O(1) — allocates one node
  push(value) {
    const newNode = new Node(value);

    if (!this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  // Time Complexity: O(1) — removes the top node via pointer update
  // Space Complexity: O(1) — no extra structures used
  pop() {
    if (this.length === 0) return undefined;
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}
