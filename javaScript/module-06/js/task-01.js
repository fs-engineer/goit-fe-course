'use strict';

import users from './users.js';

const getUserNames = array => {
  let userName = [];
  users.forEach(user => {
    userName.push(user.name);
  });
  return userName;
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
