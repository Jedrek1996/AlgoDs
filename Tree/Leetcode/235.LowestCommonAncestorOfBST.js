/*
Lowest Common Ancestor of a Binary Search Tree
Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Example 1:
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.

Example 2:
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
*/

var lowestCommonAncestor = function (root, p, q) {
  // Traverse the tree starting at the root
  while (root) {
    // If both nodes p and q are smaller than the current root, LCA is in the left subtree
    if (p.val < root.val && q.val < root.val) {
      root = root.left;
    }
    // If both nodes p and q are larger than the current root, LCA is in the right subtree
    else if (p.val > root.val && q.val > root.val) {
      root = root.right;
    }
    // If we reach a point where p and q lie on different sides of the current node (or one is the current node), then this node is the LCA
    else {
      return root; //For eg. p is on the left of the LCA node and q is on the right. (No more transversal happens )
    }
  }
  return null;
};
