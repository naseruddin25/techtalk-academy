import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://techtalkacademy.com',
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: 'assets'
  }
});
