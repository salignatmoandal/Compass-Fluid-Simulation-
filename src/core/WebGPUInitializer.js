import * as THREE from 'three';

export function initializeRenderer(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);
  return renderer;
}
