/*
Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

Example 1:
Input: nums = [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

Example 2:
Input: nums = [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

Example 3:
Input: nums = [0,1,1,1,1,1,0,0,0]
Output: 6
Explanation: [1,1,1,0,0,0] is the longest contiguous subarray with equal number of 0 and 1.


[1, 0, 0, 1, 1, 1]
 i=0, nums=1 → count += 1 → count = 1 → map has 1? No → map.set(1, 0)
i=1, nums=0 → count += -1 → count = 0 → map has 0? YES → i - map.get(0) = 1 - (-1) = 2 → max = 2
i=2, nums=0 → count += -1 → count = -1 → map has -1? No → map.set(-1, 2)
i=3, nums=1 → count += 1 → count = 0 → map has 0? YES → i - map.get(0) = 3 - (-1) = 4 → max = 4
i=4, nums=1 → count += 1 → count = 1 → map has 1? YES → i - map.get(1) = 4 - 0 = 4 → max = 4
i=5, nums=1 → count += 1 → count = 2 → map has 2? No → map.set(2, 5)
*/

var contiguousArray = function (nums) {
  let map = new Map(), count = 0, max = 0;
  map.set(0, -1); // pretend count=0 happened at index -1

  for (let i = 0; i < nums.length; i++) {
    count += nums[i] === 1 ? 1 : -1;

    if (map.has(count)) {
      max = Math.max(max, i - map.get(count)); // distance between same counts = balanced subarray
    } else {
      map.set(count, i); // first time seeing this count
    }
  }

  return max;
};
