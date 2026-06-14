/*
Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that:

0 <= i, j, k, l < n
nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
 

Example 1:

Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
Output: 2
Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
Loop through both arrays we split into A+B C+D. Doesn't matter which index, we store all possible outputs from both sides. Both outputs should equal to 0.
*/

var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let map = new Map();
  let count = 0;

  for (const a of nums1) {
    for (const b of nums2) {
      const sum = a + b;
      map.set(sum, (map.get(sum) ?? 0) + 1);
    }
  }

  for (const c of nums3) {
    for (const d of nums4) {
      count += map.get(-(c + d)) ?? 0;
    }
  }
  return count;
};
