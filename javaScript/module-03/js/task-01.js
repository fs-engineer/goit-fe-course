"use strict";

const buttonRef = document.querySelector(".task-one__btn");

buttonRef.addEventListener("click", () => {
  const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true,
  };

  user.mood = "happy";
  user.hobby = "skydiving";
  user.premium = false;

  const keys = Object.keys(user);
  for (const key of keys) {
    console.log(`${key}: ${user[key]}`);
  }
});
