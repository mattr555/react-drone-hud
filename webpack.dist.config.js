const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const package_ = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const loaders = require('./webpack.loaders');
const plugins = require('./webpack.plugins');

const config = {
  mode: "development",    // distribute it without minification
  target: "web",
  entry: [
    // do not load babel-polyfill here, the application should load the polyfills!
    // the entry application code
    path.resolve(__dirname, 'src/index.tsx')
  ],
  externals: Object.keys(package_.dependencies), // exclude all dependencies from the bundle
  optimization: {
    // help: https://webpack.js.org/guides/tree-shaking/
    usedExports: true,  // true to remove the dead code,
  },
  devtool: "source-map",     // help: https://webpack.js.org/configuration/devtool/
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/dist/',
    library: package_.name,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    alias: {},
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"]
  },
  node: {
    // universal app? place here your conditional imports for node env
    fs: "empty",
    path: "empty",
    child_process: "empty",
  },
  module: {
    rules: loaders
  },
  plugins: [
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
  ].concat(plugins),
};

module.exports = config;
