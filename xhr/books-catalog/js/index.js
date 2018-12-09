const xhr = new XMLHttpRequest();
const content = document.getElementById('content');

function setContent(event) {
  const contentList = JSON.parse(event.target.responseText);

  Array.from(contentList).forEach((item) => {
    content.innerHTML += `<li data-title="${item.title}" data-author="${item.author.name}" data-info="${item.info}" 
data-price="${item.price}"> <img src="${item.cover.small}" alt="${item.title}"> </li>`;
  });
}

content.innerHTML = '';

xhr.addEventListener('load', setContent);
xhr.open('GET', 'https://neto-api.herokuapp.com/book/');
xhr.send();
