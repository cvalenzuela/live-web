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

let offsetY = 0;
let materials = [];
let y;
let container = new THREE.Object3D();

let currentPos = 1,
  previousPos = 0;
let userId;

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
  renderer.setClearColor('#f2b40e');
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  webglcanvas.appendChild(renderer.domElement);

  // Controls
  controls = new THREE.TrackballControls(camera, renderer.domElement);
  controls.noPan = true;
  controls.noZoom = true;

  // Events
  resize(renderer, camera);

  // Lights
  let light = new THREE.DirectionalLight(0xffffff, 0.3);
  light.castShadow = true;
  light.position.set(1, 1, -1);
  scene.add(light);
  let ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(ambientLight);

  facesGeometry = new THREE.SphereGeometry(40, 7, 7, 0, 6.3, 0, 3.1);

  // Explode Modifier
  let explodeModifier = new THREE.ExplodeModifier();
  explodeModifier.modify(facesGeometry);

  let clientFaceInMesh = new THREE.MeshPhongMaterial({ color: '#ff4444' });
  let wireMaterial = new THREE.MeshBasicMaterial({
    color: '#666666',
    wireframe: true
  });
  for (let i = 0; i < facesGeometry.faces.length; i++) {
    materials.push(new THREE.MeshPhongMaterial({
      color: '#cacaca',
      side: THREE.DoubleSide
    }));
  }
  for (let i = 0; i < facesGeometry.faces.length; i++) {
    facesGeometry.faces[i].materialIndex = i;
  }

  materials[userId] = clientFaceInMesh;
  mesh = new THREE.Mesh(facesGeometry, materials);
  let wireMesh = new THREE.Mesh(facesGeometry, wireMaterial);
  container.add(mesh);
  container.add(wireMesh);
  mesh.receiveShadow = true;
  mesh.castShadow = true;
  scene.add(container);
  camera.lookAt(mesh.position);
  animate();
}

let update = () => {
  TWEEN.update();
  controls.update();

  let offsetY = userFacePos();
  // if ((new Date).getSeconds() % 2 == 0) {
  //   emitFacePosition(offsetY);
  // } 
  emitFacePosition(offsetY);

  // Scale the mesh
  container.scale.x = scale.x;
  container.scale.y = scale.y;
  container.scale.z = scale.z;

  // Rotate the mesh
  container.rotation.y += 0.001;
  container.rotation.z += 0.001;

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
  let scale2x = new TWEEN.Tween(scale).to({ x: 1.3, y: 1.3, z: 1.3 }, 300).easing(TWEEN.Easing.Quadratic.Out).start();
  setTimeout(() => {
    let scale1x = new TWEEN.Tween(scale).to({ x: 1, y: 1, z: 1 }, 300).easing(TWEEN.Easing.Quadratic.Out).start();
  }, 300);
};

let updateMesh = clients => {
  try {
    for (let client in clients) {
      if (clients[client].pos) {
        let delta = clients[client].pos.y;
        let currentFacePos = facesGeometry.vertices[THREE.Math.randInt(clients[client].number * 3, clients[client].number * 3 + 2)].y;

        if (currentFacePos < 80 && currentFacePos > 20 && delta > 0) {
          facesGeometry.vertices[clients[client].number * 3].y += delta;
          facesGeometry.vertices[clients[client].number * 3 + 1].y += delta;
          facesGeometry.vertices[clients[client].number * 3 + 2].y += delta;
        }
        if (currentFacePos > 40 && delta < 0) {
          facesGeometry.vertices[clients[client].number * 3].y += delta;
          facesGeometry.vertices[clients[client].number * 3 + 1].y += delta;
          facesGeometry.vertices[clients[client].number * 3 + 2].y += delta;
        }
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export { init, pingTheMesh, updateMesh }