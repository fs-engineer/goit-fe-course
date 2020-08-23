'use strict';

const inputRangeRef = document.getElementById('font-size-control');
const textLabelRef = document.getElementById('text');

inputRangeRef.addEventListener('input', event => {
  textLabelRef.style.fontSize = event.target.value + 'px';
});
