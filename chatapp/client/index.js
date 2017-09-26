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
  //let btnSendMsg = document.getElementById('sendMsg');
  let conversation = document.getElementById('conversation');
  let dialog = document.getElementById('dialog');
  let username = document.getElementById('username');
  let displayusername = document.getElementById('displayusername');
  let displaydate = document.getElementById('displaydate');
  let btnStart = document.getElementById('start');
  let intro = document.getElementById('intro');

  btnStart.addEventListener('click', () => {
    username.value.length > 1 && showDialog();
  });
  // btnSendMsg.addEventListener('click', () => {
  //   sendmessage(msg.value);
  // });
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
  let bubble = document.createElement('div');
  bubble.className = 'bubble';
  let newMsg = document.createElement('p');
  newMsg.className = who;
  newMsg.innerText = data;
  bubble.appendChild(newMsg);
  conversation.appendChild(bubble);
};

let sendmessage = (message) => {
  msg.value = '';
  createBubble(message, 'client');
  socket.emit('chatmessage', message);
};

let showDialog = () => {
  displayusername.innerText = username.value;
  displaydate.innerText = 'Last seen: ' + getTmrrw();
  intro.style.display = 'none'
  dialog.style.display = 'block';
}

let getTmrrw = () => {
  let currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();
  return month + '-' + day + '-' + year  
}