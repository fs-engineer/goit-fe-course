'use strict';

import users from './users.js';

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age > min && user.age < max);
};

const buttonRef = document.querySelector('.task-six__btn');
buttonRef.addEventListener('click', () => {
  console.table(getUsersWithAge(users, 20, 30));

  console.table(getUsersWithAge(users, 30, 40));
});
