/*Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
  */

var threeSum = function (nums) {
  if (nums.length < 3) return [];

  const result = [];

  nums.sort((a, b) => a - b); // sort so two pointers work + duplicates are adjacent (small to big)

  for (let i = 0; i < nums.length - 2; i++) {
    // i stops early so j and k have room

    /*
    You need 3 people to form a triplet. i, j, k. That's it.
    [-4, -1, -1, 0, 1, 2]
      0   1   2  3  4  5
    If i = 4, then j = 5, then k = ??? There's nothing left. You only have 2 people.
    If i = 5, then j = ??? Nothing left. Only 1 person.
    So i must stop at index 3. And 3 = 6 - 3. But i < 4 is the same as i <= 3. And 4 = 6 - 2. That's the only reason.
    */

    if (i > 0 && nums[i] === nums[i - 1]) continue; // same pivot as last time, skip it if not it will return the same J AND K
    /*
    i=1, pivot=-1 → run it, find triplets
    i=2, pivot=-1 → continue → SKIP, jump to i=3
    i=3, pivot=0  → run it

    Say i=1, pivot is -1. You find triplets [-1,-1,2] and [-1,0,1].
    Now i=2, pivot is also -1. Without the check you'd run the exact same search again and find [-1,0,1] again.
    */

    let j = i + 1; // j starts right after i
    let k = nums.length - 1; // k starts at the end

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]); // found a triplet
        while (nums[j] === nums[j + 1]) j++; // skip duplicate j values
        while (nums[k] === nums[k - 1]) k--; // skip duplicate k values
        j++; // move both inward to look for next pair
        k--;
      } else if (sum < 0) {
        j++; // sum too small, need a bigger number
      } else {
        k--; // sum too big, need a smaller number
      }
    }
  }

  return result;
};

// Without comments ⚠️

var threeSum = function (nums) {
  if(nums.length < 3) return []  
  const result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }

  return result;
};
