/*
=== Description ===
Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

The list will never be empty and will only contain values that are greater than or equal to zero.

Good luck!
*/

// === Solution ===

const sumSquareEvenRootOdd = (nums) => {
  const squaresAndRoots = nums.map((arr) => {
    if (arr % 2 == 0) {
      return Math.pow(arr, 2);
    } else {
      return Math.sqrt(arr);
    }
  });
  const addResults = squaresAndRoots.reduce((acc, cur) => acc + cur);
  const twoDecimals = Math.round(addResults * 100) / 100;
  return twoDecimals;
};

module.exports = sumSquareEvenRootOdd;
