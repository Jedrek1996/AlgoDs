/*
341. Flatten Nested List Iterator

You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be integers or other lists. Implement an iterator to flatten it.

Example 1:
Input: nestedList = [[1,1],2,[1,1]]
Output: [1,1,2,1,1]
Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,1,2,1,1].

Example 2:
Input: nestedList = [1,[4,[6]]]
Output: [1,4,6]
Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,4,6].
  */

// Time Complexity: O(N) — eagerly flattens every integer across all nested lists
// Space Complexity: O(N) — stores every integer, plus O(D) recursion stack for nesting depth D
var NestedIterator = function(nestedList) {
    this.data = [];
 this.flatten(nestedList);
};

// Time Complexity: O(N) — visits every integer and nested list element once
// Space Complexity: O(N) — appends every integer to this.data, plus O(D) recursion stack for depth D
NestedIterator.prototype.flatten = function(list) {
 for (let el of list) {
     if (el.isInteger()) {
         this.data.push(el.getInteger());
     } else {
         this.flatten(el.getList());
     }
 }
};

// Time Complexity: O(1) — checks the length of the precomputed data array
// Space Complexity: O(1) — no extra structures used
NestedIterator.prototype.hasNext = function() {
  return this.data.length > 0;
};

// Time Complexity: O(1) — removes the next value from the precomputed data array
// Space Complexity: O(1) — no extra structures used
NestedIterator.prototype.next = function() {
 return this.data.shift();
};
