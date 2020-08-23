'use strict';

const btnRenderRef = document.querySelector('button[data-action="render"]');
const btnDestroyRef = document.querySelector('button[data-action="destroy"]');
const inputNumberRef = document.querySelector('input[type="number"]');
const boxCollection = document.querySelector('#boxes');

const handleDivDestroy = () => boxCollection.remove('div');

const handleDivRender = () =>
  boxCollection.append(...createBoxes(inputNumberRef.value));

const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

const createBoxes = amount => {
  let countNewBox = [];
  let boxSize = 0;
  for (let i = 0; i < amount; i++) {
    boxSize = 30 + 10 * i;
    countNewBox[i] = document.createElement('div');
    countNewBox[i].style.width = boxSize + 'px';
    countNewBox[i].style.height = boxSize + 'px';
    countNewBox[i].style.background = '#' + randomColor();
  }
  return countNewBox;
};

btnRenderRef.addEventListener('click', handleDivRender);
btnDestroyRef.addEventListener('click', handleDivDestroy);
