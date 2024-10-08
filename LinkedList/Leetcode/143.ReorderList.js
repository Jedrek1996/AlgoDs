/*143. Reorder List
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Example 1:
Input: head = [1,2,3,4]
Output: [1,4,2,3]
Example 2:
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]

** BASICALLY SPLITTING THE LIST INTO HALF, ADD IT BACKWARDS ALTERNATING
*/

var reorderList = function (head) {
  if (!head || !head.next) return; 

  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let curr = slow.next;
  while (curr) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  slow.next = null; 

  // Merge the two halves
  let p1 = head; 
  let p2 = prev; 

  // Cannot use p1 = p1.next and p2 = p2.next as it will override.
  //[1,2,3] [6,5,4]
  while (p1 && p2) {
    let nextP1 = p1.next; // Save this 2 values to reset to point next
    let nextP2 = p2.next; // 5

    p1.next = p2; // Link the current node from the first half to the second half
    p2.next = nextP1; // Link the current node from the second half back to the first half

    p1 = nextP1; // Move to the next node in the first half
    p2 = nextP2; // Move to the next node in the second half
  }

  return head; // Return the head of the reordered list
};
