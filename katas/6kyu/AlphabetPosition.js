// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
const test = "The sunset sets at twelve o' clock.";

function alphabetPosition(text) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return text
    .toLowerCase()
    .split('')
    .filter((el) => el.match(/[a-z]/))
    .map((el) => (el = alphabets.indexOf(el) + 1))
    .join(' ');
}

console.log(alphabetPosition(test));
