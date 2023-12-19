/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

isAnagram = function (str1, str2) {
  let str1sorted = str1.toLowerCase().split("").sort().join("");
  let str2sorted = str2.toLowerCase().split("").sort().join("");
  return str1sorted === str2sorted;
};



module.exports = isAnagram;
