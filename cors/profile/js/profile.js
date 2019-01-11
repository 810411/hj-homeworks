'use strict';

const
  content = document.querySelector('.content'),
  technologies = document.querySelector('[data-technologies]');

function fillProfile(data) {
  for (const key in data) {
    if (key === 'id') {
      loadData('fillTechnology', `https://neto-api.herokuapp.com/profile/${data[key]}/technologies`);
    } else if (key === 'pic') {
      document.querySelector(`[data-${key}]`).src = data[key];
    } else {
      document.querySelector(`[data-${key}]`).textContent = data[key];
    }
  }
}

function fillTechnology(data) {
  for (const key in data) {
    const elem = document.createElement('span');
    elem.classList.add('devicons', `devicons-${data[key]}`);
    technologies.appendChild(elem);
  }
}

function loadData(cb, url) {
  return new Promise((done, fail) => {
    window.cb = done;

    const script = document.createElement('script');
    script.src = `${url}?callback=${cb}`;
    document.body.appendChild(script);
  });
}

loadData('fillProfile', 'https://neto-api.herokuapp.com/profile/me')
  .then(content.style.display = 'initial');
