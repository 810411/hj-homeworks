'use strict';

const
  connection = new WebSocket('wss://neto-api.herokuapp.com/counter'),
  counter = document.querySelector('.counter'),
  outputErrors = document.querySelector('output.errors');

window.addEventListener('beforeunload', () => {
  connection.onclose = function () {};
  connection.close(1000);
});

connection.addEventListener('message', event => {
  const message = JSON.parse(event.data);
  counter.textContent = message.connections;
  outputErrors.textContent = message.errors;
});
