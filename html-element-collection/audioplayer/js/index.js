'use strict';

const tracks = [
  'LA Chill Tour',
  'This is it band',
  'LA Fusion Jam'
];

const mediaPlayer = document.getElementsByClassName('mediaplayer')[0];
const audio = mediaPlayer.getElementsByTagName('audio')[0];
const title = mediaPlayer.getElementsByClassName('title')[0];

const btnPlay = mediaPlayer.getElementsByClassName('playstate')[0];
const btnStop = mediaPlayer.getElementsByClassName('stop')[0];
const btnNext = mediaPlayer.getElementsByClassName('next')[0];
const btnBack = mediaPlayer.getElementsByClassName('back')[0];

let trackNum = 0;

function setTrack() {
  if (trackNum < 0) {
    trackNum = 2;
  } else if (trackNum > 2) {
    trackNum = 0;
  }

  title.title = tracks[trackNum];
  audio.src = `https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/${tracks[trackNum]}.mp3`;

  if (mediaPlayer.classList.contains('play')) {
    audio.play();
  }
}

setTrack();

btnPlay.onclick = () => {
  mediaPlayer.classList.contains('play') ? audio.pause() : audio.play();
  mediaPlayer.classList.toggle('play');
};

btnStop.onclick = () => {
  if (mediaPlayer.classList.contains('play')) {
    mediaPlayer.classList.remove('play');
  }

  audio.pause();
  audio.currentTime = 0;
};

btnNext.onclick = () => {
  trackNum++;
  setTrack();
};

btnBack.onclick = () => {
  trackNum--;
  setTrack();
};
