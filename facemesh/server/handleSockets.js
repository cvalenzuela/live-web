// Server
// Socket
// ======

let clients = new Set();
let meshPosition = { x: 0, y: 0};

module.exports = socket => {
  let previousClientPosition = { x: 0, y: 0};
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

  // Client Sends Face Position
  socket.on('clientFacePosition', clientFacePosition => {

    meshPosition.x -= previousClientPosition.x;
    meshPosition.y -= previousClientPosition.y;

    meshPosition.x += clientFacePosition.x;
    meshPosition.y += clientFacePosition.y;

    previousClientPosition = clientFacePosition;

    let position = {
      x: meshPosition.x / clients.size,
      y: meshPosition.y / clients.size,
    }

    socket.emit('updateFaceData', position);
    socket.broadcast.emit('updateFaceData', position);
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