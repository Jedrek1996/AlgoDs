/*Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.

Example 1:
Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

Example 2:
Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes. */

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let stack = [];
  for (let n of num) {
    while (k > 0 && stack.length && stack[stack.length - 1] > n) {
      stack.pop();
      k--;
    }
    stack.push(n);
  }
  stack.splice(stack.length - k, k); //"starting from k positions before the end, delete k elements" — in other words, chop off the last k elements of the stack.

  const result = stack.join("").replace(/^0+/, "");
  return result === "" ? "0" : result;
};
