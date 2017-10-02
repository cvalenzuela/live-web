// Client
// Socket

const io = require('socket.io-client');
import * as canvas from './canvas';

const PORT = ':9898'

const socket = io.connect(PORT, { query: canvas.getWindowSize() });

let init = () => {
  socket.on('connect', () => {
    console.log("Connected to server on port " + PORT);
  });
}

let emitNewSize = () => {
  socket.emit('resize', canvas.getWindowSize())
}

socket.on('partitionCanvas', (data) => {
  canvas.partitionCanvas(data);
});


export  { init, emitNewSize }