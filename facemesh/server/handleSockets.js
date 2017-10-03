// Server
// Socket
// ======

let clients = {};
let amountOfClients = [];

module.exports = socket => {

  // Client connects
  (() => {
    amountOfClients.push(socket.id);
    clients[socket.id] = {number: amountOfClients.indexOf(socket.id)};
    consoleMsgs.newClient(socket.id);

    socket.emit('startMesh', amountOfClients.indexOf(socket.id));

    socket.emit('updateClients', amountOfClients.length);
    socket.broadcast.emit('updateClients', amountOfClients.length);
  })();

  // Client Disconnects
  socket.on('disconnect', () => {
    try {
      delete clients[socket.id];
      let index = amountOfClients.indexOf(socket.id);
      index > -1 && amountOfClients.splice(index, 1);
      consoleMsgs.dropClient(socket.id);
    } catch (error) {
      consoleMsgs.error('deleting the user');
    }

    socket.emit('updateClients', amountOfClients.length);
    socket.broadcast.emit('updateClients', amountOfClients.length);
  });

  // Client Sends Face Position
  socket.on('clientFacePosition', clientFacePosition => {
    clients[socket.id].pos = clientFacePosition;
  
    socket.emit('updateFaceData', clients);
    socket.broadcast.emit('updateFaceData', clients);
  });

};

let consoleMsgs = {
  newClient: (id) => {
    console.log(`
    --------
    New client: ${id}
    Total amount of clients: ${amountOfClients.length}
    --------
    `);
  },
  dropClient: (id) => {
    console.log(`
    --------
    Client ${id} has disconnected 
    Total amount of clients: ${amountOfClients.length}
    --------`);
  },
  error: (err) => {
    console.log(`Something went wrong ${err}`);
  }
}