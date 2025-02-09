import * as THREE from 'three'
import { initializeRenderer } from '../core/WebGPUInitializer';


export async function setupCompassScene(){
    const canvas = document.querySelector('#canvas');
    const renderer = initializeRenderer(canvas)

    const scene = new THREE.Scene();
}