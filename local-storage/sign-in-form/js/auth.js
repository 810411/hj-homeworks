'use strict';

const
  signInHtm = document.querySelector('.sign-in-htm'),
  signUpHtm = document.querySelector('.sign-up-htm');

function submitForm(form, url) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = {};

    for (const [key, value] of new FormData(event.currentTarget)) {
      data[key] = value;
    }

    fetch(url, {
      body: JSON.stringify(data),
      credentials: 'same-origin',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(result => {
        if (200 <= result.status && result.status < 300) {
          return result;
        }
        throw new Error(response.statusText);
      })
      .then(result => result.json())
      .then(data => {
        const successMessage = form === signInHtm ?
          `Пользователь ${data.name} успешно авторизован` :
          `Пользователь ${data.name} успешно зарегистрирован`;
        form.querySelector('.error-message').value = data.error ? data.message : successMessage;
      });
  });
}

submitForm(signInHtm, 'https://neto-api.herokuapp.com/signin');
submitForm(signUpHtm, 'https://neto-api.herokuapp.com/signup');
