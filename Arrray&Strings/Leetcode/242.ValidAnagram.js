/*Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
  */

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    // Create frequency map for string s
    const charCount = {};
    
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1; // Right side evaluate first, if the value dont exist, 0 + 1. And store it as char: val
    }
    
    // Decrement counts for each character in string t <
    for (let char of t) {
        if (!charCount[char]) {
            return false; // Character not in s , or 0 count value
        }
        charCount[char]--;
    }
    
    return true;
};