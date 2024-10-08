/* 
735. Asteroid Collision

We are given an array asteroids of integers representing asteroids in a row.
For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.
Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.


Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.
Example 3:

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

Eg.

 asteroids = [5, 10, -5].
!res.length = true, push 5 into stack
cur > 0: true, push 10 into stack
-5 doesnt mean any condition.

*/
var asteroidCollision = function (asteroids) {
  
  const res = [];

  for (let i = 0; i < asteroids.length; i++) {
    const last = res[res.length - 1];
    const cur = asteroids[i];

    //If res.length is not null (first) || last is less than 0  << || curr more than 0 >>
    //last M 0
    if (!res.length || last < 0 || cur > 0) {
      res.push(cur);
    } else if (-cur == last) {
      // -(-5) = 5 == 10? do not pop
      res.pop();
    } else if (-cur > last) {
      // -(-5) = 5 > 10? fasle do not pop 10. but -5 is gone
      res.pop();
      i--; //Since the -negative asteriod is not destroyed it will loop through the entire stack each time
    }
  }

  return res;
};
