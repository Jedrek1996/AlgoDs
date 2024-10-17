var flatten = function (head) {
  if (!head) return head;

  let stack = []; //store all rest part of linkedlist nodes when has child
  let cur = head;
  
  while (cur) {
    if (cur.child) {
      if (cur.next) stack.push(cur.next); //must check cur.next is null or not before added to stack
      cur.next = cur.child;
      cur.next.prev = cur; //because it is doubly linkedlist
      cur.child = null; //already assigned to next so now no child anymore. set null
    } else if (!cur.next && stack.length != 0) {
      //now reach tail of linkedlist
      cur.next = stack.pop();
      cur.next.prev = cur; // because it is doubly linkedlist
    }
    cur = cur.next;
  }
  return head; //return reference of head
};
