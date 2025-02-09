import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { initializeRenderer } from '../core/WebGPUInitializer.js';
import { createCompassBase, createNeedle } from '../models/CompassShape.js';
import { createCompassMarkers } from '../models/TextMarkers.js';
import { ParticleSimulation } from '../simulation/ParticuleSimulation.js';

export async function setupCompassScene() {
  console.log('🎨 Configuration de la scène...');
  
  const canvas = document.querySelector('#canvas');
  console.log('📝 Canvas trouvé:', canvas);
  
  const renderer = initializeRenderer(canvas);
  console.log('🎮 Renderer initialisé');

  const scene = new THREE.Scene();

  // Camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 2, 5);

  // OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // Activer l'amortissement (inertie)
  controls.dampingFactor = 0.25;

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  // Compass Base and Needle
  const compassBase = createCompassBase();
  scene.add(compassBase);

  const needle = createNeedle();
  scene.add(needle);

  // Compass Text Markers
  const markers = await createCompassMarkers();
  markers.forEach(marker => scene.add(marker));

  // Particle Fluid Simulation
  const particleSimulation = new ParticleSimulation(5000);
  const particleGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleSimulation.getParticlePositions());

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particleMaterial = new THREE.PointsMaterial({ color: 0x00ffff, size: 0.01 });
  const particles = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particles);

  // Animation Loop
  function animate() {
    requestAnimationFrame(animate);
    
    console.log('🔄 Frame de rendu');
    
    particleSimulation.updateParticles();
    console.log('🌊 Particules mises à jour');
    
    if (particleGeometry.attributes.position) {
      particleGeometry.attributes.position.array.set(particleSimulation.getParticlePositions());
      particleGeometry.attributes.position.needsUpdate = true;
      console.log('📍 Positions des particules mises à jour');
    }

    needle.rotation.z += 0.01;
    controls.update(); // Mettre à jour les contrôles
    renderer.render(scene, camera);
  }

  console.log('▶️ Démarrage de l\'animation');
  animate();
}
