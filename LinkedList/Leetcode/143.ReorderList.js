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
  let slowP = head;
  let fastP = head;

  while (fastP && fastP.next) {
    slowP = slowP.next;
    fastP = fastP.next.next;
  }

  let p1 = head;
  let p2 = reverse(slowP.next);
  slowP.next = null; //Cuts the list into half as we only reversed the second half EG. 1,2,3,6,5,4

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


let reverse = (list) => {
  let curr = list;
  let prev = null;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
