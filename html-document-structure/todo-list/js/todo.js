'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const toDoList = document.querySelector('.todo-list');
  const done = toDoList.querySelector('.done');
  const undone = toDoList.querySelector('.undone');

  toDoList.addEventListener('change', (event) => {
    const parentTypeList = event.target.parentElement.parentElement;
    const removeCurrentInput = parentTypeList.removeChild(event.target.parentElement);

    if (parentTypeList.classList.contains('done')) {
      removeCurrentInput.firstElementChild.removeAttribute('checked');
      undone.insertBefore(removeCurrentInput, null);
    } else {
      removeCurrentInput.firstElementChild.setAttribute('checked', '');
      done.insertBefore(removeCurrentInput, null);
    }
  });
});
