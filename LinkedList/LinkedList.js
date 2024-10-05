class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  //Add a value ✨
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    console.log(`Pushed: ${newNode.value}`);
    return this;
  }

  //Remove the last value ✨
  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;
    //this.head is a Node thus it has next value
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    console.log(`Popped: ${temp.value}`);
    return temp; //Return this to let the person know the value removed
  }

  //Add to the front ✨
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //Remove from the front ✨
  shift() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  //Get node at a specific index ✨
  //[ 5, 6, 7, 8] If index is 2 it will stop at 6 and return 7. 5 is position 0
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  //Use get and set the current value
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(value);
    const temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return undefined;

    const before = this.get(index - 1);
    const temp = before.next;

    before.next = temp.next;
    temp.next = null;
    this.length--;

    return temp;
  }

  reverse() {
    // let temp = this.head;
    // this.head = this.tail;
    // this.tail = temp;

    let next = temp.next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

// Create a new linked list with an initial value of 4
let myLinkedList = new LinkedList(5);
console.log("Initial Linked List:", myLinkedList);

// Test the push method
myLinkedList.push(7); // Add 7 to the list
console.log("Linked List after pushing 7:", myLinkedList);

myLinkedList.push(20); // Add 20 to the list
console.log("Linked List after pushing 20:", myLinkedList);

myLinkedList.push(3); // Add 3 to the list
console.log("Linked List after pushing 3:", myLinkedList);

// Test the pop method
let poppedValue = myLinkedList.pop(); // Remove the last value (3)
console.log("Popped value:", poppedValue); // Should log 3
console.log("Linked List after popping:", myLinkedList);

// Test the unshift method
myLinkedList.unshift(100); // Add 100 to the front
console.log("Linked List after unshifting 100:", myLinkedList);

// Test the shift method
let shiftedValue = myLinkedList.shift(); // Remove the first value (100)
console.log("Shifted value:", shiftedValue); // Should log 100
console.log("Linked List after shifting:", myLinkedList);

// Test the get method
let nodeAtIndex1 = myLinkedList.get(1); // Get the node at index 1
console.log("Node at index 1:", nodeAtIndex1); // Should log the node with value 20

let settingNode = myLinkedList.set(1, 9999);
console.log("Setting node value:", myLinkedList);

let insertingNode = myLinkedList.insert(1, 12345);
console.log("Setting node value:", myLinkedList);
