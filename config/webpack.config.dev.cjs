const path = require('path');
const DotenvWebpack = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (root) => ({
  devtool: 'eval-source-map', 
  devServer: {static: path.join(root, 'dist'), hot: true, watchFiles: [path.join(root, 'src', '*.html')]},
  entry: path.join(root, 'src', 'index.ts'),
  mode: 'development',
  module: {
    rules: [
      { test: /\.html$/, loader: 'html-loader' },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      { test: /\.ts$/, use: ['babel-loader','ts-loader'], exclude: /node_modules/ },
      { test: /\.(gif|jpg|jpeg|png|svg|webp)$/, type: 'asset/resource' },
    ],
  },
  plugins: [
    new DotenvWebpack(),
    new HtmlWebpackPlugin({ template: path.join(root, 'src', 'index.html') }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: ['.css', '.js', '.ts'],
  },
});