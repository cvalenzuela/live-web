/*==========
Client
--------
Facemesh

Live-Web @ NYU ITP
Cristobal Valenzuela & Yanlin Ma
==========*/

import { isCameraAvailable } from './utils/isCamera';

import * as handleSocket from './handleSocket';
import * as meshManager from './meshManager';
import * as trackFace from './trackFace';

window.onload = () => {

  let videoCamera = document.getElementById('videoCamera');
  let webglcanvas = document.getElementById('webglCanvas');
  let videoCanvas = document.getElementById('videoCanvas');
  let faceCanvas = document.getElementById('faceCanvas');

  isCameraAvailable(videoCamera, () => {
    handleSocket.init();
    trackFace.init(videoCamera, faceCanvas);
    meshManager.init(videoCamera, videoCanvas, webglcanvas);
  })


};