'use strict';

const
  urlLongPooling ='https://neto-api.herokuapp.com/comet/long-pooling',
  longPoolingList = document.querySelectorAll('.long-pooling div');

function longPooling() {
  fetch(urlLongPooling)
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.text()
      } else {
        throw new Error(response.status + response.statusText)
      }
    })
    .then(num => {
      longPoolingList.forEach(item => item.textContent === num.trim() ?
        item.classList.add('flip-it') :
        item.classList.remove('flip-it'));
      longPooling();
    })
    .catch(console.error);
}

longPooling();
