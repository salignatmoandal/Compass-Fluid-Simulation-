import * as THREE from 'three';

export class ParticleSimulation {
    constructor(particleCount) {
      this.particleCount = particleCount;
  
      this.particles = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 1;
        this.particles[i * 3] = Math.cos(angle) * radius;
        this.particles[i * 3 + 1] = Math.sin(angle) * radius;
        this.particles[i * 3 + 2] = 0;
      }
    }
  
    updateParticles() {
      for (let i = 0; i < this.particleCount; i++) {
        const angle = Math.random() * 2 * Math.PI;
        this.particles[i * 3] += Math.cos(angle) * 0.01;
        this.particles[i * 3 + 1] += Math.sin(angle) * 0.01;
      }
    }
  
    getParticlePositions() {
      return this.particles;
    }
  }
  