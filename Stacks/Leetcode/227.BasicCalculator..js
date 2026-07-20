/*

Given a string s which represents an expression, evaluate this expression and return its value. 

The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().


Example 1:

Input: s = "3+2*2"
Output: 7
Example 2:

Input: s = " 3/2 "
Output: 1

*/

var calculate = function (s) {
  let num = "",
    prevOp = "+",
    stack = [];
  for (let i = 0; i <= s.length; i++) {
    let ch = s[i];
    if (ch >= "0" && ch <= "9") {
      num += ch;
    }

    if (((ch < "0" || ch > "9") && ch !== " ") || i === s.length) {
      /*ch < '0' || ch > '9' → true when ch is not a digit (it's either less than '0' or greater than '9' in character code — covers letters, symbols, spaces, everything non-digit).
ch !== ' ' → true when ch is not a space. */
      if (prevOp === "+") stack.push(Number(num));
      if (prevOp === "-") stack.push(-Number(num));
      if (prevOp === "*") stack.push(stack.pop() * Number(num));
      if (prevOp === "/") stack.push(Math.trunc(stack.pop() / Number(num)));
      prevOp = ch; // save the operator found.
      num = ""; // reset to build next no
    }
  }
  return stack.reduce((total, cur) => total + cur, 0);
};
