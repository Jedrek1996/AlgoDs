/*
Flip Equivalent Binary Trees
For a binary tree T, we can define a flip operation as follows: choose any node, and swap the left and right child subtrees.

A binary tree X is flip equivalent to a binary tree Y if and only if we can make X equal to Y after some number of flip operations.

Given the roots of two binary trees root1 and root2, return true if the two trees are flip equivalent or false otherwise.

Example 1:
Flipped Trees Diagram
Input: root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]
Output: true
Explanation: We flipped at nodes with values 1, 3, and 5.

Example 2:
Input: root1 = [], root2 = []
Output: true

Example 3:
Input: root1 = [], root2 = [1]
Output: false
*/

var flipEquiv = function (root1, root2) {
  function checker(node1, node2) {
    if (!node1 && !node2) return true;

    if (!node1 || !node2 || node1.val != node2.val) return false;

    return (
      //In the context of || (OR), true does not "overwrite" false, but rather, the presence of a single true among the checks determines the outcome of that expression to be true.
      (checker(node1.left, node2.left) || checker(node1.left, node2.right)) &&
      (checker(node1.right, node2.right) || checker(node1.right, node2.left))
    );
  }

  return checker(root1, root2);
};
