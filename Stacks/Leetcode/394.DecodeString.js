/*
394. Decode String
Given an encoded string, return its decoded string.
The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].
The test cases are generated so that the length of the output will never exceed 105.

Example 1:
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:
Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3:
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef
*/

//3[a]2[bc] example
/**
 * @param {string} 
 * @return {string}
 */
var decodeString = function (s) {
  let stack = [];
  for (let char of s) {
    if (char !== "]") stack.push(char);
    else {
      let curr = stack.pop(),
        num = "",
        str = "";
      while (curr !== "]") {
        str = curr + str;
        curr = stack.pop();
      }
      curr = stack.pop(); // remove the [,  the above while loop stops looping at a string so the next val is [
      while (Number.isNan(+curr)) { // after removing [ the next value is a no.
        num = curr + num;
        curr = stack.pop();
      }
      stack.push(curr); // push back the previous pop eg. 12 then we pop not a digit next.
      stack.push(str.repeat(+num));
    }
  }
  return stack.join("");
};
