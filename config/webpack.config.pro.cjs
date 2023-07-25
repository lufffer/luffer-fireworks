const path = require('path');
const DotenvWebpack = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerWebpackPlugin = require('image-minimizer-webpack-plugin');

module.exports = (root) => ({
  devtool: 'source-map', 
  devServer: {static: path.join(root, 'dist'), hot: true, watchFiles: [path.join(root, 'src', '*.html')]},
  entry: path.join(root, 'src', 'index.ts'),
  mode: 'development',
  module: {
    rules: [
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'] },
      { test: /\.ts$/, use: ['babel-loader','ts-loader'], exclude: /node_modules/ },
      { test: /\.(gif|jpg|jpeg|png|svg|webp)$/, type: 'asset/resource' },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinizerWebpackPlugin(),
      new ImageMinimizerWebpackPlugin({
        minimizer: {
          implementation: ImageMinimizerWebpackPlugin.sharpMinify,
          options: {
            encodeOptions: {},
          },
        },
      }),
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
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
});
