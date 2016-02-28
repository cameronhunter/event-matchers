import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/index.js',
  dest: 'build/index.js',
  format: 'cjs',
  plugins: [
    babel({ babelrc: false, presets: ['es2015-rollup'] }),
    uglify()
  ]
};
