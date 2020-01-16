
const Dotenv = require('dotenv-webpack');
module.exports = {
  mode: 'development',
  // devtool to map each js script to the bundled script incase of error
  devtool: 'inline-source-map',
  plugins: [
    new Dotenv({
      path: './.env.development',
    }),
  ],
};
