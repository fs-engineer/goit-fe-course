'use strict';

import users from './users.js';

const getUsersWithFriend = (users, friendName) => {
  const getFrandsName = [];

  users.forEach(user => {
    user.friends.filter(friend => {
      if (friend === friendName) getFrandsName.push(user.name);
    });
  });

  return getFrandsName;
};

const buttonRef = document.querySelector('.task-eigth__btn');
buttonRef.addEventListener('click', () => {
  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
});
