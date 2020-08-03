'use strict';

import users from './users.js';

const getUserWithEmail = (users, email) => {
  const userEmail = users.find(user => {
    if (user.email === email) return user;
  });
  return userEmail;
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
