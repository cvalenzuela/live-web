// Server
// Socket
// ======

let clients = new Set();

module.exports = socket => {

  // Client connects
  (() => {
    clients.add(socket.id);
    consoleMsgs.newClient(socket.id);
    socket.emit('updateClients', clients.size);
    socket.broadcast.emit('updateClients', clients.size);
  })();

  // Client Disconnects
  socket.on('disconnect', () => {  
    try {
      clients.delete(socket.id);
      consoleMsgs.dropClient(socket.id);
    } catch (error) {
      consoleMsgs.error('deleting the user');
    }

    socket.emit('updateClients', clients.size);
    socket.broadcast.emit('updateClients', clients.size);
  });

  socket.on('resize', data => {
    socket.emit('partitionCanvas', null);
    socket.broadcast.emit('partitionCanvas', null);
  });

};

let consoleMsgs = {
  newClient: (id) => {
    console.log(`
    --------
    New client: ${id}
    Total amount of clients: ${clients.size}
    --------
    `);
  },
  dropClient: (id) => {
    console.log(`
    --------
    Client ${id} has disconnected 
    Total amount of clients: ${clients.size}
    --------`);
  },
  error: (err) => {
    console.log(`Something went wrong ${err}`);
  }
}