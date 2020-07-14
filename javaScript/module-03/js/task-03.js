"use strict";

const buttonRef = document.querySelector(".task-three__btn");

const findBestEmployee = function (employees) {
  let maxTask = 0;
  let bestEmployee;
  for (let employee in employees) {
    if (employees[employee] > maxTask) {
      maxTask = employees[employee];
      bestEmployee = employee;
    }
  }
  return bestEmployee;
};

buttonRef.addEventListener("click", () => {
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    })
  );

  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    })
  );

  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    })
  );
});
