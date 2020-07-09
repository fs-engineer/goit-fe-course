"use strict";

const buttonRef = document.querySelector(".task-five__btn");

const checkForSpam = function (message) {
  const messageUpper = message.toUpperCase();
  let spamCheck;

  if (messageUpper.includes("SALE") || messageUpper.includes("SPAM")) {
    spamCheck = true;
  } else {
    spamCheck = false;
  }

  return spamCheck;
};

buttonRef.addEventListener("click", () => {
  console.log(checkForSpam("Latest technology news"));

  console.log(checkForSpam("JavaScript weekly newsletter"));

  console.log(checkForSpam("Get best sale offers now!"));

  console.log(checkForSpam("[SPAM] How to earn fast money?"));
});
