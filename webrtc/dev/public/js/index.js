// WebRTC Demo

import * as socket from './socket';

let startBtn = document.getElementById('startButton');
let callBtn = document.getElementById('callButton');
let username = document.getElementById('username');
let usernameToCall = document.getElementById('usernameToCall');


window.onload = () => {
  startBtn.addEventListener('click', () => {
    socket.init(username.value);
  });
  callBtn.addEventListener('click', () => {
    socket.call(usernameToCall.value);
  })
  window.init = socket.init;
  window.call = socket.call;
  socket.getUserMedia();
};