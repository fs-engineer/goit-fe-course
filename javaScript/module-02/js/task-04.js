"use strict";

const buttonRef = document.querySelector(".task-four__btn");

const formatString = (string) => {
  let newString = string.length > 40 ? string.substring(0, 41) + "..." : string;

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
