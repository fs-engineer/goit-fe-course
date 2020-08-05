'use strict';

import users from './users.js';

const calculateTotalBalance = users => {
  return users.reduce((acc, item) => acc + item.balance, 0);
};

const buttonRef = document.querySelector('.task-seven__btn');
buttonRef.addEventListener('click', () => {
  console.log(calculateTotalBalance(users)); // 20916
});
