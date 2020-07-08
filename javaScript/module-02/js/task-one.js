"use strict";

const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`Номер в списке: ${i + 1} item: ${array[i]}`);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
