// -------
// Track user face
// -------

require('tracking');
require('tracking/build/data/face');

let video = document.getElementById('video');
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let tracker;

let init = () => {
  tracker = new window.tracking.ObjectTracker("face");
  tracker.setInitialScale(4);
  tracker.setStepSize(2);
  tracker.setEdgesDensity(0.1);
  tracking.track('#video', tracker, { camera: true });
  trackFace();
}

let trackFace = () => {
  tracker.on('track', (event) => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    event.data.forEach((rect) => {
      context.strokeStyle = '#a64ceb';
      context.strokeRect(rect.x, rect.y, rect.width, rect.height);
      context.font = '11px Helvetica';
      context.fillStyle = "#fff";
      context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
      context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
    });
  });
}

export { init }