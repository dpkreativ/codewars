/*
=== Description ===

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
*/

// === Solution ===
const isIsogram = (str) => {
  stringArray = str.toLowerCase().split("");
  if (new Set(stringArray).size !== stringArray.length) {
    return false;
  }
  return true;
};

export default isIsogram;
