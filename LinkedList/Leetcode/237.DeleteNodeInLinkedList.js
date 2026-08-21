// Time Complexity: O(1) — copies the next node's value and skips it directly
// Space Complexity: O(1) — no extra pointers or data structures used
var deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next
};