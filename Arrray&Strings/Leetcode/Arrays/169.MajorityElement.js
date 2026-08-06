/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
The input is generated such that a majority element will exist in the array.

 * How it works:
 * - If count reaches 0, we pick a new candidate
 * - Increment count if current num matches candidate
 * - Decrement count if it doesn't match
 * - The majority element will always be the candidate at the end
 */

var majorityElement = function (nums) {
  let candidate = 0;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num; 
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate;
};
