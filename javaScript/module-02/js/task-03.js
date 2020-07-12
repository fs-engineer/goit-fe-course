"use strict";

const buttonRef = document.querySelector(".task-three__btn");

const findLongestWord = (string) => {
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

buttonRef.addEventListener("click", () => {
  console.log(
    findLongestWord("The quick brown fox jumped over rumped the lazy dog")
  );
  console.log(findLongestWord("Google do a roll"));

  console.log(findLongestWord("May the force be with you"));
});
