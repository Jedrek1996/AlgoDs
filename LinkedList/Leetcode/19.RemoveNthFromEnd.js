/*
19. Remove Nth Node From End of List
Given the head of a linked list, remove the nth node from the end of the list and return its head.
Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head);
    let slow = dummy;
    let fast = dummy;

    // Step 1: Move fast n steps ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // Step 2: Move both until fast reaches last node (slow will be n times behind)
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    // Step 3: delete
    slow.next = slow.next.next;

    return dummy.next;
};