/*
Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].

Return true if there is a 132 pattern in nums, otherwise, return false.

Example 1:

Input: nums = [1,2,3,4]
Output: false
Explanation: There is no 132 pattern in the sequence.
Example 2:

Input: nums = [3,1,4,2]
Output: true
Explanation: There is a 132 pattern in the sequence: [1, 4, 2].
 */
var find132pattern = function (nums) {
  const stack = []; 
  let third = -Infinity; // best confirmed "2" (middle value) found so far

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < third) return true; // curr num is smaller than our best "2" -> found the "1", pattern complete

    while (stack.length && stack[stack.length - 1] < nums[i]) { // curr num is bigger than stack top, so top can't be a "3" anymore
      third = stack.pop(); // pop it and promote it to "third" -> it's now a confirmed "2"
    }

    stack.push(nums[i]); // curr num joins the stack as a fresh "3" candidate for future nums
  }

  return false; // no pattern found
};