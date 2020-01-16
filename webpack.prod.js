const Dotenv = require('dotenv-webpack');
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new Dotenv({
      path: './.env.production',
    }),
  ],
};
