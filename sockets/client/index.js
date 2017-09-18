/*
=================
CLIENT

Client for Socket Server

Live Web @ NYU ITP 2017
Cristóbal Valenzuela
cv965@nyu.edu
=================
*/

const SERVER = 'http://localhost:3030'

const io = require('socket.io-client');
const socket = io.connect(SERVER);

window.onload = () => {
  let msg = document.getElementById('msg');
  let btnSendMsg = document.getElementById('sendMsg');
  let conversation = document.getElementById('conversation');

  btnSendMsg.addEventListener('click', () => {
    sendmessage(msg.value)
  });
  msg.addEventListener('keypress', (e) => {
    e.code == 'Enter' && sendmessage(msg.value)
  })
}

socket.on('connect', () => {
  console.log("Connected to", SERVER);
});

socket.on('chatmessage', (data) => {
  createBubble(data, 'server');
});

let createBubble = (data, who) => {
  let newMsg = document.createElement('p');
  newMsg.className = who;
  newMsg.innerText = data;
  conversation.appendChild(newMsg);
};

let sendmessage = (message) => {
  msg.value = '';
  createBubble(message, 'client');
  socket.emit('chatmessage', message);
};