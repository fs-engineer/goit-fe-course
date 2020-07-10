"use strict";

const buttonRef = document.querySelector(".task-four__btn");

const formatString = (string) => {
  const stringLegnth = string.length;
  let newString;

  if (stringLegnth > 40) {
    const stringArray = string.split("");
    stringArray.length = 40;
    stringArray.push("...");
    newString = stringArray.join("");
  }
  if (stringLegnth < 40) {
    newString = string;
  }
  return newString;
};

buttonRef.addEventListener("click", () => {
  console.log(formatString("Curabitur ligula sapien, tincidunt non."));

  console.log(
    formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
  );

  console.log(formatString("Curabitur ligula sapien."));

  console.log(
    formatString(
      "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
    )
  );
});
