/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
*/

var groupAnagrams = function (strs) {
  let map = new Map();

  for (let str of strs) {
    let key = str.split("").sort().join(""); // sort the string to make the key

    if (!map.has(key)) {
      map.set(key, []); // create new group if key doesn't exist
    }
    map.get(key).push(str); // add str to its group
  }

  return Array.from(map.values()); // Array.from converts map.values() → [["eat","tea","ate"], ["bat"], ["tan","nat"]] into an array
};
