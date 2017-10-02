/*
Server
*/

const fs = require('fs');
const credentials = {
  key: fs.readFileSync('./private/my-key.pem'),
  cert: fs.readFileSync('./private/my-cert.pem')
};

const express = require('express');
const app = express();
let server;

if(process.env.PROD){
  console.log('Starting production server with https');
  server = require('https').Server(credentials, app);
} else {
  console.log('Development server without https');
  server = require('http').Server(app);
}

const io = require('socket.io')(server);
const path = require('path');
const handleSocket = require('./handleSockets');
const PORT = process.env.PORT || 8765;

app.use(express.static(__dirname + '/public/'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', socket => {
  handleSocket(socket);
});

server.listen(PORT, () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log('running at http://' + host + ':' + port);
});