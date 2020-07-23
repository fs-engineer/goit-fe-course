"use strict";

const buttonRef = document.querySelector(".task-two__btn");

const inventory = {
  items: ["Knife", "Gas mask"],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter((item) => item !== itemName);
  },
};

const addItem = inventory.add;
const removeItem = inventory.remove;

const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  const actionFn = action.bind(inventory);
  actionFn(itemName);
};

buttonRef.addEventListener("click", () => {
  invokeInventoryAction("Medkit", addItem);
  // Invoking action on Medkit
  // Adding Medkit to inventory

  console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

  invokeInventoryAction("Gas mask", removeItem);
  // Invoking action on Gas mask
  // Removing Gas mask from inventory

  console.log(inventory.items); // ['Knife', 'Medkit']
});
