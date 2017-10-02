// =======
// See if camera is available
// =======

// Get the camera in all posible ways
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
window.URL = window.URL || window.webkitURL;

let isCameraAvailable = (cameraElement, callback) => {

  let gotStream = (stream) => {
    if (window.URL) {
      cameraElement.src = window.URL.createObjectURL(stream);
    } else {
      cameraElement.src = stream; // Opera
    }
    cameraElement.onerror = e => {
      stream.stop();
      console.log('Camera has ended :(');
    };
    stream.onended = noStream;
  }

  let noStream = (e) => {
    let errMsg = 'No camera available.';
    e.code == 1 && (errMsg = 'User denied access to use camera.');
    console.log(errMsg);
    return errMsg;
  }

  if (navigator.getUserMedia) {
    navigator.getUserMedia({ video: true }, gotStream, noStream);
    console.log('Got Camera!')
    callback();
  } else {
    console.log('Sorry. navigator.getUserMedia()is not available.')
    return 'Sorry. <code>navigator.getUserMedia()</code> is not available.'
  }
}

export { isCameraAvailable }