import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

import netlify from '@astrojs/netlify';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()],
  },
});