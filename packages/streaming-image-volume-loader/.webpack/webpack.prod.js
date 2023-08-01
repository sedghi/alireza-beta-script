const { merge } = require('webpack-merge');
const path = require('path');
const webpackCommon = require('./../../../.webpack/webpack.common.js');
const pkg = require('./../package.json');

module.exports = (env, argv) => {
  const commonConfig = webpackCommon(env, argv);

  return merge(commonConfig, {
    devtool: 'source-map',
    entry: {
      lib: path.join(__dirname, '../src/index.ts'),
    },
    output: {
      path: path.join(__dirname, '../dist/umd'),
      library: 'cornerstoneStreamingImageVolumeLoader',
      libraryTarget: 'umd',
      filename: 'index.js',
    },
    stats: {
      colors: true,
      hash: true,
      timings: true,
      assets: true,
      chunks: false,
      chunkModules: false,
      modules: false,
      children: false,
      warnings: true,
    },
    optimization: {
      minimize: true,
    },
    externals: [
      {
        '@alireza-beta-script/core': {
          root: 'cornerstone3D',
          commonjs: '@alireza-beta-script/core',
          commonjs2: '@alireza-beta-script/core',
          amd: '@alireza-beta-script/core',
        },
      },
    ],
  });
};
