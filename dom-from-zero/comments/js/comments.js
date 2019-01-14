'use strict';

function showComments(list) {
  const
    commentsContainer = document.querySelector('.comments'),
    comments = list.map(createComment),
    fragment = comments
      .reduce((fragment, currentValue) => {
        fragment.appendChild(currentValue);
        return fragment;
      }, document.createDocumentFragment());

  commentsContainer.appendChild(fragment);
}

function el(tagName, attributes, children) {
  const element = document.createElement(tagName);

  if (typeof attributes === 'object') {
    Object.keys(attributes).forEach(i => element.setAttribute(i, attributes[i]));
  }
  if (typeof children === 'string') {
    element.textContent = children;
  } else if (children instanceof Array) {
    children.forEach(child => element.appendChild(child));
  }

  return element;
}

function createComment(comment) {
  const commentsTextArr = comment.text.split('\n')
    .map(item => {
      const
        br = el('br'),
        span = el('span');

      span.textContent = item;
      span.appendChild(br);
      return span;
    });

  return el('div', {class: 'comment-wrap'}, [
    el('div', {class: 'photo', title: `${comment.author.name}`}, [
      el('div', {class: 'avatar', style: `background-image: url('${comment.author.pic}')`})
    ]),
    el('div', {class: 'comment-block'}, [
      el('p', {class: 'comment-text'}, commentsTextArr),
      el('div', {class: 'bottom-comment'}, [
        el('div', {class: 'comment-date'}, `${new Date(comment.date).toLocaleString('ru-Ru')}`),
        el('ul', {class: 'comment-actions'}, [
          el('li', {class: 'complain'}, 'Пожаловаться'),
          el('li', {class: 'reply'}, 'Ответить')
        ])
      ])
    ])
  ])
}

fetch('https://neto-api.herokuapp.com/comments')
  .then(res => res.json())
  .then(showComments);
