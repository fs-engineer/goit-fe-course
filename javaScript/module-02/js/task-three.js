"use strict";

const findLongestWord = function (string) {
  const wordsArray = string.split(" ");
  console.log(wordsArray);
  let lengthWord = 0;
  let biggestWord;
  for (let i = 0; i < wordsArray.length; i += 1) {
    if (wordsArray[i].length > lengthWord) {
      lengthWord = wordsArray[i].length;
      biggestWord = wordsArray[i];
    } else if (wordsArray[i].length === lengthWord) {
      biggestWord += `, ${wordsArray[i]}`;
    }
  }
  console.log(biggestWord);
  console.log(lengthWord);
};

console.log(
  findLongestWord("The quick brown fox jumped over the lazy dog rumped")
); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'
