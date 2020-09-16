'use strict';

const decrementRef = document.querySelector('button[data-action="decrement"]');
const incrementRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');
let counterValue = 0;

decrementRef.addEventListener('click', decrement);
incrementRef.addEventListener('click', increment);

function decrement() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}
function increment() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}
