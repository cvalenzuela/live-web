// Server
// Socket

let clients = new Set();
let sizes = {};
let totalSize = {
  width: 0,
  height: 0
};

module.exports = socket => {
  let clientCanvas = {};

  let getTotalSize = () => {
    return {
      totalWidth: totalSize.width,
      totalHeight: totalSize.height,
      clients: clients.size,
      sizes: sizes,
      yourSize: clientCanvas.width + clientCanvas.height
    };
  };

  (() => {
    clients.add(socket.id);

    clientCanvas.width = parseFloat(socket.handshake.query.width);
    clientCanvas.height = parseFloat(socket.handshake.query.height);

    totalSize.width += clientCanvas.width;
    totalSize.height += clientCanvas.height;

    console.log(`
    --------
    New client: ${socket.id}
    Total amount of clients: ${clients.size}
    --------
    `);

    sizes[socket.id] = clientCanvas.width + clientCanvas.height;
    socket.emit('partitionCanvas', getTotalSize());
    socket.broadcast.emit('partitionCanvas', getTotalSize());
  })();

  socket.on('resize', data => {
    totalSize.width -= clientCanvas.width;
    totalSize.height -= clientCanvas.height;

    clientCanvas.width = parseFloat(data.width);
    clientCanvas.height = parseFloat(data.height);

    totalSize.width += clientCanvas.width;
    totalSize.height += clientCanvas.height;

    sizes[socket.id] = clientCanvas.width + clientCanvas.height;

    socket.emit('partitionCanvas', getTotalSize());
    socket.broadcast.emit('partitionCanvas', getTotalSize());
  });

  socket.on('disconnect', () => {
    console.log(`Client ${socket.id} has disconnected `);
    totalSize.width -= clientCanvas.width;
    totalSize.height -= clientCanvas.height;

    try {
      delete sizes[socket.id];
      clients.delete(socket.id);
    } catch (error) {
      console.log('Something went wrong deleting the user');
    }

    socket.emit('partitionCanvas', getTotalSize());
    socket.broadcast.emit('partitionCanvas', getTotalSize());
  });
};