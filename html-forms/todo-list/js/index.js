'use strict';

const listBlock = document.querySelector('.list-block');
const checkBoxes = listBlock.getElementsByTagName('input');
const output = listBlock.querySelector('output');
const total = checkBoxes.length;

let count = 0;

function setState() {
  this.checked ? count++ : count--;

  output.textContent = `${count} из ${total}`;

  if (count === total) {
    listBlock.classList.add('complete')
  } else {
    listBlock.classList.remove('complete')
  }
}

for (const checkBox of checkBoxes) {
  count += checkBox.checked ? 1 : 0;
  checkBox.addEventListener('change', setState);
}

output.textContent = `${count} из ${total}`;
