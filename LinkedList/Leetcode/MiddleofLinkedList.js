/*Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Example 1:
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Example 2:
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
*/
/*Explanation
    Two-Pointer Technique:

    You have two pointers, slowPointer and fastPointer, both starting at the head of the list.
    The slowPointer moves one node at a time (slowPointer.next).
    The fastPointer moves two nodes at a time (fastPointer.next.next).
    Why It Works:

    Since fastPointer is moving twice as fast as slowPointer, by the time fastPointer reaches the end of the list, slowPointer will be at the middle of the list.
    Stopping Condition:

    The loop continues until fastPointer or fastPointer.next becomes null. When that happens, it means the fastPointer has reached the end, and slowPointer is at the middle node.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode}
 * @return {ListNode}
 */

var middleNode = function (head) {
  let fastPointer = head;
  let slowPointer = head;

  while (fastPointer != null && fastPointer.next != null) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
  }
  return slowPointer;
};

/*
fastPointer !== null:
This condition ensures the loop can handle odd-length lists. 

fastPointer.next !== null:
This condition ensures the loop can handle even-length lists.
*/
