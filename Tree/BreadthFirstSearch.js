//BFS - Visits nodes level by level, processing all nodes at the current depth before moving to the next depth.

// Time Complexity: O(n) — visits every node exactly once
// Space Complexity: O(n) — queue holds up to n nodes at the widest level
function BFS(root) {
  let queue = [root];
  let results = [];

  while (queue.length) {
    let currentNode = queue.shift();
    results.push(currentNode.value);
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }
  return results;
}
