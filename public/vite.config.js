import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // Définit la racine à partir de la racine du projet
  server: {
    port: 5174,  // Forcer le bon port
    open: true,  // Ouvre automatiquement le navigateur
  },
});
