// Mesh manager
// ======

import * as THREE from 'three';
import * as TWEEN from 'tween.js';

import * as Detector from './utils/Detector';
import * as Stats from './utils/stats';
import * as trackBallControls from './utils/TrackballControls';
import { resize } from './utils/manageWindowResize';
import * as geometry from './utils/geometry';

let scale = { x: 1, y: 1, z: 1 };
let tween = new TWEEN.Tween(scale);

let scene, camera, renderer, controls, stats;
let videoCamera, videoCanvas, videoImageCtx, videoTexture, movieGeometry;

let count = 0;
let mesh = new THREE.Object3D();
let materials = [];

let init = (_videoCamera, _videoCanvas, webglcanvas) => {
  videoCamera = _videoCamera;
  videoCanvas = _videoCanvas;

  // Scene
  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xf2a113, 160, 190);

  // Camera
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 20000);
  camera.position.set(0, 150, 100);
  camera.lookAt(scene.position);
  scene.add(camera);

  // Renderer
  if (Detector.webgl)
    renderer = new THREE.WebGLRenderer({ antialias: true });
  else
    renderer = new THREE.CanvasRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xf2b40e);
  webglcanvas.appendChild(renderer.domElement);

  // Controls
  controls = new THREE.TrackballControls(camera, renderer.domElement);
  controls.noPan = true;
  controls.noZoom = true;

  // Events
  resize(renderer, camera);

  // Stats
  // stats = new Stats();
  // stats.domElement.style.position = 'absolute';
  // stats.domElement.style.bottom = '0px';
  // stats.domElement.style.zIndex = 100;
  // webglcanvas.appendChild( stats.domElement );

  // Lights
  var light = new THREE.DirectionalLight(0xffffff, 0.3);
  scene.add(light);

  var ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(ambientLight);

  // VideoCanvas and videoTexture
  videoCanvas.style.filter = "grayscale(100%)";
  videoImageCtx = videoCanvas.getContext('2d');
  videoImageCtx.fillStyle = '#fff'; // background color if no video present
  videoImageCtx.fillRect(0, 0, videoCanvas.width, videoCanvas.height);

  videoTexture = new THREE.Texture(videoCanvas);
  videoTexture.wrapS = videoTexture.wrapT = THREE.RepeatWrapping;
  videoTexture.offset.set(0, 0);
  videoTexture.repeat.set(20, 20);
  videoTexture.minFilter = THREE.LinearFilter;
  videoTexture.magFilter = THREE.LinearFilter;

  movieGeometry = new THREE.SphereGeometry(40, 5, 2, 0, 6.3, 0, 3.1);
  for (var i = 0; i < movieGeometry.faces.length; i++) {
    materials.push(new THREE.MeshPhongMaterial({
      map: videoTexture,
      overdraw: true,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8
    }));
  }

  let movieScreen = new THREE.Mesh(movieGeometry, materials);
  for (var i = 0; i < movieGeometry.faces.length; i++) {
    movieGeometry.faces[i].materialIndex = i;
  }
  mesh.add(movieScreen);
  scene.add(mesh);
  camera.lookAt(movieScreen.position);

  // Tween Animations
  window.addEventListener("click", () => {
    tween = new TWEEN.Tween(scale).to({ x: 1.16, y: 1.16, z: 1.16 }, 300).easing(TWEEN.Easing.Quadratic.Out);
    tween.start();

    window.setTimeout(() => {
      tween = new TWEEN.Tween(scale).to({ x: 1, y: 1, z: 1 }, 300).easing(TWEEN.Easing.Quadratic.Out);
      tween.start();
    }, 300);
  });

  animate();
}

let update = () => {
  // stats.update();

  TWEEN.update();
  videoCamera.play();
  controls.update();

  for (var i = 0, l = movieGeometry.vertices.length; i < l; i++) {
    movieGeometry.vertices[i].y += Math.cos(((i / 5 + count) * 0.2) * 70) / 3;
  }
  for (var i = 0, l = movieGeometry.vertices.length; i < l; i++) {
    movieGeometry.vertices[i].z += Math.cos(((i / 5 + count) * 0.2) * 30) / 6;
  }

  count += 0.009;

  mesh.scale.x = scale.x;
  mesh.scale.y = scale.y;
  mesh.scale.z = scale.z;

  mesh.rotation.x += 0.0025;
  mesh.rotation.z += 0.003;

  movieGeometry.verticesNeedUpdate = true;
}

let animate = () => {
  requestAnimationFrame(animate);
  render();
  update();
}

let render = () => {
  //USE FETCHED DATA TO APPLY TEXTURE HERE:
  // materials[5] = new THREE.MeshBasicMaterial({color: 0x7d89be});
  if (videoCamera.readyState === videoCamera.HAVE_ENOUGH_DATA) {
    videoImageCtx.drawImage(videoCamera, 0, 0, videoCanvas.width, videoCanvas.height);
    if (videoTexture)
      videoTexture.needsUpdate = true;
  }
  renderer.render(scene, camera);
}

export { init }