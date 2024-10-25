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

function preorderDFSIterative(root) {
  let result = [];
  let stack = [root];

  while (stack.length) {
    let currentNode = stack.pop();
    result.push(currentNode.val);

    if (currentNode.right) stack.push(currentNode.right);
    if (currentNode.left) stack.push(currentNode.left);
  }

  return result;
}

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
