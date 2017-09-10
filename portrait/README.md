# Self Portrait

This node script:
1) Runs in the background and takes a picture using the webcam every (x) minutes. 
2) Uses openCV to detect any faces in the image and crops the image to be centered on a face.
3) Creates a video every (y) minutes with all the faces collected.

To run using defaults:
```zsh
node index.js
```
or to take a picture every 10 minutes and make a video every 20.
```zsh
node index.js 10 20
```
