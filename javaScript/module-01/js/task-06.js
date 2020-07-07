'use strict';

const buttonRef = document.querySelector('.task6__btn');
buttonRef.addEventListener('click', () => {
  let input;
  let total = 0;

  do {
    input = prompt('Введите любое число!');

    if (input === null) {
      alert(`Сумма всех чисел: ${total}`);
      break;
    }

    input = Number(input);
    const checkInputIsNan = isNaN(input);
    if (checkInputIsNan === true) {
      alert('Вы ввели не число, попробуйте еще раз');
    } else {
      total += input;
    }
  } while (true);
});
