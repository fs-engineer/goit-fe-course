"use strict";

const buttonRef = document.querySelector(".task-five__btn");

const checkForSpam = (message) => {
  return (
    message.toUpperCase().includes("SALE") ||
    message.toUpperCase().includes("SPAM")
  );
};

buttonRef.addEventListener("click", () => {
  console.log(checkForSpam("Latest technology news"));

  console.log(checkForSpam("JavaScript weekly newsletter"));

  console.log(checkForSpam("Get best sale offers now!"));

  console.log(checkForSpam("[SPAM] How to earn fast money?"));
});
