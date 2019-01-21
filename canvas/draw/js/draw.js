'use strict';

const
  draw = document.getElementById('draw'),
  ctx = draw.getContext('2d'),
  PI = Math.PI,
  lineSize = changeLineSize(),
  hsl = changeHSL();

let drawing = false;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';

document.body.style.overflow = 'hidden';

sizeDraw();

window.addEventListener('resize', () => {
  sizeDraw();
});

draw.addEventListener("mousedown", (e) => {
  drawing = true;
});

draw.addEventListener("mouseup", () => {
  drawing = false;
});

draw.addEventListener("mouseleave", () => {
  drawing = false;
});

draw.addEventListener("mousemove", (e) => {
  if (drawing) {
    const point = [e.offsetX, e.offsetY];
    circle(point, lineSize(), hsl(e));
  }
});

draw.addEventListener('dblclick', () => {
  ctx.clearRect(0, 0, draw.width, draw.height);
});

function circle(point, size, hsl) {
  ctx.beginPath();
  ctx.fillStyle = `hsl(${hsl}, 100%, 50%)`;
  ctx.arc(...point, size, 0, 2 * PI);
  ctx.fill();
}

function sizeDraw() {
  const
    width = window.innerWidth,
    height = window.innerHeight;

  draw.setAttribute('width', width);
  draw.setAttribute('height', height);

  ctx.clearRect(0, 0, width, height);
}

function changeLineSize() {
  const
    lineMinWidth = 5,
    lineMaxWidth = 100;

  let
    currentLineWidth = lineMinWidth,
    inc = true;

  return function () {
    if (currentLineWidth < lineMaxWidth && inc) {
      return currentLineWidth++;
    } else {
      inc = false;
    }

    if (currentLineWidth > lineMinWidth && !inc) {
      return currentLineWidth--;
    } else {
      inc = true;
    }
  }
}

function changeHSL() {
  const
    minHSL = 0,
    maxHSL = 359;

  let currentHSL = 0;

  return function (event) {
    event.shiftKey ? currentHSL-- : currentHSL++;

    if (currentHSL < minHSL) {
      currentHSL = maxHSL;
    }

    if (currentHSL > maxHSL) {
      currentHSL = minHSL;
    }

    return currentHSL;
  }
}
