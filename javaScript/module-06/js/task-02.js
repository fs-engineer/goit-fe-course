'use strict';

import users from './users.js';

const getUsersWithEyeColor = (users, color) => {
  const eyeColorArray = users.filter(user => {
    if (user.eyeColor === color) return user.eyeColor;
  });
  return eyeColorArray;
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
