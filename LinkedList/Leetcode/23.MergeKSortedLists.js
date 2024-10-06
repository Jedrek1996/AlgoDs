/*
23. Merge k Sorted Lists
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.

* Definition for singly-linked list.
* function ListNode(val, next) {
    *     this.val = (val===undefined ? 0 : val)
    *     this.next = (next===undefined ? null : next)
    * }
*

* @param {ListNode[]} lists
* @return {ListNode}

Example 1:
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
    1->4->5,
    1->3->4,
    2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

Example 2:
Input: lists = []
Output: []
Example 3:
Input: lists = [[]]
Output: []

*/

var mergeKLists = function (lists) {
  if (lists.length === 0) return null;

  while (lists.length > 1) {
    a = lists.shift();
    b = lists.shift();

    merged = mergeLists(a, b);
    lists.push(merged);
  }
  return lists[0];
};

let mergeLists = (listA, listB) => {
  let dummy = new ListNode();
  let curr = dummy;

  while (listA && listB) {
    if (listA.val < listB.val) {
      curr.next = listA;
      listA = listA.next;
    } else {
      curr.next = listB;
      listB = listB.next;
    }
    curr = curr.next;
  }

  curr.next = listA || listB;
  return dummy.next;
};
