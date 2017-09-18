/*
=================
Self Portrait

This script:
1) Runs in the background and takes a picture using the webcam every x minutes. 
2) Uses openCV to detect any faces in the image and crops the image to be center on a face.
3) Creates a video every y minutes with all the faces collected.


Live Web @ NYU ITP 2017
Cristóbal Valenzuela
cv965@nyu.edu
=================
*/

let getFace = require('./getFace');
let createVideo = require('./video');

let takePictureEvery; // minutes
let createVideoEvery; // minutes

const fileFormat = '.jpg';
const rawImagesPath = './raw_pictures/';
const facesPath = './faces/';
const videoPath = './videos/';

// Run: node index.js 10 20 
// Takes a picture every 10 minutes and create a video every 20
process.argv[2] ? takePictureEvery = process.argv[2] : takePictureEvery = 5;
process.argv[3] ? createVideoEvery = process.argv[3] : createVideoEvery = 6;

// Intervals
console.log('Running..')
// setInterval(function(){
//   getFace(rawImagesPath, facesPath, fileFormat);
// }, takePictureEvery*1000*60);
// setInterval(function(){
//   createVideo(videoPath, facesPath, fileFormat);
// }, createVideoEvery*1000*60);

// Debug
//getFace(rawImagesPath, facesPath, fileFormat);
//createVideo(videoPath, facesPath, fileFormat);
setInterval(function(){
  getFace(rawImagesPath, facesPath, fileFormat);
}, 5000);
setInterval(function(){
  createVideo(videoPath, facesPath, fileFormat);
}, 15000);