/*
Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the res of the evaluation.

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

Example 1:

Input: s = "1 + 1"
Output: 2
Example 2:

Input: s = " 2-1 + 2 "
Output: 3
Example 3:

Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23 */

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let res = 0; // running total
  let num = 0; // current number being built
  let sign = 1; // +1 or -1 for the next number
  let stack = []; // holds [res, sign] pairs before each '('

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char >= "0" && char <= "9") {
      num = num * 10 + Number(char);
      /*
       build multi-digit number. Eg. "123" it loops through each value eg. 
       num = 123;

        i=0, char='1':
        num = num * 10 + Number(char)
        num = 0 * 10 + 1
        num = 0 + 1
        num = 1

        i=1, char='2':
        num = num * 10 + Number(char)
        num = 1 * 10 + 2      <-- num is now 1, not 0!
        num = 10 + 2
        num = 12

        i=2, char='3':
        num = num * 10 + Number(char)
        num = 12 * 10 + 3     <-- num is now 12!
        num = 120 + 3
*/
    } else if (char === "+") {
      res += sign * num; // apply pending number with its sign
      num = 0;
      sign = 1; // next number will be added
    } else if (char === "-") {
      res += sign * num; // apply pending number
      num = 0;
      sign = -1; // next number will be subtracted
    } else if (char === "(") {
      stack.push(res); // save res so far
      stack.push(sign); // save sign before this '('
      res = 0; // start fresh inside parens
      sign = 1;
    } else if (char === ")") {
      res += sign * num; // finish last number inside parens
      num = 0;
      res *= stack.pop(); // multiply by sign that was before '('
      res += stack.pop(); // add back the saved outer res
    }
    // spaces are ignored (no matching if, falls through)
  }

  return res + sign * num; // add any trailing number
};
