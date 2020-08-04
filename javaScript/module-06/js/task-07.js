'use strict';

import users from './users.js';

//решение 1
// const calculateTotalBalance = users => {
//   let balanceSum = 0;
//   users.filter(user => {
//     balanceSum += user.balance;
//   });
//   return balanceSum;
// };

// решение 2
const calculateTotalBalance = users => {
  return users.reduce((acc, item) => acc + item.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916

console.table(users);
