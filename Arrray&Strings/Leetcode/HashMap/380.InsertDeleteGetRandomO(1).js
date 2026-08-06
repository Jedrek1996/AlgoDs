/*
Implement the RandomizedSet class:

RandomizedSet() Initializes the RandomizedSet object.
bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
You must implement the functions of the class such that each function works in average O(1) time complexity.
 
Example 1:

Input
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
Output
[null, true, false, true, 2, true, false, 2]

Explanation
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
randomizedSet.insert(2); // 2 was already in the set, so return false.
randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2. */

var RandomizedSet = function () {
  this.map = new Map(); // val -> its index in arr
  this.arr = []; // holds all values, gives us O(1) random access
};

RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return false; // duplicate, reject

  this.map.set(val, this.arr.length); // record index before pushing
  this.arr.push(val); // arr.length - 1 is now val's index
  return true;
};

RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false; // doesn't exist, reject

  const idx = this.map.get(val); // where is val in arr?
  const lastVal = this.arr[this.arr.length - 1]; // grab last element

  this.arr[idx] = lastVal; // Find the last val. Replace the existing node we want to remove with the last val and we pop the last index. So now the removed index is in the removed position (last index)
  this.map.set(lastVal, idx); // update lastVal's index to val's old slot

  this.arr.pop(); // remove the duplicate at the end
  this.map.delete(val); // val is gone, remove from map
  return true;
};

RandomizedSet.prototype.getRandom = function () {
  const randIdx = Math.floor(Math.random() * this.arr.length);
  return this.arr[randIdx]; // arr is always dense so index is uniform
};

// No comments
var RandomizedSet = function () {
  this.map = new Map();
  this.arr = [];
};

RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return false;

  this.map.set(val, this.arr.length);
  this.arr.push(val);
  return true;
};

RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false;

  const idx = this.map.get(val);
  const lastVal = this.arr[this.arr.length - 1];

  this.arr[idx] = lastVal;
  this.map.set(lastVal, idx);

  this.arr.pop();
  this.map.delete(val);
  return true;
};

RandomizedSet.prototype.getRandom = function () {
  const randIdx = Math.floor(Math.random() * this.arr.length);
  return this.arr[randIdx];
};

//560, 074