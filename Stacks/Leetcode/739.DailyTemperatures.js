/*
739. Daily Temperatures
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]

*/

var dailyTemperatures = function (temperatures) {
  const stack = [];
  // Store number of days until a warmer temperature is found
  const result = new Array(temperatures.length).fill(0);

  // Loop through each day in the temperatures array
  for (let i = 0; i < temperatures.length; i++) {
    // While the stack is not empty and the current temperature is greater
    // than the temperature at the index stored at the top of the stack
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      // Pop the index from the stack
      const idx = stack.pop();
      // Calculate the difference between the current index (i) and the popped index (idx)
      // This gives the number of days until a warmer temperature
      result[idx] = i - idx;
    }
    // Push the current index (i) onto the stack to find a warmer day later
    stack.push(i);
  }
  return result;
};
