/*==========
Client
--------
Facemesh

Live-Web @ NYU ITP
Cristobal Valenzuela & Yanlin Ma
==========*/

import { isCameraAvailable } from './utils/isCamera';

import * as handleSocket from './handleSocket';
import * as trackFace from './trackFace';

window.onload = () => {

  let video = document.getElementById('video');
  let webglcanvas = document.getElementById('webglCanvas');
  let faceCanvas = document.getElementById('faceCanvas');

  isCameraAvailable(video, () => {
    handleSocket.init(webglcanvas);
    trackFace.init(video, faceCanvas);
  })

};