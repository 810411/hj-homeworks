'use strict';

list.addEventListener('click', () => {
  event.preventDefault();

  if (event.target.classList.contains('add-to-cart')) {
    const item = {
      title: event.target.dataset.title,
      price: event.target.dataset.price
    };

    addToCart(item);
  }
});
