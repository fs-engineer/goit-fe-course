'use strict';

const inputNameRef = document.getElementById('validation-input');

inputNameRef.addEventListener('blur', handleInputValidation);

function handleInputValidation() {
  if (inputNameRef.value.length === +inputNameRef.dataset.length) {
    inputNameRef.classList.remove('invalid');
    inputNameRef.classList.add('valid');
  } else {
    inputNameRef.classList.remove('valid');
    inputNameRef.classList.add('invalid');
  }
}
