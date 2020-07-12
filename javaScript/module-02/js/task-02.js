"use strict";

const buttonRef = document.querySelector(".task-two__btn");

buttonRef.addEventListener("click", () => {
  const calculateEngravingPrice = (message, pricePerWord) => {
    return message.split(" ").length * pricePerWord;
  };

  console.log(
    calculateEngravingPrice(
      "Proin sociis natoque et magnis parturient montes mus",
      10
    )
  );

  console.log(
    calculateEngravingPrice(
      "Proin sociis natoque et magnis parturient montes mus",
      20
    )
  );

  console.log(
    calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
  );

  console.log(
    calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
  );
});
