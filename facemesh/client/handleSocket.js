// Client
// Socket
// ======

import { pingTheMesh, updateMesh } from './meshManager';
const io = require('socket.io-client');

const SERVER = 'localhost:3000'
let socket, clientsElement, users;

// Init the Socket communication
let init = () => {
  clientsElement = document.getElementById('clients');
  users = document.getElementById('users');
  socket = io.connect(SERVER, { query: 'test' });
  startListening();
}

// Listeners
let startListening = () =>  {
  // Connection established
  socket.on('connect', () => {
    console.log("Connected to", SERVER);
  });

  // Update number of clients connected
  socket.on('updateClients', clients => {
    clients == 1 ? users.innerText = 'user' : users.innerText = 'users';
    clientsElement.innerText = clients;
    pingTheMesh();
  });

  // Update the faces data from all connected clients
  socket.on('updateFaceData', data => {
    updateMesh(data);
  });
}

// Emiters
let emitFacePosition = data => {
  socket.emit('clientFacePosition', data)
};


export  { init, emitFacePosition }