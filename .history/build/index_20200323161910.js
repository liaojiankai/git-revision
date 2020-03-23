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
  }
]