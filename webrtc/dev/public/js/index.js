// WebRTC Demo

import * as socket from './socket';

window.onload = () => {
  let video = document.querySelector('video');
  window.init = socket.init;
  window.makeOffer = socket.makeOffer;
  socket.getUserMedia(video);
};