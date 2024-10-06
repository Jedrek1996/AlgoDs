/*
24. Swap Nodes in Pairs

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Example 1:
Input: head = [1,2,3,4]
Output: [2,1,4,3]

*/

//npn next pair node
var swapPairs = function (head) {
  let dummy = new ListNode(0, head);
  let curr = dummy; // Helps to connect the end of the currs swapped pair
  let start = head; // Points to the startent node being processed.

  while (start && start.next) {
    let npn = start.next.next;
    let second = start.next;

    //Swap
    second.next = start;
    start.next = npn;
    curr.next = second;

    curr = start; // Move curr to the first (in this case [2,1] 1 is swapped from first pos)
    start = npn; // Move start to the node (like starting from head agn)
  }

  return dummy.next;
};
