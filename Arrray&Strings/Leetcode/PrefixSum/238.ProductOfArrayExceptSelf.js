/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

nums    =  [1,  2,  3,  4]

For Arr =  [1,  1,  2,  6]   ← left products (→) (ALL product will start with 1 as a placeholder. Because we cannot use the SELF index.**)
Rev Arr =  [24, 12, 4,  1]   ← right products (←)

multiply together:
[1×24, 1×12, 2×4, 6×1]
= [24,  12,   8,   6]  ✓
*/
var productExceptSelf = function (nums) {
  let res = [];
  let start = 1;

  // Left pass — push running left product into res
  for (let i = 0; i < nums.length; i++) {
    res.push(start); // store everything to the left of i
    start = start * nums[i]; // grow left product
  }

  let start2 = 1;

  // Right pass — multiply res[i] by running right product
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = start2 * res[i]; // multiply left product by right product
    start2 = start2 * nums[i]; // grow right product
  }

  return res;
};
