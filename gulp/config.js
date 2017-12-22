const path = require('path');

module.exports = {
  tests: ['test/**/*.js', '!test/helpers/**/*.{js,coffee}'],
  helpers: ['test/helpers/**/*.{js,coffee}'],
  lib: ['lib/**/*.js'],
  root: path.resolve(__dirname, '..') + path.sep
};
