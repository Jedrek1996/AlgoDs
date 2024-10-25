/*
Validate Binary Search Tree

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Example 1:
Input: root = [2,1,3]
Output: true

Example 2:
Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
===========================
Problem Overview
In a BST:

The left subtree of a node contains only nodes with values less than the node's value.
The right subtree of a node contains only nodes with values greater than the node's value.
Both left and right subtrees must also be binary search trees.
The goal is to implement a function, isValidBST, that returns true if the given tree is a valid BST and false otherwise.

Solution Walkthrough
The code you posted uses a helper function, valid, that applies a recursive strategy to check that each node falls within an allowed range:

Parameters: valid receives a node, minimum, and maximum.

minimum: The minimum valid value that any node in the current subtree can have.
maximum: The maximum valid value that any node in the current subtree can have.
Logic:

Base case: If node is null, we return true (an empty tree is a valid BST).
Check current node: If the node’s value does not satisfy minimum < node.val < maximum, it violates BST properties, so we return false.
Recursive checks: We check both the left and right subtrees recursively, updating the minimum and maximum values for each subtree:
For the left child, we set maximum to node.val (since it must be smaller than the current node's value).
For the right child, we set minimum to node.val (since it must be larger than the current node's value).
Example Flow
For a root node with value 5:

The left subtree nodes must be between -Infinity and 5.
The right subtree nodes must be between 5 and Infinity.
If all nodes respect the constraints, the function returns true, confirming it’s a valid BST.

      5
     / \
    3   7
   / \   \
  2   4   8
Execution Steps
Root Node (5):

Range: (-Infinity, Infinity), valid.
Check left with valid(3, -Infinity, 5) and right with valid(7, 5, Infinity).
Node 3 (Left of 5):

Range: (-Infinity, 5), valid.
Check left with valid(2, -Infinity, 3) and right with valid(4, 3, 5).
Node 2 (Left of 3):

Range: (-Infinity, 3), valid.
Both children are null, return true.
Node 4 (Right of 3):

Range: (3, 5), valid.
Both children are null, return true.
Node 7 (Right of 5):

Range: (5, Infinity), valid.
Check right with valid(8, 7, Infinity).
Node 8 (Right of 7):

Range: (7, Infinity), valid.
Both children are null, return true.
All nodes satisfy BST conditions, so the function returns true.
===========================
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  function valid(node, minimum, maximum) {
    if (!node) return true;

    if (!(node.val > minimum && node.val < maximum)) return false;

    return (
      valid(node.left, minimum, node.val) &&
      valid(node.right, node.val, maximum)
    );
  }

  return valid(root, -Infinity, Infinity);
};
