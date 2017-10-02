// Client
// Socket
// ======

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
  socket.on('connect', () => {
    console.log("Connected to", SERVER);
  });

  socket.on('updateClients', (clients) => {
    clients == 1 ? users.innerText = 'user' : users.innerText = 'users';
    clientsElement.innerText = clients;
  });
}

// Emiters
let emitNewSize = () => {
  socket.emit('resize', null)
};


export  { init, emitNewSize }