/*
Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 109 + 7.

Example 1:

Input: arr = [3,1,2,4]
Output: 17
Explanation: 
Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
Sum is 17.

Example 2:
Input: arr = [11,81,94,43,3]
Output: 444

[3]      → min = 3
[1]      → min = 1
[2]      → min = 2
[3,1]    → min = 1
[1,2]    → min = 1
[3,1,2]  → min = 1
*/

var sumSubarrayMins = function (arr) {
  const MOD = 10 ** 9 + 7; // keeps the final number from getting too big
  const stack = [-1]; // fake "wall" index, so math works even with nothing to the left
  let res = 0; // running total answer
  arr.push(0); // add a small sentinel at the end so every number gets closed out

  for (let i2 = 0; i2 < arr.length; i2++) {
    // if current number is smaller than the one on top of the stack...
    while (arr[i2] < arr[stack[stack.length - 1]]) {
      const i = stack.pop(); // this index just found its closest smaller number on the right (i2)
      const i1 = stack[stack.length - 1]; // its closest smaller number on the left
      const left = i - i1; // how many places it could start and still be the min
      const right = i2 - i; // how many places it could end and still be the min
      res += left * right * arr[i]; // add up: (how many subarrays it's the min of) × (its value)
    }
    stack.push(i2); // save this index — it might be the "closest smaller" for someone later
  }

  return res % MOD; // final answer, kept small
};
