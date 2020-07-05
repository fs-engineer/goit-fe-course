'use strict';

const buttonRef = document.querySelector('.task3__btn');
buttonRef.addEventListener('click', () => {
  const ADMIN_PASSWORD = 'jam';
  let message;

  const userInput = prompt('Введите свой пароль!');

  if (userInput === null) {
    message = 'Оменено пользователем!';
  } else if (userInput === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
  } else {
    message = 'Введен не верный пароль, попробуйте еще раз';
  }
  alert(message);
});
