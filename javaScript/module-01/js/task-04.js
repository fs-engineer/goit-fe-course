'use strict';

const buttonRef = document.querySelector('.task4__btn');
buttonRef.addEventListener('click', () => {
  const credits = 23580;
  const pricePerDroid = 3000;

  let message;
  let numberOfDroids = prompt(`Введите желаемое количество дроидов.
У вас на счету ${credits}`);

  numberOfDroids = Number(numberOfDroids);
  console.log(numberOfDroids);

  if (numberOfDroids === null) {
    message = 'Отменено пользователем';
  } else if (numberOfDroids > 0) {
    numberOfDroids = Number(numberOfDroids);

    const totalPrice = numberOfDroids * pricePerDroid;
    const result = credits - totalPrice;

    message =
      totalPrice <= credits
        ? `Вы преобрели ${numberOfDroids}, у вас на счету осталось ${result} кредитов.`
        : 'У Вас достаточно кредитов на счету!';
  } else {
    message = 'Нужно ввести число больше нуля!';
  }
  alert(message);
});
