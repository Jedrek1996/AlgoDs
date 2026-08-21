/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Time Complexity: O(log n) — binary search halves the range until target or slot found
// Space Complexity: O(1) — only pointer variables used, no extra data structures
var searchInsert = function (nums, target) {
    let left = 0, right = nums.length - 1

    while (left <= right) {
        let mid = Math.floor((right + left) / 2)
        if (nums[mid] === target) return mid
        else if (nums[mid] < target) left = mid + 1
        else right = mid - 1
    }
    return left
};
// left ends up sitting right on the spot where target belongs, because every time it moves it's just skipping over a number that's too small — so it stops exactly one step past the last "too small" number.