/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.

Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]

 */

var sortColors = function(nums) {
    let low = 0
    let mid = 0
    let high = nums.length - 1

    while(mid <= high){
        if(nums[mid] === 0){
            [nums[low], nums[mid]] = [nums[mid], nums[low]] // swap 0 to the front
            low++
            mid++
        } else if(nums[mid] === 1){
            mid++ // 1 is already in the right place
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]] // swap 2 to the back
            high--
        }
    }
};