/*
108. Convert Sorted Array to Binary Search Tree

Given an integer array nums where the elements are sorted in ascending order, convert it to a 
height-balanced
binary search tree.

Example 1:
Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:
Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

======================
Explanation
Convert Function:

Takes the current bounds (left, right) of the array.
Finds the middle element and creates a TreeNode for it.
Recursively assigns the left half as the left subtree and the right half as the right subtree.
Recursive Calls:

This continues until the left index is greater than right, at which point the function returns null (indicating no node is needed).
Example Walkthrough
For nums = [-10, -3, 0, 5, 9]:

mid = 2 → node = 0 (root).
Left subtree of 0: nums = [-10, -3]
mid = 0 → node = -10
Left of -10 is null.
Right of -10 is -3.
Right subtree of 0: nums = [5, 9]
mid = 3 → node = 5
Left of 5 is null.
Right of 5 is 9.
The final tree:

markdown
Copy code
      0
     / \
   -10  5
     \   \
     -3   9
This structure keeps the tree balanced as required.
======================
*/

var sortedArrayToBST = function(nums) {
    // Helper function to construct the BST
    function convert(left, right) {
        // Base case: if the left index exceeds the right, return null
        if (left > right) return null;

        // Choose the middle element as the root of the subtree
        let mid = Math.floor((left + right) / 2);
        let node = new TreeNode(nums[mid]);

        // Recursively build the left and right subtrees
        node.left = convert(left, mid - 1);
        node.right = convert(mid + 1, right);

        return node;
    }

    // Start recursion with the full array range
    return convert(0, nums.length - 1);
};
