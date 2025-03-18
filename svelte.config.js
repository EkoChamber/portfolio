import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';
const repo = 'portfolio';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false
    }),
    paths: {
      base: dev ? '' : '/' + repo
    }
  }
};

export default config;