/*155. Min Stack
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

Example 1:
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
*/

/*
Example structure
[
    { value: 12, min:12 },
    { value: 15, min:12 }
]

*/

// Time Complexity: O(1) — just initializes an empty array
// Space Complexity: O(1) — no elements stored yet
var MinStack = function () {
  this.stack = []; //💡💡
};

/**
 * @param {number} val
 * @return {void}
 */
// Time Complexity: O(1) — compares against last stored min and pushes
// Space Complexity: O(1) — adds one object to the underlying array
MinStack.prototype.push = function (min) {
  //💡💡
  this.stack.push({
    value: min,
    min: this.stack.length === 0 ? min : Math.min(min, this.getMin()),
  });
};

/**
 * @return {void}
 */
// Time Complexity: O(1) — removes the last element from the array
// Space Complexity: O(1) — no extra space used
MinStack.prototype.pop = function () {
  this.stack.pop(); //💡💡
};

/**
 * @return {number}
 */
// Time Complexity: O(1) — reads the last element's value
// Space Complexity: O(1) — no extra space used
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1].value; //💡💡
};

/**
 * @return {number}
 */
// Time Complexity: O(1) — min is precomputed and stored per stack entry
// Space Complexity: O(1) — no extra space used
MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1].min; //💡💡 Since the min value is always calculated on push we can just retrieve the obj value
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
