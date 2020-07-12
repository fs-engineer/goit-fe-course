"use srtict";

const buttonRef = document.querySelector(".task-seven__btn");

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = (login) => {
  return login.length < 4 || login.length > 16 ? true : false;
};

const isLoginUnique = (allLogins, login) => {
  return allLogins.includes(login) ? true : false;
};

const addLogin = (allLogins, login) => {
  if (isLoginValid(login)) {
    return console.log("Ошибка! Логин должен быть от 4 до 16 символов");
  }
  if (isLoginUnique(allLogins, login)) {
    return console.log("Такой логин уже используется!");
  }
  return console.log("Логин успешно добавлен!");
};

buttonRef.addEventListener("click", () => {
  console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
  console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
  console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
  console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
});

//СТАРОЕ РЕШЕНИЕ

// const buttonRef = document.querySelector(".task-seven__btn");

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// const isLoginValid = (login) => {
//   return login.length < 4 || login.length > 16 ? false : true;
// };

// const isLoginUnique = (allLogins, login) => {

//   return allLogins.includes(login) ? false : true;

// };

// const addLogin = (allLogins, login) => {
//   let message;
//   if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
//     logins.push(login);
//     message = "Логин успешно добавлен!";
//   } else if (isLoginValid(login) !== true) {
//     message = "Ошибка! Логин должен быть от 4 до 16 символов";
//   } else if (isLoginUnique(allLogins, login) !== true) {
//     message = "Такой логин уже используется!";
//   }

//   return message;
// };

// buttonRef.addEventListener("click", () => {
//   console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
//   console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
//   console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
//   console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// });
