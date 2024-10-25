/*
Binary Tree Preorder Traversal
Given the root of a binary tree, return the preorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,2,3]

Example 2:
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [1,2,4,5,6,7,3,8,9]

Example 3:
Input: root = []
Output: []

Example 4:
Input: root = [1]
Output: [1]
*/

//Iterative
var preorderTraversal = function (root) {
  if (!root) return [];
  let stack = [root];
  let result = [];

  while (stack.length) {
    let currentNode = stack.pop();
    result.push(currentNode.val);
    if (currentNode.right) stack.push(currentNode.right);
    if (currentNode.left) stack.push(currentNode.left);
  }

  return result;
};

//Recursive
var preorderTraversal = function (root) {
  if (!root) return [];
  let result = [];

  function recur(currentNode) {
    result.push(currentNode.val);
    if (currentNode.left) recur(currentNode.left);
    if (currentNode.right) recur(currentNode.right);
  }
  recur(root);
  return result;
};
