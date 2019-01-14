'use strict';

const
  ws = new WebSocket('wss://neto-api.herokuapp.com/comet/websocket'),
  websocketList = document.querySelectorAll('.websocket div');

ws.addEventListener('message', event => {
  websocketList.forEach(item => item.textContent === event.data ?
    item.classList.add('flip-it') :
    item.classList.remove('flip-it'));
});

ws.addEventListener('error', (error) => {
  console.error(error.data);
});
