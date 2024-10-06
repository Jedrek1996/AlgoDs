var addTwoNumbers = function (l1, l2) {
  let stackA = [];
  let stackB = [];

  while (l1) {
    stackA.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    stackB.push(l2.val);
    l2 = l2.next;
  }

  let dummy = new ListNode(0);
  let curr = dummy;
  let carry = 0;

  while (stackA.length || stackB.length || carry) {
    let a = stackA.pop() || 0;
    let b = stackB.pop() || 0;

    let total = b + a + carry;
    let num = total % 10;
    carry = Math.floor(total / 10);

    let newNode = new ListNode(num);
    curr.next = newNode; // Link current node to the new node
    curr = newNode;
  }
  return dummy.next;
};

var reverseKGroup = function (head, k) {
  let stack = [];
  let dummy = new ListNode(0);
  let curr = dummy;

  while (head) {
    for (let i = 0; i < k && head; i++) {
      stack.push(head);
      head = head.next;
    }

    if (stack.length === k) {
      while (stack.length > 0) {
        curr.next = stack.pop();
        curr = curr.next;
      }
      curr.next = head;
    }
  }
  return dummy.next;
};
var mergeAlternately = function (word1, word2) {
  let merged = [];

  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (i < word1.length) {
      merged.push(word1[i]);
    }

    if (i < word2.length) {
      merged.push(word2[i]);
    }
  }

  return merged.join("");
};

var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 != str2 + str1) {
    return "";
  } else if (str1 == str2) {
    return str1;
  } else if (str1.length > str2.length) {
    return gcdOfStrings(str1.substring(str2.length), str2);
  } else {
    return gcdOfStrings(str2.substring(str1.length), str1);
  }
};
