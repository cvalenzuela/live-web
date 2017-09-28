// Client Rollup Config

import uglify from 'rollup-plugin-uglify';

// dev build if watching, prod build if not
const prod = !process.env.ROLLUP_WATCH;

export default {
  input: 'client/index.js',
  output: {
    file: 'dist/public/bundle.js',
    format: 'iife',
  },
  plugins: [
    prod && uglify()
  ]
};