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

/* @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

//Will need to create a new node as the first node might be removed.
let removeElements = function (head, val) {
  let newNode = new ListNode(0, head);
  let curr = newNode;

  while (curr && curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return newNode.next;
};
