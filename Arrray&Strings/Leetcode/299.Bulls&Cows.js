/*You are playing the Bulls and Cows game with your friend.

You write down a secret number and ask your friend to guess what the number is. When your friend makes a guess, you provide a hint with the following info:
The number of "bulls", which are digits in the guess that are in the correct position.
The number of "cows", which are digits in the guess that are in your secret number but are located in the wrong position. Specifically, the non-bull digits in the guess that could be rearranged such that they become bulls.
Given the secret number secret and your friend's guess guess, return the hint for your friend's guess.

The hint should be formatted as "xAyB", where x is the number of bulls and y is the number of cows. Note that both secret and guess may contain duplicate digits.

Example 1:
Input: secret = "1807", guess = "7810"
Output: "1A3B"
Explanation: Bulls are connected with a '|' and cows are underlined:
"1807"
  |
"7810" 

1 A 3 B = 
1 = 1 Secret and 1 Guess matched in position (8 from the above)
3 = 3 Similar digits out of the 4 but DIFFERENT postiions.

Bulls = right digit, right position
Cows = right digit, wrong position

Need to know that the numbers given WILL only be eg. 12345, 33331 same amount of length but diff digits. Thus when it is not a bull we will ++
*/

var getHint = function (secret, guess) {
  let bulls = 0,
    cows = 0;
  const secretCount = new Array(10).fill(0);
  const guessCount = new Array(10).fill(0);

  // step 1: count bulls (exact matches)
  // for non-matches, track how many times each digit appears unmatched
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else {
      secretCount[secret[i]]++; // e.g. secretCount[1]++ means secret had an unmatched '1'
      guessCount[guess[i]]++;
    }
  }

  // step 2: count cows
  // for each digit 0-9, the number of cows is the overlap between secret and guess
  // e.g. secret had 3 unmatched '1's, guess had 2 unmatched '1's → 2 cows for digit '1'
  for (let i = 0; i < 10; i++) {
    cow += Math.min(secretCount[i], guessCount[i]);
  }

  return `${bulls}A${cows}B`;
};
