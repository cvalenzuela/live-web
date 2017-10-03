// -------
// Track user face
// -------

require('tracking');
require('tracking/build/data/face');

let tracker;
let time = new Date;
let userPos;

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
      userPos = rect;
      context.strokeStyle = '#ff0000';
      context.strokeRect(rect.x, rect.y, rect.width, rect.height);
    });
  });
}

// Get User Face position
let userFacePos = () => {
  if(userPos){
    return { y: mapNumber(userPos.y, 0, 150, 0.5, -0.5) };
  } else {
    return { y: 0 };
  }
}

// Let scale a number between range
let mapNumber = (input, in_min, in_max, out_min, out_max) => {
  return (input - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


export { init, userFacePos }