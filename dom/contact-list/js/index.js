'use strict';

const contactsList = document.querySelector('.contacts-list');
const contacts = JSON.parse(loadContacts());

let data = '';

contacts.forEach(contact => {
  data += `<li data-email="${contact.email}" data-phone="${contact.phone}"><strong>${contact.name}</strong></li>`
});

contactsList.innerHTML = data;
