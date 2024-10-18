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

var NestedIterator = function(nestedList) {
    this.data = [];
 this.flatten(nestedList);
};

NestedIterator.prototype.flatten = function(list) {
 for (let el of list) {
     if (el.isInteger()) {
         this.data.push(el.getInteger());
     } else {
         this.flatten(el.getList());
     }
 }
};

NestedIterator.prototype.hasNext = function() {
  return this.data.length > 0;
};

NestedIterator.prototype.next = function() {
 return this.data.shift();
};
