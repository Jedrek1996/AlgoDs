/*
621. Task Scheduler
You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n. Each CPU interval can be idle or allow the completion of one task. Tasks can be completed in any order, but there's a constraint: there has to be a gap of at least n intervals between two tasks with the same label.
Return the minimum number of CPU intervals required to complete all tasks.

Example 1:
Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.

After completing task A, you must wait two intervals before doing A again. The same applies to task B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th interval, you can do A again as 2 intervals have passed.

Example 2:
Input: tasks = ["A","C","A","B","D","B"], n = 1
Output: 6
Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.
With a cooling interval of 1, you can repeat a task after just one other task.

Example 3:
Input: tasks = ["A","A","A", "B","B","B"], n = 3
Output: 10
Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.
There are only two types of tasks, A and B, which need to be separated by 3 intervals. This leads to idling twice between repetitions of these tasks.
*/

var leastInterval = function (tasks, n) {
  let freq = Array(26).fill(0);

  //Increase the freq of tasks eg.A -> freq[0]++
  for (let task of tasks) {
    freq[task.charCodeAt(0) - "A".charCodeAt(0)]++;
  }

  freq.sort((a, b) => b - a); // Sort descending 3, 2 ,1..

  let chunk = freq[0] - 1; //Chunk is the no of full groups of frequent task (-1 to get intervals between)
  let idle = chunk * n; //Cooling period between (largetst chunks* time )

  //Find what other task that can fill slot
  for (let i = 1; i < 26; i++) {
    idle -= Math.min(chunk, freq[i]);
  }

  // min time required to complete all : time + additional time left
  return idle < 0 ? tasks.length : tasks.length + idle;
};
