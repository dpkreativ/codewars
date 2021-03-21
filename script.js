// === Day 1 ===

// == IP Validation (6kyu) ==
import isValidIP from "./katas/6kyu/IPValidation";

// Tests
// console.log(isValidIP("0.0.0.0"));
// console.log(isValidIP("12.255.56.1"));
// console.log(isValidIP("137.255.156.100"));
// console.log(isValidIP(""));
// console.log(isValidIP("abc.def.ghi.jkl"));
// console.log(isValidIP("123.456.789.0"));
// console.log(isValidIP("12.34.56"));
// console.log(isValidIP("01.02.03.04"));
// console.log(isValidIP("256.1.2.3"));
// console.log(isValidIP("1.2.3.4.5"));
// console.log(isValidIP("123,45,67,89"));
// console.log(isValidIP("1e0.1e1.1e2.2e2"));
// console.log(isValidIP(" 1.2.3.4"));
// console.log(isValidIP("1.2.3.4 "));
// console.log(isValidIP("12.34.56.-7"));
// console.log(isValidIP("1.2.3.4\n"));
// console.log(isValidIP("\n1.2.3.4"));

// == Difference of Volumes of Cuboids (8kyu) ==
import findDifference from "./katas/8kyu/VolumeOfCuboids";

// Tests
// console.log(findDifference([3, 2, 5], [1, 4, 4]));
// console.log(findDifference([9, 7, 2], [5, 2, 2]));
// console.log(findDifference([11, 2, 5], [1, 10, 8]));
// console.log(findDifference([4, 4, 7], [3, 9, 3]));
// console.log(findDifference([15, 20, 25], [10, 30, 25]));

// == Sum - Square Even, Root Odd (7kyu) ==
import sumSquareEvenRootOdd from "./katas/7kyu/SumSquares";

// Tests
// console.log(sumSquareEvenRootOdd([4, 5, 7, 8, 1, 2, 3, 0]));
// console.log(sumSquareEvenRootOdd([1, 14, 9, 8, 17, 21]));

// ===========================================================================
// === Day 2 ===

// == Detect Pangram (6kyu) ==
import isPangram from "./katas/6kyu/CheckPangram";

// Tests
// console.log(isPangram("The quick brown fox jumps over the lazy dog."));
// console.log(isPangram("This is not a pangram."));

// ===========================================================================
// === Day 3 ===

// == Isograms (7kyu) ==
import isIsogram from "./katas/7kyu/Isograms";

// Tests
console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("isogram")); // true
console.log(isIsogram("aba")); // false
console.log(isIsogram("moOse")); // false
console.log(isIsogram("isIsogram")); // false
console.log(isIsogram("")); // true - empty string is a valid isogram

// ===========================================================================
// === Day 4 ===

// == Opposites Attract (8kyu) ==
