'use strict';

const fileNames = [
  'breuer-building.jpg',
  'guggenheim-museum.jpg',
  'headquarters.jpg',
  'IAC.jpg',
  'new-museum.jpg'
];
const currentPhoto = document.getElementById('currentPhoto');
const nextPhoto = document.getElementById('nextPhoto');
const prevPhoto = document.getElementById('prevPhoto');

let step = 0;

function setCurrentPhoto() {
  if (step > 4) {
    step = 0;
  } else if (step < 0) {
    step = 4;
  }
  currentPhoto.src = `./i/${fileNames[step]}`;
}

setCurrentPhoto();

nextPhoto.onclick = () => {
  setCurrentPhoto(++step);
};

prevPhoto.onclick = () => {
  setCurrentPhoto(--step);
};
