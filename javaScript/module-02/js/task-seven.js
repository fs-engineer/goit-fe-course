"use srtict";

const buttonRef = document.querySelector(".task-seven__btn");

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  let loginLength = login.length;

  loginLength = loginLength < 4 || loginLength > 16 ? false : true;

  return loginLength;
};

const isLoginUnique = function (allLogins, login) {
  let loginCheck;

  loginCheck = allLogins.includes(login) ? false : true;

  return loginCheck;
};

const addLogin = function (allLogins, login) {
  let message;
  if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
    logins.push(login);
    message = "Логин успешно добавлен!";
  } else if (isLoginValid(login) !== true) {
    message = "Ошибка! Логин должен быть от 4 до 16 символов";
  } else if (isLoginUnique(allLogins, login) !== true) {
    message = "Такой логин уже используется!";
  }

  return message;
};

buttonRef.addEventListener("click", () => {
  console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
  console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
  console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
  console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
});
