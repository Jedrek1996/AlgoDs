/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.


Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
*/

var twoSum = function(nums, target) {
    const map = new Map()  // { number: index } of everything seen so far

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]  // What number do we need to pair with this one?

        if (map.has(complement)) {
            return [map.get(complement), i]  // Complement was seen before — return its index and current index
        }

        map.set(nums[i], i)  // Haven't found a pair yet — save this number and its index for later
    }
};