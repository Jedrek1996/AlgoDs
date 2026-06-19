/*highest 2 value?

02:25
Exactly, you got it. Let me confirm each step:

Step 1 — freqMap: number → frequency

[1,1,1,2,2,3]
{ 1→3, 2→2, 3→1 }
key = the number, value = how many times it appeared
Step 2 — Buckets: frequency → number (flipped!)

take each [key, value] pair from the map
push the KEY into bucket at index VALUE

1 appeared 3 times → buckets[3].push(1)
2 appeared 2 times → buckets[2].push(2)
3 appeared 1 time  → buckets[1].push(3)
Step 3 — Walk right to left, stop when we have k elements

k = 2
i=6,5,4 → empty, skip
i=3 → found [1] → result = [1]   (1 of 2)
i=2 → found [2] → result = [1,2] (2 of 2) → stop!
So yes, the 3 steps are:

Map → count frequencies
Bucket → flip key/value, index = frequency
Loop right to left → highest frequency first, stop at k */
var topKFrequent = function (nums, k) {
  // Step 1: count frequency of each number
  // {1:3, 2:2, 3:1}
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1; // first time seeing it
    } else {
      map[nums[i]]++; // seen before, increment
    }
  }

  // Step 2: put numbers into bucket at index = their frequency
  // bucket[3] = [1], bucket[2] = [2], bucket[1] = [3]
  let bucket = [];
  for (let [num, freq] of Object.entries(map)) {
    if (!bucket[freq]) bucket[freq] = []; // init if empty
    bucket[freq].push(num); // push number at freq index
  }

  // Step 3: walk right to left (highest freq first), stop at k
  let result = [];
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]); // skip empty slots
    if (result.length === k) break; // stop when we have k
  }

  return result;
};
