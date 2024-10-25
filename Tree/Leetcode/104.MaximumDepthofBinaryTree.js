/*
Maximum Depth of Binary Tree
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

        3
       / \
      9  20
         / \
        15  7

    maxDepth(3)
    ├── left: maxDepth(9)  return Math.max(1, 2) + 1            // returns 3
    │       ├── left: maxDepth(null)  // returns 0
    │       └── right: maxDepth(null) // returns 0
    │       return Math.max(0, 0) + 1  // returns 1
    │
    └── right: maxDepth(20) return Math.max(1, 1) + 1           // returns 2
            ├── left: maxDepth(15)
            │       ├── left: maxDepth(null)  // returns 0
            │       └── right: maxDepth(null) // returns 0
            │       return Math.max(0, 0) + 1   // returns 1
            │
            └── right: maxDepth(7)
                    ├── left: maxDepth(null)  // returns 0
                    └── right: maxDepth(null) // returns 0
                    return Math.max(0, 0) + 1   // returns 1 (Leaf node always returns 1)
            

*/
var maxDepth = function(root) {
    if(root == null)  return 0;
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
};

var maxDepth = function(root) {
    if(!root) return 0;
    let levels = 0
    let queue = [root];
    
    while(queue.length){
        let count = queue.length;
        
        for(let i = 0; i < count; i++){
            const node = queue.shift();
            if(node.right) queue.push(node.right);
            if(node.left) queue.push(node.left);
        
        }
        levels++;
    }
    return levels;
};