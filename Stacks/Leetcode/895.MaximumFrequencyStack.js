/*Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack.

Implement the FreqStack class:
FreqStack() constructs an empty frequency stack.
void push(int val) pushes an integer val onto the top of the stack.
int pop() removes and returns the most frequent element in the stack.
If there is a tie for the most frequent element, the element closest to the stack's top is removed and returned.
 
Example 1:
Input:
["FreqStack", "push", "push", "push", "push", "push", "push", "pop", "pop", "pop", "pop"]
[[], [5], [7], [5], [7], [4], [5], [], [], [], []]
Output
[null, null, null, null, null, null, null, 5, 7, 5, 4]

Explanation
FreqStack freqStack = new FreqStack();
freqStack.push(5); // The stack is [5]
freqStack.push(7); // The stack is [5,7]
freqStack.push(5); // The stack is [5,7,5]
freqStack.push(7); // The stack is [5,7,5,7]
freqStack.push(4); // The stack is [5,7,5,7,4]
freqStack.push(5); // The stack is [5,7,5,7,4,5]
freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
freqStack.pop();   // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
freqStack.pop();   // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7].
 */

// Time Complexity: O(1) — initializes an empty map and array
// Space Complexity: O(1) — no elements stored yet
var FreqStack = function () {
  this.fmap = new Map(); // stores value -> its current frequency
  this.stack = []; // index = frequency, value = list of nums pushed at that frequency
};

// Val is the exact value
// Time Complexity: O(1) — map update plus a push onto the freq bucket
// Space Complexity: O(1) — adds one entry to the current freq's bucket
FreqStack.prototype.push = function (val) {
  let freq = (this.fmap.get(val) ?? 0) + 1; // increase freq of val by 1
  this.fmap.set(val, freq); // save updated freq

  if (!this.stack[freq]) this.stack[freq] = [];
  this.stack[freq].push(val); // no list yet at this freq, create one
};
/*
    diff val will be stored together if it is similar freq. eg. 
    stack[1] = [5, 7, 4]
    stack[2] = [5, 7]
*/

//Pop the value based off the freq first, if the array holding the val is empty. pop the next array
// Time Complexity: O(1) — pops from the top freq bucket and updates the map
// Space Complexity: O(1) — no extra space used
FreqStack.prototype.pop = function () {
  let top = this.stack[this.stack.length - 1]; // get list at the highest freq (last index)
  let val = top.pop(); // remove most recent val from that list

  if (!top.length) this.stack.pop(); // if that freq list is now empty, remove it entirely

  this.fmap.set(val, this.fmap.get(val) - 1); // decrease val's freq since we just popped it
  return val; // return the popped value
};
