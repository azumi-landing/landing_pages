import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://hguerra.com',
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  server: { host: true, port: 8080, }, // 
  vite: {
    plugins: [tailwindcss()],
  },
});
