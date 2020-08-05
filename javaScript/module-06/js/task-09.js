'use strict';

import users from './users.js';

const getNamesSortedByFriendsCount = users => {
  let sortName = [];
  users
    .sort(
      (minValue, maxValue) => minValue.friends.length - maxValue.friends.length,
    )
    .map(user => {
      sortName.push(user.name);
    });

  return sortName;
};

const buttonRef = document.querySelector('.task-nine__btn');
buttonRef.addEventListener('click', () => {
  console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
});
