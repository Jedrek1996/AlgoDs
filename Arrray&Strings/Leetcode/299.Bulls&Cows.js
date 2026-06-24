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
*/

var getHint = function(secret, guess) {
    let bulls = 0;
    let cows = 0;
    const count = new Array(10).fill(0);

    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            bulls++;
        } else {
            //positive = seen in secret but unmatched
            // thnegative = seen in guess but unmatched
            // if secret digit was previously seen in guess → cow found
            if (count[secret[i]] < 0) cows++;
            // if guess digit was previously seen in secret → cow found
            if (count[guess[i]] > 0) cows++;

            count[secret[i]]++;  // track secret digits as positive
            count[guess[i]]--;   // track guess digits as negative
        }
    }

    return `${bulls}A${cows}B`;
};