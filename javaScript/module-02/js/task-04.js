"use strict";

const buttonRef = document.querySelector(".task-four__btn");

const formatString = (string) => {
  return string.length > 40 ? `${string.slice(0, 41)}...` : string;
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
