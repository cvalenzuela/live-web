/*
=================
SERVER

Socket Server usign express and socket.io

Live Web @ NYU ITP 2017
Cristóbal Valenzuela
cv965@nyu.edu
=================
*/

const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const apiai = require('apiai');
const keys = require('./../keys/index');
let agent = apiai(keys.apiai);

server.listen(3030);

io.on('connection', (socket) => {
  console.log('New client with id=', socket.id);

  socket.on('chatmessage', (data) => {
    getResponse(socket, data)
  });

  socket.on('disconnect', () => {
    console.log("Client has disconnected " + socket.id);
  });
});

let getResponse = (socket, data) => {
  let request = agent.textRequest(data, {
    sessionId: '123'
  });

  request.on('response', (response) => {
    socket.emit('chatmessage', response.result.fulfillment.speech);
  });

  request.on('error', (error) => {
    socket.emit('chatmessage', error);
  });

  request.end();
}