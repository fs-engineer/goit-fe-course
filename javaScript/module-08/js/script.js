"use strict";

import galleryLinks from "./gallery-items.js";

function create() {
  const img = document.createElement("img");
  const a = document.createElement("a");
  const li = document.createElement("li");

  img.src = galleryLinks;
}

console.log(create());
console.log(galleryLinks);
