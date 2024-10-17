/*In the world of Dota2, there are two parties: the Radiant and the Dire.
The Dota2 senate consists of senators coming from two parties. Now the Senate wants to decide on a change in the Dota2 game. The voting for this change is a round-based procedure. In each round, each senator can exercise one of the two rights:
Ban one senator's right: A senator can make another senator lose all his rights in this and all the following rounds.
Announce the victory: If this senator found the senators who still have rights to vote are all from the same party, he can announce the victory and decide on the change in the game.
Given a string senate representing each senator's party belonging. The character 'R' and 'D' represent the Radiant party and the Dire party. Then if there are n senators, the size of the given string will be n.

The round-based procedure starts from the first senator to the last senator in the given order. This procedure will last until the end of voting. All the senators who have lost their rights will be skipped during the procedure.

Suppose every senator is smart enough and will play the best strategy for his own party. Predict which party will finally announce the victory and change the Dota2 game. The output should be "Radiant" or "Dire".
 
Example 1:
Input: senate = "RD"
Output: "Radiant"
Explanation: 
The first senator comes from Radiant and he can just ban the next senator's right in round 1. 
And the second senator can't exercise any rights anymore since his right has been banned. 
And in round 2, the first senator can just announce the victory since he is the only guy in the senate who can vote.

Example 2:
Input: senate = "RDD"
Output: "Dire"
Explanation: 
The first senator comes from Radiant and he can just ban the next senator's right in round 1. 
And the second senator can't exercise any rights anymore since his right has been banned. 
And the third senator comes from Dire and he can ban the first senator's right in round 1. 
And in round 2, the third senator can just announce the victory since he is the only guy in the senate who can vote.
Intuition
The problem requires us to simulate a game-like situation where two parties are competing, and the outcome of the game depends on the actions taken by each party. In this case, the two parties are represented by the characters 'R' and 'D' in the given string "senate", and the goal is to determine which party will win the game.

The game is played in rounds, and each senator can either ban another senator's right to vote or announce the victory if they are the last one standing from their party. The game ends when there are no senators left with the right to vote.

Approach ===================================
1. First, we create two empty arrays, radiant and dire, to store the indices of the senators from each party.
2. We loop through the senate string and add the index of each senator to their respective party array. If the current character is 'R', we push the current index to the radiant array, and if it is 'D', we push it to the dire array.

3. We then enter a loop that runs until either the radiant or dire array becomes empty. In each iteration of the loop, we compare the index of the first senator from each party.

4. If the index of the first radiant senator is smaller than that of the first dire senator, then the radiant senator can ban the dire senator's right to vote. We remove the first element of the dire array using the shift method, and add the index of the next radiant senator to the end of the radiant array using the push method.

5. If the index of the first dire senator is smaller than that of the first radiant senator, then the dire senator can ban the radiant senator's right to vote. We remove the first element of the radiant array using the shift method, and add the index of the next dire senator to the end of the dire array using the push method.

6. We repeat steps 4 and 5 until either the radiant or dire array becomes empty.

7. Finally, we check whether the radiant array is empty or not. If it is empty, then the dire party has successfully banned all the radiant senators, and vice versa. We return the appropriate string indicating the victorious party.

Complexity
Time complexity: O(n^2)
Space complexity: O(n)

Code
/*
 * @param {string} senate
 * @return {string}
 */

function predictPartyVictory(senate) {
  let radiant = [];
  let dire = [];
  const n = senate.length;

  // If the senator is from the Dire party, add their index to the dire array
  // with an offset of n, representing their vote in the next round.
  for (let i = 0; i < n; i++) {
    if (senate[i] === "R") {
      radiant.push(i + n);
    } else {
      dire.push(i + n);
    }
  }
  // Loop through each round until one party has all the votes.
  while (radiant.length > 0 && dire.length > 0) {
    // Compare the indices of the first senator from each party.
    if (radiant[0] < dire[0]) {
      // If the Radiant senator's index is less than the Dire senator's index,
      // add their index to the end of the radiant array with an offset of n,
      // representing their vote in the next round.
      radiant.push(radiant[0] + n);
    } else {
      // If the Dire senator's index is less than or equal to the Radiant senator's index,
      // add their index to the end of the dire array with an offset of n,
      // representing their vote in the next round.
      dire.push(dire[0] + n);
    }
    // Remove the first senator from each party's array, since they have voted in this round.
    radiant.shift();
    dire.shift();
  }

  // Return the winner of the voting procedure based on which party has remaining votes.
  return radiant.length > 0 ? "Radiant" : "Dire";
}

function predictPartyVictory(senate) {
  let radiant = [];
  let dire = [];
  const n = senate.length;

  for (let i = 0; i < n; i++) {
    senate[i] === "R" ? radiant.push(i + n) : dire.push(i + n);
  }

  while (radiant.length > 0 && dire.length > 0) {
    radiant[0] < dire[0]
      ? radiant.push(radiant[0] + n)
      : dire.push(dire[0] + n);

    radiant.shift();
    dire.shift();
  }

  return radiant.length > 0 ? "Radiant" : "Dire";
}
