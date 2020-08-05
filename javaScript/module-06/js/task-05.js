'use strict';

import users from './users.js';

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

const buttonRef = document.querySelector('.task-five__btn');
buttonRef.addEventListener('click', () => {
  console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
  console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
});
