'use strict';

function fillWidget(data) {
  for (const key in data) {
    const elem = document.querySelector(`[data-${key}]`);

    if (key === 'wallpaper' || key === 'pic') {
      elem.src = data[key];
    } else {
      elem.textContent = data[key];
    }
  }
}

function loadData(url) {
  return new Promise((done, fail) => {
    window[fillWidget] = done;

    const script = document.createElement('script');
    script.src = `${url}?callback=fillWidget`;
    document.body.appendChild(script);
  });
}

loadData('//neto-api.herokuapp.com/twitter/jsonp');
