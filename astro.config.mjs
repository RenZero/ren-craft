import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// NOTE: @astrojs/sitemap requires Node >=20.
// Re-enable sitemap() when deploying on Vercel (Node 20+).
export default defineConfig({
  site: 'https://renchen.dev',
  integrations: [
    tailwind(),
  ],
});
