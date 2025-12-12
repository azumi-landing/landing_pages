import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server', // ✅ clave para SSR en Node
  adapter: node({ mode: 'standalone' }),
  server: { host: true }, // ✅ recomendado en runtimes tipo Cloud Run/App Hosting
  vite: {
    plugins: [tailwindcss()],
  },
});

