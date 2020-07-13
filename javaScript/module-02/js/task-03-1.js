"use strict";

const buttonRef = document.querySelector(".task-three-one__btn");

const findLongestWord = (string) => {
  const wordsArray = string.split(" ");

  let biggestWord = [];
  for (let i = 0; i < wordsArray.length; i += 1) {
    if (wordsArray[i].length > biggestWord.length) {
      // console.log(biggestWord);
      biggestWord = wordsArray[i];
    }
  }
  let allBiggestWords = [];
  for (let j = 0; j < wordsArray.length; j += 1) {
    if (wordsArray[j].length === biggestWord.length) {
      allBiggestWords.push(wordsArray[j]);
    }
  }

  return allBiggestWords;
};

buttonRef.addEventListener("click", () => {
  console.log(
    findLongestWord("The quick brown fox jumped over rumped the lazy dog")
  );
  console.log(findLongestWord("cramle Google do a roll toogle "));

  console.log(findLongestWord("May the force be with you"));

  console.log(findLongestWord("я ты иди тада назад вперед"));
});
