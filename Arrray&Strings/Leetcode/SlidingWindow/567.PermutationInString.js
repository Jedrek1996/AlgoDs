/*
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2. It can be any order as long as they are joined.

Example 1:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true

Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 
*/

var checkInclusion = function (s1, s2) {
  // if s1 is longer than s2, it can't possibly fit inside s2 — bail early
  if (s1.length > s2.length) {
    return false;
  }

  let s1Count = {}; // letter counts for s1 (the "target" pattern)
  let s2Count = {}; // letter counts for the current window in s2

  // build counts using the first s1.length characters of both strings
  // (this is our starting window — same size as s1)
  for (let i = 0; i < s1.length; i++) {
    s1Count[s1[i]] = (s1Count[s1[i]] || 0) + 1; // count letter in s1
    s2Count[s2[i]] = (s2Count[s2[i]] || 0) + 1; // count letter in s2's first window
  }

  // check if the very first window already matches — no sliding needed yet
  if (isEqual(s1Count, s2Count)) {
    return true;
  }

  let left = 0; // left edge of the sliding window (will move forward as we slide)

  // right starts right after the first window and slides to the end of s2
  for (let right = s1.length; right < s2.length; right++) {
    // step 1: add the new character entering the window on the right
    s2Count[s2[right]] = (s2Count[s2[right]] || 0) + 1;

    // step 2: remove the old character leaving the window on the left
    s2Count[s2[left]]--;

    // if that letter's count hit 0, delete the key entirely
    // (so isEqual doesn't get confused by leftover zero-count keys)
    if (s2Count[s2[left]] === 0) {
      delete s2Count[s2[left]];
    }

    left++; // move left edge forward — window has now shifted by 1

    // check if this new window matches s1's letter counts
    if (isEqual(s1Count, s2Count)) {
      return true;
    }
  }

  // slid through the whole string, no match found
  return false;
};

function isEqual(obj1, obj2) {
  // quick check: different number of unique letters = can't be equal
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  // check every letter in obj1 has the same count in obj2
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true; // same keys, same counts — it's a match
}

/*t the idea is we first map out the "recipe" if it is equal we return early.

else we go into sliding window whereby we start from where we left off during the first loop. in the next loop we move our sldiing window right and left -1, then check if it is equal if it is equal return true */
