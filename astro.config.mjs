// @ts-check

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: '/website',
  vite: { plugins: [tailwindcss()] },
  integrations: [react()]
});
