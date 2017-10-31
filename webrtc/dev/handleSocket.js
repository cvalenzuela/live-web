// Server: Handle the Socket 

let clients = new Set();
let usernames = new Set();

let handleSocket = (io, socket) => {
  let username;

  // Client connects and registers a username
  (() => {
    username = socket.handshake.query.username;
    checkIfUserIsRegistered(socket, username);
  })();

  // Client Disconnects
  socket.on('disconnect', () => {
    try {
      clients.delete(socket);
      consoleMsgs.dropClient(socket.id);
    } catch (error) {
      consoleMsgs.error('deleting the user');
    }
    socket.emit('updateClients', clients.size);
    socket.broadcast.emit('updateClients', clients.size);
  });

  // Client tries to register a username
  socket.on('register', username => {
    checkIfUserIsRegistered(username);
  });

  // Client makes an offer to connect to someone
  socket.on('offer', data => {
    if (usernames.has(data.username)) {
      consoleMsgs.offerFrom(username, data.username);
      for (let client of clients) {
        if (client.username == data.username) {
          client.emit('offer', {
            type: 'offer',
            msg: 'A client is trying to connect to you',
            offer: data.offer,
            from: username
          })
        };
      }
    } else {
      consoleMsgs.notFound(`${username} tried to connect to unexisting user ${usernameToConnect}`)
    }
  });

  // Clients answers an offer.
  socket.on('answer', data => {
    if (usernames.has(data.username)) {
      for (let client of clients) {
        if (client.username == data.username) {
          client.emit('answer', {
            type: 'answer',
            msg: 'Your request was accepted',
            answer: data.answer
          })
        };
      }
    }
  });

  // ICEcandidate
  socket.on('candidate', data => {
    if (usernames.has(data.username)) {
      for (let client of clients) {
        if (client.username == data.username) {
          client.emit('candidate', {
            type: 'candidate',
            msg: 'Candidate connection',
            data: data.candidate
          })
        };
      }
    }
  });
};

// Check if user is registerd
let checkIfUserIsRegistered = (socket, username) => {
  if (!usernames.has(username)) {
    socket.username = username;
    socket.connectedTo = [];
    clients.add(socket);
    usernames.add(username);
    consoleMsgs.newClient(socket.id);
    socket.emit('userRegister', {
      type: "register",
      success: true,
      msg: `Your username ${username} was created sucessfully.`
    });
  } else {
    socket.emit('userRegister', {
      type: "register",
      success: false,
      msg: `${username} is already taken. Use another username`
    });
  }
};

let consoleMsgs = {
  notFound: msg => {
    console.log(`Unsuccesfull request from user: ${msg}`);
  },
  offerFrom: (clientA, clientB) => {
    console.log(`${clientA} is trying to connec to ${clientB}`);
  },
  newClient: id => {
    console.log(`
    --------
    New client: ${id}
    Total amount of clients: ${clients.size}
    --------
    `);
  },
  dropClient: id => {
    console.log(`
    --------
    Client ${id} has disconnected 
    Total amount of clients: ${clients.size}
    --------`);
  },
  error: err => {
    console.log(`Something went wrong: ${err}`);
  }
}

export { handleSocket };