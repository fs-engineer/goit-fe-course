"use strict";

const buttonRef = document.querySelector(".task-four__btn");

const countTotalSalary = function (employees) {
  let totalSalary = 0;
  for (const employee in employees) {
    totalSalary += employees[employee];
  }
  return totalSalary;
};

buttonRef.addEventListener("click", () => {
  console.log(countTotalSalary({}));

  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    })
  );

  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    })
  );
});
