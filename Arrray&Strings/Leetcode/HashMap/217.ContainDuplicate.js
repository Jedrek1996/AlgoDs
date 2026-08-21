/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Explanation:
The element 1 occurs at the indices 0 and 3.

Example 2:
Input: nums = [1,2,3,4]
Output: false

Explanation:
All elements are distinct.

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true 
*/

// Time Complexity: O(n) — Set is built from all n elements
// Space Complexity: O(n) — Set stores up to n unique elements
var containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length; // set stores unique val, if not unqie the no wont be stored thus val !== nums.length
};
