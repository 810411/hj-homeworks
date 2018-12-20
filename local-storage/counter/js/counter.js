'use strict';

const
  counter = document.getElementById('counter'),
  btns = document.querySelector('.wrap-btns');

if (localStorage.count === undefined) {
  localStorage.count = 0;
}

counter.textContent = localStorage.count;

btns.addEventListener('click', event => {
  if (event.target.id === ('increment')) {
    counter.textContent++;
  } else if (event.target.id === ('decrement')) {
    if (counter.textContent > 0) {
      counter.textContent--;
    }
  } else if (event.target.id === ('reset')) {
    counter.textContent = 0;
  }

  localStorage.count = counter.textContent;
});