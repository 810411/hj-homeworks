'use strict';

const btnAdd = document.querySelectorAll('.box > .add');
const cartCount = document.getElementById('cart-count');
const cartTotalPrice = document.getElementById('cart-total-price');

let totalItems = 0;
let totalPrice = 0;

function addToCart(event) {
  totalItems++;
  cartCount.textContent = totalItems;

  totalPrice += parseInt(event.currentTarget.dataset.price);
  cartTotalPrice.textContent = getPriceFormatted(totalPrice);
}

for (let btn of btnAdd) {
  btn.addEventListener('click', addToCart);
}
