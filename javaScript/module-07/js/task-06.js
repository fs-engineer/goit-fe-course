'use strict';

const inputNameRef = document.getElementById('validation-input');

inputNameRef.addEventListener('input', handleInputChange);

function handleInputChange() {
  if (inputNameRef.value.length === +inputNameRef.dataset.length) {
    inputNameRef.classList.remove('invalid');
    inputNameRef.classList.add('valid');
  } else {
    inputNameRef.classList.remove('valid');
    inputNameRef.classList.add('invalid');
  }
}
