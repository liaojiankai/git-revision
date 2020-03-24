const filesize = require('rollup-plugin-filesize');
const uglify = require('rollup-plugin-uglify').uglify
const minify = require('uglify-es').minify
const baseConfig = require('./rollup.base.conf')

const pkg = require('../package.json')
const { name, version, author } = pkg

// banner
const banner =
  `${'/*!\n' + ' * '}${name}.js v${version}\n` +
  ` * (c) 2018-${new Date().getFullYear()} ${author}\n` +
  ` * Released under the MIT License.\n` +
  ` */`;

// 支持输出 []
module.exports = [
  // .js, .cjs.js, .esm.js
  {
    ...baseConfig,
    output: [
      // umd development version with sourcemap
      // {
      //   file: `dist/index.js`,
      //   format: 'umd',
      //   name,
      //   banner,
      //   sourcemap: true
      // },
      // cjs and esm version
      {
        file: `dist/index.cjs.js`,
        format: 'cjs',
        banner
      },
      // cjs and esm version
      {
        file: `dist/index.esm.js`,
        format: 'es',
        banner
      }
    ],
    plugins: [
      ...baseConfig.plugins,
      filesize()
    ]
  },
  // .min.js
  {
    ...baseConfig,
    output: [
      // umd with compress version
      {
        file: `dist/index.js`,
        format: 'umd',
        name,
        banner
      }
    ],
    plugins: [
      ...baseConfig.plugins,
      uglify(
        {
          compress: {
            drop_console: true
          }
        },
        minify
      ),
      filesize()
    ]
  }
];
