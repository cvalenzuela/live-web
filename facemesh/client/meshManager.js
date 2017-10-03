// Mesh manager
// ======

import * as THREE from 'three';
import * as TWEEN from 'tween.js';

import * as Detector from './utils/Detector';
import * as Stats from './utils/stats';
import * as trackBallControls from './utils/TrackballControls';
import { resize } from './utils/manageWindowResize';
import * as geometry from './utils/geometry';
import './utils/ExplodeModifier';

import { emitFacePosition } from './handleSocket';
import { userFacePos } from './trackFace';

let scale = { x: 1, y: 1, z: 1 };
let tween = new TWEEN.Tween(scale);

let scene, camera, renderer, controls, stats;
let facesGeometry, mesh;

let rotationAmount = { x: 0, y: 0 };
let offsetY = 0;
let materials = [];
let y;

let userId;
let currentPos = 1, previousPos = 0;

let init = (webglcanvas, clientNumber) => {
  userId = clientNumber;

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
  window.addEventListener("click", pingTheMesh);

  // Lights
  let light = new THREE.DirectionalLight(0xffffff, 0.3);
  scene.add(light);
  let ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(ambientLight);

  facesGeometry = new THREE.SphereGeometry(40, 7, 7, 0, 6.3, 0, 3.1);
  let material = new THREE.MeshBasicMaterial({ color: '#ffffff' });

  // Explode Modifier
  let explodeModifier = new THREE.ExplodeModifier();
  explodeModifier.modify(facesGeometry);

  let clientFaceInMesh = new THREE.MeshBasicMaterial({ color: '#ff0000' });
  for (let i = 0; i < facesGeometry.faces.length; i++) {
    materials.push(new THREE.MeshBasicMaterial({ color: '#ffffff' }));
  }
  for (let i = 0; i < facesGeometry.faces.length; i++) {
    facesGeometry.faces[i].materialIndex = i;
  }

  materials[userId] = clientFaceInMesh;
  mesh = new THREE.Mesh(facesGeometry, materials);
  scene.add(mesh);
  camera.lookAt(mesh.position);
  animate();
}

let update = () => {
  // stats.update();
  TWEEN.update();
  controls.update();

  let offsetY = userFacePos();

  //y = facesGeometry.vertices[THREE.Math.randInt(userId * 3, userId * 3 + 2)].y;
  // y < -1 && (offsetY.y = 0);
  //facesGeometry.vertices[THREE.Math.randInt(userId * 3, userId * 3 + 2)].y += offsetY.y;
  //y = facesGeometry.vertices[THREE.Math.randInt(userId * 3, userId * 3 + 2)].y;

  if ((new Date).getSeconds() % 2 == 0) {
    emitFacePosition(offsetY);
  } 

  // Scale the mesh
  mesh.scale.x = scale.x;
  mesh.scale.y = scale.y;
  mesh.scale.z = scale.z;

  // Rotate the mesh
  //mesh.rotation.y += rotationAmount.y;
  //mesh.rotation.z += rotationAmount.y;

  facesGeometry.verticesNeedUpdate = true;
}

let animate = () => {
  requestAnimationFrame(animate);
  render();
  update();
}

let render = () => {
  renderer.render(scene, camera);
}

// Tween Animations
let pingTheMesh = () => {
  // let scale2x = new TWEEN.Tween(scale).to({ x: 1.5, y: 1.5, z: 1.5 }, 300).easing(TWEEN.Easing.Quadratic.Out).start();
  // setTimeout(() => {
  //   let scale1x = new TWEEN.Tween(scale).to({ x: 1, y: 1, z: 1 }, 300).easing(TWEEN.Easing.Quadratic.Out).start();
  // }, 300);
};

let updateMesh = clients => {
  try {
    for(let client in clients){
      facesGeometry.vertices[THREE.Math.randInt(clients[client].number * 3, clients[client].number * 3 + 2)].y += clients[client].pos.y;
    }
  } catch (error) {
    console.log(error)
  }
}

export { init, pingTheMesh, updateMesh }