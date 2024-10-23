/*
641. Design Circular Deque

Implement the MyCircularDeque class:

MyCircularDeque(int k) Initializes the deque with a maximum size of k.
boolean insertFront() Adds an item at the front of Deque. Returns true if the operation is successful, or false otherwise.
boolean insertLast() Adds an item at the rear of Deque. Returns true if the operation is successful, or false otherwise.
boolean deleteFront() Deletes an item from the front of Deque. Returns true if the operation is successful, or false otherwise.
boolean deleteLast() Deletes an item from the rear of Deque. Returns true if the operation is successful, or false otherwise.
int getFront() Returns the front item from the Deque. Returns -1 if the deque is empty.
int getRear() Returns the last item from Deque. Returns -1 if the deque is empty.
boolean isEmpty() Returns true if the deque is empty, or false otherwise.
boolean isFull() Returns true if the deque is full, or false otherwise.


Example 1:
Input
["MyCircularDeque", "insertLast", "insertLast", "insertFront", "insertFront", "getRear", "isFull", "deleteLast", "insertFront", "getFront"]
[[3], [1], [2], [3], [4], [], [], [], [4], []]
Output
[null, true, true, true, false, 2, true, true, true, 4]

Explanation
MyCircularDeque myCircularDeque = new MyCircularDeque(3);
myCircularDeque.insertLast(1);  // return True
myCircularDeque.insertLast(2);  // return True
myCircularDeque.insertFront(3); // return True
myCircularDeque.insertFront(4); // return False, the queue is full.
myCircularDeque.getRear();      // return 2
myCircularDeque.isFull();       // return True
myCircularDeque.deleteLast();   // return True
myCircularDeque.insertFront(4); // return True
myCircularDeque.getFront();     // return 4

*/
class MyCircularDeque {
    constructor(k) {
        this.dq = [];
        this.maxLength = k;
    }

    insertFront(value) {
        if (this.dq.length < this.maxLength) {
            this.dq.unshift(value);
            return true;
        }
        return false;
    }

    insertLast(value) {
        if (this.dq.length < this.maxLength) {
            this.dq.push(value);
            return true;
        }
        return false;
    }

    deleteFront() {
        if (this.dq.length > 0) {
            this.dq.shift();
            return true;
        }
        return false;
    }

    deleteLast() {
        if (this.dq.length > 0) {
            this.dq.pop();
            return true;
        }
        return false;
    }

    getFront() {
        return this.dq.length > 0 ? this.dq[0] : -1;
    }

    getRear() {
        return this.dq.length > 0 ? this.dq[this.dq.length - 1] : -1;
    }

    isEmpty() {
        return this.dq.length === 0;
    }

    isFull() {
        return this.dq.length === this.maxLength;
    }
}

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */