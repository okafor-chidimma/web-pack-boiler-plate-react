const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// to start http server used in serving my bundled production ready files locally i run this command
// http-server (folder name)

module.exports = {
  // 1
  entry: './src/index.js',
  // 2 to tell webpack to use babel on our js files not in node_modules
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ],
      },
      {
        test: /\.ico$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  // 3 put our output inside a folder dist and name this output bundle.hash.js
  // hash is the hash webpack used in bundling it
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.[hash].js',
  },
  // 5 Add the react hot loader as a plugin to webpack
  // added html-webpack-plugin and i asked it to use index.html in my template folder as template when it creates an index.html inside the dist folder
  // added the clean-webpack-plugin to clean out every thing inside the dist/ and ensure we start with fresh contents for even build
  plugins: [
    new CleanWebpackPlugin(),
    // to extract our .css files from the bundled file, put it inside style.css and attach it to our index.html build in dist
    new MiniCssExtractPlugin({
      // this filename style.css is anything i want to call my style file that will be attached to my dist/index.html
      filename: 'style.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      // title variable i can use inside my html template
      title: 'Hello Webpack bundled JavaScript Project',
      // do not name the .ico file favicon.icon, give it anyo ther name apart from favicon so that it will show
      favicon: './template/hello.ico',
      template: './template/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  // 4 telling web-dev-server to serve our files from dist folder
  devServer: {
    contentBase: './dist',
    publicPath: '/',
    hot: true,
  },
};
