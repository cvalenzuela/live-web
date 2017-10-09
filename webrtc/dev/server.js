/*
Server
*/

import * as fs from 'fs';
import express from 'express';
import https from 'https';
import http from 'http';
import path from 'path';
import socket from 'socket.io';
import { handleSocket } from './handleSocket';
const app = express();
let server, host, io;
const PORT = process.env.PORT || 3232;


// Check for Prod or Dev Server
if (process.env.PROD) {
  console.log(`Starting production server WITH https`);
  host = 'https://cv965.itp.io:'
  const credentials = {
    key: fs.readFileSync('./private/my-key.pem'),
    cert: fs.readFileSync('./private/my-cert.pem')
  };
  server = https.Server(credentials, app);
} else {
  console.log('Development server WITHOUT https');
  host = 'http://localhost:'
  server = http.Server(app);
}

io = socket(server);

app.use(express.static(__dirname + '/public/'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
  handleSocket(io, socket);
});

server.listen(PORT, () => {
  console.log(`Server running at ${host}${PORT}`);
});