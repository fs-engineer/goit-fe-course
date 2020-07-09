"use strict";

const buttonRef = document.querySelector(".task-six__btn");

buttonRef.addEventListener("click", () => {
  let input;
  const numbers = [];
  let total = 0;
  do {
    input = prompt("Введите любое число!");

    if (input !== null) {
      input = Number(input);
      if (Number.isNaN(input)) {
        alert("Вы ввели не число, попробуйте еще раз");
        continue;
      }
      numbers.push(input);
    } else {
      for (let number of numbers) {
        total += number;
      }
      alert(`Вы ввели числа на общую сумму [${total}].`);
      break;
    }
  } while (input !== null);
});
