// Client
// Handle the socket

import io from 'socket.io-client';
import { hasUserMedia, STUNServers } from './utils';

const PORT = ':3333';
let configuration = {
  "iceServers": STUNServers
};
const options = { video: true, audio: false };
let socket;
let connection;
let localStream;

let localVideo = document.getElementById('localVideo');
let remoteVideo = document.getElementById('remoteVideo');

// MediaStream API: Get User Media
let getUserMedia = () => {

  if (hasUserMedia) {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    navigator.getUserMedia(options, mediaStream => {
      localStream = mediaStream;
      localVideo.src = window.URL.createObjectURL(localStream);
    }, (err) => {
      console.log(err)
    });
  } else {
    console.log('WebRTC is not supported for you :(')
  }
};

// Init the socket connection
let init = username => {
  socket = io.connect(PORT, { query: { username: username } });
  socket.on('connect', () => {
    console.log(`Connected to server on port ${PORT}`);
  });
  connection = new RTCPeerConnection(configuration);
  connection.addStream(localStream);
  connection.onaddstream = e => {
    console.log('got a streeeeam!');
    remoteVideo.src = window.URL.createObjectURL(e.stream);
  }
  console.log("RTCPeerConnection object was created", connection);
  startEventListeners();
}

// Emitters
let registerUser = username => {
  socket.emit('register', username);
}

// Call a user
let call = userToConnect => {
  connection.oniceconnectionstatechange = event => {
    console.log(event);
  };
  connection.onicecandidate = event => {
    console.log('emiting candiate', event)
    if (event.candidate) {
      console.log('emiting candidate', event)
      socket.emit('candidate', { type: 'candidate', candidate: event.candidate, username: userToConnect });
    } else {
      console.log('not emmitting a candidate')
    }
  };
  connection.createOffer(offer => {
    console.log('sending offer', offer);
    socket.emit('offer', { type: 'offer', offer: offer, username: userToConnect })
    connection.setLocalDescription(offer);
  }, (error) => {
    console.log("An error has occurred when creating an offer.");
  });
};

// Listeners
let startEventListeners = () => {
  socket.on('userRegister', data => {
    console.log(data)
  });

  socket.on('offer', data => {
    console.log('offer received', data);
    connection.setRemoteDescription(new RTCSessionDescription(data.offer));

    connection.createAnswer(answer => {
      connection.setLocalDescription(answer);
      socket.emit('answer', { type: "answer", answer: answer, username: data.from });
    }, error => {
      console.log("Error sending offer");
    });
  });

  socket.on('answer', data => {
    console.log('anwser', data);
    connection.setRemoteDescription(new RTCSessionDescription(data.answer));
  });

  socket.on('candidate', data => {
    console.log('reciving a candidate', data);
    window.connection = connection;
    data.candidate && connection.addIceCandidate(new RTCIceCandidate(data.candidate));
  });
};

export  { init, getUserMedia, registerUser, call }