'use strict';

const ws = new WebSocket('wss://neto-api.herokuapp.com/draw');

function blobCanvas(event) {
  event.canvas.toBlob(blob => ws.send(blob))
}

ws.addEventListener('open', (event) => {
  editor.addEventListener('update', blobCanvas);
});

ws.addEventListener('close', (event) => {
  editor.removeEventListener('update', blobCanvas);
});

ws.addEventListener('error', (error) => {
  console.error(error.data);
});

window.addEventListener('beforeunload', () => {
  ws.close(1000, 'Session close');
});
