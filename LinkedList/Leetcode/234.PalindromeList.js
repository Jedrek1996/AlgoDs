/*
Given the head of a singly linked list, return true if it is a 
palindrome or false otherwise.

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false
*/

// Time Complexity: O(n) — reverses every node's pointer once
// Space Complexity: O(1) — only prev/curr/next pointers used
function reverse(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

// Time Complexity: O(n) — finds middle, reverses half, then compares pairs
// Space Complexity: O(1) — reverses second half in place, no extra storage
var isPalindrome = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  //Split and reverse
  let rev = reverse(slow);

  //Rev will be 3 2 1, head will be 1, 2 ,3 .... (dont need the rest)
  //so if
  while (rev) {
    if (head.val !== rev.val) {
      return false;
    }

    head = head.next;
    rev = rev.next;
  }
  return true;
};
