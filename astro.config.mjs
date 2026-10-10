import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kaimingliu-ai.github.io',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
