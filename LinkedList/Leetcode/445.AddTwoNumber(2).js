/**
 * 445. Add Two Numbers II
You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [7,2,4,3], l2 = [5,6,4]
Output: [7,8,0,7]

Example 2:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [8,0,7]

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  let stackA = [];
  let stackB = [];

  while (l1) {
    stackA.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    stackB.push(l2.val);
    l2 = l2.next;
  }

  let dummy = new ListNode(0);
  let curr = dummy;
  let carry = 0;

  while (stackA.length || stackB.length || carry) {
    let a = stackA.pop() || 0;
    let b = stackB.pop() || 0;

    let total = b + a + carry;
    let num = total % 10;
    carry = Math.floor(total / 10);

    let newNode = new ListNode(num);
    curr.next = newNode; 
    curr = newNode;
  }
  return dummy.next;
};
