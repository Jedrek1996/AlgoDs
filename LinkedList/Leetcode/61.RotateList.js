/*
Given the head of a linked list, rotate the list to the right by k places.

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
Example 2:
Input: head = [0,1,2], k = 4
Output: [2,0,1]
*/
var rotateRight = function (head, k) {
  // edge cases
  if (!head) return head;

  // Step 1: Find Length and Tail
  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }

  // Step 2: Find remainder, eg if 11 % 2 = 1 (1 Position to move)
  k = k % length;
  if (k === 0) return head;

  // Step 3: Find newTail (To determind the new end Position)
  let newTail = head;
  for (let i = 0; i < length - k - 1; i++) {
    newTail = newTail.next;
  }

  // Step 4:  Find the newHead
  let newHead = newTail.next;
  newTail.next = null; // Cut the newTail from the newHead
  tail.next = head; // The old tail is at the end of the list (null) so attached it to head

  return newHead;
};
