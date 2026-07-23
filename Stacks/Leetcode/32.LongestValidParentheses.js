/*
Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.

Example 1:
Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".

Example 2:
Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".

Example 3:
Input: s = ""
Output: 0
 

*/

var longestValidParentheses = function (s) {
  const stack = [-1];
  let max_len = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(i);
    else {
      stack.pop(); //Always remove the top item from the stack first (try to match this ) with something)
      // The stack will never have more than one wall first wall is -1, if popped then we replace with ")" subsequent ")" will always be popped and replaced. 
      if (stack.length === 0) stack.push(i); // Keep moving the wall forward until we find a longer chain by replacing i 
      else max_len = Math.max(max_len, i - stack[stack.length - 1]);
    }
  }

  return max_len;
};
