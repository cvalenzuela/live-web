/*
Client
--------
Sockets with canvas exercise

Live-Web @ NYU ITP
Cristobal Valenzuela
cv965@nyu.edu
*/

import * as sockets from './sockets';
import * as canvas from './canvas';

let clients = [];

window.onload = () => {
  window.addEventListener('resize', sockets.emitNewSize, true);

  canvas.create();
  sockets.init();
}
