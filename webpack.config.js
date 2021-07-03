const { dirname } = require('path');
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  mode: 'development',
  module: {
    rules: {
      test: /\.(png|jpg)$/,
      type: 'asset/resource',
    },
  },
};
