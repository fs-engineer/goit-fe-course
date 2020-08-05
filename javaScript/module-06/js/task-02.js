'use strict';

import users from './users.js';

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

const buttonRef = document.querySelector('.task-two__btn');

buttonRef.addEventListener('click', () => {
  console.table(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
});
