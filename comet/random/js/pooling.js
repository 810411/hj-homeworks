'use strict';

const
  urlPooling ='https://neto-api.herokuapp.com/comet/pooling',
  timeout = 5000,
  poolingList = document.querySelectorAll('.pooling div');

setInterval(() => {
  fetch(urlPooling)
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.text()
      } else {
        throw new Error(response.status + response.statusText)
      }
    })
    .then(num => {
      poolingList.forEach(item => item.textContent === num ?
        item.classList.add('flip-it') :
        item.classList.remove('flip-it'));
    })
    .catch(console.error);
}, timeout);
