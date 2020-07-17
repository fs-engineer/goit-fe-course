"use strict";

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const id = this.transactions.length + 1;
    const transObj = { id, type, amount };
    return transObj;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    if (amount !== null) {
      this.transactions.push(
        this.createTransaction(amount, Transaction.DEPOSIT)
      );
      this.balance += +amount;
    }
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount !== null) {
      if (amount > this.balance) {
        alert(
          `На вашем счету не достаточно средств. Баланс: ${
            this.balance
          } Для снятия не хватает ${this.balance - amount}`
        );
      } else {
        this.balance -= +amount;
        this.transactions.push(
          this.createTransaction(amount, Transaction.WITHDRAW)
        );
      }
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return `На вашем счету: ${this.balance}`;
    // return console.log(this.balance);
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */

  getTransactionDetails(id) {
    let user = this.transactions.find((item) => item.id === +id);

    return `Детали транзакции: ID: ${user.id}, тип транзакции: ${user.type}, сумма: ${user.amount}`;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let oneTypes = this.transactions.filter((item) => item.type === type);
    let sum = 0;

    for (let key in oneTypes) {
      for (let prop in oneTypes[key]) {
        if (prop === "amount") {
          sum += Number(oneTypes[key][prop]);
        }
      }
    }

    return `Вы совершили ${oneTypes.length} операций на сумму: ${sum}`;
  },
};

const buttonDepositRef = document.querySelector(".deposit__btn");
const buttonWithdrawRef = document.querySelector(".withdraw__btn");
const buttonBalanceRef = document.querySelector(".balance__btn");
const buttonFindIdRef = document.querySelector(".find-id__btn");
const buttonTypeOfOperationRef = document.querySelector(
  ".type-of-operation__btn"
);

buttonDepositRef.addEventListener("click", () => {
  account.deposit(prompt("Введите сумму:"));
});

buttonWithdrawRef.addEventListener("click", () => {
  account.withdraw(prompt("Введите сумму:"));
});

buttonBalanceRef.addEventListener("click", () => {
  alert(account.getBalance());
});

buttonFindIdRef.addEventListener("click", () => {
  const getId = prompt("Введите номер транзакции:");
  alert(account.getTransactionDetails(getId));
});

buttonTypeOfOperationRef.addEventListener("click", () => {
  const getTotal = prompt("Введите типа операции deposit или withdraw");
  alert(account.getTransactionTotal(getTotal));
});

// console.log(account.deposit(200));
// console.log(account.deposit(200));
// console.log(account.deposit(200));
// console.log(account.deposit(34));
// console.log(account.deposit(200));
// console.log(account.withdraw(304));
// console.log(account.deposit(340));
// console.log(account.deposit(304));
// console.log(account.withdraw(304));

// console.log(account.balance);

// console.log(account.getTransactionTotal("withdraw"));
