'use strict';

import users from './users.js';

const calculateTotalBalance = users => {
  let balanceSum = 0;
  users.filter(user => {
    balanceSum += user.balance;
  });
  return balanceSum;
};

console.log(calculateTotalBalance(users)); // 20916
