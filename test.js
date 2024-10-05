var middleNode = function (head) {
  let fastPointer = head;
  let slowPointer = head;
  let before = null;

  while (fastPointer && fastPointer.next) {
    fastPointer = fastPointer.next.next;
    before = slowPointer;
    slowPointer = slowPointer.next;
  }

  before.next = slowPointer.next;
  return head;
};
