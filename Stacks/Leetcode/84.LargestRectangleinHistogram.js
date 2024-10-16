/*
84. Largest Rectangle in Histogram

Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

Example 1:
Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.

Example 2:
Input: heights = [2,4]
Output: 4
*/

var largestRectangleArea = function (heights) {
  let max = 0;
  let stack = []; // Stack to store indices of the bars
  heights.push(0); // Add a 0 height to ensure last height is calculated

  for (let i = 0; i < heights.length; i++) {
    // Process until we find a shorter bar or the stack is empty
    while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
      let height = heights[stack.pop()]; // Pop the top of the stack (tallest bar)
      let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1; // Width is determined by the distance between bars
      max = Math.max(max, height * width); // Calculate and update the maximum area
    }
    stack.push(i); // Push the current bar's index onto the stack
  }

  return max;
};
