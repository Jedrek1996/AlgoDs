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
  let left = 0; // Start of arr
  let right = height.length - 1; //End of arr
  let leftMax = height[left]; //Max height of left
  let rightMax = height[right]; //Max height of right
  let water = 0; //Water trapped

  //Essentialy bringing left and right together
  //Will keep looping as left< right
  while (left < right) {
    if (leftMax < rightMax) {
      //Left will trap eg. 1 left 2 right (We move the left as there is potentail to trap)
      left++; // find the next bar on the left side, which may be taller
      leftMax = Math.max(leftMax, height[left]); //Set the left max
      water += leftMax - height[left];
    } else {
      right--;
      rightMax = Math.max(rightMax, height[right]);
      water += rightMax - height[right];
    }
  }

  return water;
};
