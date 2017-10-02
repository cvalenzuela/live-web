// -------
// Track user face
// -------

import { emitFacePosition } from './handleSocket';

require('tracking');
require('tracking/build/data/face');

let tracker;
let time = new Date;

// Init the tracker
let init = (video, canvas) => {
  tracker = new window.tracking.ObjectTracker("face");
  tracker.setInitialScale(4);
  tracker.setStepSize(2);
  tracker.setEdgesDensity(0.1);
  tracking.track(video, tracker, { camera: true });
  trackFace(canvas);
}

// Track the face
let trackFace = (canvas) => {
  let context = canvas.getContext('2d');
  tracker.on('track', (event) => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    event.data.forEach((rect) => {
      if ((new Date).getSeconds() % 2 == 0) {
        let scalePos = { x: scale(rect.x, 160, 20, -0.0025, 0.0025), y: scale(rect.y, 160, 20, -0.0025, 0.0025) }
        emitFacePosition(scalePos);
      }
      //debugFace(context, rect)
    });
  });
}

// Let scale a number between range
let scale = (input, in_min, in_max, out_min, out_max) => {
  return (input - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// Draw on debug canvas
let debugFace = (context, data) => {
  console.log(data);
  context.strokeStyle = '#ff0000';
  context.strokeRect(data.x, data.y, data.width, data.height);
  context.font = '11px Helvetica';
  context.fillStyle = "#fff";
  context.fillText('x: ' + data.x + 'px', data.x + data.width + 5, data.y + 11);
  context.fillText('y: ' + data.y + 'px', data.x + data.width + 5, data.y + 22);
}


export { init }