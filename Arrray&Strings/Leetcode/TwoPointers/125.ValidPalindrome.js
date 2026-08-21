/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/
/**
 * @param {string} s
 * @return {boolean}
 */
// Time Complexity: O(n) — two pointers converge toward the middle
// Space Complexity: O(1) — no extra structures, just index variables
var isPalindrome = function (s) {
  let left = 0,
    right = s.length - 1; // two pointers: start and end of string

  while (left < right) {
    // skip left pointer forward while it's on a non-alphanumeric char
    while (left < right && !isAlphaNum(s[left])) left++;
    // skip right pointer backward while it's on a non-alphanumeric char
    while (left < right && !isAlphaNum(s[right])) right--;

    // compare the two characters, case-insensitively
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false; // mismatch found — not a palindrome

    left++; // move inward from the left
    right--; // move inward from the right
  }

  return true; // pointers met/crossed with no mismatches — it's a palindrome
};

function isAlphaNum(c) {
  //Checks whether a single character is a letter (a-z, A-Z) or a digit (0-9) — anything else (spaces, punctuation, symbols) returns false.
  return c.toLowerCase() !== c.toUpperCase() || (c >= "0" && c <= "9");
}
