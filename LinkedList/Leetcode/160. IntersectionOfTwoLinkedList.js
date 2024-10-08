/*
List A: 4 -> 1 -> 8 -> 4 -> 5 (A will stich to headB and start a node earlier)
List B: 5 -> 6 -> 1 -> 8 -> 4 -> 5 

1. Loop through each value. If it is the end of for eg. a, it will become headB and loop through B.
B will then 
*/

var getIntersectionNode = function (headA, headB) {
  let a = headA;
  let b = headB;

  while (a !== b) {
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next; //B wont stay the same it will go to the next one
  }
  return a;
};
