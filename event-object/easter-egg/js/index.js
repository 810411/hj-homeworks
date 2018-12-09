'use strict';

const nav = document.getElementsByTagName('nav')[0];
const secret = document.getElementsByClassName('secret')[0];
const egg = 'KeyYKeyTKeyNKeyJKeyKKeyJKeyUKeyBKeyZ';
const input = [];

function showSecret(event) {
  input.push(event.code);

  if (input.join('').indexOf(egg) !== -1) {
    secret.classList.add('visible');
  } else if (input.length > 9 && egg.indexOf(input[input.length - 1]) === -1) {
    input.length = 0;
  }
}

document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.altKey && event.code === 'KeyT') {
    nav.classList.toggle('visible');
  }

  showSecret(event);
});
