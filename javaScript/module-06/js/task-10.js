'use strict';

import users from './users.js';

const getSortedUniqueSkills = users => {
  let uniqueSkills = [];
  const allSkills = users
    .reduce(function (userSkills, user) {
      userSkills.push(...user.skills);

      return userSkills;
    }, [])
    .forEach(skill => {
      if (!uniqueSkills.includes(skill)) {
        uniqueSkills.push(skill);
      }
    });
  return uniqueSkills.sort();
};

const buttonRef = document.querySelector('.task-ten__btn');
buttonRef.addEventListener('click', () => {
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
});
