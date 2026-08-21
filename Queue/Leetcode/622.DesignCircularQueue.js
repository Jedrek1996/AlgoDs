/*
622. Design Circular Queue
Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle, and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".

One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.

Implement the MyCircularQueue class:

MyCircularQueue(k) Initializes the object with the length of the queue to be k.
int Front() Gets the front item from the queue. If the queue is empty, return -1.
int Rear() Gets the last item from the queue. If the queue is empty, return -1.
boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
boolean isEmpty() Checks whether the circular queue is empty or not.
boolean isFull() Checks whether the circular queue is full or not.

 */

var ListNode = function(val, next = null) {
    this.val = val;
    this.next = next;
};

var MyCircularQueue = function(k) {
    this.maxLength = k;
    this.length = 0;
    this.head = null;
    this.tail = null;
};

//Adds value to the end (rear) of the queue.
// Time Complexity: O(1) — appends a node at the tail via pointer updates
// Space Complexity: O(1) — allocates a single new node
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) return false;
    let newNode = new ListNode(value);
    if (this.isEmpty()) {
        this.head = this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.length++;
    this.tail.next = this.head;
    return true;
};

//Removes the element from the front of the queue.
// Time Complexity: O(1) — removes the head via pointer updates
// Space Complexity: O(1) — no extra structures used
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) return false;
    if (this.head === this.tail) {
        this.head = this.tail = null;
    } else {
        this.head = this.head.next;
        this.tail.next = this.head;
    }
    this.length--;
    return true;
};

// Time Complexity: O(1) — reads the head node's value directly
// Space Complexity: O(1) — no extra structures used
MyCircularQueue.prototype.Front = function() {
    return this.isEmpty() ? -1 : this.head.val;
};

// Time Complexity: O(1) — reads the tail node's value directly
// Space Complexity: O(1) — no extra structures used
MyCircularQueue.prototype.Rear = function() {
    return this.isEmpty() ? -1 : this.tail.val;
};

// Time Complexity: O(1) — checks the stored length counter
// Space Complexity: O(1) — no extra structures used
MyCircularQueue.prototype.isEmpty = function() {
    return this.length === 0;
};

// Time Complexity: O(1) — compares the stored length counter to maxLength
// Space Complexity: O(1) — no extra structures used
MyCircularQueue.prototype.isFull = function() {
    return this.length === this.maxLength;
};
