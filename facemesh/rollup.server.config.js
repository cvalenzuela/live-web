// Server Rollup Config

import uglify from 'rollup-plugin-uglify';

// dev build if watching, prod build if not
const prod = !process.env.ROLLUP_WATCH;

export default {
  input: 'server/index.js',
  output: {
    file: 'dist/server.js',
    format: 'cjs',
  },
  plugins: [
    prod && uglify()
  ]
};