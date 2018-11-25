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

setInterval(() => {
    slider.src = `./i/${fileNames[step]}`;
    step = (step >= 4) ? 0 : ++step;
  },
  5000
);
