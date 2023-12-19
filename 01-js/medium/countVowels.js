/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(testString) {
  let numberOfVowels = 0;
  vowelsArray = ['a', 'e', 'i', 'o', 'u'];
  testString = testString.toLowerCase();
  indexes1 = testString.length;
  for (let i = 0; i < indexes1; i++) {
    if (vowelsArray.includes(testString[i])) {
      numberOfVowels++;
    }
  }
  return numberOfVowels;
}

module.exports = countVowels;