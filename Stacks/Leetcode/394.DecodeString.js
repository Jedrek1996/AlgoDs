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
const decodeString = (s) => {
  const stack = [];

  for (const char of s) {
    if (char !== "]") {
      stack.push(char); // push (3,[,a)
    } else {
      let str = "";
      let num = "";
      let cur = stack.pop();

      while (cur !== "[") {
        str = cur + str; // first loop a, goess in. Pop [ but nothing happens.
        cur = stack.pop();
      }

      cur = stack.pop(); // Now pop 3
      /*
      - Convert the string to no.
      - Check if the converted number is empty? If not empty returns false.
      - ! is the negate the false. so its true
      */
      while (!Number.isNaN(+cur)) {
        num = cur + num; //This is to add other numbers eg. pop 2, 3..
        cur = stack.pop();
      }

      stack.push(cur); //In some scenarios such as 1[2[ab]]
      stack.push(str.repeat(+num)); // Str * num
    }
  }
  return stack.join("");
};
