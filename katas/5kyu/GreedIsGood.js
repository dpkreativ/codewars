/*
=== Description ===
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.
*/
// === Solution ===
const score = (dice) => {
  let arr1 = [],
    arr2 = [],
    arr3 = [],
    arr4 = [],
    arr5 = [],
    arr6 = [];

  dice.forEach((num) => {
    num === 1
      ? arr1.push(num)
      : num === 2
      ? arr2.push(num)
      : num === 3
      ? arr3.push(num)
      : num === 4
      ? arr4.push(num)
      : num === 5
      ? arr5.push(num)
      : num === 6
      ? arr6.push(num)
      : null;
  });

  const pt1 =
    arr1.length >= 3 ? 1000 + (arr1.length - 3) * 100 : arr1.length * 100;
  const pt2 = arr2.length >= 3 ? 200 + 0 : 0;
  const pt3 = arr3.length >= 3 ? 300 + 0 : 0;
  const pt4 = arr4.length >= 3 ? 400 + 0 : 0;
  const pt5 =
    arr5.length >= 3 ? 500 + (arr5.length - 3) * 50 : arr5.length * 50;
  const pt6 = arr6.length >= 3 ? 600 + 0 : 0;

  return pt1 + pt2 + pt3 + pt4 + pt5 + pt6;
};

export default score;
