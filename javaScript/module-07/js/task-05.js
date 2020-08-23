'use strict';

const inputRef = document.getElementById('name-input');
const outputRef = document.getElementById('name-output');

inputRef.addEventListener('input', event => {
  outputRef.textContent = event.target.value;
  if (event.target.value === '') {
    outputRef.textContent = 'незнакомец';
  }
});
