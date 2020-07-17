"use strict";

const buttonRef = document.querySelector(".task-two__btn");

const countProps = function (obj) {
  return Object.keys(obj).length;
};

buttonRef.addEventListener("click", () => {
  console.log(countProps({}));

  console.log(countProps({ name: "Mango", age: 2 }));

  console.log(
    countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })
  );
});
