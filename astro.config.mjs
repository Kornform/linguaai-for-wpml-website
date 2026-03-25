import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind({ applyBaseStyles: false }), // base styles come from global.css
  ],
  output: 'static',
});
