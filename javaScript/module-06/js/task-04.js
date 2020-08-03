'use strict';

import users from './users.js';

const getInactiveUsers = users => {
  const deactiveUsers = users.filter(user => {
    return !user.isActive;
  });
  return deactiveUsers;
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
