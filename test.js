/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();

  this.head = { key: 0, value: 0, prev: null, next: null };
  this.tail = { key: 0, value: 0, prev: null, next: null };
  this.head.next = this.tail;
  this.tail.next = this.head;
};

LRUCache.prototype._remove = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};
