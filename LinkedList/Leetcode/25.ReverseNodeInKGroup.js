/*
25. Reverse Nodes in k-Group
Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
You may not alter the values in the list's nodes, only nodes themselves may be changed.

Example 1:
Input: head = [1,2,3,4,5], k = 2  // [1,2] [3,4] reverse these 2(k) groups
Output: [2,1,4,3,5]

Example 2:
Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
*/
//Solution 1
var reverseKGroup = function (head, k) {
  // Check if there are at least k nodes remaining
  let count = 0;
  let node = head;
  while (node && count < k) {
    node = node.next;
    count++;
  }

  // If fewer than k nodes remain, return head as-is
  if (count < k) return head;

  // Reverse k nodes
  let prev = null;
  let curr = head;
  for (let i = 0; i < k; i++) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // head is now the tail of the reversed group
  // Recursively reverse the rest and connect
  head.next = reverseKGroup(curr, k);

  return prev; // prev is now the new head of this group
};

//Solution 2
var reverseKGroup = function (head, k) {
  let stack = [];
  let dummy = new ListNode(0);
  let curr = dummy;

  while (head) {
    //Push to stack if index < k && head not null
    for (let i = 0; i < k && head; i++) {
      stack.push(head);
      head = head.next; //Move to the next node in head
    }

    if (stack.length === k) {
      while (stack.length > 0) {
        curr.next = stack.pop(); //Pop and push to the dummy in reverse
        curr = curr.next; // Move onto the next curr and pop and put again (21,1) (4,3)
      }
      curr.next = head;
      /* Connecting the current curr.next to the head.
       The node(head) is still 1-2-3-4-5 BUT Because we moved the pointer head=head.next it is at 3 now so 2,1 connects to 3,4,5 and 2,1,4,3 connects to 5
       The next loop with 5 and null will be usesless since 4,3 already connected.
       */
    }
  }
  return dummy.next;
};
