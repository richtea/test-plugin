var path = require('path');

var appRoot = 'src/';

module.exports = {
  root: appRoot,
  sourceTsConfig: appRoot + 'tsconfig.json',
  source: appRoot + '**/*.ts',
  html: appRoot + '**/*.html',
  style: 'styles/**/*.css',
  output: 'dist/',
  doc:'./doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/',
  pluginName: 'test-plugin'
};
