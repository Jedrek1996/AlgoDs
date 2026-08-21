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
// Time Complexity: O(n) — single pass over the expression string
// Space Complexity: O(n) — sign stack grows with nested parentheses depth
var calculate = function (s) {
    let res = 0;              // running total
    let num = 0;               // number currently being built from digits
    let sign = 1;               // sign to apply to the *next* number
    const stack = [1];          // stack of sign-contexts; top = multiplier for current paren level

    for (let i = 0; i < s.length; i++) {
        const c = s[i];

        if (c >= '0' && c <= '9') {
            num = num * 10 + (c - '0');       // build multi-digit number one char at a time
        } else if (c === '+' || c === '-') {
            res += sign * num;                 // commit the number we just finished building
            num = 0;                            // reset for the next number
            // new sign = current paren-context sign * (+1 or -1 from this operator)
            sign = stack[stack.length - 1] * (c === '+' ? 1 : -1);
        } else if (c === '(') {
            stack.push(sign);                  // remember sign context we're entering
        } else if (c === ')') {
            stack.pop();                       // done with that context, discard it
        }
        // spaces: no branch matches, just skip
    }

    return res + sign * num;   // flush the last number (never hit an operator/paren after it)
};