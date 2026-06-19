/*Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.


Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
Example 3:

Input: nums = [1,0,1,2]
Output: 3
 */

var longestConsecutive = function (nums) {
  // Step 1: Load all nums into a Set for O(1) lookups and auto-deduplication
  const set = new Set(nums);
  let longest = 0;

  // Step 2: Iterate over the Set (no duplicates to worry about)
  for (const n of set) {
    // Step 3: Only process sequence starts — skip if n-1 exists in set
    // e.g. if n=3 and 2 exists, then 3 is mid-sequence, not a start
    if (!set.has(n - 1)) {
      // Step 4: We found a sequence start — now walk forward
      let length = 1;

      // Step 5: Keep incrementing while consecutive numbers exist
      // e.g. n=1 → checks 2, 3, 4... until gap found
      while (set.has(n + length)) length++;

      // Step 6: Update longest if this sequence beats the current best
      longest = Math.max(longest, length);
    }
  }

  // Step 7: Return the longest consecutive sequence length found
  return longest;
};

//No comments
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let count = 0;

    for (const n of set) {
        if (!set.has(n - 1)) {
            let length = 1;
            while (set.has(n + length)) length++;
            count = Math.max(count, length);
        }
    }

    return count;
};