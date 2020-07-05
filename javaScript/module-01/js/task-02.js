'use strict';

const formRef = document.querySelector('.order__btn');
const avaibleGoodsRef = document.querySelector('#numb__goods');
const orderGoodsRef = document.querySelector('#ordered__goods');
formRef.addEventListener('click', () => {
  // const total = 100;
  // const ordered = 50;
  event.preventDefault();
  const total = Number(avaibleGoodsRef.value);
  console.log(total);
  const ordered = Number(orderGoodsRef.value);

  if (ordered > total) {
    console.log('На складе не достаточно товаров, укажите меньшее кол-во!');
  } else {
    console.log('Заказ оформлен, с вами свяжеться менеджер');
  }
});
