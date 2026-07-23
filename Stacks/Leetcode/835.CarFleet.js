/*
There are n cars at given miles away from the starting mile 0, traveling to reach the mile target.
You are given two integer arrays position and speed, both of length n, where position[i] is the starting mile of the ith car and speed[i] is the speed of the ith car in miles per hour.
A car cannot pass another car, but it can catch up and then travel next to it at the speed of the slower car.
A car fleet is a single car or a group of cars driving next to each other. The speed of the car fleet is the minimum speed of any car in the fleet.
If a car catches up to a car fleet at the mile target, it will still be considered as part of the car fleet.
Return the number of car fleets that will arrive at the destination.

Example 1:
Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]

Output: 3
Explanation:
The cars starting at 10 (speed 2) and 8 (speed 4) become a fleet, meeting each other at 12. The fleet forms at target.
The car starting at 0 (speed 1) does not catch up to any other car, so it is a fleet by itself.
The cars starting at 5 (speed 1) and 3 (speed 3) become a fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.

Example 2:
Input: target = 10, position = [3], speed = [3]
Output: 1
Explanation:
There is only one car, hence there is only one fleet.
 */
var carFleet = function (target, position, speed) {
  const n = position.length;
  let fleets = 0;
  let lastTime = -Infinity; //time the most recently formed fleet reaches target. Starts at -Infinity so the very first (closest) car always starts a new fleet.
  const cars = position.map((p, i) => [p, speed[i]]); // Pair each car to their own speed
  /*
    i=0: p=10 → [10, speed[0]] → [10, 2]
    i=1: p=8  → [8,  speed[1]] → [8,  4]
    i=2: p=0  → [0,  speed[2]] → [0,  1]
    i=3: p=5  → [5,  speed[3]] → [5,  1]
    i=4: p=3  → [3,  speed[4]] → [3,  3]
 */
  cars.sort((a, b) => b[0] - a[0]); //sort descending by position: a[0]/b[0] are positions, so b[0] - a[0] puts the car closest to target. eg a= [10,2] b= [8,4] a[0] = 10, b[0] = 8

  for (let i = 0; i < n; i++) {
    const [p, s] = cars[i]; //destructure car's position and speed.
    const time = (target - p) / s;
    if (time > lastTime) {
      //if this car is slower to reach the target than the fleet ahead of it (i.e. takes strictly longer), it can never catch up and merge — it forms its own new fleet
      fleets++;
      lastTime = time; //register the new fleet and update the "time to beat" for cars behind it.
    }
  }

  return fleets;
};
