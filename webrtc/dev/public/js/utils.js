// Utils for WEBRTC

// Check if user userMedia
let hasUserMedia = () => {
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
  return !!navigator.getUserMedia;
}

export { hasUserMedia };