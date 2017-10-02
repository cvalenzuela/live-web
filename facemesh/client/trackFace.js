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
        let scalePos = { x: scale(rect.x, 160, 20, -0.01, 0.01), y: scale(rect.y, 160, 20, -0.01, 0.01) }
        emitFacePosition(scalePos);
      }
      context.strokeStyle = '#ff0000';
      context.strokeRect(rect.x, rect.y, rect.width, rect.height);
    });
  });
}

// Let scale a number between range
let scale = (input, in_min, in_max, out_min, out_max) => {
  return (input - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

export { init }