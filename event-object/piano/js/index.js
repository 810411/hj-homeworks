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
      piano.classList.remove('middle', 'higher');
    }

    if (event.altKey) {
      octave = 'higher';
      piano.classList.remove('middle', 'lower');
    }

    piano.classList.add(octave);
  });

  document.addEventListener('keyup', () => {
    octave = 'middle';
    piano.classList.remove('higher', 'lower');
    piano.classList.add(octave);
  });

  pianoKey.addEventListener('click', () => {
    audio.src = `./sounds/${octave}/${sounds[i]}.mp3`;
    audio.play();
  });
});
