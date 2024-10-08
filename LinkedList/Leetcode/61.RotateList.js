/*
Given the head of a linked list, rotate the list to the right by k places.

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
Example 2:
Input: head = [0,1,2], k = 4
Output: [2,0,1]
*/

var rotateRight = function (head, k) {
  if (!head) return head;
  let count = 0;
  let curr = head;
  let prev = head;

  //[1,2,3,4,5] k=2
  //Step 1 of the algo, count list nodes
  while (curr) {
    count++; //Count will be 5
    curr = curr.next;
  }

  //Ste 2: Number of rotations are now restricted within limit
  curr = head;
  k = k % count; // if 2 % 5 = 2rotatiosn needed.

  //Step 3: Moving curr pointer k positions ahead (Tail)
  while (k--) {
    curr = curr.next;
  }

  //Step 4: To move the nodes forward to the end. Since curr.next has been pushed in step3.
  while (curr.next) {
    //to make sure the next node is not empty
    prev = prev.next;
    curr = curr.next;
  }

  //Step 5: Simply modifying the head and last node
  curr.next = head; // Connect the old tail to the old head (LOOP) POINTS BACK TO 1
  head = prev.next; // Update head to point to the new head
  prev.next = null; // Disconnect the new tail from the new head
  return head;
};

// Basically moves current first how many times ahead.
// Create a prev pointer that loops to track the distance. PREV IS TAIL
// CURR IS HED HEAD = PREV.NEXT TO BREAK THE LOOP
