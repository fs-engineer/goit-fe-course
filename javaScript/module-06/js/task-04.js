'use strict';

import users from './users.js';

const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

const buttonRef = document.querySelector('.task-four__btn');
buttonRef.addEventListener('click', () => {
  console.table(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
});
