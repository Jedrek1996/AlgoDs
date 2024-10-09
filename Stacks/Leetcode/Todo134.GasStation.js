/*134. Gas Station
There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.
Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique.

Example 1:
Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3
Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.
Example 2:

Input: gas = [2,3,4], cost = [3,4,3]
Output: -1
Explanation:
You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 3 + 2 = 3
Travel to station 1. Your tank = 3 - 3 + 3 = 3
You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
Therefore, you can't travel around the circuit once no matter where you start.
===============================================
There are two key concepts to grasp to understand this problem.

Let's use the example:
gas : [ 1, 2, 3, 4, 5]
cost: [ 3, 4, 5, 1, 2]

The first question is, can we know if a solution exists just by looking at these arrays?
We can. If we take the sum of gas[], and subtrack the sum of cost[], we get a single number. If the number is less than 0, then there is no way to complete a round trip, regardless of where we start. There just isn't enough gas to make up for the cost.
Let's start with this part of the solution:

var canCompleteCircuit = function(gas, cost) {
	let totalTank = 0;
	for (let i = 0; i < gas.length; i++) {
		const netCost = gas[i] - cost[i];
		totalTank += netCost;
	}
	return totalTank < 0 ? -1 : //our final answer goes here
}

The second intuition is how to figure out the correct starting station in a single pass. We'll create two variables, currentTank and startingStation, which both will be initialized to zero.
Let's imagine this using the example above:
gas : [ 1, 2, 3, 4, 5]
cost: [ 3, 4, 5, 1, 2]

We start at station 0. It has one gas and 3 cost, so netCost is -2. Since the netCost is negative, that means this station isn't a valid starting point, so we'll move onto the next one.

Station one has the same problem - gas[1] = 2 and cost[1] = 4, so netCost = -2, another invalid station. Move to the next one.

Station two is also -2. Moving on.

Station three has a netCost = 3. That means that this is a potential starting point, since we can actually get from station three to station four using only the gas given to us at station 3. So, set startingStation to 3. Also, let's add the netCost to our currentTank, which was still at 0 and is now 3.

Now, we check out station 4. Again, netCost is 3, which means currentTank becomes 6.

At this point, we're done with the loop. totalTank is >= 0, so we know that a valid solution exists. What's more, we know that we never ran out of gas starting at station 3. Combining those two facts - that there is a solution, and that station 3 is the earliest station in the array where you don't run out of gas before reaching the end of the array, this means that station 3 is the correct starting point!

This isn't necessarily intuitive at first. We didn't exhaustively search the beginning of the array, so you may feel uneasy with this approach.

Here's the thing: We know that Station 0, Station 1, and Station 2 are not valid starting points. We also have a car that has an unlimited tank - that's important. If your tank is unlimited, that means there's no downside to taking gas now as opposed to later.

All of this combined means that the earliest starting point we can find is the right one - assuming the trip is possible at all, which we already checked for using totalTank.

Finally, let's draw up the complete solution:

*/
var canCompleteCircuit = function (gas, cost) {
  let totalTank = 0;
  let currentTank = 0;
  let startingStation = 0;
  for (let i = 0; i < gas.length; i++) {
    const netCost = gas[i] - cost[i];
    totalTank += netCost;
    currentTank += netCost;
    if (currentTank < 0) {
      startingStation = i + 1;
      currentTank = 0;
    }
  }
  return totalTank < 0 ? -1 : startingStation;
};
