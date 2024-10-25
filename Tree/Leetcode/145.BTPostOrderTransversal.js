/*
145. Binary Tree Postorder Traversal

Given the root of a binary tree, return the postorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [3,2,1]

Example 2:
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [4,6,7,5,2,9,8,3,1]

Example 3:
Input: root = []
Output: []

Example 4:
Input: root = [1]
Output: [1]
*/

//Iterative
var postorderTraversal = function (root) {
  if (!root) return [];

  let stack = [root];
  let result = [];

  while (stack.length) {
    let currentNode = stack.pop();
    result.push(currentNode.val);

    if (currentNode.left) stack.push(currentNode.left);
    if (currentNode.right) stack.push(currentNode.right);
  }
  return result.reverse();
};

//Recursive
var postorderTraversal = function (root) {
  if (!root) return [];
  let result = [];

  function recursive(currentNode) {
    if (currentNode.left) recursive(currentNode.left);
    if (currentNode.right) recursive(currentNode.right);
    result.push(currentNode.val);
  }
  recursive(root);
  return result;
};
