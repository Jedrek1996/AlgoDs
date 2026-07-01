/*
Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.
A subarray is a contiguous part of an array.

Example 1:
Input: nums = [4,5,0,-2,-3,1], k = 5
Output: 7
Explanation: There are 7 subarrays with a sum divisible by k = 5:
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]

Example 2:
Input: nums = [5], k = 9
Output: 0
 
so we just find whatever in between can divide by 5..? Yes exactly!The prefix sums themselves don't need to divide by 5. We just need to find two prefix sums where the chunk between them divides by 5.

Eg.
nums = [4, 5, 1]

prefixSum[0] = 4   → leftover 4
prefixSum[1] = 9   → leftover 4  ← same!

chunk between them = 9 - 4 = 5  ✅ divides by 5
that chunk is just [5] sitting in the middle of the array
1. same remainder between two prefix sums = subarray between them divides by k
2. count[] tracks how many times each remainder appeared
3. result += count[remainder] = how many previous prefix sums can pair with current one

JUST CHECK HOW MANY TIMES THE REMAINDER APPEAR THATS IT.
*/

var subarraysDivByK = function (nums, k) {
  let count = new Array(k).fill(0),
    prefix = 0,
    res = 0;
  count[0] = 1;
  
  for (let num of nums) {
    prefix += num;
    let remainder = ((prefix % k) + k) % k; //Count how many times a number can divide by k eg. 16/5 = 3 R1 keep adding on
    //((-3 % 5) + 5) % 5
    // = (-2 + 5) % 5 =
    //  3 % 5 =
    //  3  ✅ positive now
    res += count[remainder];
    count[remainder]++;
  }
  return res;
}; // result = result + count[remainder] (first time is 0 next step will add)
