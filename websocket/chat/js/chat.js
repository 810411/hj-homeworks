'use strict';

const
  connection = new WebSocket('wss://neto-api.herokuapp.com/chat'),
  chat = document.querySelector('.chat'),
  chatElems = init(chat);

function init(chatElem) {
  return {
    form: chatElem.querySelector('.message-box'),
    input: chatElem.querySelector('.message-input'),
    submit: chatElem.querySelector('.message-submit'),
    content: chatElem.querySelector('.messages-content'),
    status: chatElem.querySelector('.chat-status'),
    templates: {
      messageUser: chatElem.querySelector('.message.loading + .message'),
      messageMy: chatElem.querySelector('.message.message-personal'),
      loading: chatElem.querySelector('.message.loading').cloneNode(true),
      status: chatElem.querySelector('.message.message-status')
    }
  };
}

function triggerStatus(messageStatus) {
  const message = chatElems.templates.status.cloneNode(true);
  message.querySelector('.message-text').textContent = messageStatus;
  chatElems.content.appendChild(message);
}

function addMessage(who, data) {
  const time = new Date();
  who.querySelector('.message-text').textContent = data;
  who.querySelector('.timestamp').textContent = time.toLocaleTimeString('ru-RU', {
    hour: "2-digit",
    minute: "2-digit"
  });
}

connection.addEventListener('open', () => {
  triggerStatus('Пользователь появился в сети');
  chatElems.status.textContent = chatElems.status.dataset.online;
  chatElems.submit.disabled = false;
});

connection.addEventListener('close', () => {
  triggerStatus('Пользователь не в сети');
  chatElems.status.textContent = chatElems.status.dataset.offline;
  chatElems.submit.disabled = true;
});

connection.addEventListener('message', (event) => {
  const data = event.data;
  const typingMessage = chatElems.templates.loading.cloneNode;
  const messageUser = chatElems.templates.messageUser.cloneNode(true);

  if (data === '...') {
    chatElems.content.appendChild(typingMessage).scrollIntoView({block: "end", behavior: "smooth"});
  } else {
    addMessage(messageUser, data);
    chatElems.content.typingMessage ? chatElems.content.removeChild(typingMessage) : null;
    chatElems.content.appendChild(messageUser).scrollIntoView({block: "end", behavior: "smooth"});
  }
});

chatElems.form.addEventListener('submit', (event) => {
  event.preventDefault();

  const value = chatElems.input.value;
  const messageMy = chatElems.templates.messageMy.cloneNode(true);

  if (value) {
    addMessage(messageMy, value);
    chatElems.content.appendChild(messageMy).scrollIntoView({block: "end", behavior: "smooth"});
    connection.send(value);
    chatElems.form.reset();
  }
});
