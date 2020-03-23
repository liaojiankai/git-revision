'use strict';

const fs = require('fs');
const del = require('del');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');

const pkg = require('../package.json');

const bundles = [
  {
    format: 'cjs', 
    ext: '.js', 
    plugins: [],
    babelPresets: ['stage-1'], babelPlugins: [
      'transform-es2015-destructuring',
      'transform-es2015-function-name',
      'transform-es2015-parameters'
    ]
  },
  {
    format: 'es6',
    ext: '.mjs',
    plugins: [],
    babelPresets: ['stage-1'],
    babelPlugins: [
      'transform-es2015-destructuring',
      'transform-es2015-function-name',
      'transform-es2015-parameters'
    ]
  }, {
    format: 'cjs',
    ext: '.browser.js',
    plugins: [],
    babelPresets: ['es2015-rollup', 'stage-1'],
    babelPlugins: []
  }, {
    format: 'umd',
    ext: '.js',
    plugins: [],
    babelPresets: ['es2015-rollup', 'stage-1'],
    babelPlugins: [],
    moduleName: 'my-library'
  }, {
    format: 'umd',
    ext: '.min.js',
    plugins: [uglify()]
    babelPresets: ['es2015-rollup', 'stage-1'],
    babelPlugins: [],
    moduleName: 'my-library',
    minify: true
  }
]