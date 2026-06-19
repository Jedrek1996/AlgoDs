/*
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:
Input: nums = [1,1,1], k = 2
Output: 2

Example 2:
Input: nums = [1,2,3], k = 3
Output: 2
 How many times can the subarray of the array add up to k value.
*/

var subarraySum = function (nums, k) {
  const map = new Map();
  // prefix sum of 0 has occurred once (empty subarray before index 0)
  map.set(0, 1);

  let prefixSum = 0;
  let count = 0;
  for (const num of nums) {
    // running total so far
    prefixSum += num;
    // if (prefixSum - k) exists in map,
    // it means some subarray ending here sums to k
    count += map.get(prefixSum - k) ?? 0;

    // store this prefix sum in the map
    map.set(prefixSum, (map.get(prefixSum) ?? 0) + 1);
  }

  return count;
};
