'use strict';

const
  food = document.querySelector('.food'),
  baseUrl = 'https://neto-api.herokuapp.com/food/42',
  urls = [
    {
      url: baseUrl,
      funcName: 'infoRecipe'
    }, {
      url: `${baseUrl}/rating`,
      funcName: 'ratingRecipe'
    }, {
      url: `${baseUrl}/consumers`,
      funcName: 'listUsers'
    }
  ];

const pic = food.querySelector('[data-pic]'),
  title = food.querySelector('[data-title]'),
  ingredients = food.querySelector('[data-ingredients]'),
  rating = food.querySelector('[data-rating]'),
  star = food.querySelector('[data-star]'),
  votes = food.querySelector('[data-votes]'),
  consumers = food.querySelector('[data-consumers]');

function infoRecipe(data) {
  pic.setAttribute('style', `background-image: url('${data.pic}');`);
  title.textContent = data.title;
  ingredients.textContent = data.ingredients.join(', ');
}

function ratingRecipe(data) {
  const dataVotes = data.votes;

  let
    tens = dataVotes % 100,
    units = dataVotes % 10,
    graduation = (tens >= 10 && tens <= 20) ? 'оценок' :
      (units === 1) ? 'оценка' :
        (dataVotes < 100 && units >= 2 && units <= 4) ? 'оценки' : 'оценок';

  star.setAttribute('style', `width: ${(data.rating / 10) * 100}%;`);
  rating.textContent = data.rating.toFixed(2);
  votes.textContent = `(${dataVotes} ${graduation})`;
}

function listUsers(data) {
  const total = document.createElement('span');
  total.textContent = `(+${data.total})`;

  data.consumers.forEach(item => {
    const consumer = document.createElement('img');
    consumer.src = item.pic;
    consumer.title = item.name;
    consumers.appendChild(consumer);
  });

  consumers.appendChild(total);
}

function loadData(url, cb) {
  return new Promise((done, fail) => {
    window.cb = done;

    const script = document.createElement('script');
    script.src = `${url}?callback=${cb}`;
    document.body.appendChild(script);
  });
}

urls.forEach((item) => {
  loadData(item.url, item.funcName);
});
