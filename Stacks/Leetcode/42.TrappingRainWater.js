/*Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:
  |          
3 |             
2 |                 ⬛
1 |       ⬛🟦🟦🟦⬛⬛🟦⬛   
0 |  ⬛🟦⬛⬛🟦⬛⬛⬛⬛⬛⬛
  +-------------------------------

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.*/

var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];
  let water = 0;

  while (left < right) {
    //Determine which side has the wall. If leftMax < rightMax. Right has the wall. We can subtract left[0] = 1 left[1] = 0 to 1-0 = 0as we know on the right there is a wall.
    //The shorter side's own running max is always ≤ the tallest wall confirmed on the taller side, so leftMax - height[left] (or the mirror for right) safely gives the trapped water without needing to know the far side's exact value.
    if (leftMax < rightMax) {
      leftMax = Math.max(leftMax, height[left]); //Set the left max
      water += leftMax - height[left];
      left++; // find the next bar on the left side, which may be taller
    } else {
      rightMax = Math.max(rightMax, height[right]);
      water += rightMax - height[right];
      right--;
    }
  }

  return water;
};
