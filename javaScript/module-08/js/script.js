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
let largeImageIndex;

createGallery();

ref.closeModalBtn.addEventListener("click", onCloseModal);
ref.imgGallery.addEventListener("click", onClickGallery);
ref.backDrop.addEventListener("click", onClickBackDrop);

function createGallery() {
  let index = 0;
  const doneTreeArray = linksItems.map((linksItem) => {
    const tags = {
      img: document.createElement("img"),
      a: document.createElement("a"),
      li: document.createElement("li"),
    };
    index += 1;
    tags.img.setAttribute("class", "gallery__image");
    tags.img.src = linksItem.preview;
    tags.img.setAttribute("data-source", linksItem.original);
    tags.img.setAttribute("data-index", index);
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

function onClickGallery(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  onOpenModal();

  const largeImageURL = event.target.dataset.source;
  const largeImageAlt = event.target.alt;

  setLargeImageSrc(largeImageURL);
  setLargeImageAlt(largeImageAlt);
}

function onOpenModal() {
  ref.modalWindow.classList.add("is-open");
  window.addEventListener("keydown", onPressEsc);

  largeImageIndex = event.target.dataset.index;
  window.addEventListener("keydown", handleNextPrevKey);
}

function onCloseModal() {
  ref.modalWindow.classList.remove("is-open");

  window.removeEventListener("keydown", onPressEsc);

  window.removeEventListener("keydown", handleNextPrevKey);

  deleteLargeImageSrc();
}

function setLargeImageSrc(url) {
  ref.largeImg.src = url;
}

function deleteLargeImageSrc() {
  ref.largeImg.src = "";
}

function setLargeImageAlt(alt) {
  ref.largeImg.alt = alt;
}

function onClickBackDrop(event) {
  if (event.target === event.currentTarget) {
    onCloseModal();
  }
}

function onPressEsc() {
  if (event.key === "Escape") {
    onCloseModal();
  }
}

function handleNextPrevKey(event) {
  if (event.key === "ArrowLeft" && largeImageIndex > 1) {
    ref.largeImg.src = document.querySelector(
      `img[data-index = "${(largeImageIndex -= 1)}"]`
    ).dataset.source;
  }
  if (
    event.key === "ArrowRight" &&
    largeImageIndex < ref.imgGallery.childElementCount
  ) {
    ref.largeImg.src = document.querySelector(
      `img[data-index = "${largeImageIndex++}"]`
    ).dataset.source;
  }
}
