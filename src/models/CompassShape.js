import * as THREE from 'three'

export function createCompassBase(){
    const baseGeometry = new THREE.CircleGeometry(1,64)
    const baseMaterial = new THREE.MeshStandardMaterial({color: 0x333333})
    const compassBase = new THREE.Mesh(baseGeometry, baseMaterial); 
    compassBase.rotation.x = -Math.PI / 2;
    return compassBase;
}

export function createNeedle(){
    const needleGeometry = new THREE.BoxGeometry(0.1,1.5,0.1);
    const needleMaterial = new THREE.MeshStandardMaterial({color:0xff0000 })
    const needle = new THREE.Mesh(needleGeometry, needleMaterial);

    needle.position.y = 0.75
    needle.rotation.x = -Math.PI / 2;
    return needle;
}