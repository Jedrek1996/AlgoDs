/*
A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

Return the head of the copied linked list.

The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
Your code will only be given the head of the original linked list.

Example 1:
Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

Example 2:
Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]

Example 3:
Input: head = [[3,null],[3,0],[3,null]]
Output: [[3,null],[3,0],[3,null]]
  */

// Time Complexity: O(n) — two passes over the list, one map lookup each
// Space Complexity: O(n) — hash map stores a copy for every node
var copyRandomList = function (head) {
  if (!head) return null;

  // Map from original node -> its copy
  //basically duplicate the list entirely firsts then map it.
  const map = new Map();

  // STEP 1: duplicate every node first (no arrows yet)
  let curr = head;
  while (curr) {
    map.set(curr, new Node(curr.val)); // just create the copy, arrows are null for now (key = the original node, value = its new copy.)
    curr = curr.next;
  }

  // STEP 2: now go back and wire up the arrows on the copies
  curr = head; // reset curr to oriignal head
  while (curr) {
    if (curr.next) map.get(curr).next = map.get(curr.next);
    if (curr.random) map.get(curr).random = map.get(curr.random);
    curr = curr.next;
  }

  return map.get(head);
};


/*if (curr.next)
→ "Is there a next node? If not, skip, nothing to do."

map.get(curr)
→ "Get me the copy of the node I'm on right now."

map.get(curr).next = ...
→ "I'm about to set that copy's .next pointer."

map.get(curr.next)
→ "Get me the copy of whatever com */