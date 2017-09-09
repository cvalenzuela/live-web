/*
Self Portrait
Live Web @ NYU ITP 2017
Cristóbal Valenzuela
cv965@nyu.edu
*/

var NodeWebcam = require("node-webcam");
var fs = require('fs');
var cv = require('opencv');
var Jimp = require("jimp");
var videoshow = require('videoshow')

var opts = {
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

var Webcam = NodeWebcam.create(opts);

// Capture Image
function captureImage() {
  var current_date = String(Date.now());
  var temp_path = current_date + '.jpg';
  var file_path = './raw_pictures/' + current_date + '.jpg';

  Webcam.capture(current_date, function(err, data) {
    console.log('new image taken: ' + file_path)
    fs.rename(temp_path, file_path, function() {
      console.log('Image moved to ' + file_path);
      detectFace(file_path, current_date);
    })
  });
}

// Detect Face, crop and composite
function detectFace(imageSource, current_date) {
  cv.readImage(imageSource, function(err, im) {
    im.detectObject(cv.FACE_CASCADE, {}, function(err, faces) {
      if (err) {
        console.log(err)
        return
      }
      if (faces.length >= 1) {
        var face = faces[0];
        Jimp.read(imageSource, function(err, newImage) {
          let deltaX = 200;
          let deltaY = 80;
          let a = face.x - deltaX;
          let b = face.y - deltaY;
          let c = face.width + deltaX * 2;
          let d = face.height + deltaY * 2;
          newImage.crop(a, b, c, d)
          .resize(710, 470)
          .write("./faces/" + current_date + '.jpg');
        });
        console.log('New face saved')
      } else {
        console.log('No face detected')
      }
    });
  })
}

function makeVideo() {
  var current_date = String(Date.now());
  var video_path = './videos/' + current_date + '.mp4';
  var faces_path = './faces/';
  var faces_jpg = [];

  fs.readdir(faces_path, (err, images) => {
    if (err) {
      console.log(err)
      return
    }
    images.forEach(function(i) {
      if (i.indexOf(".jpg") >= 0) {
        faces_jpg.push('./faces/' + i);
      }
    })
    faces_jpg.length > 0 && makeVideoConfig();
  })

  function makeVideoConfig(){   
    var videoOptions = {
      fps: 25,
      loop: 5, // seconds
      transition: true,
      transitionDuration: 1, // seconds
      videoBitrate: 1024,
      videoCodec: 'libx264',
      size: '640x?',
      format: 'mp4',
      pixelFormat: 'yuv420p'
    }
    
    videoshow(faces_jpg, videoOptions)
      .save('video.mp4')
      .on('start', function (command) {
        console.log('ffmpeg process started:', command)
      })
      .on('error', function (err, stdout, stderr) {
        console.error('Error:', err)
        console.error('ffmpeg stderr:', stderr)
      })
      .on('end', function (output) {
        console.error('Video created in:', output)
      })
  }
  
  // // Note: videoshow is not working from node. Works by using the cli only
  // function makeVideoConfig() {
  //   var current_date = String(Date.now());
  //   var videoOptions = {
  //     "output": "./videos/" + current_date + ".mp4",
  //     "options": {
  //       "fps": 25,
  //       "loop": 5,
  //       "transition": false,
  //       "transitionDuration": 1,
  //       "videoBitrate": 1024,
  //       "videoCodec": "libx264",
  //       "size": "640x?",
  //       "audioBitrate": "128k",
  //       "audioChannels": 2,
  //       "format": "mp4"
  //     },
  //     "images": faces_jpg
  //   }
  //   fs.writeFile("./videoConfig.json", JSON.stringify(videoOptions), function(err) {
  //     if(err) {
  //         return console.log(err);
  //     }
  //     console.log("Video config file created");
  // }); 

  //   // Run cmd to execute videoshow
  //   //
  // }

}

// Intervals
//setInterval(captureImage, 5000)
//setInterval(makeVideo, 20000)
makeVideo();
//makeVideo()