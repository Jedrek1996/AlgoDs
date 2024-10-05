/*
203. Remove Linked List Elements

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

Example 1:
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
Example 2:
Input: head = [], val = 1
Output: []
Example 3:
Input: head = [7,7,7,7], val = 7
Output: []
*/

// Definition for singly-linked list.
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val; // corrected from this.value to this.val
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    // added value parameter
    this.head = null;
    this.tail = null;
    this.length = 0;

    if (value !== undefined) {
      this.push(value); // Initialize the list with the head node
    }
  }

  push(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  toArray() {
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.val); // corrected from current.value to current.val
      current = current.next;
    }
    return values;
  }
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

//✨✨✨✨✨ SOLUTION ✨✨✨✨✨
let removeElements = function (head, val) {
  let newNode = new ListNode(0); // dummy node
  newNode.next = head; // point to original head
  let current = newNode; // current pointer to traverse the list

  while (current.next) {
    if (current.next.val === val) {
      // check if the next node needs to be removed
      current.next = current.next.next; // skip and replace next node
    } else {
      current = current.next; // move to the next node
    }
  }

  return newNode.next; // return the new head of the list (dummy node next)
};
//✨✨✨✨✨ END OF SOLUTION ✨✨✨✨✨

// Test function to verify the functionality
const testRemoveElements = () => {
  const list1 = new LinkedList(1);
  [2, 6, 3, 4, 5, 6].forEach((num) => list1.push(num));
  removeElements(list1.head, 6);
  console.log("List values after removal:", list1.toArray());
};

testRemoveElements();
