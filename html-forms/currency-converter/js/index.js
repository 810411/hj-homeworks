'use strict';

const content = document.getElementById('content');
const loader = document.getElementById('loader');
const source = document.getElementById('source');
const from = document.getElementById('from');
const to = document.getElementById('to');
const result = document.getElementById('result');

function convert() {
  result.textContent = (source.value * from.value / to.value).toFixed(2);
}

function fillSelect(data) {
  data.forEach(item => {
    const option = document.createElement('option');

    option.label = item.code;
    option.value = item.value;
    option.textContent = item.title;

    from.appendChild(option.cloneNode(true));
    to.appendChild(option);
  });
}

loader.classList.remove('hidden');

fetch('https://neto-api.herokuapp.com/currency', {method: 'get'})
  .then(response => response.json())
  .then(result => {
    loader.classList.add('hidden');
    content.classList.remove('hidden');

    fillSelect(result);
    convert();

    from.addEventListener('change', convert);
    to.addEventListener('change', convert);
    source.addEventListener('input', convert);
  })
  .catch(console.error);
