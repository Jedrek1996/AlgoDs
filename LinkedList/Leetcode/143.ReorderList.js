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

  // Step 1: Find middle
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse second half
  let first = head;
  let second = reverse(slow.next);
  slow.next = null; // cut list in half

  // Step 3: Merge alternately
  while (second) {
    let nextFirst = first.next;
    let nextSecond = second.next;

    first.next = second;
    second.next = nextFirst;

    first = nextFirst;
    second = nextSecond;
  }

  return head;
};

var reverse = function (head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

/* [1,2] [5,4,3] 
1,5,4,2,3
*/