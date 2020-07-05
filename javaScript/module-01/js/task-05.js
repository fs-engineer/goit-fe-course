'use strict';

const buttonRef = document.querySelector('.task5__btn');
buttonRef.addEventListener('click', () => {
  let userInput = prompt('Выберите страну доставки:');

  let result;

  if (userInput === null) {
    alert('Вы отменили ввод, всего доброго!');
  } else if (userInput === '') {
    alert('Вы не ввели ни одну страну!');
  } else {
    userInput = userInput[0].toUpperCase() + userInput.slice(1).toLowerCase();
    switch (userInput) {
      case 'Китай':
        result = '100 кредитов';
        alert(`Доставка в ${userInput} обойдется ${result} кредитов!`);
        break;

      case 'Чили':
        result = '250 кредитов';
        alert(`Доставка в ${userInput} обойдется ${result} кредитов!`);
        break;

      case 'Австралия':
        result = '170 кредитов';
        alert(`Доставка в ${userInput} обойдется ${result} кредитов!`);
        break;

      case 'Индия':
        result = '80 кредитов';
        alert(`Доставка в ${userInput} обойдется ${result} кредитов!`);
        break;

      case 'Ямайка':
        result = '120 кредитов';
        alert(`Доставка в ${userInput} обойдется ${result} кредитов!`);
        break;

      default:
        alert('Доставка в вашу страну не возможна');
    }
  }
});
