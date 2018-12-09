'use strict';

const fileNames = [
  'airmax-jump.png',
  'airmax-on-foot.png',
  'airmax-playground.png',
  'airmax-top-view.png',
  'airmax.png',
];
const slider = document.getElementById('slider');

let step = 0;

function setSlider() {
  slider.src = `./i/${fileNames[step]}`;
  step = (step >= 4) ? 0 : ++step;
}

setSlider();
setInterval(setSlider, 5000);
