/*
Given an integer array nums, find the subarray with the largest sum, and return its sum.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Example 2:
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

i=0  cur=-2          max=-2
i=1  cur=1  (reset)  max=1
i=2  cur=-2 (-3+1)   max=1   ← -3 drags cur negative, but max stays 1
i=3  cur=4  (reset)  max=4
i=4  cur=3           max=4
i=5  cur=5           max=5
i=6  cur=6           max=6  ✓
*/

var maxSubarray = function (nums) {
  let cur = nums[0]; // current running sum
  let max = nums[0]; // best sum seen so far

  for (let i = 1; i < nums.length; i++) {
    // either extend the current subarray, or ditch it and start fresh
    cur = Math.max(nums[i], cur + nums[i]); // if current value is higher than the previous
    max = Math.max(max, cur); // store the current value
  }

  return max;
};
