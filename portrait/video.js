//
// Creates a mp4 based on a folder of images
//

var fs = require('fs');
var videoshow = require('videoshow')

let videoOptions = {
  fps: 25,
  loop: 0.1, // seconds
  transition: false,
  videoBitrate: 1024,
  videoCodec: 'libx264',
  size: '640x?',
  format: 'mp4',
  pixelFormat: 'yuv420p'
}

module.exports = (videoPath, imagesPath, imageFormat) => {
  let currentDate = String(Date.now());
  let validIimages = []; 
  videoPath = videoPath + currentDate + '.mp4';

  fs.readdir(imagesPath, (err, files) => {
    if (err) throw err;
    files.forEach(function(file) {
      if (file.indexOf(imageFormat) >= 0) {
        validIimages.push(imagesPath + file);
      }
    })
    validIimages.length > 0 && createVideo();
  })

  let createVideo = () => {
    videoshow(validIimages, videoOptions)
      .save(videoPath)
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
}