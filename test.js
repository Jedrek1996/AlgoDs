var pairSum = function (head) {
  let curr = head;
  let arr = [];
  let max = 0;

  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  for (let i = 0; i < arr.length / 2; i++) {
    let sum = arr[i] + arr[arr.length - 1 - i];

    max = Math.max(sum, max);
  }
  return max;
};
