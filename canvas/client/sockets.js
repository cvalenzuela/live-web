// Client
// Socket

const io = require('socket.io-client');
import * as canvas from './canvas';

const SERVER = 'http://localhost:3000'

const socket = io.connect(SERVER, { query: canvas.getWindowSize() });

let init = () => {
  socket.on('connect', () => {
    console.log("Connected to", SERVER);
  });
}

let emitNewSize = () => {
  socket.emit('resize', canvas.getWindowSize())
}

socket.on('partitionCanvas', (data) => {
  canvas.partitionCanvas(data);
});


export  { init, emitNewSize }