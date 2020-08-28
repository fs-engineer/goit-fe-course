"use strict";

import linksItems from "./gallery-items.js";

const ref = {
  imgGallery: document.querySelector(".js-gallery"),
  modalWindow: document.querySelector(".js-lightbox"),
  closeModalBtn: document.querySelector(
    'button[data-action = "close-lightbox"]'
  ),
  largeImg: document.querySelector(".lightbox__image"),
  backDrop: document.querySelector(".lightbox__content"),
};

createGallery();

ref.closeModalBtn.addEventListener("click", onCloseModal);
ref.imgGallery.addEventListener("click", onGalleryClick);
ref.backDrop.addEventListener("click", onClickBackDrop);

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  onOpenModal();
  const largeImageURL = event.target.dataset.source;
  setLargeImageSrc(largeImageURL);
}
function createGallery() {
  const doneTreeArray = linksItems.map((linksItem) => {
    const tags = {
      img: document.createElement("img"),
      a: document.createElement("a"),
      li: document.createElement("li"),
    };

    tags.img.setAttribute("class", "gallery__image");
    tags.img.src = linksItem.preview;
    tags.img.setAttribute("data-source", linksItem.original);
    tags.img.alt = linksItem.description;

    tags.a.setAttribute("href", linksItem.original);
    tags.a.setAttribute("class", "gallery__link");

    tags.li.setAttribute("class", "gallery__item");
    tags.a.appendChild(tags.img);
    tags.li.appendChild(tags.a);

    return tags.li;
  });

  ref.imgGallery.append(...doneTreeArray);
}
function onOpenModal() {
  ref.modalWindow.classList.add("is-open");
}
function onCloseModal() {
  ref.modalWindow.classList.remove("is-open");

  deleteLargeImageSrc();
}
function setLargeImageSrc(url) {
  ref.largeImg.src = url;
}
function deleteLargeImageSrc() {
  ref.largeImg.src = "";
}
function onClickBackDrop(event) {
  if (event.target === event.currentTarget) {
    onCloseModal();
  }
}
