'use strict';

const galleryView = document.getElementsByClassName('gallery-view')[0];
const galleryNav = document.getElementsByClassName('gallery-nav')[0];
const galleryNavA = galleryNav.getElementsByTagName('a');

function chooseImage(event) {
  event.preventDefault();

  for (let a of galleryNavA) {
    a.classList.remove('gallery-current');
  }

  event.currentTarget.classList.add('gallery-current');
  galleryView.src = event.currentTarget.href;
}

for (let item of galleryNavA) {
  item.addEventListener('click', chooseImage);
}
