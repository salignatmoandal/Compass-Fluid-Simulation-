import { setupCompassScene } from './scenes/CompassScene.js';

async function main() {
  console.log('🚀 Démarrage de l\'application');
  try {
    await setupCompassScene();
    console.log('✅ Scene configurée avec succès');
  } catch (error) {
    console.error('❌ Erreur lors de la configuration:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('📄 DOM chargé');
  main();
});
