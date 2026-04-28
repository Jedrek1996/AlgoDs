/*
136. Single Number

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.



Example 1:

Input: nums = [2,2,1]

Output: 1

Example 2:

Input: nums = [4,1,2,1,2]

Output: 4

Example 3:

Input: nums = [1]

^ Cancels out matching bits (both 1s become 0), but different bits become 1.

5 ^ 2:
  101   (5 in binary)
^ 010   (2 in binary)
-----
  111  = 7 ✓
7 ^ 1:
  111   (7 in binary)
^ 001   (1 in binary)
-----
  110  = 6 ✓
6 ^ 2:
  110   (6 in binary)
^ 010   (2 in binary)
-----
  100  = 4 ✓
*/

var singleNumber = function (nums) {
  return nums.reduce((acc, num) => acc ^ num, 0);
};
