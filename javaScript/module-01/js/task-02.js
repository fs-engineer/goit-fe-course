'use strict';

const formRef = document.querySelector('.order__btn');
const avaibleGoodsRef = document.querySelector('#numb__goods');
const orderGoodsRef = document.querySelector('#ordered__goods');
formRef.addEventListener('click', () => {
  event.preventDefault();
  const total = Number(avaibleGoodsRef.value);
  const ordered = Number(orderGoodsRef.value);

  if (ordered > total) {
    alert('На складе не достаточно товаров, укажите меньшее кол-во!');
  } else {
    alert(
      `Заказ оформлен, с вами свяжеться менеджер. Вы заказали ${ordered} товаров. На складе осталось ${
        total - ordered
      } товаров.`,
    );
  }
});
