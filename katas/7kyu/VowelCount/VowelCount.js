/*
=== Description ===
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

// === Solution ===
const getCount = (str) => {
  let vowelsCount = 0;
  // Write your code here
  const strArray = str.split("");
  const vowels = [];
  strArray.map((element) =>
    element === /aeiou/ ? vowels.push(element) : null
  );
  vowelsCount = vowels.length;

  console.log(vowels);
  return vowelsCount;
};

getCount("eggs");

module.exports = getCount;
