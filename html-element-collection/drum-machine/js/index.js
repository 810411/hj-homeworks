'use strict';

const drumKitDrum = document.getElementsByClassName('drum-kit__drum');

for (let drum of drumKitDrum) {
  drum.onclick = function () {
    const audio = this.getElementsByTagName('audio')[0];

    audio.currentTime = 0;
    audio.play();
  };
}