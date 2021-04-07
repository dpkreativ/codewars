// === Day 1 ===

// == IP Validation (6kyu) ==
import isValidIP from "./katas/6kyu/IPValidation.js";

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
import findDifference from "./katas/8kyu/VolumeOfCuboids.js";

// Tests
// console.log(findDifference([3, 2, 5], [1, 4, 4]));
// console.log(findDifference([9, 7, 2], [5, 2, 2]));
// console.log(findDifference([11, 2, 5], [1, 10, 8]));
// console.log(findDifference([4, 4, 7], [3, 9, 3]));
// console.log(findDifference([15, 20, 25], [10, 30, 25]));

// == Sum - Square Even, Root Odd (7kyu) ==
import sumSquareEvenRootOdd from "./katas/7kyu/SumSquares.js";

// Tests
// console.log(sumSquareEvenRootOdd([4, 5, 7, 8, 1, 2, 3, 0]));
// console.log(sumSquareEvenRootOdd([1, 14, 9, 8, 17, 21]));

// ===========================================================================
// === Day 2 ===

// == Detect Pangram (6kyu) ==
import isPangram from "./katas/6kyu/CheckPangram.js";

// Tests
// console.log(isPangram("The quick brown fox jumps over the lazy dog."));
// console.log(isPangram("This is not a pangram."));

// ===========================================================================
// === Day 3 ===

// == Isograms (7kyu) ==
import isIsogram from "./katas/7kyu/Isograms.js";

// Tests
// console.log(isIsogram("Dermatoglyphics")); // true
// console.log(isIsogram("isogram")); // true
// console.log(isIsogram("aba")); // false
// console.log(isIsogram("moOse")); // false
// console.log(isIsogram("isIsogram")); // false
// console.log(isIsogram("")); // true - empty string is a valid isogram

// ===========================================================================
// === Day 4 ===

// == Opposites Attract (8kyu) ==
import lovefunc from "./katas/8kyu/OppositesAttract.js";

// Tests
// console.log(lovefunc(1, 4));
// console.log(lovefunc(2, 2));
// console.log(lovefunc(0, 1));
// console.log(lovefunc(0, 0));

// ===========================================================================
// === Day 4 ===

// == Greed is Good (5kyu) ==
import score from "./katas/5kyu/GreedIsGood.js";

// Tests
// console.log(score([2, 3, 4, 6, 2])) // Should be 0
// console.log(score([4, 4, 4, 3, 3])) // Should be 400
// console.log(score([2, 4, 4, 5, 4])) // Should be 450

// == Get Nth Even Number ==
import nthEven from "./katas/8kyu/NthEvenNumber.js";

// Tests
// console.log(nthEven(1));
// console.log(nthEven(2));
// console.log(nthEven(3));
// console.log(nthEven(100));
// console.log(nthEven(1298734));

// ===========================================================================
// === Day 4 ===

// == DNA to RNA Conversion (8kyu) ==
import DNAtoRNA from "./katas/8kyu/DNAtoRNA.js";

// Tests
// console.log(DNAtoRNA("TTTT"));
// console.log(DNAtoRNA("GCAT"));
// console.log(DNAtoRNA("GACCGCCGCC"));

// ===========================================================================
// === Day 5 ===

// == Stones on the Table (7kyu) ==
import solve from "./katas/7kyu/StonesOnTable.js";

// Tests
// console.log(solve("RRGGBB"));
// console.log(solve("RGBRGB"));
// console.log(solve("BGRBBGGBRRR"));
// console.log(solve("GBBBGGRRGRB"));
// console.log(solve("GBRGGRBBBBRRGGGB"));

// ===========================================================================
// === Day 6 ===

// == To Time (7kyu) ==
import toTime from "./katas/7kyu/toTime.js";

// Tests
// console.log(toTime(3600));
// console.log(toTime(3601));
// console.log(toTime(3500));
// console.log(toTime(323500));
// console.log(toTime(0));

// ===========================================================================
// === Day 7 ===

// == Price of Mangoes ==
import MangoDiscount from "./katas/8kyu/MangoDiscount.js";

// Tests
console.log(MangoDiscount(3, 3));
console.log(MangoDiscount(10, 5));
