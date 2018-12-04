'use strict';

const piano = document.getElementsByTagName('ul')[0];
const pianoKeys = piano.getElementsByTagName('li');
const sounds = ['first', 'second', 'third', 'fourth', 'fifth'];

let octave = 'middle';

Array.from(pianoKeys).forEach((pianoKey, i) => {
  const audio = pianoKey.getElementsByTagName('audio')[0];

  document.addEventListener('keydown', (event) => {
    event.preventDefault();

    if (event.shiftKey) {
      octave = 'lower';
      piano.classList.add('lower');
      piano.classList.remove('middle', 'higher');
    }

    if (event.altKey) {
      octave = 'higher';
      piano.classList.add('higher');
      piano.classList.remove('middle', 'lower');
    }
  });

  document.addEventListener('keyup', (event) => {
    octave = 'middle';
    piano.classList.add('middle');
    piano.classList.remove('higher', 'lower');
  });

  pianoKey.addEventListener('click', () => {
    audio.src = `./sounds/${octave}/${sounds[i]}.mp3`;
    audio.play();
  });
});
