'use strict';

const tabs = document.querySelectorAll('.tabs > nav a');
const content = document.getElementById('content');
const preloader = document.getElementById('preloader');
const xhr = new XMLHttpRequest();

function getDataTab(url) {
  xhr.open('GET', url);
  xhr.send();
}

xhr.addEventListener('loadstart', () => {
  preloader.classList.remove('hidden');
});

xhr.addEventListener('load', () => {
  preloader.classList.add('hidden');
  content.innerHTML = xhr.responseText;
});

for (let tab of tabs) {
  tab.addEventListener('click', (event) => {
    event.preventDefault();
    tabs.forEach((tab) => tab.classList.remove('active'));
    tab.classList.add('active');
    getDataTab(event.currentTarget.href);
  });
}

getDataTab(tabs[0].href);
