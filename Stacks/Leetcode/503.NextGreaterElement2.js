/*
Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

 

Example 1:
Input: nums = [1,2,1]
Output: [2,-1,2]
Explanation: The first 1's next greater number is 2; 
The number 2 can't find next greater number. 
The second 1's next greater number needs to search circularly, which is also 2.

Lap 1 = compare + add people. Lap 2 = same comparing, but stop adding — just give leftover people from lap 1 a second chance to find a bigger match, using the array from the start again.
*/

var nextGreaterElements = function (nums) {
  const n = nums.length;
  const res = Array(n).fill(-1);
  const stack = [];

  for (let i = 0; i < 2 * n; i++) {
    const num = nums[i % n];

    /*
        
i=0 → 0%5=0 → nums[0] = 3
i=1 → 1%5=1 → nums[1] = 2
i=2 → 2%5=2 → nums[2] = 5
i=3 → 3%5=3 → nums[3] = 1
i=4 → 4%5=4 → nums[4] = 4

i=5 → 5%5=0 → nums[0] = 3   ← wraps back to start!
i=6 → 6%5=1 → nums[1] = 2   ← wraps back!
i=7 → 7%5=2 → nums[2] = 5   ← wraps back!
i=8 → 8%5=3 → nums[3] = 1
i=9 → 9%5=4 → nums[4] = 4 
*/
    while (stack.length && nums[stack[stack.length - 1]] < num) {
      //nums[stack[stack.length - 1]] get top value of stack via index
      res[stack.pop()] = num;
    }
    if (i < n) stack.push(i); // makes sure each real array position (0 to n-1) only ever gets pushed into the stack ONCE — during lap 1. Lap 2 reuses those same values just to check against leftover waiters, without polluting the stack with duplicates.
  }

  return res;
};
