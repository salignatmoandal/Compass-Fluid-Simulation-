import * as THREE from 'three'
import { initializeRenderer } from '../core/WebGPUInitializer';
import { createCompassBase } from '../models/CompassShape';
import { createCompassMarkers } from '../models/TextMarker';


export async function setupCompassScene(){
    const canvas = document.querySelector('#canvas');
    const renderer = initializeRenderer(canvas)

    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1,1000);
    camera.position.set(0,2,5)

    // Lighting 
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5,5,5);
    scene.add(directionalLight)

    const compassBase = createCompassBase(); 
    scene.add(compassBase)

    const needle = createNeedle();
    scene.add(needle)

     // Compass Text Markers
  const markers = await createCompassMarkers();
  markers.forEach(marker => scene.add(marker));

        
    
}