'use strict';

const
  cnvs = document.querySelector('canvas'),
  ctx = cnvs.getContext('2d'),
  cnvsWidth = cnvs.width,
  cnvsHeight = cnvs.height,
  PI = Math.PI,
  colors = ['#ffffff', '#ffe9c4', '#d4fbff'];

cnvs.style.backgroundColor = '#000000';
cnvsFill();
cnvs.addEventListener('click', (e) => cnvsFill());

function cnvsFill() {
  const countStars = randomNumber(200, 400);

  ctx.clearRect(0, 0, cnvsWidth, cnvsHeight);

  for (let i = 0; i < countStars; i++) {
    const
      x = Math.round(Math.random() * cnvsWidth),
      y = Math.round(Math.random() * cnvsHeight);

    drawStar(x, y);
  }
}

function randomNumber(min, max, float = false) {
  return float ? (min + (Math.random() * (max - min))).toFixed(1) : Math.floor(min + Math.random() * (max + 1 - min));
}

function drawStar(x, y) {
  const
    radius = randomNumber(0, 1.1, true),
    color = colors[randomNumber(0, 2)],
    opacity = randomNumber(0.8, 1, true);

  ctx.beginPath();
  ctx.globalAlpha = opacity;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, radius, radius);
  ctx.closePath();
}
