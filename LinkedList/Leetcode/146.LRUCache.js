/*Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.

 

Example 1:

Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4

*/
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();

  this.head = { key: 0, val: 0, prev: null, next: null };
  this.tail = { key: 0, val: 0, prev: null, next: null };
  // They point at each other, but that's not a cycle — that's just a doubly linked list with 2 nodes.
  this.head.next = this.tail; //head  ——next——▶  tail
  this.tail.prev = this.head; //head  ◀——prev——  tail
};

/*
Before:  A.next = B
After:   A.next = C 
A's forward pointer should skip B and point to C instead.

Before:  C.prev = B
After:   C.prev = A
C's backward pointer should skip B and point to A instead.
*/
LRUCache.prototype._remove = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

LRUCache.prototype._insertFront = function (node) {
  node.next = this.head.next; 
  node.prev = this.head;
  this.head.next.prev = node; // We onlty have the value for node and this.head. So this.head.next (Old head next pointer).prev 
  this.head.next = node;
};

LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) return -1;
  const node = this.map.get(key);
  this._remove(node);
  this._insertFront(node);
  return node.val;
};

// Replace old node with new value, if capacity exceeds remove last node.
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    this._remove(this.map.get(key));
  }

  const node = { key, val: value, prev: null, next: null };
  this.map.set(key, node);
  this._insertFront(node);

  if (this.map.size > this.capacity) {
    const lru = this.tail.prev;
    this._remove(lru);
    this.map.delete(lru.key);
  }
};
