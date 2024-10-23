//BFS - Visits nodes level by level, processing all nodes at the current depth before moving to the next depth.

function BFS(root) {
  let queue = [];
  let results = [];
  queue.push(root);

  while (queue.length) {
    let currentNode = queue.shift();
    results.push(currentNode.value);
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }
  return results;
}
