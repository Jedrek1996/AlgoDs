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
  const dummy = new ListNode(0, head); 
  let prev = dummy; 

  while (prev.next) {
    let curr = prev.next; // curr = node we're currently checking

    if (curr.next && curr.val === curr.next.val) {
      // curr has a duplicate ahead
      const dupVal = curr.val;

      while (prev.next && prev.next.val === dupVal) {
        // keep removing until dup run is gone
        prev.next = prev.next.next; // unlink the duplicate node
      }
    } else {
      prev = prev.next; // no duplicate, curr is safe so move prev forward
    }
  }

  return dummy.next; // dummy.next is the new head (skips our fake node)
};
