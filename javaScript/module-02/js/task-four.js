"use strict";

const print = function (str) {
  console.log(str);
};

const string = "Donec orci lectus aliquam est magnis";
const collectionSring = string.split(" ");
console.log(collectionSring);

const emptyArray = [];

for (let i = 0; i < collectionSring.length; i += 1) {
  emptyArray.push(collectionSring[i]);
}
print(emptyArray);
console.log(emptyArray);
