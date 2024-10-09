/*70. Climbing Stairs
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

var climbStairs = function (n) {
  if (n <= 3) return n; //If less than 3 the steps are 3, 2, 1 accoringly

  let prev1 = 3; // If 3 steps there are 3 ways
  let prev2 = 2; // 2 steps there are 2 ways
  let cur = 0;

  //Prev1 will hold the latest value
  //Prev 2 will hold the prev step value

  //i = 3 because we already know the 3 steps so advance to step3
  for (let i = 3; i < n; i++) {
    cur = prev1 + prev2; // For the next step
    prev2 = prev1; // 3
    prev1 = cur; // 5
  }

  return cur;
};