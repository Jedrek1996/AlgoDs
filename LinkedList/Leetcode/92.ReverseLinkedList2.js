/*
92. Reverse Linked List II
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Example 2:
Input: head = [5], left = 1, right = 1
Output: [5]
*/
var reverseBetween = function (head, left, right) {
  if (!head || left === right) return head;

  const dummy = new ListNode(0, head);
  let curr = dummy;

  // Move `curr` before the `left` position
  for (let i = 0; i < left - 1; i++) {
    curr = curr.next; // Node 1 (1)
  }

  let start = curr.next; //Node 2 (2)
  //[1,2,3,4,5]
  for (let i = 0; i < right - left; i++) {
    const nextNode = start.next; //Node 3
    start.next = nextNode.next; // 2 points to 4
    nextNode.next = curr.next; // 3 point to 2
    curr.next = nextNode; //curr.next was node 2 now moves to 3
  }

  return dummy.next;
};
