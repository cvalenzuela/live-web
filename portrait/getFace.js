//
// Take a snapshot, recognize a face, save face and delete original
//

let fs = require('fs');
let NodeWebcam = require("node-webcam");
let cv = require('opencv');
let Jimp = require("jimp");

let deltaX = 200;
let deltaY = 80;
let snapshotOptions = {
  width: 1280,
  height: 720,
  quality: 100,
  delay: 0,
  saveShots: true,
  output: "jpeg",
  device: false,
  callbackReturn: "location",
  verbose: false
};

let Webcam = NodeWebcam.create(snapshotOptions);


module.exports = (origin_path, destination_path, format) => {
  let current_date = String(Date.now());
  let destination = origin_path + current_date + format;

  // Capture Image
  Webcam.capture(destination, function(err, data) {
    console.log('New image saved to', destination);
    detectFace(destination, current_date);
  });

  // Detect Face, crop and delete original
  let detectFace = (imageSource, current_date) => {
    let destination = destination_path + current_date + format;

    cv.readImage(imageSource, function(err, im) {
      im.detectObject(cv.FACE_CASCADE, {}, function(err, faces) {
        if (err) throw err;
        if (faces.length >= 1) {
          var face = faces[0];
          Jimp.read(imageSource, function(err, newImage) {
            let a = face.x - deltaX;
            let b = face.y - deltaY;
            let c = face.width + deltaX * 2;
            let d = face.height + deltaY * 2;
            newImage.crop(a, b, c, d)
              .resize(710, 470)
              .write(destination);
            fs.unlink(imageSource, () => {
              console.log('New face saved to', destination);
            })
          });
        } else {
          console.log('No face detected');
          fs.unlink(imageSource, () => {
            console.log('New face saved to', destination);
          })
        }
      });
    })
  }
}