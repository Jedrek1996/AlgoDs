/*
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
Example 1:

Input: nums = [4,3,2,7,8,2,3,1] << 5,6 missing from here
Output: [5,6]

*/
var findDisappearedNumbers = function (nums) {
  // loop through each number, use it as a pointer to an index and flip that index negative = "mark as seen"
  for (const n of nums) {
    const i = Math.abs(n) - 1; // convert number to index (e.g. 4 → index 3). abs because n might already be negative from a previous flip. Since 5 and 6 dont exist they wont have i
    nums[i] = -Math.abs(nums[i]); // flip that index negative to mark "this number exists". abs first so we don't accidentally flip it back positive
  }

  // anything still positive was never marked = that number never appeared in nums
  return nums.reduce((res, n, i) => {
    if (n > 0) res.push(i + 1); // index + 1 converts back to the actual missing number (e.g. index 4 → number 5) since 5 and 6 are mising they will be pushed as they are not converted to negatie
    return res;
  }, []);
};
/*reduce here is just being used as a fancy loop to build an array.

res — the result array, starts as [] thats why [] at the back of reduce
n — current value
i — current index
return res — pass the array along to the next iteration

so every iteration it checks if n > 0, if yes push i + 1 into res, then hands res to the next iteration. */
