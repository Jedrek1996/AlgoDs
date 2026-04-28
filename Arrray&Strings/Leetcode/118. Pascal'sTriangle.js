/*Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
*/
var generate = function (numRows) {
  const result = [[1]]; //Seed the result with row 0, which is always [1].

  for (let i = 1; i < numRows; i++) {
    //Loop from row 1 onwards. Grab the previous row — you only need that to build the current one.

    const prev = result[i - 1];
    const row = [1]; //Every row starts with 1.

    for (let j = 1; j < prev.length; j++) {
      row.push(prev[j - 1] + prev[j]); //Fill in the middle values — each is the sum of the two numbers above it.
    }

    row.push(1); //Cap the row with a closing 1, then add it to results.
    result.push(row);
  }

  return result;
};
