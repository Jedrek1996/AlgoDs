function nextGreaterElements(nums) {
  const n = nums.length;
  const result = new Array(n).fill(-1); // Initialize result array with -1
  const stack = []; // Stack to store indices

  for (let i = 0; i < n; i++) {
    // While stack is not empty and current element is greater than the stack's top element
    while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
      const index = stack.pop(); // Pop the index from the stack
      result[index] = nums[i]; // Update result array with next greater element
    }
    stack.push(i); // Push current index to the stack
  }

  return result;
}

/*
Example:
Let's walk through an example with the array: nums = [2, 1, 5, 6, 2, 3].
initialize array new Array(nums.length).fill(-1)

For 2: The next greater element to the right is 5.
For 1: The next greater element to the right is 5.
For 5: The next greater element to the right is 6.
For 6: There is no greater element to the right, so we return -1.
For 2: The next greater element to the right is 3.
For 3: There is no greater element to the right, so we return -1.
Final Output for the array [2, 1, 5, 6, 2, 3]:
[5, 5, 6, -1, 3, -1]

What the Monotonic Stack Does:
The monotonic stack helps efficiently find the next greater element by keeping track of indices where the next greater element hasn't been found yet. We push indices of elements onto the stack and pop them when we find a greater element. */
