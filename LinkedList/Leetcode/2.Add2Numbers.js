/*
Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807
 */

var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode();
  let curr = dummy;

  let total = 0;
  let carry = 0;

  while (l1 || l2 || carry) {
    total = carry;

    if (l1) {
      total += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      total += l2.val;
      l2 = l2.next;
    }

    let num = total % 10; //Remainder so if eg. 12 returns 2, if 8 returns 8
    carry = Math.floor(total / 10); //To check if there is any remainder (will reset to 0)
    
    curr.next = new ListNode(num);
    curr = curr.next;
  }
  return dummy.next;
};
