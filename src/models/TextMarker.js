import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

export async function createCompassMarkers() {
  const loader = new FontLoader();

  const directions = ["N", "E", "S", "W"];
  const positions = [
    { x: 0, y: 1.2, z: 0 },  // North
    { x: 1.2, y: 0, z: 0 },  // East
    { x: 0, y: -1.2, z: 0 }, // South
    { x: -1.2, y: 0, z: 0 }  // West
  ];

  const markerMeshes = [];

  return new Promise((resolve) => {
    loader.load('/fonts/helvetiker_bold.typeface.json', (font) => {
      directions.forEach((text, index) => {
        const textGeometry = new TextGeometry(text, {
          font: font,
          size: 0.2,
          height: 0.05,
        });

        const textMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);

        textMesh.position.set(positions[index].x, positions[index].y, positions[index].z);
        markerMeshes.push(textMesh);
      });

      resolve(markerMeshes);
    });
  });
}
