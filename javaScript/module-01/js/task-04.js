'use strict';

const buttonRef = document.querySelector('.task4__btn');
buttonRef.addEventListener('click', () => {
  const credits = 23580;
  const pricePerDroid = 3000;

  let numberOfDroids = prompt(`Введите желаемое количество дроидов.
У вас на счету ${credits}`);

  if (numberOfDroids === null) {
    alert('Отменено пользователем');
  } else if (numberOfDroids > 0) {
    numberOfDroids = Number(numberOfDroids);

    const totalPrice = numberOfDroids * pricePerDroid;

    if (totalPrice <= credits)
      alert(
        `Вы преобрели ${numberOfDroids}шт. за ${totalPrice} кредитов. У Вас на счету осталось ${
          credits - totalPrice
        } кредитов.`,
      );
    else if (totalPrice > credits) {
      alert('У Вас достаточно кредитов на счету!');
    }
  } else {
    alert('Нужно ввести число больше нуля!');
  }
  alert(message);
});
