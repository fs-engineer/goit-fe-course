"use strict";

const buttonRef = document.querySelector(".task-two__btn");

const countProps = function (obj) {
  let count = 0;
  for (const key in obj) {
    count += 1;
  }
  return count;
};

buttonRef.addEventListener("click", () => {
  console.log(countProps({}));

  console.log(countProps({ name: "Mango", age: 2 }));

  console.log(
    countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })
  );
});
