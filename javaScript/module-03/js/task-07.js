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
    if (amount === null) {
      return;
    }
    this.transactions.push(
      this.createTransaction(amount, Transaction.WITHDRAW)
    );
    if (amount > this.balance) {
      alert(
        `На вашем счету не достаточно средств. Баланс: ${
          this.balance
        } Для снятия не хватает ${this.balance - amount}`
      );
    } else {
      this.balance -= +amount;
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
    let stringForReturn = "";
    if (id === null) {
      return;
    }
    id = Number(+id);
    for (let transaction of this.transactions) {
      for (let prop in transaction) {
        if (prop === "id" && transaction[prop] === id) {
          for (let key in transaction) {
            stringForReturn += `${key}: ${transaction[key]}, `;
          }
        }
      }
    }
    return alert(`Детали транзакции: ${stringForReturn}`);
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let allTransactions = [];
    let transactionBalance = 0;
    if (type === null) {
      return;
    }
    for (let transaction of this.transactions) {
      for (let prop in transaction) {
        if (transaction[prop] === type) {
          allTransactions.push(transaction);
        }
      }
    }
    for (let key in allTransactions) {
      for (let prop in allTransactions[key]) {
        if (prop === "amount") {
          transactionBalance += Number(allTransactions[key][prop]);
        }
      }
    }
    return alert(
      `Вы совершили ${allTransactions.length} операций на сумму: ${transactionBalance}`
    );
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
  account.getTransactionDetails(prompt("Введите номер транзакции:"));
});

buttonTypeOfOperationRef.addEventListener("click", () => {
  account.getTransactionTotal(
    prompt("Введите типа операции deposit или withdraw")
  );
});
