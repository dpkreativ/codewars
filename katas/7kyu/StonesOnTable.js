/*
=== Description ===
There are some stones on Bob's table in a row, and each of them can be red, green or blue, indicated by the characters R, G, and B.

Help Bob find the minimum number of stones he needs to remove from the table so that the stones in each pair of adjacent stones have different colours.

Examples:

"RGBRGBRGGB"   => 1
"RGGRGBBRGRR"  => 3
"RRRRGGGGBBBB" => 9
*/
// === Solution ===
const solve = (stones) => {
  let stonesArray = stones.split("");
  let acceptedStones = [];
  let rejectedStones = [];
  for (let i = 0; i < stonesArray.length; i++) {
    if (rejectedStones.length === 0 && acceptedStones.length === 0) {
      acceptedStones.push(stonesArray[i]);
    } else if (stonesArray[i] === acceptedStones[acceptedStones.length - 1]) {
      rejectedStones.push(stonesArray[i]);
    } else {
      acceptedStones.push(stonesArray[i]);
    }
  }
  return rejectedStones.length;
};

export default solve;
