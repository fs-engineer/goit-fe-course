'use strict';

import users from './users.js';

const getUserNames = array => {
  return users.map(user => user.name);
};

const buttonRef = document.querySelector('.task-one__btn');

buttonRef.addEventListener('click', () => {
  console.log(getUserNames(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
});
