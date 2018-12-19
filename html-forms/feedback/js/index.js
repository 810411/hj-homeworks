'use strict';

const contentform = document.querySelector('.contentform');
const input = contentform.querySelectorAll('input, textarea');
const zip = contentform.querySelector('input[name="zip"]');
const submit = contentform.querySelector('form.contentform > button.button-contact');
const mainOutput = document.querySelector('#output');
const allOutputs = mainOutput.querySelectorAll('output');
const changeButton = mainOutput.querySelector('.button-contact');

let prevZip = zip.value;

function onInput() {
  submit.disabled = false;
  input.forEach((elem) => {
    if (!elem.value) {
      submit.disabled = true;
    }
  });
}

function onZipInput() {
  if (/^[0-9]*$/.test(zip.value)) {
    prevZip = zip.value;
  } else {
    zip.value = prevZip;
    if (zip.empty) {
      submit.disabled = true;
    }
  }
}

function onClickSubmit(event) {
  event.preventDefault();

  allOutputs.forEach((elem) => {
    let needInput = contentform.querySelector(`[name="${elem.id}"]`);
    if (needInput) {
      elem.value = needInput.value;
    }
  });

  contentform.classList.add('hidden');
  mainOutput.classList.remove('hidden');
}

function onClickChangeButton(event) {
  event.preventDefault();

  contentform.classList.remove('hidden');
  mainOutput.classList.add('hidden');
}

input.forEach(item => item.addEventListener('input', onInput));
zip.addEventListener('input', onZipInput);
submit.addEventListener('click', onClickSubmit);
changeButton.addEventListener('click', onClickChangeButton);
