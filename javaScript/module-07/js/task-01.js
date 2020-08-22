'use strict';

const categoriesRef = document.querySelectorAll('.item');
console.log(`** В списке ${categoriesRef.length} категории **`);

categoriesRef.forEach((el, index) => {
  console.group(
    `Категория ${index + 1}: ${el.querySelector('h2').textContent}`,
  );
  console.log(`Количество элементов: ${el.querySelectorAll('li').length}`);

  console.groupEnd();
});
