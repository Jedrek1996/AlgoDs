/*
For recursive 
When a transverse is called, it reaches eg.(if (currentNode.left) transverse(currentNode.left);)
It create a new transverse within the original transverse. once the new inner recursive is done, it continues on from the original parent transverse which is the next line of code (currentNode.right) transverse(currentNode.right);
*/

/*🐈 
PREORDER: Processes the node itself at the TOP first,(Clears the entire left side first.) then the left child, and finally the right child.
Use case: Good for copying or cloning trees. Used in serialization of trees (e.g., creating a copy).
 */
function DFSPreOrder() {
  let results = []; // This will store the node values in preorder

  function transverse(currentNode) {
    results.push(currentNode.value); // Visit the current node and add its value to results
    if (currentNode.left) transverse(currentNode.left); // Recursively visit the left subtree
    if (currentNode.right) transverse(currentNode.right); // Recursively visit the right subtree
  }
  transverse(this.root); // Start the traversal from the root of the tree
}

function preorderDFSIterative(root) {
  if (!root) return []; // If the root is null, return an empty array

  const result = []; // This will store the values in preorder
  const stack = [root]; // Initialize the stack with the root node

  while (stack.length) {
    // Continue until there are nodes in the stack
    const currentNode = stack.pop(); // Get the last node added to the stack
    result.push(currentNode.value); // Visit the current node (add its value to result)
    // Push right first so that left subtree is processed first
    if (currentNode.right) stack.push(currentNode.right); // Push right child if it exists
    if (currentNode.left) stack.push(currentNode.left); // Push left child if it exists
  }
  return result; // Return the collected values in preorder
}

/*🐈 
POSTORDER: Processes the left child first, then the right child at the BOTTOM, and finally the node itself.
Use case: Useful for deleting trees (to ensure children are deleted before the parent). Evaluating expression trees.
*/
function DFSPostOrder() {
  let results = []; // This will store the node values in preorder

  function transverse(currentNode) {
    if (currentNode.left) transverse(currentNode.left); // Recursively visit the left subtree
    if (currentNode.right) transverse(currentNode.right); // Recursively visit the right subtree
    results.push(currentNode.value); // Visit the current node and add its value to results
  }
  transverse(this.root); // Start the traversal from the root of the tree
}

function postorderDFSIterative(root) {
  if (!root) return [];

  const result = [];
  const stack = [root];

  while (stack.length) {
    const currentNode = stack.pop();
    result.push(currentNode.value);

    if (currentNode.left) stack.push(currentNode.left);
    if (currentNode.right) stack.push(currentNode.right);
  }

  return result.reverse();
}

/* 🐈 
INORDER: Processes left child first at the BOTTOM, then the node, then the right child. (Gives sorted order for BSTs)
Use case: Produces sorted order for binary search trees (BSTs). Useful for generating sorted lists.
*/

function DFSInOrder() {
  let results = []; // This will store the node values in in-order

  function transverse(currentNode) {
    if (currentNode.left) transverse(currentNode.left); // Recursively visit the left subtree
    results.push(currentNode.value); // Visit the current node and add its value to results
    if (currentNode.right) transverse(currentNode.right); // Recursively visit the right subtree
  }

  transverse(this.root); // Start the traversal from the root of the tree
  return results; // Return the collected values in in-order
}

function inorderDFSIterative(root) {
  const result = [];
  const stack = [];
  let currentNode = root;

  while (stack.length || currentNode) {
    // Traverse to the leftmost node
    while (currentNode) {
      stack.push(currentNode); // Push current node to the stack
      currentNode = currentNode.left; // Move to the left child
    }

    // Process the top node and go to the right child
    currentNode = stack.pop(); // Pop the last node
    result.push(currentNode.value); // Visit the current node (add its value to result)
    currentNode = currentNode.right; // Move to the right child
  }

  return result; // Return the collected values in in-order
}
/*
 
       1 
      / \
     2   3
    / \   \
   4   5   6
   Expected: 4 , 2 , 5, 1 ,3 , 6

         1
       /   \
      2      3
     / \    / \
    4   5  6   7
   / \      \
  8   9      10

  Expected:  [8, 4, 9, 2, 5, 1, 6, 10, 3, 7]
*/
