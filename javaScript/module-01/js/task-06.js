'use strict';

const buttonRef = document.querySelector('.task6__btn');
buttonRef.addEventListener('click', () => {
  let total = 0;
  let input;

  do {
    input = prompt('Введите любое число');

    if (input !== null) {
      if (Number.isNaN(+input)) {
        alert('Вы ввели не число, попробуйте еще раз');
        continue;
      }
      input = Number(input);
      total += input;
      alert(`Сумма всех чисел: ${total}`);
    }
  } while (input !== null);
});
