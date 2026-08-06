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
  const map = new Map();
  // remainder 0 has occurred once (empty subarray before index 0)
  map.set(0, 1);

  let prefixSum = 0;
  let count = 0;

  for (const num of nums) {
    prefixSum += num;

    // normalize remainder to always be positive (JS % can return negative)
    let remainder = ((prefixSum % k) + k) % k; //Count how many times a number can divide by k eg. 16/5 = 3 R1 keep adding on
    /*
    We need this step bcos the goddamn js modular is not the same res as the mathematically correct one
    Step 1: 7 % 5 = 2 → already positive, already correct.
    Step 2: 2 + 5 = 7 → but wait, 7 is not a valid remainder for k=5 (valid remainders are only 0,1,2,3,4). We've overshot past  the top of the range.
    Step 3: 7 % 5 = 2 → brings it back down to the correct answer.

    Step 1: prefixSum % k — get JS's raw remainder (may be negative)
    Step 2: + k — push it into positive range
    Step 3: % k — trim off any overshoot from step 2
    */

    // if this remainder has occurred before,
    // every prior occurrence pairs with this index to form a valid subarray
    count += map.get(remainder) ?? 0;

    // log this remainder
    map.set(remainder, (map.get(remainder) ?? 0) + 1);
  }

  return count;
};
