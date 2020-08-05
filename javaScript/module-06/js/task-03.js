'use strict';

import users from './users.js';

const getUsersWithGender = (users, gender) => {
  let userNames = [];
  const usersArray = users.filter(user => {
    if (user.gender === gender) userNames.push(user.name);
  });
  return userNames;
};

const buttonRef = document.querySelector('.task-three__btn');

buttonRef.addEventListener('click', () => {
  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
});
