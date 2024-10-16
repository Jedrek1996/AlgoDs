/* 
82. Remove Duplicates from Sorted List II

Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

Example 1:
Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]

Example 2:
Input: head = [1,1,1,2,3

*/

//[1, 2, 3, 3, 4, 4, 5]
var deleteDuplicates = function (head) {
  let curr = head; // Current node to check duplicates
  let prev = null; // Previous node to link to unique values

  while (curr && curr.next) {
    // If next node exists and values are the same, we found duplicates
    if (curr.val === curr.next.val) {
      while (curr && curr.next && curr.val === curr.next.val) {
        curr = curr.next; // Skip duplicates
      }
      // Link prev to the next unique node (curr.next)
      prev ? (prev.next = curr.next) : (head = curr.next); // 2 is set to prev before entering loop, 2 = 4
    } else {
      prev = curr; // No duplicates found; move prev to curr
    }
    curr = curr.next; // Move to the next node
  }
  return head; // Return the updated head
};
