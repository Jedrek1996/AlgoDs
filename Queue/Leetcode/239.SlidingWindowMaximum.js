/*
239. Sliding Window Maximum
You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.
Example 1:
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
1 [3  -1  -3] 5  3  6  7       3
1  3 [-1  -3  5] 3  6  7       5
1  3  -1 [-3  5  3] 6  7       5
1  3  -1  -3 [5  3  6] 7       6
1  3  -1  -3  5 [3  6  7]      7
Example 2:

Input: nums = [1], k = 1
Output: [1]

*/
var maxSlidingWindow = function (nums, k) {
  const q = []; // deque to store current window
  const res = []; // result array to store max values

  for (let i = 0; i < nums.length; i++) {
    // Remove indices of elements smaller than the current element eg. [5,6] we pop 5 index
    while (q.length && nums[q[q.length - 1]] <= nums[i]) {
      q.pop(); // These elements are not useful for max calculation
    }
    // Add the current element's index to the deque
    q.push(i);
    // Remove the index at the front if it's outside the current window
    if (q[0] === i - k) q.shift(); // This element is no longer in the sliding window

    // Once we have processed the first 'k' elements, start adding max to result
    if (i >= k - 1) res.push(nums[q[0]]); // The front of the deque is the max for the current window
  }
  return res; // Return the result array with all the max values
};

var maxSlidingWindow = function (nums, k) {
  const q = [];
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    while (q.length && nums[q[q.length - 1]] <= nums[i]) {
      q.pop();
    }
    q.push(i);
    if (q[0] === i - k) q.shift();
    if (i >= k - 1) res.push(nums[q[0]]);
  }

  return res;
};
