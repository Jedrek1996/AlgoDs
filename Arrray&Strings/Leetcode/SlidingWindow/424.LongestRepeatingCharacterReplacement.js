/*
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:
Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
*/

var characterReplacement = function (s, k) {
  let freqs = {}; // tracks count of each character currently in the window
  let res = 0,
    left = 0,
    maxFreq = 0; // res = best answer so far, left = window's left edge, maxFreq = count of the most frequent char in the window

  for (let right = 0; right < s.length; right++) {
    // right = window's right edge, expands one step at a time
    freqs[s[right]] = (freqs[s[right]] || 0) + 1; // add s[right] into window, increment its count (0 if first time seen)
    maxFreq = Math.max(maxFreq, freqs[s[right]]); // store highest maxFreq value eg a:3 b:2 max= 3

    // window size = (right - left + 1). If (window size - maxFreq) > k,
    // that means more than k chars would need replacing to make the whole window one repeated char — invalid window
    while (right - left + 1 - maxFreq > k) { // right - left + 1 current window size,  how many characters in the window are NOT that majority character. basically over here we are finding how much more we need to be more than k. Once below k stop looping
      freqs[s[left]] -= 1; //s[left] = the character currently sitting at the left edge of the window, remvoe the count since it is leaving
      left++; // shrink window from the left
    }

    res = Math.max(res, right - left + 1); // window is valid here — check if it's the longest seen so far
  }

  return res; // longest window found where at most k chars differ from the majority char
};
