// Client
// Socket
// ======

import { pingTheMesh, updateMesh } from './meshManager';
import * as meshManager from './meshManager';

const io = require('socket.io-client');

let socket, clientsElement;

// Init the Socket communication
let init = (webglcanvas) => {
  clientsElement = document.getElementById('clients');
  socket = io.connect(':8765', { query: 'test' });
  startListening(webglcanvas);
}

// Listeners
let startListening = (webglcanvas) =>  {

  // Connection established
  socket.on('connect', () => {
    console.log("Connected to server");
  });

  // Start the mesh
  socket.on('startMesh', clientNumber => {
    meshManager.init(webglcanvas, clientNumber);
  });

  // Update number of clients connected
  socket.on('updateClients', clients => {
    clientsElement.innerText = clients;
    pingTheMesh();
  });

  // Update the faces data from all connected clients
  socket.on('updateFaceData', clients => {
    updateMesh(clients);
  });
}

// Emiters
let emitFacePosition = facePosition => {
  socket.emit('clientFacePosition', facePosition)
};


export  { init, emitFacePosition }