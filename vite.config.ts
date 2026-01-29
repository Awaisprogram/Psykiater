import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imageToWebpPlugin } from 'vite-plugin-image-to-webp';

export default defineConfig({
  plugins: [
    react(),
    imageToWebpPlugin({
      imageFormats: ['jpg', 'jpeg', 'png'], 
      webpQuality: { quality: 80 },         
      destinationFolder: 'dist',            
    }),
  ],
});
