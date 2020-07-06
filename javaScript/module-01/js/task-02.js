'use strict';

const formRef = document.querySelector('.order__btn');
const avaibleGoodsRef = document.querySelector('#numb__goods');
const orderGoodsRef = document.querySelector('#ordered__goods');
formRef.addEventListener('click', () => {
  event.preventDefault();
  const total = Number(avaibleGoodsRef.value);
  console.log(total);
  const ordered = Number(orderGoodsRef.value);

  const message =
    ordered > total
      ? 'На складе не достаточно товаров, укажите меньшее кол-во!'
      : `Заказ оформлен, с вами свяжеться менеджер. Вы заказали ${ordered} товаров`;

  alert(message);
});
