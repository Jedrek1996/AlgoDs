// Time Complexity: O(n) — visits every node exactly once
// Space Complexity: O(n) — queue holds up to n nodes at the widest level
function bfs(root) {
  let queue = [root];
  let result = [];

  while (queue.length) {
    let currentNode = queue.shift();
    result.push(currentNode.val);

    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }
  return result;
}

// Time Complexity: O(n) — visits every node exactly once
// Space Complexity: O(h) — stack holds pending ancestors, worst case O(n) if unbalanced
function preorderDFSIterative(root) {
  let result = [];
  let stack = [root];

  while (stack.length) {a
    let currentNode = stack.pop();
    result.push(currentNode.val);

    if (currentNode.right) stack.push(currentNode.right);
    if (currentNode.left) stack.push(currentNode.left);
  }

  return result;
}

// Time Complexity: O(n) — visits every node exactly once
// Space Complexity: O(h) — stack holds pending ancestors, worst case O(n) if unbalanced
function postorderDFSIterative(root) {
  let result = [];
  let stack = [root];

  while (stack.length) {
    let currentNode = stack.pop();
    result.push(currentNode.val);
    if (currentNode.left) stack.push(currentNode.left);
    if (currentNode.right) stack.push(currentNode.right);
  }
  return result.reverse();
}

// Time Complexity: O(n) — visits every node exactly once
// Space Complexity: O(h) — stack holds the ancestor path, worst case O(n) if unbalanced
function inorderDFSIterative(root) {
  let result = [];
  let stack = [];
  let currentNode = root;

  while (stack.length || currentNode) {
    while (currentNode) {
      result.push(currentNode);
      currentNode = currentNode.left;
    }

    currentNode = stack.pop();
    result.push(currentNode.val);
    currentNode = currentNode.right;
  }
  return result;
}
