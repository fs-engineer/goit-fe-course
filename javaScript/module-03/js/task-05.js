"use strict";

const buttonRef = document.querySelector(".task-five__btn");

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  let nameOfProducts = [];
  for (const product of arr) {
    if (product.hasOwnProperty(prop)) {
      nameOfProducts.push(product[prop]);
    }
  }
  return nameOfProducts;
};

buttonRef.addEventListener("click", () => {
  console.log(getAllPropValues(products, "name"));

  console.log(getAllPropValues(products, "quantity"));

  console.log(getAllPropValues(products, "category"));
});
