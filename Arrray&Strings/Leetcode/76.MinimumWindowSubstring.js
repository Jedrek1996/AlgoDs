/*Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique. */

/*Step 1: Build the "shopping list" (map)
for(let letter of t){
    if(!map.has(letter)) map.set(letter, 1);
    else map.set(letter, map.get(letter) + 1);
}
For every character in t, count how many of it you need. If t = "ABC", the map becomes {A:1, B:1, C:1}.

Step 2: Set up counters
let left = 0, right = 0;
let len = Infinity;
let count = map.size;  // how many distinct letters still unsatisfied
let minWindow = "";
count starts as the number of different letters you still need to fully collect (e.g. 3, for A, B, C).

Step 3: Expand the window (right pointer)
let rLetter = s[right];
if(map.has(rLetter)){
    map.set(rLetter, map.get(rLetter)-1);
    if(map.get(rLetter) === 0) count--;
}
right++;
Walk right through s, one character at a time. If that character is something you need, "check it off" by decrementing its count in the map. The moment a letter's count hits exactly 0, you've fully collected it — so count-- (one less distinct letter to worry about).

Step 4: Once everything's collected, shrink the window (left pointer)
while(count === 0){
    if(right-left < len){
        len = right-left;
        minWindow = s.slice(left, right);
    }
    ...
}
When count === 0, it means all required letters are currently in your window — it's valid! So first, check: is this window smaller than the best one you've found so far? If yes, save it.

Step 5: Try shrinking from the left
let lLetter = s[left];
if(map.has(lLetter)){
    map.set(lLetter, map.get(lLetter) + 1);
    if(map.get(lLetter) > 0) count++;
}
left++;
Now try removing the leftmost character to see if the window can get even smaller. Give that letter's count back (+1). If doing so pushes it above 0, that means you no longer have enough of it — so count++ (now unsatisfied again), which breaks out of the shrinking loop.
The big picture:

right grows the window until it contains everything from t.
Once it does, left shrinks the window as much as possible while it's still valid, recording the smallest one along the way.
Repeat until right reaches the end of s.

It's like slowly closing a bag around exactly the ingredients you need — as tight as it will go without spilling anything out. */

// No comment
var minWindow = function (s, t) {
  let map = new Map();

  //Put t into map (1 val each)
  for (let letter of t) {
    if (!map.has(letter)) {
      map.set(letter, 1);
    } else {
      map.set(letter, map.get(letter) + 1);
    }
  }

  let left = 0;
  let right = 0;
  let len = Infinity;
  let count = map.size;
  let minWindow = "";

  while (right < s.length) {
    let rLetter = s[right];
    if (map.has(rLetter)) {
      map.set(rLetter, map.get(rLetter) - 1);
      if (map.get(rLetter) === 0) count--;
    }

    right++;

    while (count === 0) {
      if (right - left < len) {
        len = right - left;
        minWindow = s.slice(left, right);
      }

      let lLetter = s[left];
      if (map.has(lLetter)) {
        map.set(lLetter, map.get(lLetter) + 1);
        if (map.get(lLetter) > 0) count++;
      }
      left++;
    }
  }

  return minWindow;
};
