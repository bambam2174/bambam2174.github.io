
import './style.css';
import urlSpace from './img/space.jpg';
import urlBorg from './img/borg.png';
import urlAvatar from './img/bambam_avatar.jpg';
import urlNormal from './img/normal.jpg';
import urlMoon from './img/vector-golf-background-golf-ball-texture_1284-43402.jpg';
import urlNormalMap from './img/NormalMap.png';
import urlNormalMap2 from './img/NormalMap2.png';
import urlLovoo from './img/Lovoo_Selfie.png';
import urlNormalMapGolfball2 from './img/NormalMapGolfball2.png';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';



// NormalMapGolfball2.png
// Setup
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};

const SCROLLDIR = {
  UP: 'U',
  DOWN: 'D'
};

let isScrolling = false;
let scrollDir = SCROLLDIR.DOWN;
// Debug
// const gui = new dat.GUI()

const clock = new THREE.Clock()

const scene = new THREE.Scene();
// Loader
const textureLoader = new THREE.TextureLoader()

const normalMapTexture = textureLoader.load(urlNormalMap)
const normalMapTexture2 = textureLoader.load(urlNormalMap2)
const normalMapGolfball2 = textureLoader.load(urlNormalMapGolfball2)

const moonTexture = textureLoader.load(urlMoon);
const normalTexture = textureLoader.load(urlNormal);



const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = createRendererWithCam(camera);

let wraith = null;
let mixer = null;

createWraith(wraith, 4, 0, -2, 35);


window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
// Torus

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const materialNormalMapTexture = createMeshMaterialWithNormalMap(normalMapTexture) // new THREE.MeshStandardMaterial({ color: 0xff6347 });
materialNormalMapTexture.color = new THREE.Color(0x0f0f0f)
const torus = new THREE.Mesh(geometry, materialNormalMapTexture);

scene.add(torus);


// Lights

const pointLight = createPointLight(5, 5, 5, 0xffffff);
const pointLightRed = createPointLight(-5, 5, 5, 0xff0000);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(/* lightHelper, */ gridHelper)

const controls = new OrbitControls(camera, renderer.domElement);
scene.add(controls);

function createRendererWithCam(camera) {
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    alpha: true
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  camera.position.setZ(30);
  camera.position.setX(-3);

  renderer.render(scene, camera);
  return renderer;
}

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

// Background

const spaceTexture = textureLoader.load(urlSpace);
scene.background = spaceTexture;

// Avatar
let sz_image = (location.hash) ? location.hash.substr(1) : urlLovoo;

const textureCubicBox = textureLoader.load(urlBorg);

const materialNormalMapTexture2 = createMeshMaterialWithNormalMap(normalTexture)
materialNormalMapTexture2.map = textureCubicBox; // new THREE.MeshStandardMaterial({ color: 0xff6347 });
const meshCubicBox = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), materialNormalMapTexture2);

scene.add(meshCubicBox);


// Moon

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalMapTexture,
  })
);

scene.add(moon);

moon.position.z = 30;
moon.position.setX(-10);

meshCubicBox.position.z = -5;
meshCubicBox.position.x = 2;

// Scroll Animation
let lastScrollY = document.body.getBoundingClientRect().top;
function moveCamera(ev) {
  isScrolling = true;
  let factor = 1;
  const t = document.body.getBoundingClientRect().top;
  if (t > lastScrollY) {
    scrollDir = SCROLLDIR.UP;
    factor = -1;
  }
  if (t < lastScrollY) {
    scrollDir = SCROLLDIR.DOWN;
    factor = 1;
  }
  dlog('scrollDir =', scrollDir, '\nt = ', t, '\nlastScrollY = ', lastScrollY);
  lastScrollY = t;

  console.log('t = ' + t);
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  meshCubicBox.rotation.y += 0.01;
  meshCubicBox.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;

  let tmpWraith = scene.getObjectByName('wraith_animated');
  if (tmpWraith != undefined) {
    // scene.getObjectByName('wraith_animated').rotation.y += 0.9;
    tmpWraith.rotation.y += t * -0.00002 * factor;
  }

  if (ev != undefined) {
    console.log('moveCamera',
      '\nsrcElement.defaultView.scrollY', ev.srcElement.defaultView.scrollY,
      '\ntarget.defaultView.scrollY', ev.target.defaultView.scrollY,
      '\nwindow.scrollY', window.scrollY)
  }

}

function scrolllEndHandler(ev) {
  isScrolling = false;
  console.log('scrollend \nisScrolling', isScrolling);
}
addEmailHandler();

document.body.onscroll = moveCamera;

document.addEventListener('scrollend', scrolllEndHandler);
moveCamera();

// Animation Loop

let elapsedTime = clock.getElapsedTime()

function animate() {
  /* lastElapsedTime = clock.getElapsedTime()
  let tmpElapsedTime =  */
  elapsedTime = clock.getDelta()

  torus.rotation.x += 0.5 * elapsedTime;
  torus.rotation.y += 0.6 * elapsedTime;
  torus.rotation.z += 0.6 * elapsedTime;

  moon.rotation.x += 0.5 * elapsedTime;

  if (!isScrolling) {
    meshCubicBox.rotation.y -= 0.6 * elapsedTime;
    meshCubicBox.rotation.z -= 0.6 * elapsedTime;
  }


  console.log('animate \nisScrolling', isScrolling);
  let tmpWraith = scene.getObjectByName('wraith_animated');
  if (!isScrolling && tmpWraith != undefined) {
    tmpWraith.rotation.y += 0.6 * elapsedTime;
  }
  if (mixer) mixer.update(elapsedTime * 2);

  // controls.update();

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();


/**
 * 
 * @param {THREE.MeshStandardMaterial} material 
 * @param {number?} x 
 * @param {number?} y 
 * @param {number?} z 
 * @param {number?} radius 
 * @param {number?} segments 
 * @returns THREE.SphereGeometry
 */
function createSphereWithNormalMap(material, x = 0, y = 0, z = 0, radius = 0.5, segments = 64) {
  const geometry = new THREE.SphereGeometry(radius, segments, segments)

  // Mesh
  const sphere = new THREE.Mesh(geometry, material)
  sphere.position.set(x, z, y)
  scene.add(sphere)
  return sphere
}

/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 * @param {THREE.ColorRepresentation?} hexColor 
 * @param {number?} intensity 
 * @returns THREE.PointLight
 */
function createPointLight(x, y, z, hexColor = 0xffffff, intensity = 1) {
  const retPointLight = new THREE.PointLight(hexColor, 1)
  retPointLight.position.set(x, y, z)
  retPointLight.intensity = intensity

  scene.add(retPointLight)
  return retPointLight
}

/**
 * 
 * @param {THREE.Texture} pNormalTexture 
 * @param {number?} metalness 
 * @param {number?} roughness 
 * @param {THREE.ColorRepresentation?} color 
 * @returns THREE.MeshStandardMaterial
 */
function createMeshMaterialWithNormalMap(pNormalTexture, metalness = 8.5, roughness = 0.2, color = 0xffffff) {
  const material = new THREE.MeshStandardMaterial()
  material.metalness = metalness
  material.roughness = roughness
  material.normalMap = pNormalTexture
  material.color = new THREE.Color(color)

  return material
}


function createWraith(pWraith, scale = 1, x = 0, y = 0, z = 0) {

  const gltfLoader = new GLTFLoader();
  gltfLoader.load('img/gltf/glb/Wraith_Animated.glb', (glb) => {
    pWraith = glb.scene;
    pWraith.scale.set(scale, scale, scale);

    scene.add(pWraith);
    pWraith.position.z = z;
    pWraith.position.y = y;
    pWraith.position.x = x;
    pWraith.name = 'wraith_animated';
    console.log('Wraith load', pWraith);

    let animations = glb.animations;
    if (animations && animations.length) {
      mixer = new THREE.AnimationMixer(pWraith);
      for (const animation of animations) {
        mixer.clipAction(animation).play();
      }
    }
  });

}

function addEmailHandler() {
  const clickListener = ev => {
    ev.preventDefault();
    ev.stopPropagation();
    console.log(ev.target.parentNode.href);
    let newurl = ev.target.parentNode.href.replace('.dev', '');
    console.log("newurl", newurl);
    window.open(newurl);
  };
  document.querySelector('#gmail').addEventListener('click', clickListener);

}

function dlog(...params) {
  document.dlog = document.dlog || {};
  document.dlog.output = document.dlog.output || document.querySelector('#output');
  document.dlog.output.innerText = '';
  for (const element of params) {
    document.dlog.output.innerText += element;
  }
}