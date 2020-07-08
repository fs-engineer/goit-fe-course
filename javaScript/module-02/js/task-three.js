"use strict";

const findLongestWord = function (string) {
  const wordsArray = string.split(" ");

  let lengthWord = 0;
  let biggestWord;
  for (let i = 0; i < wordsArray.length; i += 1) {
    if (wordsArray[i].length > lengthWord) {
      lengthWord = wordsArray[i].length;
      biggestWord = wordsArray[i];
    }
  }
  return biggestWord;
};

console.log(
  findLongestWord("The quick brown fox jumped over rumped the lazy dog")
);

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));

//ВАРИАНТ, ЕСЛИ В СТРОКЕ ЕСТЬ ДВА ИЛИ БОЛЕЕ ОДИНАКОВЫХ САМЫХ ДЛИННЫХ СЛОВА

// const findLongestWord = function (string) {
//   const wordsArray = string.split(" ");

//   let lengthWord = 0;
//   let biggestWord;
//   for (let i = 0; i < wordsArray.length; i += 1) {
//     if (wordsArray[i].length > lengthWord) {
//       lengthWord = wordsArray[i].length;
//       biggestWord = wordsArray[i];
//     } else if (wordsArray[i].length === lengthWord) {
//       biggestWord += `, ${wordsArray[i]}`;
//     }
//   }
//   return biggestWord;
// };

// console.log(
//   findLongestWord("The quick brown fox jumped over rumped the lazy dog")
// );

// console.log(findLongestWord("Google do a roll"));

// console.log(findLongestWord("May the force be with you"));
