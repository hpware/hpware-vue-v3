<script setup>
import { ref } from "vue";
import { animate, scroll } from 'motion';
import * as THREE from "three";

var scene = new THREE.Scene({ alpha: true });
const main = document.querySelector("main");
var camera = new THREE.PerspectiveCamera(
  45,
  main.offsetWidth / main.offsetHeight,
  0.1,
  1000
);
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(main.offsetWidth, main.offsetHeight);
main.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshPhongMaterial({ color: 0x4ff0b7 });
var cube = new THREE.Mesh(geometry, material);
renderer.setClearColor(0xffffff, 0);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(2, 2, 2);
const light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);
scene.add(directionalLight);
scene.add(cube);

camera.position.z = 5;

function rad(degrees) {
  return degrees * (Math.PI / 180);
}

/**
 * Create Three.js render loop using Motion's frameloop
 */
frame.render(() => renderer.render(scene, camera), true);

/**
 * Animate cube rotation
 */
animate(
  cube.rotation,
  { y: rad(360), z: rad(360) },
  { duration: 10, repeat: Infinity, ease: "linear" }
);

</script>
<template>
<main></main>
</template>
<style scoped>
.cube {
    width:50px;
    height:50px;
    background-color:white;
    align-items:center;
    text-align:center;
    justify-content: center;
}
</style>