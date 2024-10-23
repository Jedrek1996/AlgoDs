function preoRDER() {
  let result = [];

  function transverse(currentNode) {
    result.push(currentNode.value);

    if (currentNode.left) transverse(currentNode.left);
    if (currentNode.right) transverse(currentNode.right);
  }

  transverse(this.root);
}

function BFS(root) {
  let queue = [];
  let result = [];

  queue.push(root);

  while (queue.length) {
    let currentNode = queue.shift();
    result.push(currentNode.value);

    if (currentNode.right) queue.push(currentNode.right);
    if (currentNode.left) queue.push(currentNode.left);
  }
  return result;
}

function preorderDFSIterative(root) {
  let stack = [];
  let result = [];
  while (stack.length) {
    let currentNode = stack.shift();
    result.push(currentNode.value);

    if (currentNode.left) stack.push(currentNode.left);
    if (currentNode.right) stack.push(currentNode.right);
  }
}

function dfsinorder() {
  let result = [];

  function recur(currentNode) {
    if (currentNode.left) recur(currentNode.left);
    result.push(currentNode.value);
    if (currentNode.right) recur(currentNode.right);
  }
  transverse(this.root);
  return result;
}


function iterativeio(root){
    let stack = []
    let result = []
    let currentNode = root

    while(currentNode || stack.length){
        while(currentNode){
            stack.push(currentNode)
            currentNode= currentNode.keft
        }
    }

}