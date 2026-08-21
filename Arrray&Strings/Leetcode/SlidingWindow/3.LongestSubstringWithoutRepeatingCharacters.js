/*

Given a string s, find the length of the longest substring without duplicate characters.


Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 105
s consists of English letters, digits, symbols and spaces.

*/

// Time Complexity: O(n) — left and right pointers each traverse s once
// Space Complexity: O(min(n, k)) — set holds unique chars in window, bounded by charset size
var lengthOfLongestSubstring = function (s) {
  let set = new Set(); // holds unique chars in the current window [left, i]
  let left = 0; // left edge of the sliding window
  let maxSize = 0; // best (longest) window length seen so far

  for (let i = 0; i < s.length; i++) {
    // s[i] is a duplicate of something already in the window —
    while (set.has(s[i])) {
      // shrink from the left until the duplicate is gone, start afresh essentially
      set.delete(s[left]); // remove leftmost char from the window
      left++; // shrink window from the left, new starting point increment
    }
    set.add(s[i]); // now safe to add s[i] — window has no dupes
    maxSize = Math.max(maxSize, i - left + 1); // i - left, diff between the window
  }

  return maxSize; // length of longest substring with no repeating chars
};
