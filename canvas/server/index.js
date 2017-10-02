/*
Server
------
Sockets with canvas exercise

Live-Web @ NYU ITP
Cristobal Valenzuela
cv965@nyu.edu
*/

const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');
const handleSocket = require('./socket');
const PORT = process.env.PORT || 9898;

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