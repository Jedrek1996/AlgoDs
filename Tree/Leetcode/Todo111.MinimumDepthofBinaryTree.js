/*
Minimum Depth of Binary Tree
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
Note: A leaf is a node with no children.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 2

Example 2:
Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5

======================
Explanation
Base Case:

If the root is null, the tree has no nodes, so the depth is 0.
Single Child Cases:

If only one child (left or right) is null, we continue with the other child. This is because we need a path to a leaf, and the non-null child path may reach a leaf sooner.
Both Children Present:

When both children exist, we find the minimum depth of the left and right subtrees and add 1 for the current node.
Example Walkthrough
For root = [3, 9, 20, null, null, 15, 7]:

Start at 3: check left and right subtrees.
Left child (9) is a leaf (no children), so minimum depth here is 1 + 1 = 2.
Right child (20):
Left (15) and right (7) are leaves, so minimum depth here is 1 + 1 = 2.
The minimum depth is 2.
For root = [2, null, 3, null, 4, null, 5, null, 6]:

All nodes are on the right.
Minimum depth is the length of this path, which is 5.
======================
*/

var minDepth = function (root) {
  if (!root) return 0; // Base case: if the root is null, the depth is 0

  // If one of the children is null, recurse on the other child
  if (!root.left) return 1 + minDepth(root.right);
  if (!root.right) return 1 + minDepth(root.left);

  // If both children are present, return the minimum depth of both subtrees
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};
